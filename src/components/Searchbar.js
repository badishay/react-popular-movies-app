import React from 'react'
import MyContext from './myContext'

function Searchbar(props) {
    return (
        <MyContext.Consumer>
              {
            context=>(
        <div className='h-12 rounded-xl w-1/4 bg-white '>
            <input type="text" className='bg-transperent rounded-xl h-10 p-1 text-xl w-max  focus:outline-none focus:placeholder-gray-300 pl-5' placeholder='search for movies' value={context.text} onChange={e=>context.callback(e.target.value)}/>
            <input type='button' value='X' className={context.text?'text-sm border-green-500 border font-bold text-green-600 object-right bg-white rounded-3xl px-1 opacity-70':'hidden'} onClick={()=>context.restart()}/>
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Searchbar
