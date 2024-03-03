'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Popup from "./components/popup";
import MakePost from './components/makePost';
import ListingPostCard from './components/listingPostCard';
import SortingMenu from './components/sortingMenu';
import FilterMenu from './components/filterMenu';
import { getListingPosts } from './service';

export default function HomePage() {
  const [isMakingPost, setIsMakingPost] = useState(false)
  const [listingPosts, setListingPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListingPosts()
        setListingPosts(sortingMethods["Recency: Newest to oldest"](response));
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])

  const sortingMethods = {
    "Recency: Newest to oldest": (list) => list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    "Recency: Oldest to newest": (list) => list.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
    "Rent: Lowest to highest": (list) => list.sort((a, b) => a.rent - b.rent),
    "Rent: Highest to lowest": (list) => list.sort((a, b) => b.rent - a.rent)
  }

  const handleMakePostClick = () => {
    setIsMakingPost(true);
  }

  const handleMakePostClose = () => {
    setIsMakingPost(false);
  }

  const handleNewPost = (post) => {
    setListingPosts([...listingPosts, post])
    setIsMakingPost(false);
  }

  return (
    <>
      {
        isMakingPost && (
          <Popup handleClose={handleMakePostClose}>
            <MakePost
              handleClose={handleMakePostClose}
              handleNewPost={handleNewPost}
            />
          </Popup>
        )
      }
      

      <div className="app">

        <div className="left-column filters">
          <FilterMenu/>
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
        </div>
        
        <div className="right-column sorting">
          <SortingMenu
            sortingOptions={["Recency: Newest to oldest", "Recency: Oldest to newest",
             "Rent: Lowest to highest", "Rent: Highest to lowest"]}
            handleSortingChange={(option)=>{
              let sorted = sortingMethods[option]([...listingPosts])
              setListingPosts(sortingMethods[option]([...listingPosts]))
            }}
          />

          <button className="floating-button" onClick={handleMakePostClick}>
            Make Post <strong>+</strong>
          </button>
        </div>
      </div>
    </>
  );
}
