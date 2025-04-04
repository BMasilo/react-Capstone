import React from 'react';
import logo from '../images/Logo.svg'


const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Address: <br/> 123 Chicago, USA</li>
                        <li>Phone: <br/> +123 1234 1234</li>
                        <li>Email: <br/> littlelemon@lemonres.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;