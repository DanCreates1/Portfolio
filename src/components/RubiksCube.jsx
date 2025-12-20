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
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Rubik’s Cube
    const cubeGroup = new THREE.Group();
    const size = 0.98;
    const geometry = new THREE.BoxGeometry(size, size, size);

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xff0000 }), // red
      new THREE.MeshStandardMaterial({ color: 0xffa500 }), // orange
      new THREE.MeshStandardMaterial({ color: 0xffffff }), // white
      new THREE.MeshStandardMaterial({ color: 0xffff00 }), // yellow
      new THREE.MeshStandardMaterial({ color: 0x00ff00 }), // green
      new THREE.MeshStandardMaterial({ color: 0x0000ff })  // blue
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
        width: "100%",
        height: "400px",
        borderRadius: "16px",
        background: "radial-gradient(circle at top, #0b0f1a, #05070d)"
      }}
    />
  );
}
