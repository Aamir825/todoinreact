import React from 'react'

function SubmitButton({type}) {
  return (
    <>
        <button
              type={type}
              className=" bg-slate-800 text-white py-2 px-4 border-2 tracking-wider w-full 
              border-slate-800 rounded-md hover:bg-slate-700 duration-200"
            >
              Submit
            </button>
    </>
  )
}

export default SubmitButton