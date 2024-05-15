# api/clean_text_for_team.py

from http.server import BaseHTTPRequestHandler
import json

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

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        post_data = json.loads(post_data)

        text = post_data.get('text', '')
        clean_text_output = clean_text_for_team(text)

        response = {
            'message_text': clean_text_output
        }

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))
