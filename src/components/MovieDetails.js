import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import MyContext from './myContext'

function MovieDetails() {
    const [movie,setMovie]= useState({});
    const [cast,setCast]= useState([]);
    const [genres,setGenres]= useState([]);
    const [year,setYear]= useState('');
    const [trailerKey,setTrailerKey]= useState('');
    const [showTrailer,setShowTrailer]= useState(false);
    const {id}= useParams();
    let history=useHistory();

    const apiKey='fd2a4c25ac9eda692e330c4d102133e2'
    //movie details
    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        setMovie(res.data);
        setYear(res.data.release_date.slice(0,4));
        setGenres(res.data.genres)

    }, [])

    //movie cast
    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`);
        setCast(res.data.cast.slice(0,5))
    }, [])

    //movie trailer
    useEffect(async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`);
        if(res.data.results[0]){
            setTrailerKey(res.data.results[0].key)
        }
        // console.log(trailerKey);
    }, [])

    const trailer= (<iframe className='rounded-tl-3xl resize'  src={`https://www.youtube.com/embed/${trailerKey}`} frameborder="0" width='100%' height='500' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
        

    return (
        <MyContext.Consumer>
        {
      context=>(
<div className='' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`, backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  
  }}>
      <div className='bg-gray-500 bg-opacity-70 pt-10 cursor-default '>
          {/* <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className=' opacity-50 p-0  '  alt='movie'> */}
              <div className=' text-gray-900 flex flex-wrap  '  >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='  mt-10  w-72 h-96 shadow-2xl mx-10 '   alt='movie'/>
      {showTrailer? (<div className='container bg-black bg-opacity-80 z-10 fixed '>
                <div className=' inset-0 h-4/5 my-10  focus:outline-none'>
                    <input type='button' className=' border-4 cursor-pointer bg-black bg-opacity-70 focus:outline-none absolute text-red-500 border-red-500 font-bold hover:text-red-400 hover:border-red-400  text-xl rounded-full px-3 pb-1 p-1 text-center pt-0 ' value='x' onClick={()=>setShowTrailer(false)}/>
                    {trailer}
                    </div>
                    </div>)
                    :null}
                      
                <div className='mt-10 bg-gradient-to-r from-gray-200 via-gray-300 h-3/4 to-transperent hover:from-gray-100 hover:via-gray-200 bg-opacity-10 hover:bg-opacity-40  p-7 w-96 '>
                    <p className='text-4xl text-gray-900 font-extrabold font-sans mb-2 '> {movie.title} <p className='font-semibold text-2xl'>{year}</p></p>
                    <div class="flex flex-warp divide-x-2 divide-black  w-1/2 -ml-3 mr-5  divide-opacity-40  mb-10 ">
                        {genres.map(genre=><p className='break-words px-3 font-bold '>{genre.name}</p>)}
                    </div>
                    {trailerKey?
                     <input type='button' value='trailer >' className='px-2 mb-5 rounded-full font-bold text-yellow-50 bg-red-700 pb-1 cursor-pointer hover:bg-red-600 text-center focus:outline-none' onClick={()=>setShowTrailer(true)}/>
                     :null}
                    {movie.overview?<p className='h-auto tracking-wide font-semibold text-sm max-w-xl '><header className='font-bold mb-2 text-2xl text-gray-800'>overview</header> {movie.overview}</p>:null}
                </div>
                
            </div >
           {cast.length? <div className='bg-black bg-opacity-70 mt-4'>
                <p className=' bg-black bg-opacity-40 p-2 px-5 text-gray-400 font text-3xl  italic font-bold'>cast</p>
                   <div className='flex flex-warp' >
                       {cast.map(actor=> actor.profile_path?
                  ( <span className=' mx-2 w-40 mt-2 mb-5 opacity-80 text-transparent hover:text-gray-200 text-sm'
                       onClick={()=>history.push(`/actors/${actor.id}`)}>
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}  className=' opacity-70  hover:opacity-100  rounded shadow-2xl'   alt='actor'/>
                         <p className='ml-3 text-xs'>{actor.name}</p>
                    </span>)
                        :null)}</div>
            </div>:null}
            
                   </div>
            {/* </Image> */}
                </div>
                 )
                }
        
          </MyContext.Consumer>
          
    )
}

export default MovieDetails
