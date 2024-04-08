import React from 'react'
import trident_img from "./img/tri_img.svg"
import "./Header.css"
import { Icon } from '@iconify/react';

function NavBar() {
  return (
    <div className="super_main_header">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   <img src={trident_img} alt="img" className='trident_img' />
   <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav" id='navbar_tag'>
        <li className="nav-item" id='content_id'>
          <p className="nav-link active" aria-current="page" id='content_part_id'>product</p>
        </li>
        <li className="nav-item" id='content_id'>
          <p className="nav-link active" aria-current="page" id='content_part_id'>Company</p>
        </li>
        <li className="nav-item" id='content_id'>
          <p className="nav-link active" aria-current="page" id='content_part_id'>Careers</p>
        </li>
        <li className="nav-item" id='content_id'>
          <p className="nav-link active" aria-current="page" id='content_part_id'>Investor relations</p>
        </li>
        <li className="nav-item" id='content_id'>
          <p className="nav-link active" aria-current="page" id='content_part_id'>Contact</p>
        </li>
        <li className="nav-item" id='content_id'>
        <span id='search_icon_nav'>
        <Icon icon="fluent:search-20-filled" width="24" height="24" />
        </span>
        </li>
        <div className="india" id='india_tag'>
          <span id='india_text'>INDIA</span>
          <Icon icon="twemoji:flag-india" width="24" />
        </div>


{/* drop dwon */}
<div className="dropdown " id=''><span className='india_text'>English</span>
  <button className="btn btn-secondary dropdown-toggle" type="button" id='dropdown_section' data-bs-toggle="dropdown" aria-expanded="false">
  
  </button>
  <ul className="dropdown-menu" id='dropdown_ul'>
    <li><button className="dropdown-item" type="button"><span>English</span> </button></li>
    <li><button className="dropdown-item" type="button"><span>Arabic</span></button></li>
    <li><button className="dropdown-item" type="button"><span>German</span></button></li>
    <li><button className="dropdown-item" type="button"><span>French</span></button></li>
    <li><button className="dropdown-item" type="button"><span>Chines</span></button></li>
    <li><button className="dropdown-item" type="button"><span>Italian</span></button></li>
    <li><button className="dropdown-item" type="button"><span>Russian</span></button></li>
    <li><button className="dropdown-item" type="button"><span>Sri-lankan</span></button></li>
    <li><button className="dropdown-item" type="button"><span>Japanese</span></button></li>
    <li><button className="dropdown-item" type="button"><span>Spanish</span></button></li>
    <li><button className="dropdown-item" type="button"><span>Postuguese</span></button></li>

  </ul>
</div>
      </ul>
     
    </div>
  </div>
</nav>
</div>
  )
  }

export default NavBar

//  End ------   ------    ------    -------    ---- HEADER {NAV BAR}

