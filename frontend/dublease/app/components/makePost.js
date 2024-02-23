import React, { useState } from 'react';
import './makePost.css'

function MakePost({listings, handleClose}) {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rent, setRent] = useState('');
  const [neighborhood, setNeighbordHood] = useState('');
  const [addr, setAddr] = useState('');
  const [numMates, setNumMates] = useState('');
  const [mateGender, setMateGender] = useState('');
  const [bedStatus, setBedStatus] = useState('');
  const [bathStatus, setBathStatus] = useState('');
  const [picLinks, setPicLinks] = useState('');
  const [other, setOther] = useState('');
  const [error, setError] = useState('');

  const handleMakePost = (e) => {
    e.preventDefault();
    console.log('Creating post', { title, name, email, phoneNum, startDate, endDate, rent, neighborhood, addr, numMates, mateGender, bedStatus, bathStatus, picLinks, other });
    
    if (!title || !name || !email || !phoneNum || !startDate || !endDate || !rent || !neighborhood 
      || !addr || !numMates || !mateGender || !bedStatus || !bathStatus) {
      setError('Please fill out all required fields.');
      return;
    } else {
      setError('');
      // Handle form submission
    }
    const post = { 
      title: title,
      name: name,
      email: email,
      phoneNum: phoneNum,
      startDate: startDate,
      endDate: endDate,
      rent: rent,
      neighborhood: neighborhood,
      addr: addr,
      numMates: numMates,
      mateGender: mateGender,
      bedStatus: bedStatus,
      bathStatus: bathStatus,
      picLinks: picLinks,
      other: other
    }
    
    if (Array.isArray(listings)) {
      listings.push(post);
    }

    handleClose();

    // Reset form fields    
    setTitle('');
    setName('');
    setEmail('');
    setPhoneNum('');
    setStartDate('');
    setEndDate('');
    setRent('');
    setNeighbordHood('');
    setAddr('');
    setNumMates('');
    setMateGender('');
    setBedStatus('');
    setBathStatus('');
    setPicLinks('');
    setOther('');
  }

  return (
    <div class="post-form">
      <div className="title"><strong>{"Create a Sublease Post"}</strong></div>
      <form>
      <div style={{ marginBottom: '10px' }}>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone Number: </label>
          <input
            type="number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.valueAsNumber || e.target.value)}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Start Date: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>End Date: </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Rent Price (per month): </label>
          <input
            type="number"
            value={rent}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '' || (value >= 0 && value % 1 === 0)) {
                setRent(value);
              } else {
                setError("Rent must be a non-negative integer")
              }
            }}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Neighborhood: </label>
          <select
            value={neighborhood}
            onChange={(e) => setNeighbordHood(e.target.value)}
            style={{ color: 'black' }}
            required
          >
            <option value=""></option>
            <option value="U Village">U Village</option>
            <option value="North Campus">North Campus</option>
            <option value="West Campus/Ave">West Campus/Ave</option>
            <option value="Greenlake">Greenlake</option>
            <option value="Roosevelt/Northgate">Roosevelt/Northgate</option>
            <option value="Cap Hill/Downtown">Cap Hill/Downtown</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address: </label>
          <input
            type="text"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Number of Roommates: </label>
          <input
            type="number"
            value={numMates}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '' || (value >= 0 && value % 1 === 0)) {
                setNumMates(value);
              } else {
                setError("Number of Mates must be a non-negative integer")
              }
            }}
            style={{ color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Gender of Roommates: </label>
          <select
            type="text"
            value={mateGender}
            onChange={(e) => setMateGender(e.target.value)}
            style={{ color: 'black' }}
            required
            >
            <option value=""></option>
            <option value="Mixed">Mixed</option>
            <option value="All Women">All Women</option>
            <option value="All Men">All Men</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Bedroom Status: </label>
          <select
            type="text"
            value={bedStatus}
            onChange={(e) => setBedStatus(e.target.value)}
            style={{ color: 'black' }}
            required
            >
            <option value=""></option>
            <option value="Private">Private</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Bathroom Status: </label>
          <select
            type="text"
            value={bathStatus}
            onChange={(e) => setBathStatus(e.target.value)}
            style={{ color: 'black' }}
            required
            >
            <option value=""></option>
            <option value="Private">Private</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Links to Pictures of Residence: </label>
          <input
            type="text"
            value={picLinks}
            onChange={(e) => setPicLinks(e.target.value)}
            style={{ color: 'black' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Other Details: </label>
          <input
            type="text"
            value={other}
            onChange={(e) => setOther(e.target.value)}
            style={{ color: 'black' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="tagButton">
          <button type="button"
          onClick= {handleMakePost}>
          <strong>Create Post</strong>
          </button>
        </div>
      </form>
    </div>
  );
}

export default MakePost;