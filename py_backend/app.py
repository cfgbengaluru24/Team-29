from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
import json
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from pymongo import MongoClient
import logging
import os

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "http://localhost:5173"}})

# MongoDB setup
client = MongoClient(os.getenv("MONGO_URI"))
if client:
    app.logger.info("MongoDB connected successfully")

db_name = 'db'
collection_name = 'users'

# Ensure the database and collection exist
def initialize_db_and_collection(db_name, collection_name):
    db = client[db_name]
    if collection_name not in db.list_collection_names():
        db.create_collection(collection_name)
        app.logger.info(f"Collection '{collection_name}' created in database '{db_name}'")
    else:
        app.logger.info(f"Collection '{collection_name}' already exists in database '{db_name}'")
    return db

db = initialize_db_and_collection(db_name, collection_name)
users_collection = db[collection_name]

# Bcrypt and JWT setup
bcrypt = Bcrypt(app)
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")
jwt = JWTManager(app)

def register_user(user_data):
    # Hash the password
    hashed_password = bcrypt.generate_password_hash(user_data['password']).decode('utf-8')
    # Prepare user data for insertion
    user = {
        'name': user_data['name'],
        'password': hashed_password,
        'role': user_data['role'], 
        'email': user_data['email'],
        'age': user_data['age'],
        'contact': user_data['contact'],
        'gender': user_data['gender'],
        'income': user_data['income'],
        'assets': user_data['assets'],
        'shg': user_data['shg'],
        'salary': user_data['salary'],
        'loans': user_data['loans'],
        'area': user_data['area'],
        'married': user_data['married']
    }
    users_collection.insert_one(user)

def verify_user(name, password):
    user = users_collection.find_one({'name': name})
    if user and bcrypt.check_password_hash(user['password'], password):
        return True
    return False

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/register', methods=['POST'])
def register():
    app.logger.debug("Register endpoint called")
    try:
        data = request.get_json()
        print(data)
        if users_collection.find_one({'name': data['name']}):
            app.logger.warning(f"Username '{data['name']}' already exists")
            return jsonify({'error': 'Username already exists'}), 400
        
        register_user(data)
        app.logger.info(f"User '{data['name']}' registered successfully")
        return jsonify({'message': 'User registered successfully'}), 200
    
    except Exception as e:
        app.logger.error(f"Error in register: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    app.logger.debug("Login endpoint called")
    try:
        data = request.get_json()
        name = data['name']
        password = data['password']
        
        if not verify_user(name, password):
            app.logger.warning(f"Invalid login attempt for user '{name}'")
            return jsonify({'error': 'Invalid credentials'}), 401
        
        access_token = create_access_token(identity=name)
        app.logger.info(f"User '{name}' logged in successfully")
        user = users_collection.find_one({'name': name})
        if user:
            # Exclude the password field from the response
            user['_id'] = str(user['_id'])
            # Exclude the password field from the response
            user_data = {key: user[key] for key in user if key != 'password'}
        else:
            user_data = {}

        return jsonify({
            'access_token': access_token,
            'user': user_data
        }), 200
    
    except Exception as e:
        app.logger.error(f"Error in login: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
