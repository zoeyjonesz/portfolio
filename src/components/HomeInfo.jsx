import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hello! I am <span className="font-semibold">Zoey</span> 👋🙂
        <br/>
        A Software Engineering Student from Canada
        </h1>
    ),
    2: (
        <InfoBox 
            text="Currently in my undergraduate studies, learning 
            through my co-op experiences, personal projects, and courses"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="I am passionate about software development, 
            curious about what I have done?"
            link="/projects"
            btnText="See my projects"
        />
    ),
    4: (
        <InfoBox 
            text="I am always looking for new opportunities to learn and grow, 
            so feel free to reach out!"
            link="/contact"
            btnText="Let's connect"
        />
    ),
}

const HomeInfo = ( { currentStage }) => {
    return renderContent[currentStage] || null;
} 

export default HomeInfo;