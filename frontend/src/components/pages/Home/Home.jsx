import React, { useState } from "react";
import './Home.css'
import { FaUserAlt } from 'react-icons/fa'
import logo from './logo.png'
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const [users, setUser] = useState([
    {
      id: 1,
      name: 'Rishu Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 2,
      name: 'Rishu Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 3,
      name: 'Ritika Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 4,
      name: 'Rishu Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 5,
      name: 'Ashish Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 6,
      name: 'Rishu Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 7,
      name: 'Mradul Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 8,
      name: 'Rishu Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 9,
      name: 'Rishu Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 10,
      name: 'Rishu Singh',
      event: 'plantation',
      location: 'iet lko'
    },
    {
      id: 11,
      name: 'Apoorn Singh',
      event: 'plantation',
      location: 'iet lko'
    }
  ])

  return (
    <div className="landmain">
      <div className="landleft">
        {
          users.map((user) =>
            <div className="userBox" key={user.id}> 
              <div className="userinnerBox">
                <FaUserAlt /> <p>{user.name} participate in {user.event} at {user.location} </p>
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
