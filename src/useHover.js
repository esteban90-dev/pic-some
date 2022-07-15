import {useState} from 'react';

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return {isHovered, handleMouseEnter, handleMouseLeave}
}