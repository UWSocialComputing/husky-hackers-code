import React, { useState } from 'react';
import './listingPostCard.css'

function ListingPostCard({ listingPost }) {
  const startDate = new Date(listingPost.start_date)
  const endDate = new Date(listingPost.end_date)

  const neighborhoodColorMapping = {
    "U Village": "#FFEBD7",
    "North Campus": "#FFE4C4",
    "West Campus/Ave": "#FFDAB9",
    "Greenlake": "#FFD0A9",
    "Roosevelt/Northgate": "#FFC8A2",
    "Cap Hill/Downtown": "#FFB799"
  }

  return (
    <>
      <div className="card">
        <div className = "listing-title">{listingPost.title}</div>
        {
          listingPost.photos && listingPost.photos.length > 0 && (
              <div className="card-photo-container">
                <img
                  src={`data:image/jpeg;base64,/9j/${listingPost.photos[0]}`}
                  className="card-photo"
                />
              </div>
          )
        }
        <div className = "yellow-box">
          <div><strong>{startDate.getMonth()+1}/{startDate.getDate()}/{startDate.getFullYear()}</strong>{listingPost.flexible_start_date ? " (flexible) " : " "}to <strong>
              {endDate.getMonth()+1}/{endDate.getDate()}/{endDate.getFullYear()}</strong>{listingPost.flexible_end_date ? " (flexible)" : ""}</div>
          <div><strong>Monthly rent:</strong> ${listingPost.rent}{listingPost.flexible_rent ? " (flexible)" : ""}</div>
        </div>

        <div className = "purple-box">
          {
            listingPost.number_of_roommates == 0 && (
              <div><strong>No</strong> roomates</div>
            )
          }

          {
            listingPost.number_of_roommates == 1 && (
              <div><strong>{listingPost.number_of_roommates} roomate </strong>
                (gender identity: {listingPost.roommate_gender}) </div>
            )
          }

          {
            listingPost.number_of_roommates > 1 && (
              <div><strong>{listingPost.number_of_roommates} roomates </strong>
                (gender identity: {listingPost.roommate_gender}) </div>
            )
          }

          {
            listingPost.number_of_roommates != 1 && (
              <div><strong>{listingPost.bedroom_status}</strong> bedroom & <strong>{listingPost.bathroom_status}</strong> bathroom</div>
            )
          }
        </div>

        <div className="tags">
          {
            listingPost.neighborhood != "Other" && (
              <div className='tag' style={{ backgroundColor: neighborhoodColorMapping[listingPost.neighborhood]}}>
                {listingPost.neighborhood}
              </div>
            )
          }


          {listingPost.optional_tags ? listingPost.optional_tags.map(optionalTag => (
              <div className="opt-tag" key={optionalTag}>{optionalTag}</div>
          )) : null}
        </div>

        <div>
          <div className="learn-more">learn more</div>
        </div>
      </div>
    </>
  );
}

export default ListingPostCard;
