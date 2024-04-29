import { color } from 'framer-motion'
import state from '../store'
import React from 'react'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({type,title,customStyles,handleClick}) => {

    const generateStyle = (type) =>{
        const snap = useSnapshot(state);

        if(type === "filled"){
            return{
                backgroundColor:snap.color,
                color:snap.color==="#fff"?"#000" : getContrastingColor(snap.color)
            }
        }else if(type === "outline"){
            return {
                borderWidth:"1px",
                borderColor:snap.color,
                color :snap.color
            }
        }
    }
  return (
    <button
        className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
        style={generateStyle(type)}
        onClick={handleClick}>
            {title}
    </button>
  )
}

export default CustomButton
