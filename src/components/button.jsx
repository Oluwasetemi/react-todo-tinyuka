import React from 'react'

function Button ({children, onClick, color}) {
    return (
        <button  className="ml-2 bg-btnBg hover:bg-btnHover px-[25px] py-[5px] mt-[20px] text-gray-700 rounded mb-[20px] font-semibold"  type="submit" onClick={onClick}>
        {children}
      </button>
    )
}

export default Button


// style={{backgroundColor: `${color}`}}