import axios from 'axios'
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const HomePage = () => {

  const [name,setName]=useState(null);
  const [songs,setSongs]=useState([]);
  const getSongs=async()=>{
const {data}= await axios.get(
 "https://youtube-music-downloader-mp3.p.rapidapi.com/v2/search",
 {
  params: {query:  `${name}`},
  headers: {
    'X-RapidAPI-Key': '7b5552f346msh1bf0a8823409472p11dae6jsn8ea6f7a20445',
    'X-RapidAPI-Host': 'youtube-music-downloader-mp3.p.rapidapi.com'
  }

 }
)
setSongs(data?.result?.songs);
//console.log(data?.result?.songs);

  }
 useEffect(()=>{
  getSongs();
 },[name])
  return (

    <>
      <div className="container mx-auto">
        <input type="text" className='border-b-2 border-gray-500 outline-none p-2 '
        placeholder='search By artist' 
        //value={name}
         onChange={debounce(e=> setName(e.target.value),1000)} />
        <div className="flex flex-wrap gap-5 justify-center my-5">
        {
          songs?.map((song)=> (<Card key={song?.id} song={song}></Card>))
         }
        </div>
      </div>
    </>
  )
}

export default HomePage
