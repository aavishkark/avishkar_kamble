"use client";
import './hero.css';
import Image from 'next/image';
import profilepic from './profilepic.png';
import { useSpring } from '@react-spring/web';
import { animated } from '@react-spring/web'

export default function Hero() {
    const textAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { tension: 200, friction: 20 },
        delay: 200
    });

    const imageAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(50px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { tension: 200, friction: 20 },
        delay: 400
    });

    return (
        <div id='aboutme' className="hero-container">
            <animated.div className='heroinfo' style={textAnimation}>
                <div className='hello'>Hello,</div>
                <div>I'm<span className='name'> Avishkar</span></div>
                <div className='para'>
                    Experienced Full Stack Web Developer proficient in React.js and related technologies.
                    Attention to details and effective communication skills combined with solid problem-solving abilities.
                    Mastery of Git for streamlined code management.
                </div>
                <div className='resume'>
                    <a href="https://drive.google.com/file/d/1vWdhyJfYFhMgeXtLY72dOiDOC7wL-ebL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className='resume-btn'>Resume</button>
                    </a>
                </div>
            </animated.div>

            <animated.div className='heropic' style={imageAnimation}>
                <Image src={profilepic} alt="Logo" width={180} className="logo-image" />
            </animated.div>
        </div>
    );
}
