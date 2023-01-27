import axios from 'axios';
import { get } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [url,setUrl]=useState("");
  const {id}=useParams();
  const getUrl= async ()=>{
    const {data} =  await axios.get(
      "https://youtube-music-downloader-mp3.p.rapidapi.com/get_download_url",
      {
        params: {id,ext: 'mp3'},
        headers: {
          'X-RapidAPI-Key': '7b5552f346msh1bf0a8823409472p11dae6jsn8ea6f7a20445',
          'X-RapidAPI-Host': 'youtube-music-downloader-mp3.p.rapidapi.com'
        }
      
      }
   
  );
  console.log(data);
  setUrl(data?.result?.download_url);

    }
    useEffect(()=>{
      getUrl();
    },[])
  return (
    <div>
      <a target={"_blank"} href={url} className='text-white bg-blue-700 px-10 py-3 rounded shadow-sm hover:bg-blue-600'>
        Download -{id}
      </a >
    </div>
  )
}

export default Details
