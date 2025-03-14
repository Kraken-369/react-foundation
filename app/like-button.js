'use client';

import { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button onClick={handleClick}>Likes ({likes})</button>
  );
}

export default LikeButton;