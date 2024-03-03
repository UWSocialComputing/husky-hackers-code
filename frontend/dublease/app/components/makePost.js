import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Select from 'react-select'
import './makePost.css'
import { makeListingPost } from '../service';

function MakePost({handleClose}) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [startDate, setStartDate] = useState('');
  const [flexibleStart, setFlexibleStart] = React.useState(false);
  const [endDate, setEndDate] = useState('');
  const [flexibleEnd, setFlexibleEnd] = React.useState(false);
  const [rent, setRent] = useState(parseFloat(''));
  const [flexibleRent, setFlexibleRent] = React.useState(false);
  const [neighborhood, setNeighborHood] = useState('');
  const [addr, setAddr] = useState('');
  const [numMates, setNumMates] = useState(parseInt(''));
  const [mateGender, setMateGender] = useState('');
  const [bedStatus, setBedStatus] = useState('');
  const [bathStatus, setBathStatus] = useState('');
  const [pics, setPics] = useState([]);
  const [base64Images, setBase64Images] = useState([]);
  const [other, setOther] = useState('');
  const [promptQuestion, setPromptQuestion] = useState('');
  const [promptAnswer, setPromptAnswer] = useState('');
  const [popularTags, setPopularTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState('');

  const popularTagOptions = [
    { value: 'pet-friendly', label: 'pet-friendly' },
    { value: 'non-smoking', label: 'non-smoking' }
  ]
  

  function TagsInput(){

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="text-input" placeholder="near i5 (press ENTER to create a new tag)" />
        </div>
    )
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setPics(files);

    const imagePromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
          resolve(event.target.result);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises)
      .then((base64Images) => {
        setBase64Images([...base64Images]);
        console.log(base64Images);

      })
      .catch((error) => {
        console.error('Error reading files:', error);
      });

  };


  const handleMakePost = async (e) => {
    e.preventDefault();
    console.log('Creating post', { title, name, email, phoneNum, startDate, endDate, rent, neighborhood, addr, numMates, mateGender, bedStatus, bathStatus, pics, other });
    
    if (!title || !name || !email || !phoneNum || !startDate || !endDate || !rent || !neighborhood 
      || !addr || !numMates || !mateGender || !bedStatus || !bathStatus || !desc) {
      setError('Please fill out all required fields.');
      return;
    } else if (Date.parse(endDate) < Date.parse(startDate)) {
      setError('End Date cannot be before Start Date');
      return;
    }

    const post = {
      "title": title,
      "description": desc,
      "name": name,
      "email": email,
      "phone_number": phoneNum,
      "start_date": startDate,
      "flexible_start_date": flexibleStart,
      "end_date": endDate,
      "flexible_end_date": flexibleEnd,
      "photos_link": "",
      "rent": rent,
      "flexible_rent": flexibleRent,
      "neighborhood": neighborhood,
      "address": addr,
      "number_of_roommates": numMates,
      "roommate_gender": mateGender,
      "bedroom_status": bedStatus,
      "bathroom_status": bathStatus,
      "optional_tags": popularTags.concat(tags),
      "prompt_question": promptQuestion,
      "prompt_answer": promptAnswer,
      "other_details": other,
      "photos": base64Images,
    }
    
    const sendPost = async () => {
      try {
        const response = await makeListingPost(post)
        if (response.status == 'dublease') {
          console.log("Request succeeded");
        } else {
          console.error("Request failed with status" + response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    await sendPost();
    handleClose();

    // Reset form fields    
    setTitle('');
    setDesc('');
    setName('');
    setEmail('');
    setPhoneNum('');
    setStartDate('');
    setFlexibleStart(false);
    setEndDate('');
    setFlexibleEnd(false);
    setRent(parseFloat(''));
    setFlexibleRent(false);
    setNeighborHood('');
    setAddr('');
    setNumMates(parseInt(''));
    setMateGender('');
    setBedStatus('');
    setBathStatus('');
    setPics([]);
    setPromptQuestion('');
    setPromptAnswer('');
    setTags([]);
    setPopularTags([]);
    setBase64Images([]);
    setOther('');
    setError('');
  }

  return (
    <div class="post-form">
      <div className="title"><strong>{"Create a Sublease Post"}</strong></div>
      <form>
        <h3><strong>Title*</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Studio with View"
            required
          />
        </div>
        <h3><strong>Description*</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Modern Studio with Scenery"
            required
          />
        </div>
        <h3><strong>Name*</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mike Wazowski"
            required
          />
        </div>
        <h3><strong>Email*</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mikew@monsters.com"
            required
          />
        </div>
        <h3><strong>Phone Number*</strong></h3>
        <div className="input-field">
          <PhoneInput
            placeholder="123-456-7890"
            country={"us"}
            value={phoneNum}
            onChange={setPhoneNum}
            style={{ color: 'black', width: "230px", margin: 'auto', flexGrow: 1}}
            required
          />
        </div>
        <h3><strong>Start Date*</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Mike Wazowski"
            required
          />
        </div>
        <h3><strong>{}</strong></h3>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <label style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '5px' }}><strong>Flexible Start Date</strong></span>
            <input
              type="checkbox"
              checked={flexibleStart}
              onChange={() => setFlexibleStart(prevState => !prevState)}
            />
          </label>
        </div>
        <h3><strong>End Date*</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <h3><strong>{}</strong></h3>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <label style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '5px' }}><strong>Flexible End Date</strong></span>
            <input
              type="checkbox"
              checked={flexibleEnd}
              onChange={() => setFlexibleEnd(prevState => !prevState)}
            />
          </label>
        </div>
        <h3><strong>Rent Price (per month)*</strong></h3>
        <div className="input-field">
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
        <h3><strong>{}</strong></h3>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <label style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '5px' }}><strong>Flexible Rent Price</strong></span>
            <input
              type="checkbox"
              checked={flexibleRent}
              onChange={() => setFlexibleRent(prevState => !prevState)}
            />
          </label>
        </div>
        <h3><strong>Neighborhood*</strong></h3>
        <div className="input-field">
          <select
            value={neighborhood}
            onChange={(e) => setNeighborHood(e.target.value)}
            style={{ color: 'black', flexGrow: 1}}
            required
          >
            <option value=""></option>
            <option value="U Village">U Village</option>
            <option value="North Campus">North Campus</option>
            <option value="West Campus/Ave">West Campus/Ave</option>
            <option value="Greenlake">Greenlake</option>
            <option value="Roosevelt/Northgate">Roosevelt/Northgate</option>
            <option value="Cap Hill/Downtown">Cap Hill/Downtown</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <h3><strong>Address*</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="text"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            placeholder="4345 University Way NE"
            required
          />
        </div>
        <h3><strong>Number of Roommates*</strong></h3>
        <div className="input-field">
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
        <h3><strong>Gender of Roommates*</strong></h3>
        <div className="input-field">
          <select
            type="text"
            value={mateGender}
            onChange={(e) => setMateGender(e.target.value)}
            style={{ color: 'black', flexGrow: 1 }}
            required
            >
            <option value=""></option>
            <option value="Mixed">Mixed</option>
            <option value="All Women">All Women</option>
            <option value="All Men">All Men</option>
            <option value="Other">Other</option>
            <option value="N/A">N/A</option>
          </select>
        </div>
        <h3><strong>Bedroom Status*</strong></h3>
        <div className="input-field">
          <select
            type="text"
            value={bedStatus}
            onChange={(e) => setBedStatus(e.target.value)}
            style={{ color: 'black', flexGrow: 1 }}
            required
            >
            <option value=""></option>
            <option value="Private">Private</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
        <h3><strong>Bathroom Status*</strong></h3>
        <div className="input-field">
          <select
            type="text"
            value={bathStatus}
            onChange={(e) => setBathStatus(e.target.value)}
            style={{ color: 'black', flexGrow: 1 }}
            required
            >
            <option value=""></option>
            <option value="Private">Private</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
        <h3><strong>Pictures of Residence</strong></h3>
        <div className="input-field">
          <input type="file" accept="image/*" multiple onChange={handleImageChange} />
          <div>
            {base64Images.map((base64, index) => (
              <img key={index} src={base64} alt={`Uploaded ${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }} />
            ))}
          </div>
        </div>
        <h3><strong>Prompt Question</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="text"
            value={promptQuestion}
            onChange={(e) => setPromptQuestion(e.target.value)}
            placeholder="What is your favorite memory in the house?"
          />
        </div>
        <h3><strong>Prompt Answer</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="text"
            value={promptAnswer}
            onChange={(e) => setPromptAnswer(e.target.value)}
            placeholder="Building a fort with roommates!"
          />
        </div>
        <h3><strong>Popular Tags</strong></h3>
        <div className="input-field">
          <div className="text-input">
            <Select 
              value={popularTags.map(tag => ({ value: tag, label: tag }))}
              isMulti
              isClearable={popularTagOptions.some((v) => !v.isFixed)}
              name="popular tags"
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(selectedOptions) => {
                if (selectedOptions) {
                  setPopularTags(selectedOptions.map(option => option.value));
                } else {
                  setPopularTags([]);
                }
              }}
              options={popularTagOptions}
              styles={{
                option: (provided) => ({
                  ...provided,
                  color: 'black'
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'black'
                }),
                control: (provided) => ({
                  ...provided,
                  color: 'black'
                })
              }}
            />
          </div>
        </div>
        <h3><strong>Custom Tags</strong></h3>
        <div className="input-field">
          <TagsInput />
        </div>
        <h3><strong>Other Details</strong></h3>
        <div className="input-field">
          <input className='text-input'
            type="text"
            value={other}
            onChange={(e) => setOther(e.target.value)}
            placeholder="Open to negotiate rent price"
          />  
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{<strong>{error}</strong>}</p>}
      <div className="submitButton">
          <button type="button"
          onClick= {handleMakePost}>
          <strong>Create Post</strong>
          </button>
      </div>
    </div>
  );
}

export default MakePost;