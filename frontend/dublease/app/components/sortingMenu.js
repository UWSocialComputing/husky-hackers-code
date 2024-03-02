"use client"
import React, { useState } from 'react';
import './sortingMenu.css';

function SortingMenu({ handleSortingChange, sortingOptions }) {
  const [selection, setSelection] = useState(sortingOptions[0])

  return (
    <div className="container">
      <div className="column-title">Sort Listings</div>

      { 
        sortingOptions.map(option => (
          <div key={option}>
            {
              option == selection && (
                <div className="button-selected">{option}</div>
              )
            }

            {
              option != selection && (
                <div className="button-unselected" onClick={() => {
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