import './App.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three' 
import Experience from './Experience';
import LoadModel from './LoadModel';
import Model from './Model';

function App() {



  return (
  
      <Canvas
      shadows ={false}
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position: [ -4,3,6 ]
      }}
      >
        {/* <Experience /> */}
        <LoadModel />
      </Canvas>

  );
}

export default App;
