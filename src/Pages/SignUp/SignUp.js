import React from 'react';
import HeroSection from '../../sections/Hero/HeroSection';
import {homeObjThree} from './Data';

function SignUp() {
   return (
      <>
         <HeroSection {...homeObjThree} />
      </>
   );
}

export default SignUp;
