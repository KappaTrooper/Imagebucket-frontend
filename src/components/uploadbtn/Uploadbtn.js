
import React from 'react'
import './Uploadbtn.scss'
import {AiFillPlusCircle} from 'react-icons/ai'

export default function Uploadbtn() {
  return (
    <label className='btn-item' htmlFor='file_picker'> 
        <AiFillPlusCircle/>
        <input hidden type='file' name='file_picker' id="file_picker" />
    </label>
  )
}
