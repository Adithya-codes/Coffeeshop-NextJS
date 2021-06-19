import React from 'react'

export const Header = () => {
    return (
        <div className='w-full flex justify-between mt-4'>
            <div className='logo'>
                <img src="../images/coffeeIcon.png" className='w-[3rem] xs:pt-1' alt="" />
            </div>
            <div className='hamburger'>
            <button> 
                <img src="../images/menu.png" alt="" className='w-[3rem] xs:pt-1 xs:pr-2' />
                 </button>
            </div>
            
        </div>
    )
}
