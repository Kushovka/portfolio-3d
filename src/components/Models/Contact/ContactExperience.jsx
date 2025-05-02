import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MacBook } from "./Macbook";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      <ambientLight intensity={0.5} color="#ffffff" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffffff" />
      <directionalLight
        position={[-5, -5, -3]}
        intensity={2.5}
        color="#ffffff"
      />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffffff"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        ></mesh>
      </group>

      <group scale={0.13} position={[0, -1.49, 0]} castShadow>
        <MacBook />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
