"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter, redirect } from 'next/navigation'


function CreatePostPage() {
    const [case_id, setCaseId] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [section, setSection] = useState("");
    const [eq_name, setEqname] = useState("");
    const [detail, setDetail] = useState("");
    const [status, setStatus] = useState("")
    const [img, setImg] = useState("");
   

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!case_id  || !date || !name || !section || !eq_name || !detail || !status || !img) {
            alert("Please complete all inputs.");
            return;      
        }

        try {
            const res = await fetch("http://localhost:3000/api/cases", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ case_id, date, name, section, eq_name, detail, status, img })
            })

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to create a post");
            }

        } catch(error) {
            console.log(error);
        }
    }

  return (
    <div className='container mx-auto py-10'>
        <h3 className='text-3xl font-bold'>Create Cases</h3>
        <hr className='my-3' />
        <Link href="/" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go back</Link>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setCaseId(e.target.value)} type="text" className='w-[300px] block bg-gray-200 border py-4 px-4 rounded text-lg my-4' placeholder='Post CaseID' />
            <input onChange={(e) => setDate(e.target.value)} type="date" className='w-[300px] block bg-gray-200 border py-4 px-4 rounded text-lg my-4' placeholder='Post Date' />
            <input onChange={(e) => setName(e.target.value)} type="text" className='w-[300px] block bg-gray-200 border py-4 px-4 rounded text-lg my-4' placeholder='Post Requestor' />
            <input onChange={(e) => setSection(e.target.value)} type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post Section' />
            <input onChange={(e) => setEqname(e.target.value)} type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post Computer Name' />
            <textarea onChange={(e) => setDetail(e.target.value)} className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Enter your Detail'></textarea>
            <input onChange={(e) => setStatus(e.target.value)} type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post Status' />
            <input onChange={(e) => setImg(e.target.value)} type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2' placeholder='Post img url' />            
            <button type='submit' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2'>Create Post</button>
        </form>
    </div>
  )
}

export default CreatePostPage