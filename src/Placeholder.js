import React from 'react'

function Placeholder(props) {
  return (
    <>

    <mesh  {...props}
    position-rotateY={.5}
     scale={[1,2,3]} >
        <boxGeometry args={[1,1,1,2,2,2,]} />
        <meshBasicMaterial wireframe color='red' />
        </mesh>

    </>
  )
}

export default Placeholder