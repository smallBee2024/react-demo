// import { memo } from 'react'
// interface MyComponentProps {
//   onClick?: () => void;
// }

// export default function Child ({ onClick }: any) {

//   console.log('Child rendered');
//   return <button onClick={onClick}>Click me</button>;
// }

import React from 'react';

const Child = React.memo(({ onClick }: any) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});

export default Child