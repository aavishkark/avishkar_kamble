import './hero.css';
import Image from 'next/image';
import profilepic from './profilepic.png';

export default function Hero() {
    return (
        <div id='aboutme' className="hero-container">
            <div className='heroinfo'>
                <div className='hello'>Hello,</div>
                <div>I'm<span className='name'> Avishkar</span></div>
                <div className='para'>Experienced Full Stack Web Developer proficient in React.js and related technologies. Attention to details and effective communication skills combined with solid problem-solving abilities. Mastery of Git for streamlined code management.</div>
                <div className='resume'>
                    <a href="https://drive.google.com/file/d/1vWdhyJfYFhMgeXtLY72dOiDOC7wL-ebL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className='resume-btn'>Resume</button>
                    </a>
                </div>
            </div>
            <div className='heropic'><Image src={profilepic} alt="Logo" width={180} className="logo-image" /></div>
        </div>
    )
}