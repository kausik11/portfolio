import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Bigfront.css';

const Bigfront = () => {
  useEffect(() => {
    const typedOptions = {
      strings: [
        'Web developer 🔥',
        'Front end developer 💥',
        'MCA Student 📗',
        "React Developer ⚛️"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed('.typed-output', typedOptions);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='bigfront'>
      <h3>Hello!👋  I'm</h3>
      <h2>Kausik Saha</h2>
      <div className='type-container'>
        <h1>
          And I'm a <span className='typed-output'></span>
        </h1>
      </div>
    </div>
  );
};

export default Bigfront;
