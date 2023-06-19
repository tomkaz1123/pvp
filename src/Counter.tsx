import React, { useState, useEffect } from 'react';

function ScrollCounter() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const scrollDiff = currentScrollPos - prevScrollPos;
      const direction = scrollDiff > 0 ? 'down' : 'up';
      const speed = Math.abs(scrollDiff);
    
      if (currentScrollPos === 0) {
        setCount(0);
      } else if (direction === 'down') {
        setCount((prevCount) => prevCount + speed);
      } else {
        setCount((prevCount) => prevCount - speed);
      }
    
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#ccc',
        padding: '10px',
        borderRadius: '50%',
        fontWeight: 'bold',
        fontSize: '24px',
      }}
    >
      Gylis: {Math.round(count*5)} m.
    </div>
  );
}

export default ScrollCounter