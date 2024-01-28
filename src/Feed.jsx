import React from 'react';
import Card from './Card';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import Add from './Add';

export default function Feed() {
  return (
    <div>
      <div className='w-screen h-24 bg-[#E0D0C2] flex justify-center items-center'>
        <img src={logo} alt="logo" className='w-40 h-24'/>
      </div>
      <div className='w-screen h-screen bg-[#E0D0C2] flex justify-center overflow-auto relative'>
        <Link to="/add">
          <div className='w-24 h-24 rounded-full flex justify-center items-center bg-[#84A29F] right-[90px] bottom-[70px] z-10 fixed'>
            <i class="fa-solid fa-plus fa-2xl"></i>
          </div>
        </Link>
        <div className='w-[95vw] h-screen absolute top-3'>
          <div style={{columnCount:5}}>
            <Card size="small"/>
            <Card size="medium"/>
            <Card size="large"/>
            <Card size="small"/>
            <Card size="large"/>
            <Card size="medium"/>
            <Card size="small"/>
            <Card size="medium"/>
            <Card size="large"/>
            <Card size="small"/>
            <Card size="large"/>
            <Card size="medium"/>
            <Card size="medium"/>
            <Card size="large"/>
            <Card size="small"/>
            <Card size="large"/>
            <Card size="medium"/>
            <Card size="small"/>
            <Card size="medium"/>
            <Card size="large"/>
            <Card size="small"/>
            <Card size="large"/>
            <Card size="medium"/>
            <Card size="small"/>
            <Card size="medium"/>
            <Card size="large"/>
            <Card size="small"/>
            <Card size="large"/>
            <Card size="medium"/>
            <Card size="medium"/>
            <Card size="large"/>
            <Card size="small"/>
            <Card size="large"/>
            <Card size="medium"/>
          </div>
        </div>
      </div>
    </div>
  )
}