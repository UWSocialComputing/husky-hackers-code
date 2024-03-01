'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Popup from "./components/popup";
import MakePost from './components/makePost';
import ListingPostCard from './components/listingPostCard';
import { getListingPosts } from './service';

export default function HomePage() {
  const [isMakingPost, setIsMakingPost] = useState(false);
  const [reload, setReload] = useState(0);
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
  }, [reload]); 

  const handleMakePostClick = () => {
    setIsMakingPost(true);
  };

  const handleMakePostClose = () => {
    setIsMakingPost(false);
    setReload(reload + 1);
  };

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
      

      <div className="app">

        <div className="left-column filters">

        </div>

        <div className="center-column">
          <div className="card-container">
            {
              listingPosts.map(listingPost => (
                <Link href={`/postPage/${listingPost._id}`} target="_blank">
                  <ListingPostCard
                    key = {listingPost._id}
                    listingPost = {listingPost}
                    expanded = {false}
                  />
                </Link>
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
