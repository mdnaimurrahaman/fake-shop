import React from 'react';
import logo from '../../Assets/logo.png'
import card from '../../Assets/card.png'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='row container mx-auto pt-5'>
                <div className='footer-one col-lg-3 col-md-6 col-12'>
                    <img src={logo} alt="" srcset="" />
                    <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis necessitatibus accusamus eveniet numquam officiis soluta omnis expedita veritatis natus doloribus veniam magnam saepe nemo, eum pariatur reiciendis consectetur unde.</p>
                </div>
                <div className='footer-one col-lg-3 col-md-6 col-12'>
                    <h5>Featured</h5>
                    <ul className='text-uppercase list-unstyled'>
                        <li><a href='#'>Men</a></li>
                        <li><a href='#'>Women</a></li>
                        <li><a href='#'>Boys</a></li>
                        <li><a href='#'>Grils</a></li>
                        <li><a href='#'>Shoes</a></li>
                        <li><a href='#'>Cloths</a></li>
                    </ul>
                </div>
                <div className='footer-one col-lg-3 col-md-6 col-12 mb-3'>
                    <h5>Contact Us</h5>
                    <div>
                        <h6 className='text-uppercase'>Address</h6>
                        <p>cumilla, Bangladesh</p>
                    </div>
                    <div>
                        <h6 className='text-uppercase'>Phone</h6>
                        <p>+8801402723889</p>
                    </div>
                    <div>
                        <h6 className='text-uppercase'>Email</h6>
                        <p>mdnaimur.work@gmail.com</p>
                    </div>
                </div>
                <div className='footer-one col-lg-3 col-md-6 col-12'>
                    <h5>Instagram</h5>
                    <div className='row'>
                        <img className='img-fluid w-25 h-100 m-2' src="https://i.ibb.co/0jGyHHJ/Young-Fashion-Girl-Holding-Shopping-Bag-PNG.png" alt="" srcset="" />
                        <img className='img-fluid w-25 h-100 m-2' src="https://i.ibb.co/71xFMSV/2.png" alt="" srcset="" />
                        <img className='img-fluid w-25 h-100 m-2' src="https://i.ibb.co/s1LsyPF/toppng-com-stealth-ghost-rider-jacket-for-men-autum-590x765.png" alt="" srcset="" />
                        <img className='img-fluid w-25 h-100 m-2' src="https://i.ibb.co/yRZzWKP/62.png" alt="" srcset="" />
                        <img className='img-fluid w-25 h-100 m-2' src="https://i.ibb.co/K73MvbJ/original-97a9e26cc62df1a62f0fc10e791b1e89.webp" alt="" srcset="" />
                        
                    </div>
                </div>
            </div>
            <div className='copyright mt-5'>
                <div className="row container mx-auto justify-content-between">
                    <div className='footer-one col-lg-3 col-md-6 col-12'>
                        <img src={card} alt="" srcset="" />
                    </div>
                    <div className='footer-one col-lg-3 col-md-6 col-12'>
                    <p><small>&copy; mdnaimurrahaman202@gmail.com All Rights Reserved</small></p>
                    </div>
                    <div className='footer-one icon col-lg-3 col-md-6 col-12'>
                        <Link to="www.facebook.com"><BsFacebook/></Link>
                        <Link  to=""><AiFillTwitterCircle/></Link>
                        <Link  to=""><AiFillInstagram/></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

