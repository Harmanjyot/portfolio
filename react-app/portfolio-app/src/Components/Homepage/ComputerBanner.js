import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import ComputerModel from "./ComputerModel";
import { Html } from "@react-three/drei";
import "../../SCSS/Homepage/computer-container.scss";

function DebugCameraLogger() {
  const { camera, controls } = useThree();
  useEffect(() => {
    // Log once on mount
    console.log("Camera Position:", camera.position);
    console.log("Controls Target:", controls?.target);

    // Make available in the browser console
    window.myCamera = camera;
    window.myControls = controls;
  }, [camera, controls]);
  return null;
}

function CameraAndControlsSetup() {
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    // Set the camera position
    camera.position.set(28.8, 13.8, 17);
    camera.lookAt(0, -2.5, 0); // 👈 Point the camera at the computer model
  }, [camera]);

  return null;
}

function ComputerContainer() {
  return (
    <div className="computer-container">
      <Canvas camera={{ fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />

        <ComputerModel position={[0, -5, 0]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={0.9}
          maxAzimuthAngle={1.1}
          target={[0, -2.5, 0]} // 👈 This tells OrbitControls where to focus
        />

        <CameraAndControlsSetup />
        <DebugCameraLogger />
        <Html
          position={[-5.2, 6.5, 0.7]}
          transform
          occlude
          rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        >
          <div className="screen-icons" active>
            <img
              src="/img/icons/reactjs.png"
              alt="ReactJS"
              onClick={() => window.open("https://react.dev", "_blank")}
            />
            <img
              src="/img/icons/nodejs.png"
              alt="NodeJS"
              onClick={() => window.open("https://nodejs.org", "_blank")}
            />
          </div>
        </Html>
      </Canvas>
    </div>
  );
}

export default ComputerContainer;
