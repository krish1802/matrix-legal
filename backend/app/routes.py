from flask import Blueprint, request, jsonify
from flask_mail import Message
from app import db, mail
from app.models import Contact, Consultation, NewsletterSubscriber, BlogPost, TeamMember
from datetime import datetime
import re

api_bp = Blueprint('api', __name__)

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_phone(phone):
    pattern = r'^[\d\s\+\-\(\)]{10,}$'
    return re.match(pattern, phone) is not None

# Contact Form Endpoints
@api_bp.route('/contact', methods=['POST'])
def create_contact():
    try:
        data = request.get_json()
        
        # Validation
        if not data.get('name') or not data.get('email') or not data.get('message'):
            return jsonify({'error': 'Name, email, and message are required'}), 400
        
        if not validate_email(data.get('email')):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Create contact
        contact = Contact(
            name=data.get('name'),
            email=data.get('email'),
            phone=data.get('phone'),
            subject=data.get('subject'),
            message=data.get('message')
        )
        
        db.session.add(contact)
        db.session.commit()
        
        # Send notification email (optional)
        try:
            msg = Message(
                subject=f"New Contact Form Submission: {data.get('subject', 'No Subject')}",
                recipients=['info@matrixlegal.in'],
                body=f"""
                New contact form submission:
                
                Name: {data.get('name')}
                Email: {data.get('email')}
                Phone: {data.get('phone', 'Not provided')}
                Subject: {data.get('subject', 'No subject')}
                
                Message:
                {data.get('message')}
                """
            )
            mail.send(msg)
        except Exception as e:
            print(f"Email sending failed: {str(e)}")
        
        return jsonify({
            'message': 'Contact form submitted successfully',
            'data': contact.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@api_bp.route('/contacts', methods=['GET'])
def get_contacts():
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        status = request.args.get('status')
        
        query = Contact.query
        if status:
            query = query.filter_by(status=status)
        
        contacts = query.order_by(Contact.created_at.desc()).paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        return jsonify({
            'contacts': [contact.to_dict() for contact in contacts.items],
            'total': contacts.total,
            'pages': contacts.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Consultation Endpoints
@api_bp.route('/consultation', methods=['POST'])
def create_consultation():
    try:
        data = request.get_json()
        
        # Validation
        required_fields = ['name', 'email', 'phone', 'practice_area']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        if not validate_email(data.get('email')):
            return jsonify({'error': 'Invalid email format'}), 400
        
        if not validate_phone(data.get('phone')):
            return jsonify({'error': 'Invalid phone number'}), 400
        
        # Parse date if provided
        preferred_date = None
        if data.get('preferred_date'):
            try:
                preferred_date = datetime.fromisoformat(data.get('preferred_date').replace('Z', '+00:00'))
            except:
                return jsonify({'error': 'Invalid date format'}), 400
        
        # Create consultation
        consultation = Consultation(
            name=data.get('name'),
            email=data.get('email'),
            phone=data.get('phone'),
            practice_area=data.get('practice_area'),
            preferred_date=preferred_date,
            preferred_time=data.get('preferred_time'),
            office_location=data.get('office_location'),
            description=data.get('description')
        )
        
        db.session.add(consultation)
        db.session.commit()
        
        # Send confirmation email
        try:
            msg = Message(
                subject="Consultation Request Received - Matrix Legal",
                recipients=[data.get('email')],
                body=f"""
                Dear {data.get('name')},
                
                Thank you for scheduling a consultation with Matrix Legal.
                
                We have received your request for a consultation regarding {data.get('practice_area')}.
                Our team will contact you shortly to confirm your appointment.
                
                Details:
                Practice Area: {data.get('practice_area')}
                Preferred Date: {data.get('preferred_date', 'Not specified')}
                Preferred Time: {data.get('preferred_time', 'Not specified')}
                Office Location: {data.get('office_location', 'Not specified')}
                
                Best regards,
                Matrix Legal Team
                """
            )
            mail.send(msg)
        except Exception as e:
            print(f"Email sending failed: {str(e)}")
        
        return jsonify({
            'message': 'Consultation request submitted successfully',
            'data': consultation.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@api_bp.route('/consultations', methods=['GET'])
def get_consultations():
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        status = request.args.get('status')
        
        query = Consultation.query
        if status:
            query = query.filter_by(status=status)
        
        consultations = query.order_by(Consultation.created_at.desc()).paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        return jsonify({
            'consultations': [c.to_dict() for c in consultations.items],
            'total': consultations.total,
            'pages': consultations.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Newsletter Endpoints
@api_bp.route('/newsletter/subscribe', methods=['POST'])
def subscribe_newsletter():
    try:
        data = request.get_json()
        
        if not data.get('email'):
            return jsonify({'error': 'Email is required'}), 400
        
        if not validate_email(data.get('email')):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Check if already subscribed
        existing = NewsletterSubscriber.query.filter_by(email=data.get('email')).first()
        if existing:
            if existing.is_active:
                return jsonify({'message': 'Email already subscribed'}), 200
            else:
                existing.is_active = True
                db.session.commit()
                return jsonify({'message': 'Subscription reactivated'}), 200
        
        # Create new subscriber
        subscriber = NewsletterSubscriber(email=data.get('email'))
        db.session.add(subscriber)
        db.session.commit()
        
        return jsonify({
            'message': 'Successfully subscribed to newsletter',
            'data': subscriber.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# Blog Endpoints
@api_bp.route('/blog/posts', methods=['GET'])
def get_blog_posts():
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 9, type=int)
        category = request.args.get('category')
        
        query = BlogPost.query.filter_by(published=True)
        if category:
            query = query.filter_by(category=category)
        
        posts = query.order_by(BlogPost.created_at.desc()).paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        return jsonify({
            'posts': [post.to_dict() for post in posts.items],
            'total': posts.total,
            'pages': posts.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@api_bp.route('/blog/posts/<slug>', methods=['GET'])
def get_blog_post(slug):
    try:
        post = BlogPost.query.filter_by(slug=slug, published=True).first()
        if not post:
            return jsonify({'error': 'Post not found'}), 404
        
        return jsonify(post.to_dict()), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Team Endpoints
@api_bp.route('/team', methods=['GET'])
def get_team_members():
    try:
        office = request.args.get('office')
        
        query = TeamMember.query.filter_by(is_active=True)
        if office:
            query = query.filter_by(office_location=office)
        
        members = query.order_by(TeamMember.order).all()
        
        return jsonify({
            'team': [member.to_dict() for member in members]
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Health Check
@api_bp.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'timestamp': datetime.utcnow().isoformat()}), 200
