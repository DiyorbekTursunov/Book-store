"use client"
//components
import Footer from '@/components/ui_elements/footer'
import Navbar from '@/components/ui_elements/navbar'
import { useParams } from 'next/navigation'
import React from 'react'



export default function Page() {
  const { slug } = useParams<{ slug: [] }>()



  return (
    <>
      <Navbar />
      <main className='max-w-[1440px] mx-auto p-3 mt-12'>
        
      </main>
      <Footer />
    </>
  )
}
