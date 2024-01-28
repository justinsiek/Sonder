import React from 'react';
import Card from './Card';
import logo from './assets/logo.png';

export default function Feed() {
  return (
    <div>
      <div className='w-screen h-24 bg-slate-100 flex justify-center items-center'>
        <img src={logo} alt="logo" className='w-40 h-24'/>
      </div>
      <div className='w-screen h-screen bg-slate-300 flex justify-center overflow-auto relative'>
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