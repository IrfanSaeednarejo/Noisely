import React from 'react'
import Navbar from './Navbar.jsx'
import { albumsData } from '../assets/frontend-assets/assets.js'
import AlbumItem from './AlbumItem.jsx'
const DisplayHome = () => {
  return (
    <>
        <Navbar/>

        <div className='my-5 font-bold text-2xl'>
          {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
        </div>


    </>
  )
}

export default DisplayHome