import React, { useState } from 'react';
import './listingPostCard.css'

function ListingPostCard({ listingPost, handleClick, expanded, content }) {
  return (
    <>
      {
        !expanded && (
          <div className="card" onClick={handleClick}>
            <div className = "title">{listingPost.title}</div>
            <div className="date">start date: <strong>{listingPost.startDate}</strong>  end: <strong>{listingPost.endDate}</strong></div>
            <div className="rent">rent: <strong>{listingPost.rent}</strong></div>
            <div className="tags">
              <div className="tag">{listingPost.numMates} Roomate(s)</div>
              {
                listingPost.mateGender != "N/A" && (
                  <div className="tag">{listingPost.mateGender} roommates</div>
                )
              }
              <div className="tag">{listingPost.bedStatus} bedroom</div>
              <div className="tag">{listingPost.bathStatus} bathroom</div>
              <div className="tag">{listingPost.neighborhood}</div>
            </div>
          </div>
        )
      }

      {
        expanded && (
          <div className="expanded">
            <div className = "title">{listingPost.title}</div>
            <div className="date">start date: <strong>{listingPost.startDate}</strong>  end: <strong>{listingPost.endDate}</strong></div>
            <div className="rent">rent: <strong>{listingPost.rent}</strong></div>
            <div className="tags">
              <div className="tag">{listingPost.numMates} Roomate(s)</div>
              {
                listingPost.mateGender != "N/A" && (
                  <div className="tag">{listingPost.mateGender} roommates</div>
                )
              }
              <div className="tag">{listingPost.bedStatus} bedroom</div>
              <div className="tag">{listingPost.bathStatus} bathroom</div>
              <div className="tag">{listingPost.neighborhood}</div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default ListingPostCard;
