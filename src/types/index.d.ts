declare module '*.jpg';
declare module '*.png';
declare module '*.module.css';
// declare module '*.module.scss';
// declare module '*.css';
declare module '*.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
// declare module '*.scss' {
//   const classes: { readonly [key: string]: string };
//   export default classes;
// }
declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}
