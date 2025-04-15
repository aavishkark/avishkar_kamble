import './github.css';
import GitHubCalendar from 'react-github-calendar';
import React from 'react';

export default function Github() {

    return (
        <div id='github' className="github-container">
            <div className="github-header">My Github</div>
            <div className="github-content">
                <img className="github-image" src="https://github-readme-streak-stats.herokuapp.com?user=aavishkark"/>
                <img className="github-image" id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=aavishkark' alt='Github stat card'/>
                <img className="github-image" id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs/?username=aavishkark' alt='Github Top Language'/>
            </div>
            <div id='calender' style={{ maxWidth: '100%' }}>
                <GitHubCalendar username="aavishkark" />
            </div>
        </div>
    );
}