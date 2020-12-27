import React,{useState} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

const MovieItem = (props) => {
    const [title, setTitle]= useState(false);
     let history=useHistory()
    
    // const apiKey='fd2a4c25ac9eda692e330c4d102133e2'
    const getMovieDetails=()=>{
        // const res = await axios.get(`https://api.themoviedb.org/3/movie/${props.item.id}?api_key=${apiKey}&language=en-US`)
        history.push(`/movies/${props.item.id}`)
        // console.log(res);
        // <input type='button' value='movie' style={{width:'100%', height:'10vh'}} onClick={()=>history.push('/movies/3')}></input>
    }
    return (
        
        <div className='transition duration-500  transform hover:-translate-y-1 hover:scale-110 cursor-pointer  box-border w-40 h-auto bg-opacity-40 bg-gray-600 ease-in-out hover:border-gray-300 border-transparent  hover:bg-gray-300 hover: rounded-md my-6 mx-2 p-1/2 border-2 shadow-md content-center'
         onMouseEnter={()=>setTitle(true)} onMouseLeave={()=>setTitle(false)} onClick={getMovieDetails} >
           {props.item.poster_path? <img  className=' rounded-md w-max hover:text-white' src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`} alt='movie'/>:null}
            {title?<div className='relative text-left'>
                        <label className=' text-gray-300 absolute ml-1 font-bold  text-xs p-1 ' >{`${props.item.title} (${props.item.release_date.slice(0,4)})`}</label>
                     </div>
               :null}            
        </div>
        
    )
}

export default MovieItem
