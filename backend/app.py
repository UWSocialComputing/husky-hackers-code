import json
from flask import Flask, Response, request
from flask_cors import CORS  # Import CORS from flask_cors
from bson.binary import Binary
import base64
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

   photos_base64 = body.get('photos', None)
   try:
      binary_photos = [Binary(base64.b64decode(photo)) for photo in photos_base64]
   except Exception as e:
      print(e)
      binary_photos = None

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
      other_details=body.get('other_details'),
      photos=binary_photos
   )

   # return Response(response="listing post", status=200, content_type='application/json')
   return Response(response=json.dumps("dublease"), status=200, content_type='application/json')


@app.route('/view_listing_posts', methods=['GET'])
def all_listing_posts():
   posts = db.get_all_posts()
   for post in posts:
      if 'photos' in post:
         post['photos'] = [base64.b64encode(photo).decode('utf-8') for photo in post['photos']]
         post['photos'] = [photo[24:] for photo in post['photos']]
   response_data = json.dumps(posts, default=str)
   # f = open("test.txt", "a")
   # f.write(response_data)
   # f.close()
   return Response(response=response_data, status=200, content_type='application/json')

@app.route('/view_filtered_listing_posts', methods=['POST'])
def filtered_listing_posts():
    
   body = request.get_json()

   start_date = body.get('start_date')
   end_date = body.get('end_date')
   has_photos = body.get('has_photos')
   start_date_is_flexible = body.get('start_date_is_flexible')
   end_date_is_flexible = body.get('end_date_is_flexible')
   rent = body.get('rent')
   rent_is_flexible = body.get('rent_is_flexible')
   neighborhood = body.get('neighborhood')
   number_of_roommates = body.get('number_of_roommates')
   roommate_gender = body.get('roommate_gender')
   bedroom_status = body.get('bedroom_status')
   bathroom_status = body.get('bathroom_status')

   posts = db.get_all_posts()

   filtered_posts = []

   print("request body: ", body)
   print("has photos: ", has_photos)

   for post in posts:
      if start_date is not None and post['start_date'] != start_date:
         continue
      if end_date is not None and post['end_date'] != end_date:
         continue
      if has_photos is not None and has_photos == True:
         if 'photos' not in post or len(post['photos']) == 0:
            continue
      if start_date_is_flexible is not None and start_date_is_flexible == True and post['flexible_start_date'] != True:
         continue
      if end_date_is_flexible is not None and end_date_is_flexible == True and post['flexible_end_date'] != True:
         continue
      if rent is not None and post['rent'] > rent:
         continue
      if rent_is_flexible is not None and post['flexible_rent'] != rent_is_flexible:
         continue
      if neighborhood is not None and post['neighborhood'] != neighborhood:
         continue
      if number_of_roommates is not None and post['number_of_roommates'] != number_of_roommates:
         continue
      if roommate_gender is not None and post.get('roommate_gender') != roommate_gender:
         continue
      if bedroom_status is not None and post['bedroom_status'] != bedroom_status:
         continue
      if bathroom_status is not None and post['bathroom_status'] != bathroom_status:
         continue
      
      filtered_posts.append(post)

   for post in filtered_posts:
      if 'photos' in post:
         post['photos'] = [base64.b64encode(photo).decode('utf-8') for photo in post['photos']]
         post['photos'] = [photo[24:] for photo in post['photos']]
   response_data = json.dumps(filtered_posts, default=str)
   # f = open("test.txt", "a")
   # f.write(response_data)
   # f.close()
   return Response(response=response_data, status=200, content_type='application/json')

@app.route('/get_post_by_id', methods=['GET'])
def find_post():
   # get the id query param
   id = request.args.get('id')
   post = db.get_post_by_id(id)
   response_data = json.dumps(post, default=str)
   return Response(response=response_data, status=200, content_type='application/json')

if __name__ == '__main__':
   app.run(port=8080)
