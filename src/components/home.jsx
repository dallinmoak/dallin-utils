import React, {useEffect } from 'react';

export default function Home(){

  useEffect(() => {
    document.title = "D Utils Home";
  }, []);

  return (
    <div>
      Home
    </div>
  );
}