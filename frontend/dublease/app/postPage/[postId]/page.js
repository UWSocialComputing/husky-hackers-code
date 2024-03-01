'use client';
import React, {useState, useEffect} from 'react';
import { getListingPosts } from '../../service';
import './page.css';

export default function PostPage({ params }) {
  const [post, setPost] = useState(null);
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const neighborhoodColorMapping = {
    "U Village": "#FFEBD7",
    "North Campus": "#FFE4C4",
    "West Campus/Ave": "#FFDAB9",
    "Greenlake": "#FFD0A9",
    "Roosevelt/Northgate": "#FFC8A2",
    "Cap Hill/Downtown": "#FFB799"
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListingPosts()
        let _post = response.find(listing => listing._id === params.postId)
        setStartDate(new Date(_post.start_date))
        setEndDate(new Date(_post.end_date))
        setPost(_post)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, []); 

  return (
    <>
      {
        post==null && (
          <div className="expanded"><div className="listing-title">Loading...</div></div>
        )
      }

      {
        post && (
          <div className="expanded">
            <div className = "listing-title">{post.title}</div>
            <div className = "yellow-box">
              <div className = "sub-box">{post.description}</div>
              <div className = "sub-box"><strong>{startDate.getMonth()+1}/{startDate.getDate()}/{startDate.getFullYear()}</strong>{post.flexible_start_date ? " (flexible) " : " "}to <strong>
                {endDate.getMonth()+1}/{endDate.getDate()}/{endDate.getFullYear()}</strong>{post.flexible_end_date ? " (flexible)" : ""}</div>
              <div><strong>Monthly rent:</strong> ${post.rent}{post.flexible_rent ? " (flexible)" : ""}</div>
              {
                post.address && (<div className="sub-box"><strong>address</strong>: {post.address}</div>)
              }

              {
                post.other_details && (<div className="sub-box"><strong>other info</strong>: {post.other_details}</div>)
              }
            </div>

            <div className = "purple-box">
              {
                post.number_of_roommates == 0 && (
                  <div><strong>No</strong> roomates</div>
                )
              }

              {
                post.number_of_roommates == 1 && (
                  <div><strong>{post.number_of_roommates} roomate </strong>
                    (gender identity: {post.roommate_gender}) </div>
                )
              }

              {
                post.number_of_roommates > 1 && (
                  <div><strong>{post.number_of_roommates} roomates </strong>
                    (gender identity: {post.roommate_gender}) </div>
                )
              }

              {
                post.number_of_roommates != 1 && (
                  <div><strong>{post.bedroom_status}</strong> bedroom & <strong>{post.bathroom_status}</strong> bathroom</div>
                )
              }
            </div>

            <div className="tags">
              {
                post.neighborhood != "Other" && (
                  <div className='tag' style={{ backgroundColor: neighborhoodColorMapping[post.neighborhood]}}>
                    {post.neighborhood}
                  </div>
                )
              }

              {post.optional_tags.length > 0 ? post.optional_tags.map(optionalTag => (
                  <div className="opt-tag" key={optionalTag}>{optionalTag}</div>
              )) : null}
            </div>

            <div className = "yellow-box">
                <div className = "sub-box"><strong>Lister Contact Information</strong></div>
                <div className = "sub-box"><strong>name:</strong> {post.name}</div>
                {
                  post.email && (<div className = "sub-box"><strong>email:</strong> {post.email}</div>)
                }
                {
                  post.phone_number && (<div className = "sub-box"><strong>phone number:</strong> {post.phone_number}</div>)
                }
            </div>

            {
              post.prompt_answer && (
                <div className="purple-box">
                  <div className = "sub-box"><strong>{post.prompt_question}</strong></div>
                  <div className = "sub-box">{post.prompt_answer}</div>
                </div>
              )
            }
          </div>
        )
      }
    </>
  );
}