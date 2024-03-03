"use client"
import './filterMenu.css';
import React, { useState } from 'react';

function FilterMenu({ handleFilter }) { 
  const genderOptions = ["Men", "Women", "Other"]
  const neighborhoodOptions = ["U Village", "West Campus/Ave", "Greenlake",
   "Roosevelt/Northgate", "Cap Hill/Downtown", "Other"]

  const neighborhoodColorMapping = {
    "U Village": "#FFEBD7",
    "North Campus": "#FFE4C4",
    "West Campus/Ave": "#FFDAB9",
    "Greenlake": "#FFD0A9",
    "Roosevelt/Northgate": "#FFC8A2",
    "Cap Hill/Downtown": "#FFB799",
    "Other": "#FFFFFF"
  }
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [maxRent, setMaxRent] = useState(1000);
  const [isMaxRent, setIsMaxRent] = useState(false);
  const [numRoomates, setNumRoomates] = useState(1);
  const [isNumRoomates, setIsNumRoomates] = useState(false);
  const [roomateGenders, setRoomateGenders] = useState(genderOptions);
  const [privateBedroom, setPrivateBedroom] = useState(true);
  const [sharedBedroom, setSharedBedroom] = useState(true);
  const [privateBathroom, setPrivateBathroom] = useState(true);
  const [sharedBathroom, setSharedBathroom] = useState(true);
  const [neighborhoods, setNeighborhoods] = useState(neighborhoodOptions);

  const handleClear = () => {
    setStartDate('')
    setEndDate('')
    setMaxRent(1000)
    setIsMaxRent(false)
    setNumRoomates(1)
    setIsNumRoomates(false)
    setRoomateGenders(genderOptions)
    setPrivateBedroom(true)
    setSharedBedroom(true)
    setPrivateBathroom(true)
    setSharedBathroom(true)
    setNeighborhoods(neighborhoodOptions)
  };

  const handleApply = () => {
    
  };

  return (
    <div className="filter-container">
      <div className="filter-column-title">Filter Listings</div>

      {/* Start date */}
      <div className="filter-item">
        <div>Start date</div>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="filter-input"
        />
      </div>

      {/* End date */}
      <div className="filter-item">
        <div>End date</div>
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
        <div>Rent</div>

        <div className="subcontainer">
          <div 
            className={isMaxRent ? "filter-button-unselected" : "filter-button-selected"}
            onClick={()=>{setIsMaxRent(false)}}
          >
            No limit
          </div>

          <div
            className={isMaxRent ? "filter-button-selected" : "filter-button-unselected"}
            onClick={()=>{setIsMaxRent(true)}}
          >
            Set limit
          </div>
        </div>

        {
          isMaxRent && (
            <div className="subcontainer">
              <input
                type="range"
                min={0}
                max={3000}
                value={maxRent}
                onChange={(e) => setMaxRent(Number(e.target.value))}
                style={{ marginRight: '10px' }}
                className="slider"
              />
              <input
                type="number"
                min={0}
                max={3000}
                value={maxRent}
                onChange={(e) => setMaxRent(Number(e.target.value))}
                className="rent-number"
              />
            </div>
          )
        }
      </div>

      <div className="divider"></div>

      {/* Number of roomates */}
      <div className="filter-item">
        <div>Roomates</div>
        <div className="subcontainer">
          <div 
            className={isNumRoomates ? "filter-button-unselected" : "filter-button-selected"}
            onClick={()=>{setIsNumRoomates(false)}}
          >
            No limit
          </div>

          <div
            className={isNumRoomates ? "filter-button-selected" : "filter-button-unselected"}
            onClick={()=>{setIsNumRoomates(true)}}
          >
            Set limit
          </div>
        </div>

        {
          isNumRoomates && (
            <div className="subcontainer">
              <input
                type="number"
                value={numRoomates}
                onChange={(e) => setNumRoomates(e.target.value)}
                className="filter-input"
              />
            </div>
          )
        }
      </div>

      <div className="divider"></div>

      {/* Roomate gender */}
      <div className="filter-item">
        <div>Roomate Gender</div>
        <div className="menu-container">
          {
            genderOptions.map((gender) => (
              <div className="menu-item">
                <div 
                  className={roomateGenders.includes(gender) ? "filter-box-selected" : "filter-box-unselected"}
                  onClick={() => {
                    if (!roomateGenders.includes(gender)) { 
                      setRoomateGenders([...roomateGenders, gender]) 
                    } else {
                      setRoomateGenders(roomateGenders.filter(item => item !== gender))
                    }
                  }}
                ></div>

                <div onClick={() => {
                    if (!roomateGenders.includes(gender)) { 
                      setRoomateGenders([...roomateGenders, gender]) 
                    } else {
                      setRoomateGenders(roomateGenders.filter(item => item !== gender))
                    }
                  }}
                >{gender}</div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="divider"></div>

      {/* Bedroom status */}
      <div className="filter-item">
        <div>Bedroom</div>
        <div className="menu-container">
          <div className="menu-item">
            <div
              className={privateBedroom ? "filter-box-selected" : "filter-box-unselected"}
              onClick={() => {setPrivateBedroom(!privateBedroom)}}
            ></div>
            <div onClick={()=>{setPrivateBedroom(!privateBedroom)}}>Private</div>
          </div>

          <div className="menu-item">
            <div
              className={sharedBedroom ? "filter-box-selected" : "filter-box-unselected"}
              onClick={() => {setSharedBedroom(!sharedBedroom)}}
            ></div>
            <div onClick={()=>{setSharedBedroom(!sharedBedroom)}}>Shared</div>
          </div>
  
        </div>
      </div>

      <div className="divider"></div>

      {/* Bathroom status */}
      <div className="filter-item">
        <div>Bathroom</div>
        <div className="menu-container">
          <div className="menu-item">
            <div
              className={privateBathroom ? "filter-box-selected" : "filter-box-unselected"}
              onClick={() => {setPrivateBathroom(!privateBathrom)}}
            ></div>
            <div onClick={()=>{setPrivateBathroom(!privateBathroom)}}>Private</div>
          </div>

          <div className="menu-item">
            <div
              className={sharedBathroom ? "filter-box-selected" : "filter-box-unselected"}
              onClick={() => {setSharedBathroom(!sharedBathroom)}}
            ></div>
            <div onClick={()=>{setSharedBathroom(!sharedBedroom)}}>Shared</div>
          </div>
  
        </div>
      </div>

      <div className="divider"></div>
      
      {/* Neighborhood */}
      <div className="filter-item">
        <div>Neighborhood</div>
        <div className="menu-container">
          {
            neighborhoodOptions.map((neighborhood) => (
              <div className="menu-item">
                <div 
                  className={neighborhoods.includes(neighborhood) ? "filter-box-selected" : "filter-box-unselected"}
                  onClick={() => {
                    if (!neighborhoods.includes(neighborhood)) { 
                      setNeighborhoods([...neighborhoods, neighborhood]) 
                    } else {
                      setNeighborhoods(neighborhoods.filter(item => item !== neighborhood))
                    }
                  }}
                ></div>

                <div onClick={() => {
                    if (!neighborhoods.includes(neighborhood)) { 
                      setNeighborhoods([...neighborhoods, neighborhood]) 
                    } else {
                      setNeighborhoods(neighborhoods.filter(item => item !== neighborhood))
                    }
                  }}
                  style={{ backgroundColor: neighborhoodColorMapping[neighborhood]}}
                  className="tag"
                >{neighborhood}</div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="submission-containter">
        <div className="clear-button" onClick={handleClear}>Clear</div>
        <div className="apply-button" onClick={handleApply}>Apply</div>
      </div>
    </div>
  );
}

export default FilterMenu;