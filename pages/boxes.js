// import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import blogcard from '../components/cards/blogcard';
import First from '../components/First';
import Second_sec from '../components/Second_sec';
import Blog from '../components/Blog';
import BlogDetails from '../components/BlogDetails';


const boxes = () => {


  return (
    <div>
      <Navbar />
      <First />
      <Second_sec />
      <Blog />
      <BlogDetails />
    </div>



  );
}

export default boxes;


