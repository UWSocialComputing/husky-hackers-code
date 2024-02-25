import React, { useState } from 'react';
import './listingPostCard.css'

function ListingPostCard({ listingPost, handleClick, expanded, content }) {
  return (
    <>
      {
        !expanded && (
          <div className="card" onClick={handleClick}>
            <div className = "title">{listingPost.title}</div>
            <div className="date">start date: <strong>{listingPost.start_date}</strong>  end: <strong>{listingPost.end_date}</strong></div>
            <div className="rent">rent: <strong>{listingPost.rent}</strong></div>
            <div className="tags">
              <div className="tag">{listingPost.number_of_roommates} Roomate(s)</div>
              {
                listingPost.mateGender != "N/A" && (
                  <div className="tag">{listingPost.roommate_gender} roommates</div>
                )
              }
              <div className="tag">{listingPost.bedroom_status} bedroom</div>
              <div className="tag">{listingPost.bathroom_status} bathroom</div>
              <div className="tag">{listingPost.neighborhood}</div>
            </div>
          </div>
        )
      }

      {
        expanded && (
          <div className="expanded">
            <div className = "title">{listingPost.title}</div>
            <div className="date">start date: <strong>{listingPost.start_date}</strong>  end: <strong>{listingPost.end_date}</strong></div>
            <div className="rent">rent: <strong>{listingPost.rent}</strong></div>
            <div className="tags">
              <div className="tag">{listingPost.number_of_roommates} Roomate(s)</div>
              {
                listingPost.mateGender != "N/A" && (
                  <div className="tag">{listingPost.roommate_gender} roommates</div>
                )
              }
              <div className="tag">{listingPost.bedroom_status} bedroom</div>
              <div className="tag">{listingPost.bathroom_status} bathroom</div>
              <div className="tag">{listingPost.neighborhood}</div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default ListingPostCard;
