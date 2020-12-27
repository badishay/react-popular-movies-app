import React from 'react'
import { useHistory} from 'react-router-dom'
import Searchbar from './Searchbar'
import MyContext from './myContext'

const Navbar = (props) => {

    let history=useHistory()
    return (
        <MyContext.Consumer>
        {
      context=>(
        <div className='cursor-pointer p-2 bg-gradient-to-b from-black via-gray-900 to-gray-800 '>
            <p className='uppercase text-red-100 text-center tracking-widest  font-extrabold text-3xl p-4' 
            onClick={
                ()=>{
                context.restart()
                history.push('/')
            }
                }>{props.header}</p>
            <Searchbar />
            
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Navbar
