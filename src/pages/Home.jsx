import React from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';
import Header from '../components/Header';
import img1 from '../assets/yoga_asans/asan1.jpeg'
import img2 from '../assets/yoga_asans/asan2.jpeg'
import img3 from '../assets/yoga_asans/asan3.jpeg'
import img4 from '../assets/yoga_asans/asan4.jpeg'
import img5 from '../assets/yoga_asans/asan5.jpeg'

const Home = () => {
  const imageFiles = [img1, img2, img3, img4, img5];

  return (
    <>
      <Navbar />
      <Header />
      <Box style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {imageFiles.map((image, index) => (
          <img
            key={index}
            src={`${image}`}
            alt={`Asan ${index + 1}`}
            style={{width:'500px', margin:'20px'}}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
