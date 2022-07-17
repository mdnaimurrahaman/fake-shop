import React from 'react';
import './Categories.css'
import {RiShirtLine} from 'react-icons/ri'

const Categories = () => {
    const data =[
        {
            cateImg:"https://i.ibb.co/kgt60wM/shirt-neck-icon.png",
            cateName: "Man t-shirt"
        }
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