import React, { useState, useEffect } from 'react';
import './Box.css';

function Box() {
  const [users, setUsers] = useState([]);
  const [records,setRecords]=useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
      setRecords(data);
    };

    getUser();
  }, []);
  const Filter=(event)=>{
    setRecords(users.filter(f=>f.login.includes(event.target.value)))
  }
  return (
    <>
      <input type='search' className='search-box' placeholder='Search a github user' onChange={Filter}/>
      <div className='box'>
        {records.map((users) => (
          <div key={users.id}>
            <img src={users.avatar_url} alt='Avatar' className='pic' />
            <span>{users.login}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Box;
