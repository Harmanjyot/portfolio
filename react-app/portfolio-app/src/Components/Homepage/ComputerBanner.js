import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import ComputerModel from "./ComputerModel";
import { Html } from "@react-three/drei";
import "../../SCSS/Homepage/computer-container.scss";

function DebugCameraLogger() {
  const { camera, controls } = useThree();
  useEffect(() => {
    console.log("Camera Position:", camera.position);
    console.log("Controls Target:", controls?.target);

    window.myCamera = camera;
    window.myControls = controls;
  }, [camera, controls]);
  return null;
}

function CameraAndControlsSetup() {
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    
    camera.position.set(28.8, 13.8, 17);
    camera.lookAt(0, -2.5, 0);
  }, [camera]);

  return null;
}

function MouseControlledCamera({ containerRef }) {
  const { camera } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  const initialRotation = useRef({ x: 0, y: 0 });      // << store start angles
  const isOverContainer = useRef(false);
  const initialized = useRef(false);
  const radius = useRef(0);
  const spherical = useRef(new THREE.Spherical());
  const targetVec = useRef(new THREE.Vector3(0, -2.5, 0));

  useFrame(() => {
    if (!initialized.current) {
      // derive starting angles & radius once
      const offset = camera.position.clone().sub(targetVec.current);
      radius.current = offset.length();
      spherical.current.setFromVector3(offset);
      currentRotation.current.x = spherical.current.phi;
      currentRotation.current.y = spherical.current.theta;
      targetRotation.current.x = spherical.current.phi;
      targetRotation.current.y = spherical.current.theta;
      initialRotation.current.x = spherical.current.phi;  // << save initial
      initialRotation.current.y = spherical.current.theta;
      initialized.current = true;
    }

    if (!isOverContainer.current) return;

    // ease toward the (clamped) target angles
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.1;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.1;

    spherical.current.phi = currentRotation.current.x;
    spherical.current.theta = currentRotation.current.y;
    spherical.current.radius = radius.current;

    const offset = new THREE.Vector3().setFromSpherical(spherical.current);
    camera.position.copy(targetVec.current).add(offset);
    camera.lookAt(targetVec.current);
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current || !initialized.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      isOverContainer.current = isInside;
      if (!isInside) return;

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      mousePos.current.x = x * 2 - 1;
      mousePos.current.y = -(y * 2 - 1);

      // tiny offset around the initial rotation
      const maxDelta = 0.04;        // ~2.3 degrees
      const offsetY = THREE.MathUtils.clamp(mousePos.current.x * 0.05, -maxDelta, maxDelta);
      const offsetX = THREE.MathUtils.clamp(mousePos.current.y * 0.05, -maxDelta, maxDelta);

      targetRotation.current.y = initialRotation.current.y + offsetY;
      targetRotation.current.x = initialRotation.current.x + offsetX;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return null;
}

function ComputerContainer() {
  const containerRef = useRef(null);

  return (
    <div className="computer-container" ref={containerRef}>
      <Canvas camera={{ fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />

        <ComputerModel position={[0, -5, 0]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          target={[0, -2.5, 0]}
        />

        <CameraAndControlsSetup />
        <MouseControlledCamera containerRef={containerRef} />
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
