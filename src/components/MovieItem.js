import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import MyContext from './myContext'

const MovieItem = (props) => {
    const [title, setTitle]= useState(false);
     let history=useHistory();

     
    return (

        <MyContext.Consumer>
        {
      context=>(

        <div>
          
        {props.item.poster_path?(<div className=' my-6 mx-3 w-52 h-80 bg-scroll transition duration-500  transform hover:-translate-y-1 hover:scale-110 cursor-pointer  bg-gray-600 ease-in-out   rounded-lg  p-1/2 shadow-md content-center'
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${props.item.poster_path})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
        }} onMouseEnter={()=>setTitle(true)} onMouseLeave={()=>setTitle(false)} 
        onClick={()=>{
          history.push(`/movies/${props.item.id}`);
          // context.callback('');
          //  context.restart()
          }}>
       
            {title?<div className='absolute inset-x-0 bottom-0 text-left h-1/5 bg-black bg-opacity-80 border-b rounded-b-lg border-gray-300 '>
                        <p className=' text-gray-200 absolute ml-1 font-bold  text-sm pt-3 p-1' >{`${props.item.title} (${props.item.release_date.slice(0,4)})`}</p>
                     </div>
               :null}            
     </div>):null} 
     
     </div> 
         )
        }

  </MyContext.Consumer>
      )
}

export default MovieItem
