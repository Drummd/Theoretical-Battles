import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'


function Footer() {
	return (
		<footer>
            <a href="/"  className="footer_logo">Theoretical Battlegrounds</a>

            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/dalton-drumm-57aba91ba/" target="_blank"> <BsLinkedin /> </a>
                <a href="https://github.com/Drummd" target="_blank"> <BsGithub /> </a>
                <a href="https://stackoverflow.com/users/19277759/dalton-drumm" target='_blank'> <BsStackOverflow/> </a>
            </div>

            <div className="">
                <small>Dalton Drumm</small>
            </div>
        </footer>
	);
}

export default Footer;