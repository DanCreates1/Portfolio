import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function RubiksCube() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(5, 5, 7);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
keyLight.position.set(6, 8, 10);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x88aaff, 0.4);
rimLight.position.set(-6, -4, -6);
scene.add(rimLight);


    // Rubik’s Cube
    const cubeGroup = new THREE.Group();
    const size = 0.95;
    const geometry = new THREE.BoxGeometry(size, size, size);

   const materials = [
  new THREE.MeshPhysicalMaterial({
    color: 0xff3b3b,
    roughness: 0.35,
    metalness: 0.05,
    clearcoat: 0.4
  }),
  new THREE.MeshPhysicalMaterial({
    color: 0xff8c1a,
    roughness: 0.35,
    metalness: 0.05,
    clearcoat: 0.4
  }),
  new THREE.MeshPhysicalMaterial({
    color: 0xf5f5f5,
    roughness: 0.3,
    metalness: 0.05,
    clearcoat: 0.45
  }),
  new THREE.MeshPhysicalMaterial({
    color: 0xffd500,
    roughness: 0.3,
    metalness: 0.05,
    clearcoat: 0.45
  }),
  new THREE.MeshPhysicalMaterial({
    color: 0x00d26a,
    roughness: 0.35,
    metalness: 0.05,
    clearcoat: 0.4
  }),
  new THREE.MeshPhysicalMaterial({
    color: 0x1e6bff,
    roughness: 0.35,
    metalness: 0.05,
    clearcoat: 0.4
  })
];


    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const cube = new THREE.Mesh(geometry, materials);
          cube.position.set(x, y, z);
          cubeGroup.add(cube);
        }
      }
    }

    scene.add(cubeGroup);

    // Controls (user interaction)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup (important in React)
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "40%",
        display: "flex",
        marginRight: "auto",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "left",
        height: "400px",
        borderRadius: "10px",
        marginRight: "auto",
        border: "#b9bbbc solid 2px",
        marginLeft: "10%",
        marginRight: "10%",
        
      }}
    />
  );
}
