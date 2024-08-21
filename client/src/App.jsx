import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./components/ground";
import Player from "./components/Player";
import FirstPersonView from "./components/FirstPersonView";
import "./App.css";
function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1.5} />
        <FirstPersonView />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="cursor">+</div>
    </>
  );
}

export default App;
