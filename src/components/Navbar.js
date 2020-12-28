import React from 'react'
import { useHistory} from 'react-router-dom'
import MyContext from './myContext'

const Navbar = (props) => {

    let history=useHistory()
    return (
        <MyContext.Consumer>
        {
      context=>(
        <div className=' p-2 bg-black pb-8  '>
            <div onClick={
                ()=>{
                context.restart()
                history.push('/')
            }
                }><p className='text-red-800 border-solid border-2 border-red-800 hover:text-red-600 hover:border-red-600  border-l-0 text-center py-1 bg-red-50 rounded-r-full  my-5 w-72 italic font-bold text-2xl font-serif cursor-pointer'>my movies app</p>
                </div>
           
            
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Navbar
