import React, { useState, useEffect } from "react";
import './Home.css'
import { FaUserAlt } from 'react-icons/fa'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate()

  const [users, setUser] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/donaters')
      .then((res) => {
        // console.log(res.data);
        setUser(res.data)
      })
      .catch((e) => {
        console.log(e);
      })
  }, [])

  return (
    <div className="landmain">
      <div className="landleft">
        {users &&
          users.map((user) =>
            <div className="userBox" key={user._id}>
              <div className="userinnerBox">
                <FaUserAlt /> <p>{user.name} donates {user.amount}</p>
              </div>
            </div>
          )
        }
      </div>
      <div className="landright">
        <div className="landrighttop">
          <div class="wrapper">
            <div class="bg"> Green City </div>
            <div class="fg"> Green City </div>
          </div>

          <div class="wrapper1">
            <div class="bg1"> Join us in creating a greener and cleaner city for a brighter, more sustainable future </div>
            <div class="fg1"> Join us in creating a greener and cleaner city for a brighter, more sustainable future </div>
          </div>
        </div>
        <div className="landrightbottom">

          <button className="landbtn" onClick={() => navigate('/organiseplantation')}>Organise Plantation</button>
          <img src={logo} width='200px' />
          <button className="landbtn" onClick={() => navigate('/strayanimal')}>Help Stray Animal</button>
        </div>
      </div>
    </div>

  );
};

export default Home;
