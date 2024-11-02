import React from 'react'
import Navbar from '@/components/Navbar'
import WriteSection from '@/components/WriteSection'

export default function BlogWrite() {
  return (
    <div className='bg-black min-h-screen py-4'>
        <Navbar/>
        <main className='text-white mx-auto w-10/12 pt-28  min-h-screen'>
            <WriteSection/>
        </main>
    </div>
  )
}
