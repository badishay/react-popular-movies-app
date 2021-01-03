import React, {useState,useEffect} from 'react'
import MovieItem from './MovieItem'
import MyContext from './myContext'

import axios from 'axios'
// PopularMovies component
// holds the base to show the popular movies 

const PopularMovies = (props) => {
   
  
    
    
    return (<MyContext.Consumer>
        {
      context=>(
        
            <div className='bg-galaxy min-h-screen ' >
                
                <div className='uppercase fixed mt-14 cursor-default z-10 w-full text-center tracking-widest bg-black bg-opacity-80 font-thin  text-xl  pb-3' >
                    <p className='text-red-500 '>{context.header}</p>
            </div >
                <div className='  flex flex-wrap justify-center  pt-20 px-2' >
                    {context.items.map((item,index)=><MovieItem  key={item.id} item={item} id={index} />)
                     }
                </div>
                {/* <div className='flex justify-center'>  
                    <input type='button' value='load more'
                     className='cursor-pointer w-1/2 h-14 mb-10 tracking-widest rounded opacity-70 bg-gray-700 text-gray-400 mt-1 uppercase hover:bg-gray-400 hover:text-gray-700 font-bold text-2xl focus:outline-none '
                     onClick={()=>context.morePage()}/>
                </div> */}
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default PopularMovies


