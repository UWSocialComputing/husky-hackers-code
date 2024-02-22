import React, { useState } from 'react';

function MakePost() {
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
  const [bedBathStatus, setBedBathStatus] = useState('');
  const [picLinks, setPicLinks] = useState('');
  const [other, setOther] = useState('');

  const handleMakePost = (e) => {
    e.preventDefault();
    console.log('Creating post', { title, name, email, phoneNum, startDate, endDate, rent, neighborhood, addr, numMates, mateGender, bedBathStatus, picLinks, other });
    // Reset form fields
    make_post(title, name, email, phoneNum, startDate, endDate, rent, neighborhood, addr, numMates, )
    
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
    setBedBathStatus('');
    setPicLinks('');
    setOther('');
  }

  return (
    <div class="post-form">
      <h2>Create a Sublease Post</h2>
      <form onMakePost={handleMakePost}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.valueAsNumber || e.target.value)}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <label>
          Rent Price (per month):
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(e.target.valueAsNumber || e.target.value)}
            required
          />
        </label>
        <label>
          Neighborhood:
          <input
            type="text"
            value={neighborhood}
            onChange={(e) => setNeighbordHood(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            required
          />
        </label>
        <label>
          Number of RoomMates:
          <input
            type="number"
            value={numMates}
            onChange={(e) => setNumMates(e.target.valueAsNumber || e.target.value)}
            required
          />
        </label>
        <label>
          Gender of Roomates:
          <input
            type="text"
            value={mateGender}
            onChange={(e) => setMateGender(e.target.value)}
            required
          />
        </label>
        <label>
          Bedroom & Bathroom Status:
          <input
            type="text"
            value={bedBathStatus}
            onChange={(e) => setBedBathStatus(e.target.value)}
            required
          />
        </label>
        <label>
          Links to Pictures of Residence :
          <input
            type="text"
            value={picLinks}
            onChange={(e) => setPicLinks(e.target.value)}
          />
        </label>
        <label>
          Other Details:
          <input
            type="text"
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />
        </label>
        <button type="Create Post">MakePost</button>
      </form>
    </div>
  );
}

export default MakePost;