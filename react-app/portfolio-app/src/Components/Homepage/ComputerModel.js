// ComputerModel.jsx
import { useGLTF } from "@react-three/drei";

export default function ComputerModel(props) {
  const { scene } = useGLTF("/3dModels/low_poly_laptop.glb");
  return <primitive object={scene} {...props} />;
}

// ComputerContainer.jsx
