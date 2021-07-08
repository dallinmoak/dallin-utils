import React, { useEffect } from 'react';

export default function UrlBuilder(){
  useEffect(() => {
    document.title = "D Utils | Url Builder";
  }, []);

  return (
    <div>
      URL Builder
    </div>
  );
}