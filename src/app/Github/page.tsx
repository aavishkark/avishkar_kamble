'use client';
import './github.css';
import GitHubCalendar from 'react-github-calendar';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

export default function Github() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const githubAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div id='github' className="github-container" ref={ref} style={githubAnimation}>
      <div className="github-header">My Github</div>
      <div className="github-content">
        <img className="github-image" src="https://github-readme-streak-stats.herokuapp.com?user=aavishkark" />
        <img className="github-image" id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=aavishkark' alt='Github stat card' />
        <img className="github-image" id="github-top-langs" src='https://github-readme-stats.vercel.app/api/top-langs/?username=aavishkark' alt='Github Top Language' />
      </div>
      <div id='calender' style={{ maxWidth: '100%' }}>
        <GitHubCalendar username="aavishkark" />
      </div>
    </animated.div>
  );
}