# Team-29
# Gamified Training Management System

## Project Name
Gamified Training Management System

## Description
The Gamified Training Management System is a web application designed to enhance training experiences by incorporating gamification techniques. This project features an Admin Dashboard, Trainer information management, a user registration and login system, and an FAQ section. The frontend is built using React, while the backend is developed with Flask.

## Table of Contents
- [Project Setup](#project-setup)
- [Frontend Modules](#frontend-modules)
  - [AdminDashboard](#admindashboard)
  - [Register](#register)
  - [Sign](#sign)
  - [Trainer](#trainer)
- [Backend API](#backend-api)
  - [Setup](#setup)
  - [Routes](#routes)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Credits](#credits)
- [Contact Information](#contact-information)

## Project Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)
- Python 3.x
- MongoDB

### Installation

#### Clone the repository:
```bash
git clone https://github.com/yourusername/gamified-training-management.git
cd Team-29
```


Frontend Setup:
Copy code
cd frontend
npm install
npm start

Backend Setup:
Navigate to the backend directory:
cd ../backend

Install Python dependencies:
pip install -r requirements.txt

Set up MongoDB:
Ensure MongoDB is running on your machine.
Configure your .env file with the necessary environment variables.
Start the Flask server:

flask run

> Setting Up Streamlit file
1. unzip crew_tutorial
2. app.py for visualization
3. Both of them are deployed on streamlit cloud


Frontend Modules
AdminDashboard
The AdminDashboard component provides an interface for administrators to manage trainers and view their information. It features:

Trainer details with bios and images.
Popup functionality to display more detailed information about each trainer.

Register
The Register component allows new users to create an account. It includes fields for:

Name
Email
Password
Additional information such as age, contact, gender, income, and more.
Sign
The Sign component handles user login, allowing users to enter their credentials and access the system.

Trainer
The Trainer component offers various functionalities, including:

Displaying modules and training materials.
Access to AI-assisted resources.
An FAQ section for trainees.

Backend API
Setup
Flask and MongoDB are used for the backend.
JWT is used for authentication.
Environment variables are managed using a .env file.
Routes

Register User:

POST /register
Registers a new user with hashed passwords.

Login User:

POST /login
Authenticates a user and returns a JWT token.

Other Routes:

Additional routes can be added as needed for features like fetching user data, managing trainers, etc.

Technologies Used

Frontend:

React
React Router
Framer Motion
Axios

Backend:

Flask
MongoDB
Flask-Bcrypt
Flask-JWT-Extended

License
This project is licensed under the MIT License.

Credits
Design and Development: Team-29
