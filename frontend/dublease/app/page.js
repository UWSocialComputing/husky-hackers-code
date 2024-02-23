'use client';
import React, {useState} from 'react';
import Popup from "./components/popup";
import MakePost from './components/makePost';
import ListingPostCard from './components/listingPostCard';
import { list } from 'postcss';
import { calculateOverrideValues } from 'next/dist/server/font-utils';

/* Dummy data for frontend styling work: */
var listings = [
  { 
    id: 1,
    title: "Room",
    name: "John Doe",
    email: "john@example.com",
    phoneNum: "123-456-7890",
    startDate: "2024-03-01",
    endDate: "2024-06-01",
    rent: 1500,
    neighborhood: "The Ave",
    addr: "123 Main St",
    numMates: 2,
    mateGender: "Male",
    bedStatus: "Private",
    bathStatus: "Shared"
  },
  { 
    id: 2,
    title: "Apartment for Rent",
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNum: "987-654-3210",
    startDate: "2024-04-01",
    endDate: "2024-09-01",
    rent: 1200,
    neighborhood: "North Campus",
    addr: "456 Elm St",
    numMates: 1,
    mateGender: "Female",
    bedStatus: "Private",
    bathStatus: "Private"
  },
  { 
    id: 3,
    title: "Studio Apartment",
    name: "Alice Johnson",
    email: "alice@example.com",
    phoneNum: "123-456-7890",
    startDate: "2024-03-15",
    endDate: "2024-09-15",
    rent: 1800,
    neighborhood: "U Village",
    addr: "789 Oak St",
    numMates: 1,
    mateGender: "Any",
    bedStatus: "Private",
    bathStatus: "Private"
  },
  { 
    id: 4,
    title: "Cozy House Share",
    name: "Michael Smith",
    email: "michael@example.com",
    phoneNum: "987-654-3210",
    startDate: "2024-03-01",
    endDate: "2024-07-01",
    rent: 1300,
    neighborhood: "West End",
    addr: "101 Pine St",
    numMates: 3,
    mateGender: "Any",
    bedStatus: "Shared",
    bathStatus: "Shared"
  },
];

export default function Home() {
  const [isMakingPost, setIsMakingPost] = useState(false);
  const [viewingPost, setViewingPost] = useState(null);

  const handleMakePostClick = () => {
    setIsMakingPost(true);
  };

  const handleMakePostClose = () => {
    setIsMakingPost(false);
  };

  const handleViewPostClick = (post) => {
    setViewingPost(post);
  };

  const handleViewPostClose = () => {
    setViewingPost(null);
  }
  

  return (
    <>
      {
        isMakingPost && (
          <Popup handleClose={handleMakePostClose}>
            <MakePost
              listings = {listings}
              handleClose={handleMakePostClose}
            />
          </Popup>
        )
      }
      

      {
        viewingPost && (
          <Popup handleClose={handleViewPostClose}>
            <ListingPostCard
              listingPost = {viewingPost}
              expanded = {true}
            />
          </Popup>
        )
      }

      <div className="app">

        <div className="left-column filters">
          
        </div>

        <div className="center-column">
          <div className="card-container">
            {
              listings.map(listingPost => (
                <ListingPostCard 
                  listingPost = {listingPost}
                  handleClick = {() => {handleViewPostClick(listingPost)}}
                  expanded = {false}
                />
            ))}
          </div>

          <button className="floating-button" onClick={handleMakePostClick}>
            Make Post <strong>+</strong>
          </button>

        </div>
        <div className="right-column sorting">

        </div>
      </div>
    </>
  );
}