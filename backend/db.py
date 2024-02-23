import os
from datetime import datetime
from typing import Optional
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

load_dotenv()

uri = "mongodb+srv://" + str(os.environ.get("DATABASE_USERNAME")) + ":" + str(os.environ.get("DATABASE_PASSWORD")) + "@cluster0.ezhrpxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


# create new client and connect the server
client = MongoClient(uri, server_api=ServerApi('1'))

# send ping to confirm successful connection
try:
    client.admin.command('ping')
    db = client['dublease']
    listings_collection = db['ListingPosts']
    print("successful")
except Exception as e:
    print(e)

def get_all_posts() -> list[dict]:
    return list(listings_collection.find({}))

def make_listing_post(title: str, name: str, email: str, start_date: datetime, end_date: datetime, rent: float, neighborhood: str, number_of_roommates: int, bedroom_status: str, bathroom_status: str, description: Optional[str] = None, phone_number: Optional[str] = None, photos_link: Optional[str] = None, address: Optional[str] = None, roommate_gender: Optional[str] = None, optional_tags: Optional[list[str]] = None, prompt_question: Optional[str] = None, prompt_answer: Optional[str] = None) -> None:
    listings_collection.insert_one({
        "title": title,
        "description": description,
        "name": name,
        "email": email,
        "phone_number": phone_number,
        "start_date": start_date,
        "end_date": end_date,
        "photos_link": photos_link,
        "rent": rent,
        "neighborhood": neighborhood,
        "address": address,
        "number_of_roommates": number_of_roommates,
        "roommate_gender": roommate_gender, 
        "bedroom_status": bedroom_status,
        "bathroom_status": bathroom_status,
        "optional_tags": optional_tags,
        "prompt_question": prompt_question,
        "prompt_answer": prompt_answer,
        "created_at": datetime.now(),
    })
    