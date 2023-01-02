import React, { useState } from 'react'
import './App.css'

function App() {
  const [typed, setTyped] = useState<string>('')
  const [typedList, setTypedList] = useState<string[]>([])
  const updateExistingText = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    typedList[index] = e.target.value
    setTypedList([...typedList])
  }
  const handleButtonClick = () => {
    if (typed !== '') {
      setTypedList([...typedList, typed])
      console.log(typedList)
      setTyped('')
    }
  }

  return (
    <div className='App'>
      <div className='flex'>
        <div className='flex justify-between mx-auto my-auto h-300 p-10 text-5x w-50'>
          <textarea
            className='textarea min-w-sm w-96  max-h-56 max-w-screen-sm rounded-box shadow-lg'
            style={{ minHeight: '8rem' }}
            placeholder='Type...'
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
          ></textarea>
          <button className='btn glass btn-sm' onClick={handleButtonClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#000000'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='12' y1='5' x2='12' y2='19'></line>
              <line x1='5' y1='12' x2='19' y2='12'></line>
            </svg>
          </button>
        </div>
      </div>
      <div className='border-t-2 border-dashed border- border-black'></div>
      <div className='grid grid-cols-4 gap-4 p-10'>
        {typedList.map((item, index) => {
          return (
            <div key={index} className='mx-auto'>
              <textarea
                key={index}
                className='textarea min-w-sm w-96 max-h-56 max-w-screen-sm rounded-box shadow-lg'
                value={item}
                style={{ minHeight: '8rem' }}
                onChange={(e) => updateExistingText(e, index)}
              ></textarea>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
