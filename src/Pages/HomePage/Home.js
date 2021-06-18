import React from 'react';
import HeroSection from '../../sections/Hero/HeroSection';
import Pricing from '../../sections/Pricing/Pricing';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';

function Home() {
   return (
      <>
         <HeroSection {...homeObjOne} />
         <HeroSection {...homeObjThree} />
         <HeroSection {...homeObjTwo} />
         <Pricing />
         <HeroSection {...homeObjFour} />
      </>
   );
}

export default Home;
