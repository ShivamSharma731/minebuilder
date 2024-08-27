import { useBox } from "@react-three/cannon";
import React from "react";
import * as textures from "../images/textures.jsx";
import { NearestFilter, RepeatWrapping } from "three";
import useStore from "../hooks/useStore.jsx";
const Cube = ({ position, texture }) => {
  const [reference] = useBox(() => ({
    type: "Static",
    position,
  }));
  const activeTexture = textures[texture + "Texture"];
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const faceIndex = Math.floor(e.faceIndex / 2); // if we want to add block by clicking on the block
        const { x, y, z } = reference.current.position;
        if (e.altKey) {
          removeCube(x, y, z);
          return;
        } else if (faceIndex === 0) {
          addCube(x + 1, y, z);
          return;
        } else if (faceIndex === 1) {
          addCube(x - 1, y, z);
          return;
        } else if (faceIndex === 2) {
          addCube(x, y + 1, z);
          return;
        } else if (faceIndex === 3) {
          addCube(x, y - 1, z);
          return;
        } else if (faceIndex === 4) {
          addCube(x, y, z + 1);
          return;
        } else if (faceIndex === 5) {
          addCube(x, y, z - 1);
          return;
        }
      }}
      ref={reference}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};

export default Cube;
