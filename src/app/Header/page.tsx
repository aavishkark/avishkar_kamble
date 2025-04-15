'use client';
import './header.css';
import Image from 'next/image';
import logo from './logo.jpg';
import React from 'react';
export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className="header">
                <div className="logo">
                <Image src={logo} alt="Logo" width={0} height={40} className="logo-image" />
                </div>
                <nav>
                    <ul className="navigation">
                            <li><a href="#aboutme">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#github">Github</a></li>
                            <li><a href="https://drive.google.com/file/d/1QVhmAYFmD_hLpICW_TM_LQBQ0CF60P42/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                </nav>
                <a href="#contactme" className="contactme-btn">
                <div className="contactme">
                <svg className='contactme-icon' height="14" width="14" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                Contact Me
                </div>
                </a>
                <div className='mobile-view'>
                    <div className={`ham ${isOpen ? 'disabled' : 'enabled'}`} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="22.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                    </div>
                    <div className={`ham-menu ${isOpen ? 'enabled' : 'disabled'}`}>
                        <ul className="ham-menu-list">
                            <li onClick={toggleMenu}>✕</li>
                            <li><a href="#aboutme">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#github">Github</a></li>
                            <li><a href="https://drive.google.com/file/d/1QVhmAYFmD_hLpICW_TM_LQBQ0CF60P42/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                            <li>Contact Me</li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}