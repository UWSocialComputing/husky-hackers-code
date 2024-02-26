import React, { useState } from 'react';
import './listingPostCard.css'

function ListingPostCard({ listingPost, handleClick, expanded, content }) {
  const startDate = new Date(listingPost.start_date)
  const endDate = new Date(listingPost.end_date)

  return (
    <>
      {
        !expanded && (
          <div className="card" onClick={handleClick}>
            <div className = "listing-title">{listingPost.title}</div>
            <div className = "description">
              <div>{listingPost.description}</div>
              <div><strong>{startDate.getMonth()+1}/{startDate.getDate()}/{startDate.getFullYear()}</strong> to <strong>{endDate.getMonth()+1}/{endDate.getDate()}/{endDate.getFullYear()}</strong></div>
              <div>Monthly rent: <strong>${listingPost.rent}</strong></div>
            </div>
            <div className="tags">
              <div className="tag">{listingPost.number_of_roommates} Roomate(s)</div>
              {
                listingPost.mateGender != "N/A" && (
                  <div className="tag">Roomate Gender: {listingPost.roommate_gender}</div>
                )
              }
              <div className="tag">{listingPost.bedroom_status} bedroom</div>
              <div className="tag">{listingPost.bathroom_status} bathroom</div>
              <div className="tag">{listingPost.neighborhood}</div>
              {listingPost.optional_tags ? listingPost.optional_tags.map(optionalTag => (
                  <div className="opt-tag" key={optionalTag}>{optionalTag}</div>
              )) : null}
            </div>
          </div>
        )
      }

      {
        expanded && (
          <div className="expanded">
            <div className = "listing-title">{listingPost.title}</div>
            <div className = "description">
              <div>{listingPost.description}</div>
              <div><strong>{startDate.getMonth()+1}/{startDate.getDate()}/{startDate.getFullYear()}</strong> to <strong>{endDate.getMonth()+1}/{endDate.getDate()}/{endDate.getFullYear()}</strong></div>
              <div>Monthly rent: <strong>${listingPost.rent}</strong></div>
              {
                listingPost.address && (<div><strong>address</strong>: {listingPost.address}</div>)
              }

              {
                listingPost.photos_link && (<div><strong>photos</strong>: {listingPost.photos_link}</div>)
              }
            </div>
            <div className="tags">
              <div className="tag">{listingPost.number_of_roommates} Roomate(s)</div>
              {
                listingPost.mateGender != "N/A" && (
                  <div className="tag">Roomate Gender: {listingPost.roommate_gender}</div>
                )
              }
              <div className="tag">{listingPost.bedroom_status} bedroom</div>
              <div className="tag">{listingPost.bathroom_status} bathroom</div>
              <div className="tag">{listingPost.neighborhood}</div>
              {listingPost.optional_tags ? listingPost.optional_tags.map(optionalTag => (
                  <div className="opt-tag" key={optionalTag}>{optionalTag}</div>
              )) : null}
            </div>
            <div className = "description">
                <div><strong>Lister Contact Information</strong></div>
                <div><strong>name:</strong> {listingPost.name}</div>
                {
                  listingPost.email && (<div><strong>email:</strong> {listingPost.email}</div>)
                }
                {
                  listingPost.phone_number && (<div><strong>phone number:</strong> {listingPost.phone_number}</div>)
                }
            </div>
            {
              listingPost.prompt_answer && listingPost.prompt_quesion && (
                <div className="fun-fact">
                  <div><strong>{listingPost.prompt_question}</strong></div>
                  <div>{listingPost.prompt_answer}</div>
                </div>
              )
            }
          </div>
        )
      }
    </>
  );
}

export default ListingPostCard;

{
  /*
{


  "photos_link": "XX",

  


  "prompt_question": "XX",
  "prompt_answer": "XX",

}
  */
}