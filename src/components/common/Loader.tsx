import React from 'react'
import {FaSpinner} from 'react-icons/fa'
export default function Loader() {
  return (
    <div className='flex justify-center items-center h-15' data-testid="loading-element">
        <FaSpinner className="animate-spin text-50px text-primary" />
    </div>
  )
}
