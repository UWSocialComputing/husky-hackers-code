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
  - `flexible_start_date` (boolean, required): is start date flexible?
  - `end_date` (date object, required): end date for listing
  - `flexible_end_date` (boolean, required): is end date flexible?
  - `photos_link` (string, optional): link to drive folder with photos of listing
  - `rent` (int, required): listing rent
  - `flexible_rent` (boolean, required): is rent flexible?
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
  - `photos` (list, optional): list of base64 encoded photos

- **Request Example**:
  ```json
  {
    "title": "XX",
    "description": "XX",
    "name": "XX",
    "email": "XX",
    "phone_number": "XX",
    "start_date": "XX",
    "flexible_start_date": true,
    "end_date": "XX",
    "flexible_end_date": true,
    "photos_link": "XX",
    "rent": 0,
    "flexible_rent": true,
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
    "photos": ["XX", "YY"],
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
      "flexible_start_date": true,
      "end_date": "datetime obj",
      "flexible_end_date": true,
      "photos_link": "XX",
      "rent": 0,
      "flexible_rent": true,
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
      "photos": ["XX", "YY"],
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
      "flexible_start_date": true,
      "end_date": "datetime obj",
      "flexible_end_date": true,
      "photos_link": "XX",
      "rent": 0,
      "flexible_rent": true,
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
      "photos": ["XX", "YY"],
      "_id": 0,
      "date_posted": "datetime obj",
    }
  ]


### 2. view_filtered_listing_posts

- **Endpoint**: `/view_filtered_listing_posts`
- **Method**: `POST`
- **Description**: View listing posts that are filtered based on the given filters.
- **Body**:
  - `start_date` (date object, optional): start date filter, returns all posts 
  - `end_date` (date object, optional): end date filter
  - `has_photos` (boolean, optional): filter by posts with photos
  - `start_date_is_flexible` (boolean, optional): filter by posts with flexible start dates
  - `end_date_is_flexible` (boolean, optional): filter by posts with flexible end dates
  - `rent` (int, optional): filter by posts where rent is the maximum rent, inclusive
  - `rent_is_flexible` (boolean, optional): filter by posts with flexible rent
  - `neighborhood` (string, optional): filter by posts with flexible rent
  - `number_of_roommates` (int, optional): filter by posts where number_of_roommates is the maximum number of roommates, inclusive
  - `roommate_gender` (string, optional): roommate gender filter
  - `bedroom_status` (string, optional): bedroom status filter
  - `bathroom_status` (string, optional): bathroom status filter

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
      "flexible_start_date": true,
      "end_date": "datetime obj",
      "flexible_end_date": true,
      "photos_link": "XX",
      "rent": 0,
      "flexible_rent": true,
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
      "photos": ["XX", "YY"],
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
      "flexible_start_date": true,
      "end_date": "datetime obj",
      "flexible_end_date": true,
      "photos_link": "XX",
      "rent": 0,
      "flexible_rent": true,
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
      "photos": ["XX", "YY"],
      "_id": 0,
      "date_posted": "datetime obj",
    }
  ]