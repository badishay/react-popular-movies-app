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
        <div>
        {props.item.poster_path?(<div className='relative my-7 mx-5 w-52 h-80  transition duration-500  transform hover:-translate-y-1 hover:scale-110 cursor-pointer  bg-gray-600 ease-in-out   rounded-lg  p-1/2 shadow-md content-center' 
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${props.item.poster_path})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
        }} onMouseEnter={()=>setTitle(true)} onMouseLeave={()=>setTitle(false)} onClick={getMovieDetails}>
        {/* <div className='transition duration-500   transform hover:-translate-y-1 hover:scale-110 cursor-pointer  box-border   bg-opacity-40 bg-gray-600 ease-in-out hover:border-gray-300 border-transparent  hover:bg-gray-300 hover: rounded-md my-6 mx-2 p-1/2 border-2 shadow-md content-center'
         >
           {props.item.poster_path? <img  className=' rounded-md w-max hover:text-green-500' src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`} alt='movie'/>:null}
                        </div> */}
            {title?<div className='absolute inset-x-0 bottom-0 text-left h-1/5 bg-black bg-opacity-80 border-b rounded-b-lg border-gray-300 '>
                        <p className=' text-gray-200 absolute ml-1 font-bold  text-sm pt-3 p-1' >{`${props.item.title} (${props.item.release_date.slice(0,4)})`}</p>
                     </div>
               :null}            
     </div>):null}  
     </div> 
    )
}

export default MovieItem
