import React, { useState } from 'react';
import './makePost.css'
import { makeListingPost } from '../service';

function MakePost({handleClose}) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rent, setRent] = useState(parseFloat(''));
  const [neighborhood, setNeighbordHood] = useState('');
  const [addr, setAddr] = useState('');
  const [numMates, setNumMates] = useState(parseInt(''));
  const [mateGender, setMateGender] = useState('');
  const [bedStatus, setBedStatus] = useState('');
  const [bathStatus, setBathStatus] = useState('');
  const [picLinks, setPicLinks] = useState('');
  const [other, setOther] = useState('');
  const [promptQuestion, setPromptQuestion] = useState('');
  const [promptAnswer, setPromptAnswer] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');

  const handleMakePost = (e) => {
    e.preventDefault();
    console.log('Creating post', { title, name, email, phoneNum, startDate, endDate, rent, neighborhood, addr, numMates, mateGender, bedStatus, bathStatus, picLinks, other });
    
    if (!title || !name || !email || !phoneNum || !startDate || !endDate || !rent || !neighborhood 
      || !addr || !numMates || !mateGender || !bedStatus || !bathStatus || !desc) {
      setError('Please fill out all required fields.');
      return;
    } else {
      setError('');
      // Handle form submission
    }

    if (tags.length > 0) {
      let formattedTags = tags.split(',')
      setTags(formattedTags);
    }

    const post = {
      "title": title,
      "description": desc,
      "name": name,
      "email": email,
      "phone_number": phoneNum,
      "start_date": startDate,
      "end_date": endDate,
      "photos_link": picLinks,
      "rent": rent,
      "neighborhood": neighborhood,
      "address": addr,
      "number_of_roommates": numMates,
      "roommate_gender": mateGender,
      "bedroom_status": bedStatus,
      "bathroom_status": bathStatus,
      "optional_tags": tags,
      "prompt_question": promptQuestion,
      "prompt_answer": promptAnswer,
      "other_details": other
    }
    
    const sendPost = async () => {
      try {
        const response = await makeListingPost(post)
        if (response.status >= 200 && response.status < 300) {
          // Success status code
          // You can access the response data here, e.g., response.json()
          console.log("Request succeeded");

        } else {
          // Error status code
          console.error("Request failed with status: " + response.status);
          //setError("Unable to Make Request" + response.message + JSON.stringify(post))
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        //setError(error.message + JSON.stringify(post))
      }
    };

    sendPost();
    handleClose();

    // Reset form fields    
    setTitle('');
    setDesc('');
    setName('');
    setEmail('');
    setPhoneNum('');
    setStartDate('');
    setEndDate('');
    setRent(parseFloat(''));
    setNeighbordHood('');
    setAddr('');
    setNumMates(parseInt(''));
    setMateGender('');
    setBedStatus('');
    setBathStatus('');
    setPicLinks('');
    setPromptQuestion('');
    setPromptAnswer('');
    setTags('')
    setOther('');

  }

  return (
    <div class="post-form">
      <div className="title"><strong>{"Create a Sublease Post"}</strong></div>
      <form>
        <div className="input-field">
          <label>Title: </label>
          <input className='text-input'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Studio with View"
            required
          />
        </div>
        <div className="input-field">
          <label>Description: </label>
          <input className='text-input'
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Modern Studio with Scenery"
            required
          />
        </div>
        <div className="input-field">
          <label>Name: </label>
          <input className='text-input'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mike Wazowski"
            required
          />
        </div>
        <div className="input-field">
          <label>Email: </label>
          <input className='text-input'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mikew@monsters.com"
            required
          />
        </div>
        <div className="input-field">
          <label>Phone Number: </label>
          <input className='text-input'
            type="number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.valueAsNumber || e.target.value)}
            placeholder="123-456-7890"
            required
          />
        </div>
        <div className="input-field">
          <label>Start Date: </label>
          <input className='text-input'
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Mike Wazowski"
            required
          />
        </div>
        <div className="input-field">
          <label>End Date: </label>
          <input className='text-input'
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Rent Price (per month): </label>
          <input className='text-input'
            type="number"
            value={rent}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '' || (value >= 0 && value % 1 === 0)) {
                setRent(parseFloat(value));
              } else {
                setError("Rent must be a non-negative integer")
              }
            }}
            placeholder="1500"
            required
          />
        </div>
        <div className="input-field">
          <label>Neighborhood: </label>
          <select
            value={neighborhood}
            onChange={(e) => setNeighbordHood(e.target.value)}
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
        <div className="input-field">
          <label>Address: </label>
          <input className='text-input'
            type="text"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            placeholder="4345 University Way NE"
            required
          />
        </div>
        <div className="input-field">
          <label>Number of Roommates: </label>
          <input className='text-input'
            type="number"
            value={numMates}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '' || (value >= 0 && value % 1 === 0)) {
                setNumMates(parseInt(value));
              } else {
                setError("Number of Mates must be a non-negative integer")
              }
            }}
            placeholder="0"
            required
          />
        </div>
        <div className="input-field">
          <label>Gender of Roommates: </label>
          <select
            type="text"
            value={mateGender}
            onChange={(e) => setMateGender(e.target.value)}
            required
            >
            <option value=""></option>
            <option value="Mixed">Mixed</option>
            <option value="All Women">All Women</option>
            <option value="All Men">All Men</option>
            <option value="N/A">All Men</option>
          </select>
        </div>
        <div className="input-field">
          <label>Bedroom Status: </label>
          <select
            type="text"
            value={bedStatus}
            onChange={(e) => setBedStatus(e.target.value)}
            required
            >
            <option value=""></option>
            <option value="Private">Private</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
        <div className="input-field">
          <label>Bathroom Status: </label>
          <select
            type="text"
            value={bathStatus}
            onChange={(e) => setBathStatus(e.target.value)}
            required
            >
            <option value=""></option>
            <option value="Private">Private</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
        <div className="input-field">
          <label>Links to Pictures of Residence: </label>
          <input className='text-input'
            type="text"
            value={picLinks}
            onChange={(e) => setPicLinks(e.target.value)}
            placeholder="wwww.pics.com"
          />
        </div>
        <div className="input-field">
          <label>Prompt Question: </label>
          <input className='text-input'
            type="text"
            value={promptQuestion}
            onChange={(e) => setPromptQuestion(e.target.value)}
            placeholder="What is your favorite animal?"
          />
        </div>
        <div className="input-field">
          <label>Prompt Answer: </label>
          <input className='text-input'
            type="text"
            value={promptAnswer}
            onChange={(e) => setPromptAnswer(e.target.value)}
            placeholder="Cats!"
          />
        </div>
        <div className="input-field">
          <label>Tags (seperate tags with commas): </label>
          <input className='text-input'
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="pet-friendly, non-smoking"
          />
        </div>
        <div className="input-field">
          <label>Other Details: </label>
          <input className='text-input'
            type="text"
            value={other}
            onChange={(e) => setOther(e.target.value)}
            placeholder="Open to negotiate rent price"
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