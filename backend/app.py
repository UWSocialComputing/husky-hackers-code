import json
from flask import Flask, Response, request
from flask_cors import CORS  # Import CORS from flask_cors
import db

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/')
def index():
   return Response(response="dublease", status=200, content_type='application/json')

@app.route('/make_listing_post', methods=['POST'])
def listing_post():
   body = request.get_json()

   # title = body.get('title')
   # description = body.get('description')
   # name = body.get('name')
   # email = body.get('email')
   # phone_number = body.get('phone_number')
   # start_date = body.get('start_date')
   # end_date = body.get('end_date')
   # photos_link = body.get('photos_link')
   # rent = body.get('rent')
   # neighborhood = body.get('neighborhood')
   # address = body.get('address')
   # number_of_roommates = body.get('number_of_roommates')
   # roommate_gender = body.get('roommate_gender')
   # bedroom_status = body.get('bedroom_status')
   # bathroom_status = body.get('bathroom_status')
   # optional_tags = body.get('optional_tags')
   # prompt_question = body.get('prompt_question')
   # prompt_answer = body.get('prompt_answer')

   db.make_listing_post(
      title=body.get('title'),
      description=body.get('description'),
      name=body.get('name'),
      email=body.get('email'),
      phone_number=body.get('phone_number'),
      start_date=body.get('start_date'),
      flexible_start_date=body.get('flexible_start_date'),
      end_date=body.get('end_date'),
      flexible_end_date=body.get('flexible_end_date'),
      photos_link=body.get('photos_link'),
      rent=body.get('rent'),
      flexible_rent=body.get('flexible_rent'),
      neighborhood=body.get('neighborhood'),
      address=body.get('address'),
      number_of_roommates=body.get('number_of_roommates'),
      roommate_gender=body.get('roommate_gender'),
      bedroom_status=body.get('bedroom_status'),
      bathroom_status=body.get('bathroom_status'),
      optional_tags=body.get('optional_tags'),
      prompt_question=body.get('prompt_question'),
      prompt_answer=body.get('prompt_answer'),
      other_details=body.get('other_details')
   )

   return Response(response="listing post", status=200, content_type='application/json')

@app.route('/view_listing_posts', methods=['GET'])
def all_listing_posts():
   posts = db.get_all_posts()
   response_data = json.dumps(posts, default=str)
   return Response(response=response_data, status=200, content_type='application/json')

if __name__ == '__main__':
   app.run()
