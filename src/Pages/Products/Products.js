import React from 'react';
import HeroSection from '../../sections/Hero/HeroSection';
import Pricing from '../../sections/Pricing/Pricing';
import {homeObjTwo} from './Data';

function Products() {
   return (
      <>
         <HeroSection {...homeObjTwo} />
         <Pricing />
      </>
   );
}

export default Products;
