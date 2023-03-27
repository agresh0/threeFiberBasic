// import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {  Sky, ContactShadows,AccumulativeShadows ,softShadows,Float,Html,TransformControls, OrbitControls,PivotControls,Text, MeshReflectorMaterial, BakeShadows, Environment } from "@react-three/drei";
import CustomObject from "./CustomObject";
// import Cube from "./Cube";
import { useControls, button } from "leva";
import *as THREE from 'three'
// import { useHelper } from "@react-three/drei";
console.log(CustomObject);
// extend({ OrbitControls });

// softShadows({
//   frustum: 3.75,
//   size: 0.05,
//   near:9.5,
//   samples:17,
//   rings:17
// })

export default function Experience() {

const directionalLight = useRef()
// useHelper(directionalLight, THREE.DirectionalLightHelper,1)

  // const { camera, gl } = useThree();
  const cubeRef = useRef();
  const groupRef = useRef();

  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
    color: "#ff0000", 
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {
      alert("button clicked");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  const { scale } = useControls("cube", {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });
  console.log(position);

  useFrame((state, delta) => {
  cubeRef.current.rotation.y += delta;
  // groupRef.current.rotation.y -= 0.1
  });

  const { coluor, opacity, blur} = useControls('contact shadows',{
    color:'#1d8f75',
    opacity: { value:0.5,min:0,max:1},
    blur:{ value:1, min:0, max:10 }
    
  })

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [ 1,2,3]}
  })

  return (

   
    <>
      
   
    
    {/* <BakeShadows /> */}

     <color args={ ['ivory'] } attach='background'/>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <OrbitControls enableDamping={false}  makeDefault/>
   
    <ContactShadows
    position={[0,-0.99,0]}
    scale={10}
    resolution={512}
    far={5}
    color={color}
    opacity={opacity}
    blur={blur}
    frames={1}
    />
 
      {/* <directionalLight 
      ref={ directionalLight}  
      castShadow position={sunPosition} 
      intensity={1.5} 
      shadow-mapSize={[ 1024, 1024]}
      shadow-camera-near={1}
      shadow-camera-far={10}
      shadow-camera-top={5}
      shadow-camera-right={5}
      shadow-camera-bottom={-5}
      shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />
      <Sky sunPosition={ sunPosition }/>
 */}
      <group ref={groupRef}>
      {/* <PivotControls 
      anchor={[0,0,0]}
      depthTest={false}
      lineWidth={4}
      > */}
      <mesh castShadow position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
        {/* <Cube scale={2} /> */}
      {/* </PivotControls> */}
       

        <mesh castShadow position-x={1.5}  scale={scale } ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={cubeRef} mode="translate"/>
      </group>

      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        {/* creat dim reflection */}
        <MeshReflectorMaterial
        resolution={512}
        blur={[1000,1000]}
        mixBlur={1}
        mirror={0.75}
        color="greenYellow"
        />
{/* TO WRITE TEXT */}

      </mesh>
      {/* <Float>
      <Text 
      fontSize={1}
      color="salmon"
      maxWidth={2}
      position-y={1}
      >Text </Text>
      </Float>

 */}
      <CustomObject />

      

      
      <Html
      position={[1,1,0]}
      wrapperClass="label"
      center
      distanceFactor={6}
      >
        This is sphere
      </Html>
    </>
  );
}
