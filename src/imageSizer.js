export function imageSizer() {
  // return one of these randomly chosen classes 

  const classes = [
    'image__container',
    'image__container--big',
    'image__container--tall'
  ]

  return classes[parseInt(Math.random() * classes.length)];
}