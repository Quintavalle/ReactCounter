import React, { useState, useRef, useEffect } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const changeDirectionRef = useRef(null);
  const prevChangeDirectionRef = useRef(null);

  useEffect(() => {
    if (count > initialValue) {
      changeDirectionRef.current = 'up';
    } else if (count < initialValue) {
      changeDirectionRef.current = 'down';
    } else {
      changeDirectionRef.current = null;
    }

    // Print value of ref only when it's different from the previous value
    if (changeDirectionRef.current !== prevChangeDirectionRef.current) {
      console.log('Change direction:', changeDirectionRef.current);
      prevChangeDirectionRef.current = changeDirectionRef.current;
    }
  }, [count, initialValue]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>Count: {count}</div>
    </div>
  );
};

export default Counter;
