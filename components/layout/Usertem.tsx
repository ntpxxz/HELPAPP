import React from 'react'

export default function UserItem() {
  return (
    <div className='flex items-center justify-center gap-2 border rounded-8 p-2'>
    <div className="avatar rounded-full min-h-10 min-w-10  bg-sky-300 text-white font-[700] flex items-center justify-center" >

    </div>
    <div>
        <p className='text-[16px] font-bold'>Sample User</p>
        <p className=' text-[12px] text-neutral-500'>Sample@gmail.com</p>
    </div>
    </div>
  )
}
