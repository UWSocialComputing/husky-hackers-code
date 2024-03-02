"use client"
import './filterMenu.css';
import React, { useState } from 'react';
import ReactSlider from "react-slider";

function FilterMenu({ handleFilter }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [maxRent, setMaxRent] = useState(1000);

  return (
    <div className="filter-container">
      <div className="filter-column-title">Filter Listings</div>

      {/* Start date */}
      <div className="filter-item">
        <div>Start date:</div>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="filter-input"
        />
      </div>

      {/* End date */}
      <div className="filter-item">
        <div>End date:</div>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="divider"></div>

      {/* Rent */}
      <div className="filter-item">
        <div>Maximum rent:</div>
      </div>

      {/* Number of roomates */}
      {/* Roomate gender */}

      {/* Bed and bath status */}
      
      {/* Neighborhood */}

      {/* Opt tags */}

    </div>
  );
}

export default FilterMenu;