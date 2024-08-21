import React, { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { Vector3 } from "three";
import { useKeyBoard } from "../hooks/useKeyboard";

const Player = () => {
  const actions = useKeyBoard(); // this will get the keyboard inputs by user for player movement

  const { camera } = useThree();
  const [reference, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  const pos = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]); // this changes the position of pos as the player move , so its a position tracker of
  // the player and this will be used in the useFrame below to move the camera according to the player pos

  const vel = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );

    // now we will do the other movements of player
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (actions.moveBackward ? 1 : 0) - (actions.moveForward ? 1 : 0) // this is if user pressed both forward and backward , then this code will cancel out the movement and stops the player
    );
    const sideVector = new Vector3(
      (actions.moveLeft ? 1 : 0) - (actions.moveRight ? 1 : 0),
      0,
      0
    );
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(4)
      .applyEuler(camera.rotation);
    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (actions.jump && Math.abs(vel.current[1] < 0.05)) {
      api.velocity.set(vel.current[0], 4, vel.current[2]);
    }
  });

  return (
    <>
      <mesh ref={reference}></mesh>
    </>
  );
};

export default Player;
