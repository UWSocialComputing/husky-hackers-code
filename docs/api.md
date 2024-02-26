# dublease API Documentation

## Overview
This API provides services related to dublease. The API allows for creating posts and viewing all posts..

## API Endpoints

### 1. make_listing_post

- **Endpoint**: `/make_listing_post`
- **Method**: `POST`
- **Description**: Makes a new listing post.
- **Body**:
  - `title` (string, required): title of post
  - `description` (string, optional): description of post
  - `name` (string, required): name of lister
  - `email` (string, required): email of lister
  - `phone_number` (string, optional): phone number of lister
  - `start_date` (date object, required): start date for listing
  - `end_date` (date object, required): end date for listing
  - `photos_link` (string, optional): link to drive folder with photos of listing
  - `rent` (int, required): listing rent
  - `neighborhood` (string, required): neighborhood of listing
  - `address` (string, optional): address of listing
  - `number_of_roommates` (int, required): number of roommates
  - `roommate_gender` (string, optional): gender of roommates
  - `bedroom_status` (string, required): whether bedroom is private or shared
  - `bathroom_status` (string, required): whether bathroom is private or shared
  - `optional_tags` (list, optional): listing of strings of optional tags
  - `prompt_question` (string, optional): prompt question that is attached to the post
  - `prompt_answer` (string, optional): answer to the prompt
  - `other_details` (string, optional): other details about the listing

- **Request Example**:
  ```json
  {
    "title": "XX",
    "description": "XX",
    "name": "XX",
    "email": "XX",
    "phone_number": "XX",
    "start_date": "XX",
    "end_date": "XX",
    "photos_link": "XX",
    "rent": 0,
    "neighborhood": "XX",
    "address": "XX",
    "number_of_roommates": 0,
    "roommate_gender": "XX",
    "bedroom_status": "XX",
    "bathroom_status": "XX",
    "optional_tags": ["XX", "YY"],
    "prompt_question": "XX",
    "prompt_answer": "XX",
    "other_details": "XX",
  }
- **Response**:
    - Success: A message confirming the receipt of the request.
    - Failure: An error message detailing the cause of the failure.


### 2. view_listing_posts

- **Endpoint**: `/view_listing_posts`
- **Method**: `GET`
- **Description**: View all listing posts.
- **Response**:
    - Success: An array of dictionaries containing the data for each listing post.
    - Failure: An error message detailing the cause of the failure.
- **Response Example**:
  ```json
  [
    {
      "title": "XX",
      "description": "XX",
      "name": "XX",
      "email": "XX",
      "phone_number": "XX",
      "start_date": "datetime obj",
      "end_date": "datetime obj",
      "photos_link": "XX",
      "rent": 0,
      "neighborhood": "XX",
      "address": "XX",
      "number_of_roommates": 0,
      "roommate_gender": "XX",
      "bedroom_status": "XX",
      "bathroom_status": "XX",
      "optional_tags": ["XX", "YY"],
      "prompt_question": "XX",
      "prompt_answer": "XX",
      "other_details": "XX",
      "_id": 0,
      "date_posted": "datetime obj",
    },
      {
      "title": "XX",
      "description": "XX",
      "name": "XX",
      "email": "XX",
      "phone_number": "XX",
      "start_date": "datetime obj",
      "end_date": "datetime obj",
      "photos_link": "XX",
      "rent": 0,
      "neighborhood": "XX",
      "address": "XX",
      "number_of_roommates": 0,
      "roommate_gender": "XX",
      "bedroom_status": "XX",
      "bathroom_status": "XX",
      "optional_tags": ["XX", "YY"],
      "prompt_question": "XX",
      "prompt_answer": "XX",
      "other_details": "XX",
      "_id": 0,
      "date_posted": "datetime obj",
    }
  ]
