import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function CubeFollowingMouse() {
  const cubeRef = useRef();

  useFrame(({ mouse }) => {
    if (cubeRef.current) {
      // Fix Y-axis rotation (left/right) by removing the negative sign
      const xRotation = -mouse.y * Math.PI * 0.5; // Inverted Y-axis for natural movement
      const yRotation = mouse.x * Math.PI * 0.5; // Removed negative sign for correct left/right rotation

      // Apply rotation to the cube
      cubeRef.current.rotation.x = xRotation;
      cubeRef.current.rotation.y = yRotation;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default function Cube() {
  return (
    <Canvas>
      {/* Lighting for better visibility */}
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[2, 2, 5]} />

      {/* Cube that follows the mouse */}
      <CubeFollowingMouse />
    </Canvas>
  );
}
