import React from 'react';
import './App.css';
import './Card.css'
import facebookIcon from './assets/facebook.png';
import linkedinIcon from './assets/linkedin.png';


const Card = ({ photo, name, designation, fb, linkedin}) => (
    <div className="card fade-in">
        <div className="image">
            <img src={photo} alt={`${name}`} />
        </div>
        <p className='name'>{name}</p>
        <p className="portfolio">{designation}</p>
        <div className="socialMedia"> 



        {fb && (
        <a href={fb} target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
      )}



        </div>
    </div>
);

export default Card;