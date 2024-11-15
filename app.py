from flask import Flask, request, jsonify
import json, os 

from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# Load data from the JSON file
data_path = os.path.join(os.getcwd(),"src","data","nufi_dictionary_data.json")


with open(data_path, 'r', encoding='utf-8') as file:
    nufi_dictionary = json.load(file)

@app.route('/search')
def search():
    query = request.args.get('q', '').lower()
    results = [word for word in nufi_dictionary if query in word['word'].lower()]
    return jsonify(results)

@app.route('/details')
def details():
    word = request.args.get('word', '').lower()
    result = next((entry for entry in nufi_dictionary if entry['word'].lower() == word), None)
    return jsonify(result) if result else ('', 404)

if __name__ == '__main__':
    app.run(debug=True)
