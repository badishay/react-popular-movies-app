import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import MovieItem from './MovieItem'


function ActorDetails() {
    const [actor,setActor]= useState({})
    const [credits, setCredits] = useState([])
    const {id} =useParams()
    const apiKey='fd2a4c25ac9eda692e330c4d102133e2'
    const date =new Date();
    console.log(date.toLocaleDateString());

    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`)
        console.log(res.data);
        setActor(res.data);
    }, [])
    
    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`)
        console.log(res.data);
        setCredits(res.data.cast);
    }, [])

    return (
        <div className=' bg-galaxy container'>
            <div className='  flex flex-wrap justify-center pb-8 bg-white shadow-inner bg-opacity-80 pt-24 mx-10'>
                <div className=' mx-10 w-60 '>
                    <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
                    <h1 className='font-bold text-3xl mt-3 mb-5'>{actor.name}</h1>
                </div>
                {actor.biography?<div className='w-2/3 px-1'>
                    <h1 className='font-bold text-lg mb-2'>biography</h1>
                    <div className='' >{actor.biography}</div>
                </div>:null}
           </div>
           <div className='uppercase cursor-default sticky top-14 z-10  w-full text-center tracking-widest bg-gray-900 bg-opacity-80 font-thin  text-xl   p-2' >
                    <p className='text-gray-400'>movies <label className='text-red-500'>{actor.name}</label> played in</p>
            </div >
           <div className='  flex flex-wrap justify-center  ' >
                    {credits.map((item)=><MovieItem  key={item.id} item={item} />)}
                </div>
        </div>
    )
}

export default ActorDetails
