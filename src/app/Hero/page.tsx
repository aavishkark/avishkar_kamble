import './hero.css';
import Image from 'next/image';
import profilepic from './profilepic.png';

export default function Hero() {
    return (
        <div className="hero-container">
            <div className='heroinfo'>
                <div className='hello'>Hello,</div>
                <div>I'm<span className='name'> Avishkar</span></div>
                <div className='para'>A Fullstack Web Developer With a Strong Passion For Creating Stunning Web Experiences.</div>
                <div className='resume'>
                    <button className='resume-btn'>Resume</button>
                </div>
            </div>
            <div className='heropic'><Image src={profilepic} alt="Logo" width={170} className="logo-image" /></div>
        </div>
    )
}