import React from 'react'
import './home.css'
import ChatBot from './ChatBot'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"
import Hsection1 from './Hsection1'
import Features from './Features'
import Experts from './Experts'
import Footer from './Footer'


function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hsection1></Hsection1>
      <Features></Features>
      <Experts></Experts>
      <Footer></Footer>
      <div className='chat-assist'>
        
        <ChatBot/>
    </div>
    </>
    
  )
}

export default Home