import React from 'react'

function TextInput({value,placeholder,onChange}) {
  return (
    <>
        <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className=" border-2 border-gray-50 py-2 px-3 outline-none w-full bg-white shadow-md"
            />
    </>
  )
}

export default TextInput