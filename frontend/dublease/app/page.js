'use client';
import React, {useState, useEffect} from 'react';
import nameImage from "../assets/name.png";
import Popup from "./components/popup";
import MakePost from './components/makePost';
import ListingPostCard from './components/listingPostCard';
import { getListingPosts } from './service';

export default function Home() {
  const [isMakingPost, setIsMakingPost] = useState(false);
  const [viewingPost, setViewingPost] = useState(null);
  const [listingPosts, setListingPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListingPosts()
        setListingPosts(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []); 

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
          <img src={nameImage} alt="Dublease" />
          <div className="card-container">
            {
              listingPosts.map(listingPost => (
                <ListingPostCard
                  key = {listingPost._id}
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

/* 
address
: 
"4345 University Way NE"
bathroom_status
: 
"Private"
bedroom_status
: 
"Private"
created_at
: 
"2024-02-22 08:00:00"
description
: 
"Beautiful studio for rent for the next six months"
email
: 
"mikew@monstersu.edu"
end_date
: 
"2024-09-01 08:00:00"
name
: 
"Mike Wazowski"
neighborhood
: 
"University District"
number_of_roommates
: 
1
*/
