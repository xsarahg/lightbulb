import React, { useContext } from 'react';
import { LightContext } from '../context/LightProvider';

// LET OP: Dit component is enkel toegevoegd omdat ik het leuk vond een echt lampje te integreren
// Het bevat vrij ingewikkelde CSS - dit zul je nog niet begrijpen. En dat is ook niet erg.
// Het is daaorm meer bedoeld als inspiratie voor wat er allemaal mogelijk is ;) 
const LightBulb = () => {
  const { lightStatus } = useContext(LightContext);

  return (
    <div className="frame">
      <div className="center">
        <div className={ lightStatus ? 'light' : 'dark'}></div>
        <svg width="76px" height="94px" viewBox="0 0 76 94" id="bulb" onclick="void(0);">
          <path d="M76,37.037 C76,59.939 55.6428571,75.427 55.6428571,93.5 L20.3571429,93.5 C20.3571429,75.427 0,59.9335 0,37.037 C0,13.1505 18.9891429,0 37.9782857,0 C56.9891429,0 76,13.167 76,37.037 L76,37.037 Z"></path>
        </svg>
        <svg width="32px" height="33px" viewBox="0 0 32 33" id="base">
          <path d="M29.3333333,0 L2.66666667,0 C1.19466667,0 0,1.232 0,2.75 C0,4.268 1.19466667,5.5 2.66666667,5.5 L29.3333333,5.5 C30.8053333,5.5 32,4.268 32,2.75 C32,1.232 30.8053333,0 29.3333333,0 L29.3333333,0 Z M29.3333333,11 L2.66666667,11 C1.19466667,11 0,12.232 0,13.75 C0,15.268 1.19466667,16.5 2.66666667,16.5 L29.3333333,16.5 C30.8053333,16.5 32,15.268 32,13.75 C32,12.232 30.8053333,11 29.3333333,11 L29.3333333,11 Z M30.6666667,22 L1.33333333,22 L9.072,31.1245 C10.0853333,32.3125 11.552,33 13.088,33 L18.9173333,33 C20.4533333,33 21.9146667,32.3125 22.928,31.1245 L30.6666667,22 L30.6666667,22 Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default LightBulb;