"use client"
import './sortingMenu.css';
import React, { useState } from 'react';

// Menu for sorting posts
function SortingMenu({ handleSortingChange, sortingOptions }) {
  const [selection, setSelection] = useState(sortingOptions[0])

  return (
    <div className="sorting-container">
      <div className="sorting-column-title">Sort Listings</div>

      { 
        sortingOptions.map(option => (
          <div key={option}>
            {
              option == selection && (
                <div className="sorting-button-selected">{option}</div>
              )
            }

            {
              option != selection && (
                <div className="sorting-button-unselected" onClick={() => {
                  setSelection(option)
                  handleSortingChange(option)
                }}>
                  {option}
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  );
}

export default SortingMenu;