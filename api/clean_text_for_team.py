# api/clean_text_for_team.py

from flask import Flask, request, jsonify

def clean_text_for_team(text):

    # 1. Find if string exists in text.
    index_1 = text.find("</a> <a")
    if index_1 != -1:
        
        # If the string is detected, replace with new string.
        text = text.replace("</a> <a", "</a> \n<a")

        index_2 = text.find("    <a ")
        if index_2 != -1:

            text = text.replace("    <a ", "    \n<a ")

    return text

app = Flask(__name__)

@app.route('/api/clean_text_for_team', methods=['POST'])
def process_text_for_team():
    try:
        text = request.json.get('text', '')
        clean_text_output = clean_text_for_team(text)
        return jsonify({'message_text': clean_text_output})
    except ValueError:
        return jsonify({'error': 'Invalid request. Please try again.'}), 400

def handler(event, context):
    return app(event, context)
