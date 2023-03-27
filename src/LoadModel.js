import { OrbitControls,MeshReflectorMaterial } from '@react-three/drei'
import React from 'react'
import { Perf } from 'r3f-perf'
import Model from './Model'
import { Suspense } from 'react'
import { BoxGeometry } from 'three'
import Placeholder from './Placeholder'
import Fox from './Fox'
function LoadModel() {
 

  return (
    <>
    <Perf Position="top-left" />

    <OrbitControls makeDefault />

    <directionalLight castShadow position={ [ 1, 2, 3] } />
    <ambientLight intensity={0.5} />

    {/* <mesh castShadow position-x={-2} >
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
    </mesh> */}

    {/* <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
    </mesh>
 */}
    <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" /> 
    </mesh>
    
    <Suspense fallback={<Placeholder position-y={0.5} scale={[2,3,2]} />} >
    <Model />
    </Suspense>

    <Fox />
    </>
  )
}

export default LoadModel