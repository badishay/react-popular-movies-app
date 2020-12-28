import React, {useState} from 'react'
import MyContext from './myContext'

function Searchbar(props) {
    const [inputFiled, setInputFiled] = useState('')
    return (
        <MyContext.Consumer>
              {
            context=>(
        <div className=' rounded-xl w-1/4 bg-white  '>
            <input type="text" className='bg-transperent rounded-xl  text-xl w-max  focus:outline-none focus:placeholder-gray-300 ' placeholder='search for movies' value={inputFiled} onChange={e=>setInputFiled(e.target.value)} onKeyDown={e=>e.key==='Enter'?context.callback(inputFiled):null}/>
            {inputFiled?<input type='button' value='X' className={'text-sm border-gray-500 focus:outline-none border-2 font-bold bg-opacity-50 text-gray-500 object-right bg-white rounded-3xl px-1 opacity-70'} 
            onClick={()=>{
                context.restart();
                setInputFiled('')
            }
                }/>: null}
        </div>
         )
        }

  </MyContext.Consumer>
    )
}

export default Searchbar
