import { useBox } from "@react-three/cannon";
import React from "react";
import * as textures from "../images/textures.jsx";
import { NearestFilter, RepeatWrapping } from "three";
const Cube = ({ position, texture }) => {
  const [reference] = useBox(() => ({
    type: "Static",
    position,
  }));
  const activeTexture = textures[texture + "Texture"];

  console.log(texture);
  return (
    <mesh ref={reference}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};

export default Cube;
