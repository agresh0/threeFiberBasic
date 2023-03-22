// import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Float,Html,TransformControls, OrbitControls,PivotControls,Text, MeshReflectorMaterial } from "@react-three/drei";
import CustomObject from "./CustomObject";
// import Cube from "./Cube";
import { useControls, button } from "leva";

console.log(CustomObject);
// extend({ OrbitControls });
export default function Experience() {
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

  // useFrame((state, delta) => {
  // cubeRef.current.rotation.y += delta;
  // groupRef.current.rotation.y -= 0.1
  // });
  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <OrbitControls enableDamping={false}  makeDefault/>

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
      <PivotControls 
      anchor={[0,0,0]}
      depthTest={false}
      lineWidth={4}
      >
      <mesh position={[position.x, position.y, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
        {/* <Cube scale={2} /> */}
      </PivotControls>
       

        <mesh position-x={1.5}  scale={scale } ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <TransformControls object={cubeRef} mode="translate"/>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
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
      </mesh>
      <Float>
      <Text 
      fontSize={1}
      color="salmon"
      maxWidth={2}
      position-y={1}
      >Text </Text>
      </Float>


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
