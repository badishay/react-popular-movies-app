import React from 'react'
import { useHistory} from 'react-router-dom'
import MyContext from './myContext'

const Navbar = (props) => {

    let history=useHistory()
    return (
        <MyContext.Consumer>
        {
      context=>(
        <div className=' py-3  bg-black  w-full z-20 fixed '>
            <div onClick={
                ()=>{
                context.restart()
                history.push('/')
            }
                }><p className='text-red-900 border-solid border-4 border-red-900 hover:text-red-600 hover:border-red-600  border-l-0  text-center py-1 bg-red-50 rounded-r-full w-56 italic font-bold text-xl font-sans tracking-wide  cursor-pointer'>my movies app</p>
                </div>
           
            
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Navbar
