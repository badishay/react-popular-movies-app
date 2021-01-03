import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import MovieItem from './MovieItem'


function ActorDetails() {
    const [actor,setActor]= useState({})
    const [credits, setCredits] = useState([])
    const {id} =useParams()
    const apiKey='fd2a4c25ac9eda692e330c4d102133e2'

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
        <div className='pt-20'>
            <div className='  flex flex-wrap justify-center px-2'>
                <div className='w-1/5 mr-20'>
                    <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
                    <h1 className='font-bold text-3xl my-2'>{actor.name}</h1>
                </div>
                <div className='w-1/2'>
                    <h1 className='font-bold text-lg'>biography</h1>
                    <p >{actor.biography}</p>
                </div>
           </div>
           <div className='  flex flex-wrap justify-center px-2 pt-10' >
                    {credits.map((item,index)=><MovieItem  key={item.id} item={item} />)
                     }
                </div>
        </div>
    )
}

export default ActorDetails
