import React from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';

const customStyle = {
    fontWeight: "bold",
    fontSize: "2rem"
}

const Span = styled.span`
      @media (max-width: 640px)  {
        font-size: 1.5rem;
} 
`
export function MyTypedComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Chicken ?', 'Fish ?','Panner ?'],
      typeSpeed: 50,
      backSpeed:100,
      loop:true,
      showCursor: false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
      <Span style={customStyle} ref={el} />
  );
}