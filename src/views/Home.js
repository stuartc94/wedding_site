import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Story from '../components/sections/Story';
import Info from '../components/sections/Info';
import Registry from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Story />
      <Info invertMobile topDivider imageFill className="illustration-section-02" />
      <Registry topDivider />
    </>
  );
}

export default Home;