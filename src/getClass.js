export function getClass(i) {
  // every 5th image make big
  if (i % 5 ===0) {
    return 'gallery__imageContainer--big'
  }

  // every 6th image make tall
  else if (i % 6 ===0) {
    return 'image__imageContainer--tall'
  }
}