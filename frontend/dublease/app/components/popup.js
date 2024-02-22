import './popup.css'; // Import your CSS file for styling
import React from 'react';

function Popup({ handleClose, children }) { // Use destructuring for props
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.364 5.636a.999.999 0 1 0-1.414-1.414L12 10.586 7.05 5.636a.999.999 0 1 0-1.414 1.414L10.586 12l-4.95 4.95a.999.999 0 1 0 1.414 1.414L12 13.414l4.95 4.95a.999.999 0 1 0 1.414-1.414L13.414 12l4.95-4.95z"
            ></path>
          </svg>
        </button>
        <div className="popup-components">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
