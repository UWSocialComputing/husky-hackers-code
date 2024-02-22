'use client';
import React, {useState} from 'react';
import Popup from "./components/popup";
import MakePost from './components/makePost';

export default function Home() {
  const [isMakingPost, setIsMakingPost] = useState(false);

  const handleMakePostClick = () => {
    setIsMakingPost(true);
  };

  const handleClosePopup = () => {
    console.log("hello")
    setIsMakingPost(false);
  };

  return (
    <>
    
      {
        isMakingPost && (
          <Popup handleClose={handleClosePopup}>
            <MakePost/>
          </Popup>
        )
      }

      <div className="app">

        <div className="left-column filters">
          
        </div>
        <div className="center-column">

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