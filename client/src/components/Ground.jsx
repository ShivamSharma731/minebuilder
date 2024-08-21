import { usePlane } from "@react-three/cannon";
import { grassTexture } from "../images/textures";
import React from "react";
import { NearestFilter, RepeatWrapping } from "three";

const Ground = () => {
  const [reference] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));
  grassTexture.magFilter = NearestFilter;
  grassTexture.wrapS = RepeatWrapping;
  grassTexture.wrapT = RepeatWrapping;
  grassTexture.repeat.set(100, 100);

  return (
    <>
      <mesh ref={reference}>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" map={grassTexture} />
      </mesh>
    </>
  );
};

export default Ground;
