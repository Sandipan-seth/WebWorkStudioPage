import Footer from '@/components/HomeComponents/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import bg from '../assets/bg.jpg';
import Blogscomponent from '@/components/Blogscomponent/Blogscomponent';

const Blogs = () => {
    const bgStyle = {
        backgroundImage: `url(${bg})`,
    };
    return (
        <div style={bgStyle}>
            <Navbar />
            <Blogscomponent/>
            <Footer />
        </div>
    )
}

export default Blogs
