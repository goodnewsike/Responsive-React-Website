import React from 'react';
import HeroSection from '../../sections/Hero/HeroSection';
import Pricing from '../../sections/Pricing/Pricing';
import {homeObjOne} from './Data';

function Services() {
   return (
      <>
         <Pricing />
         <HeroSection {...homeObjOne} />
      </>
   );
}

export default Services;
