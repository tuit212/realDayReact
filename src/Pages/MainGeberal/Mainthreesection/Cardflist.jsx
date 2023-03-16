import React from 'react'
import {dataList} from '../../MainGeberal/Mainthreesection/cardData'
import { useEffect,useState } from 'react' 
import Box  from './box'
function Cardflist() {
    let [state,setState] = useState([])
    
    
    useEffect(() =>{
    
    let gwt=() => {

    setState(dataList)    
    }
        gwt()
    },[])
    
  return (
    <div className='Cardflist'>
        {state.map((res) => {
            return <Box key={res.id} user={res} style={{display:"flex"}}/>
        })
            
        }
    </div>
  )
}

export default Cardflist