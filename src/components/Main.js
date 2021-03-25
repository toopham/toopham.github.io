import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Main.css';
import { Link } from 'react-router-dom';



function Main() {
    return (
        <div className='main-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1> Welcome</h1>
            <div className='main-btns'>
                <a href="https://www.toopham.com" >
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                    toopham.com
                </Button>
                </a>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    www.leetcode.com/toopham <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Main
