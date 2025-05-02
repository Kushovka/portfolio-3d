import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export function Nissan(props) {
  const { nodes, materials } = useGLTF("models/nissan.glb");
  const headLightMaterial = new THREE.MeshStandardMaterial({
    color: "#00000",
    emissive: "#cdd6db",
    emissiveIntensity: "0.4",
  });
  const headLightBackMaterial = new THREE.MeshStandardMaterial({
    color: "#00000",
    emissive: "#FF2400",
    emissiveIntensity: "2.2",
  });
  const diskMaterial = new THREE.MeshPhongMaterial({ color: "#aaa9ad" });
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.01, 0.012]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials[".021"]}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials[".021"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials[".092"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials[".018"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials[".018"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Carpaint_white}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.material_0}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials[".031"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials[".032"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_19.geometry}
        material={diskMaterial}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials[".098"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.material_1}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.material_21}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.Red_paint}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.material_2}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.material_2}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials.material_3}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.material_4}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_41.geometry}
        material={materials.material_1}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_43.geometry}
        material={materials.material_1}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_45.geometry}
        material={materials.material_5}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_47.geometry}
        material={materials.material_6}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_50.geometry}
        material={materials.material_7}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_52.geometry}
        material={materials.material_7}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.material_7}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_56.geometry}
        material={materials.material_7}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.Car_chrome}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_60.geometry}
        material={materials.material_8}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.material_9}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_64.geometry}
        material={diskMaterial}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.material_7}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_68.geometry}
        material={materials.material_10}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* mirror */}
      <mesh
        geometry={nodes.Object_70.geometry}
        material={materials.Metallic_0}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_72.geometry}
        material={materials.material_11}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.material_12}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_76.geometry}
        material={materials.material_13}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_78.geometry}
        material={materials.material_14}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_80.geometry}
        material={materials.Carbon_Fiber_Procedural}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.Carbon_Fiber_Procedural}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_84.geometry}
        material={materials.material_15}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_86.geometry}
        material={materials.material_16}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_88.geometry}
        material={materials.material_17}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_90.geometry}
        material={materials[".360"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_92.geometry}
        material={materials[".265"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_94.geometry}
        material={materials[".522"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_96.geometry}
        material={materials[".523"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_98.geometry}
        material={materials[".524"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_100.geometry}
        material={materials[".521"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_102.geometry}
        material={materials[".074"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_104.geometry}
        material={materials.Carpaint_black}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_106.geometry}
        material={materials.material_16}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_108.geometry}
        material={materials.material_17}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_110.geometry}
        material={materials[".045"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_112.geometry}
        material={materials[".046"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_114.geometry}
        material={materials[".041"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_116.geometry}
        material={materials[".042"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_118.geometry}
        material={materials[".043"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_120.geometry}
        material={materials[".044"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_122.geometry}
        material={materials.material_18}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_125.geometry}
        material={materials[".040"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_127.geometry}
        material={materials[".040"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_129.geometry}
        material={materials.material_18}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_132.geometry}
        material={materials[".035"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_134.geometry}
        material={materials[".035"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_136.geometry}
        material={materials[".027"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_138.geometry}
        material={materials[".028"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_140.geometry}
        material={materials[".029"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_142.geometry}
        material={materials[".030"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_144.geometry}
        material={materials.material_17}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_146.geometry}
        material={materials[".024"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_148.geometry}
        material={materials[".026"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_150.geometry}
        material={materials.material_16}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_152.geometry}
        material={materials.material_18}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_154.geometry}
        material={materials[".009"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_156.geometry}
        material={materials[".010"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_158.geometry}
        material={materials[".011"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_160.geometry}
        material={materials[".012"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_162.geometry}
        material={materials.material_17}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_164.geometry}
        material={materials[".006"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_166.geometry}
        material={materials[".007"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_168.geometry}
        material={materials[".097"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_170.geometry}
        material={materials[".073"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_172.geometry}
        material={materials.material_16}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_174.geometry}
        material={materials.material_18}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_177.geometry}
        material={materials[".525"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_179.geometry}
        material={materials[".525"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_181.geometry}
        material={materials.material_1}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_183.geometry}
        material={materials.Rear_lights_white_glass}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_185.geometry}
        material={materials.black_glass}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* head Light Back */}
      <mesh
        geometry={nodes.Object_187.geometry}
        material={headLightBackMaterial}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_189.geometry}
        material={materials.material_21}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_191.geometry}
        material={materials.material_19}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_193.geometry}
        material={materials.material_19}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_195.geometry}
        material={materials.material_19}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_197.geometry}
        material={materials.material_19}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_199.geometry}
        material={materials[".048"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_201.geometry}
        material={materials[".036"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_203.geometry}
        material={materials[".019"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_205.geometry}
        material={diskMaterial}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_207.geometry}
        material={diskMaterial}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_209.geometry}
        material={materials[".005"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_211.geometry}
        material={materials["grill.001"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_213.geometry}
        material={materials.material_20}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_215.geometry}
        material={materials.Glass}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* headlight */}
      <mesh
        geometry={nodes.Object_217.geometry}
        material={headLightMaterial}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_219.geometry}
        material={materials.Chrome}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_221.geometry}
        material={materials.material_21}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_223.geometry}
        material={materials.material_1}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_225.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_227.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_229.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_231.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_233.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_235.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_237.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_239.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_241.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_243.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_245.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_247.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_249.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_251.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_253.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_255.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_257.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_259.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_261.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_263.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_265.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_267.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_269.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_271.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_273.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_275.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_277.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_279.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_281.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_283.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_285.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_287.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_289.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_291.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_293.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_295.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_297.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_299.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_301.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_303.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_305.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_307.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_309.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_311.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_313.geometry}
        material={materials[".021"]}
        position={[0, 0.01, 0.012]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("nissan.glb");
