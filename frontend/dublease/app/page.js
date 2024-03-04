'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Popup from "./components/popup";
import MakePost from './components/makePost';
import ListingPostCard from './components/listingPostCard';
import SortingMenu from './components/sortingMenu';
import FilterMenu from './components/filterMenu';
import { getListingPosts, filterListingPosts } from './service';

export default function HomePage() {
  const [isMakingPost, setIsMakingPost] = useState(false)
  const [listingPosts, setListingPosts] = useState([])
  const [sortingCriteria, setSortingCriteria] = useState("Recency: Newest to oldest")

  const sortingMethods = {
    "Recency: Newest to oldest": (list) => list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    "Recency: Oldest to newest": (list) => list.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
    "Rent: Lowest to highest": (list) => list.sort((a, b) => a.rent - b.rent),
    "Rent: Highest to lowest": (list) => list.sort((a, b) => b.rent - a.rent)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListingPosts()
        setListingPosts(sortingMethods[sortingCriteria](response));
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [isMakingPost])

  return (
    <>
      {
        isMakingPost && (
          <Popup handleClose={() => {setIsMakingPost(false)}}>
            <MakePost
              handleClose={() => {setIsMakingPost(false)}}
            />
          </Popup>
        )
      }
    
      <div className="app">

        <div className="left-column filters">
          <FilterMenu handleFilter={async (filterRequest) => {
            try {
              const response = await filterListingPosts(filterRequest)
              setListingPosts(sortingMethods[sortingCriteria](response));
              console.log(response)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }}/>
        </div>

        <div className="center-column">
          <Image 
            src="/assets/name.png"
            width={500}
            height={80}
            alt="Dublease logo"
          />
          <div className="card-container">
            {
              listingPosts.map(listingPost => (
                <Link key={listingPost._id} href={`/postPage/${listingPost._id}`} target="_blank">
                  <ListingPostCard
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
              setSortingCriteria(option)
              setListingPosts(sortingMethods[option]([...listingPosts]))
            }}
          />

          <button className="floating-button" onClick={() => {setIsMakingPost(true)}}>
            Make Post <strong>+</strong>
          </button>
        </div>
      </div>
    </>
  );
}
