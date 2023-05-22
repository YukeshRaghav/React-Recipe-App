import React from 'react';
import Typed from 'typed.js';

const customStyle = {
    fontWeight: "bold",
    fontSize: "2rem"
}
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
      <span style={customStyle} ref={el} />
  );
}