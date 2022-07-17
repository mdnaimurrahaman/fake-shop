import React from 'react';
import './Categories.css'
import {RiShirtLine} from 'react-icons/ri'

const Categories = () => {
    const data =[
        {
            cateImg: "https://i.ibb.co/kgt60wM/shirt-neck-icon.png",
            cateName: "Fashion",
          },
          {
            cateImg: "https://i.ibb.co/k3GmZHp/2419804-cable-electronic-plugin-technology-icon.png",
            cateName: "Electronic",
          },
          {
            cateImg: "https://i.ibb.co/7zvbk8b/3687823-adventure-automotive-car-transport-transportation-icon.png",
            cateName: "Cars",
          },
          {
            cateImg: "https://i.ibb.co/df3Pyds/1976053-home-home-page-homepage-homepages-icon.pngg",
            cateName: "Home & Garden",
          },
          {
            cateImg: "https://i.ibb.co/NLzQvf1/430097-gift-present-icon.png",
            cateName: "Gifts",
          },
          {
            cateImg: "https://i.ibb.co/5KZPP0Q/290128-audio-media-music-play-player-icon.png",
            cateName: "Music",
          },
          {
            cateImg: "https://i.ibb.co/k2GNgkR/6673746-checkup-doctor-health-healthcare-hospital-icon.png",
            cateName: "Health & Beauty",
          },
          {
            cateImg: "https://i.ibb.co/cbmR8Bf/9226342-teddy-bear-child-play-toy-icon.png",
            cateName: "Pets",
          },
          
          {
            cateImg: "https://i.ibb.co/CBp8bWX/1250327-basket-buy-checkout-groceries-retail-icon.png",
            cateName: "Groceries",
          },
          {
            cateImg: "https://i.ibb.co/PF9XKFF/2388608-books-decoration-interior-shelves-icon.png",
            cateName: "Books",
          },
    ]
    return (
        <div className='category'>
            {
                data.map((value,index)=>{
                    return(
                        <div className='box' key={index}>
                            <img src={value.cateImg} alt=""/>
                        <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Categories;