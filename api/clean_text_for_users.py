# api/clean_text_for_users.py

from flask import Flask, request, jsonify

def clean_text_for_users(text):
    # Step 1: Find the first instance of "\n\n>" and remove everything after it
    cutoff_index_1 = text.find("\n\n>")
    if cutoff_index_1 != -1:  # If "\n\n>" was found
        text = text[:cutoff_index_1]
        
        # Step 2: From the end, find the first instance of "\n" and remove everything after that
        # This step only occurs if "\n\n>" was found
        cutoff_index_2 = text.rfind("\n")
        if cutoff_index_2 != -1 and cutoff_index_2 != 0:  # Ensure "\n" was found and it's not at the start
            text = text[:cutoff_index_2]
            
            # Find additional text to remove
            cutoff_index_3 = text.rfind(" Bubble Support - ") # If " Bubble Support - " was found
            if cutoff_index_3 != -1:
                text = text[:cutoff_index_3]

                # Find additional text to remove
                cutoff_index_4 = text.rfind("\n")
                if cutoff_index_4 != -1 and cutoff_index_4 != 0:  # Ensure "\n" was found and it's not at the start
                    text = text[:cutoff_index_4]

                    # Find additional text to remove
                    cutoff_index_5 = text.rfind("\n")
                    if cutoff_index_5 != -1 and cutoff_index_5 != 0:  # Ensure "\n" was found and it's not at the start
                        text = text[:cutoff_index_5]

                        # Find additional text to remove
                        cutoff_index_6 = text.rfind(", Bubble Support - ") # If " Bubble Support - " was found
                        if cutoff_index_6 != -1:
                            text = text[:cutoff_index_6]

                            # Find additional text to remove
                            cutoff_index_7 = text.rfind("\n")
                            if cutoff_index_7 != -1 and cutoff_index_7 != 0:  # Ensure "\n" was found and it's not at the start
                                text = text[:cutoff_index_7]

    # Find additional text to remove
    cutoff_index_8 = text.find("________________________________")
    if cutoff_index_8 != -1 and cutoff_index_8 != 0:  
        text = text[:cutoff_index_8]

    # Find additional text to remove
    cutoff_index_9 = text.find("Rachel from Bubble <")
    if cutoff_index_9 != -1 and cutoff_index_9 != 0:  
        text = text[:cutoff_index_9]

    cutoff_index_10 = text.find("How was the help you received?")
    if cutoff_index_10 != -1:  # If "How was the help you received?\n>" was found
        text = text[:cutoff_index_10]

        # Find additional text to remove
        cutoff_index_11 = text.rfind("\n")
        if cutoff_index_11 != -1 and cutoff_index_11 != 0:
            text = text[:cutoff_index_11]
    
    cutoff_index_12 = text.find(", Bubble Support - ")
    if cutoff_index_12 != -1: 
        text = text[:cutoff_index_12]
    
    cutoff_index_13 = text.find(", Rachel from Bubble")
    if cutoff_index_13 != -1: 
        text = text[:cutoff_index_13]

    return text

app = Flask(__name__)

@app.route('/api/clean_text_for_users', methods=['POST'])
def process_text_for_users():
    try:
        text = request.json.get('text', '')
        if len(text) > 100000:
            text = text[:100000]
        clean_text_output = clean_text_for_users(text)
        return jsonify({'message_text': clean_text_output})
    except ValueError:
        return jsonify({'error': 'Invalid request. Please try again.'}), 400

def handler(event, context):
    return app(event, context)
