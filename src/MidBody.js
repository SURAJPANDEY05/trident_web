import React from 'react';
import "./MidBody.css";
import leaf from "./img/trident_leaf.webp";
import Jhulaa from "./img/jhulaa.png";
import { Icon } from '@iconify/react';
import bedImg from "./img/bed.jpeg";
import paperImg from "./img/Paper.jpeg";
import yarnImg from "./img/yarn.jpeg";
import chemicalImg from "./img/Chemical.jpeg";
import energyImg from "./img/Energy.jpeg";
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
function MidBody() {
  // C:\Users\Dell\Desktop\trident_clone\trident_web\src\img\bed.jpeg
  const DataImage = [
    {
      id: 1,
      text: "Home Textiles",
      img: bedImg,
      text_i: "bed",
      text_ii: "Browse our latest contemporary designs for your home"
    },
    {
      id: 2,
      text: "Paper & Stationery",
      img: paperImg,
      text_i: "paper",
      text_ii: "Discover our collection of fine paper and stationery"
    },
    {
      id: 3,
      text: "Yarn",
      img: yarnImg,
      text_i: "yarn",
      text_ii: "Explore our range of premium yarn products"
    },
    {
      id: 4,
      text: "Chemicals",
      img: chemicalImg,
      text_i: "chemical",
      text_ii: "Learn more about our chemical products and services"
    },
    {
      id: 5,
      text: "Energy",
      img: energyImg,
      text_i: "energy",
      text_ii: "Discover sustainable energy solutions for your business"
    },
  ];


  return (
    <main className='MidBody_main_part'>
      <div className='super_main_bd'>
        <div className="main_bd">
          {/* 1 leafs */}
          <div className="leaf_area1" >
            <div className="leaf1_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' style={{ height: "78px", }} />
            </div>
            <span id='hover_text1'>Industry 4.0<Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* 2 leafs */}
          <div className="leaf_area2">
            <div className="leaf2_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' />
            </div>
            <span id='hover_text2'>Opportunities at Trident<Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* 3 leafs */}
          <div className="leaf_area3">
            <div className="leaf3_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' />
            </div>
            <span id='hover_text3'>Exclusive Stores<Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* 4 leafs */}
          <div className="leaf_area4">
            <div className="leaf4_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' style={{ height: "88px", }} />
            </div>
            <span id='hover_text4'>Employee Shareholding<Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* 5 leafs */}
          <div className="leaf_area5">
            <div className="leaf5_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' />
            </div>
            <span id='hover_text5'>Towards a better tomorrow<Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* 6 leafs */}
          <div className="leaf_area6" id=''>
            <div className="leaf6_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' id='one' style={{ height: "98px", }} />
            </div>
            <span id='hover_text6'>Manufacturing Excellence   <Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* 7 leafs */}
          <div className="leaf_area7">
            <div className="leaf7_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' style={{ height: "88px", }} />
            </div>
            <span id='hover_text7'>Diversity and inclusion<Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* 8 leafs */}
          <div className="leaf_area8">
            <div className="leaf8_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' />
            </div>
            <span id='hover_text8'>Happiness is a way of living<Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* 9 leafs */}
          <div className="leaf_area9">
            <div className="leaf9_div_parent">
              <img src={leaf} alt="Leaf" className='leafs_' style={{ height: "98px", }} />
            </div>
            <span id='hover_text9'>Excellence In Nature<Icon icon="lets-icons:video-fill" width="25" height="25" style={{ color: "orange" }} /></span>
          </div>
          {/* Jhulaa*/}
          <div className="jhulaa">
            <img src={Jhulaa} alt="Jhulaa" className='leafs_' id='jhulaa' />
          </div>
          <div className="stories_text">
            <span className="stories_text_span_tag">stories</span>
          </div>
          <div className="we_are_about_text">
            <h3 className="text_small_stories">We are about stories</h3>
            <div className="p_text_stories_about">
              <p className="long_text_stories">Like a deep-rooted 36-year old tree at
                our Barnala plant and its countless leaves,
                Trident, with a formidable global presence,
                has innumerable stories to tell.
                Hear each leaf tell you its story. </p>
            </div>
          </div>
        </div>
      </div>
      {/* end banner section  */}
      {/* main content */}
      <div className="super_main_we_are_part">
        <div className="we_are_part_text_main_div">
          <div className='we_are_part_text'>
            <h2 className=" bold_text">
              We are a part of your daily life </h2>
            <span className='find_out_text'>Find out how</span>
          </div>
          <div className="explore_btn">
            <div className="main_p_tag">
              <p className='explore_Explore_text'>Explore</p>
              <p className='explore_our_range_text'>Our Range </p>
            </div>
            <div className="arrow_div">
              <Icon className='arrow_icon' icon="material-symbols:arrow-right" width="28" height="28" style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
      {/*   this section we create  Home Textiles paper & stationery 
and yran chemicals Energy and change the photo  by using hooks use state */}
<div className="extra_super_main">
{
  DataImage.map((break_data)=>
  {
    const{id,text}=break_data;
    return(

      <div className="super_super_main_home_texttiles_etc_div">
        <div className="super_main_home_texttiles_etc_div">
          <div className="main_home_texttiles_etc_div">
            <div className="fifth_block_div_child" key={DataImage.id}>
              <div className="ist_home_textile_etc">
                <h3 className='title_h3'>{text}</h3>
                <p className="title_p">
                  Discover the best bed and bath experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
}
</div>
      {/*  this section creste a images and this area we are using UseState hooks */}
      {
         DataImage.map((break_data) => {
          const { id, text, img, text_i, text_ii } = break_data;
          return (
            <div className="bed_paper_yarn_super_main_div" key={id}>
              <div className="bed_etc_img_div">
                <img src={typeof img === 'string' ? img : img.default} className='images_bed_etc' alt="images_bed etc" />
              </div>
              <div className="h_text_p_text">
                <h2 className='text_bed_or_etc_text'>{text_i}</h2>
                <p className="text_bed_etc_p_text">{text_ii}</p>
              </div>
              <div className="explore_area">
                <h2 className='text_explore_1'>EXPLORE</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                  <path fill="white" d="m20 12l.707-.707l.707.707l-.707.707zM5 13a1 1 0 1 1 0-2zm9.707-7.707l6 6l-1.414 1.414l-6-6zm6 7.414l-6 6l-1.414-1.414l6-6zM20 13H5v-2h15z"/>
                </svg>
              </div>
            </div>
          
          )
        })
      }
     
     
    </main>
  )
}
export default MidBody



















let i=0;

for(i=0;i<10;i++)
{
  console.log("hello");
};












