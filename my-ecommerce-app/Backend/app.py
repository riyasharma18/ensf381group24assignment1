from flask import Flask, request, jsonify, send_from_directory
import json
import os

app = Flask(__name__)

users = []

@app.route('/register', methods=['POST'])
def register_user():
    information = request.json
    username = information.get('username')
    password = information.get('password')
    email = information.get('email')
    if any(user['username'] == username for user in users):
        return jsonify({'error': 'This username already exists'})
    users.append({'username': username, 'password': password, 'email': email})
    return jsonify({'message': 'This user has been successfully registered'})

if __name__ == '__main__':
    app.run(debug=True)
