import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Nissan } from "./Nissan";


const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [-5, 0, 15], fov: 45 }}>
      
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={5}
        minDistance={2}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />

      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -0.9, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >

        <Particles count={100} />
        <Nissan />
      </group>

      <EffectComposer>
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>

    </Canvas>
  );
};

export default HeroExperience;
