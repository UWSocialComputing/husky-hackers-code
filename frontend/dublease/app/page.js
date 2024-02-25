'use client';
import React, {useState, useEffect} from 'react';
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
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, [isMakingPost]); 

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

