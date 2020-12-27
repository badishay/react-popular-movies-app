import React from 'react'
import { useHistory} from 'react-router-dom'
import Searchbar from './Searchbar'
import MyContext from './myContext'

const Navbar = () => {
    let history=useHistory()
    return (
        <MyContext.Consumer>
        {
      context=>(
        <div className='cursor-pointer  bg-gray-700'>
            <p className='uppercase  text-gray-300 font-mono text-3xl font-bold p-4' 
            onClick={
                ()=>{
                context.restart()
                history.push('/')
            }
                }>popular movies</p>
            <Searchbar/>
            
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Navbar
