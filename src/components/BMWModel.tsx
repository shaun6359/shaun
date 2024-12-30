import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BMWModel = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0A192F');

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create main body shape
    const bodyGeometry = new THREE.BoxGeometry(3, 0.8, 1.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000,
      shininess: 100,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    scene.add(body);

    // Create roof
    const roofGeometry = new THREE.BoxGeometry(2, 0.4, 1.3);
    const roofMaterial = new THREE.MeshPhongMaterial({
      color: 0x0066B1, // BMW blue
      shininess: 90,
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 0.6;
    scene.add(roof);

    // Create wheels
    const wheelGeometry = new THREE.TorusGeometry(0.3, 0.1, 16, 32);
    const wheelMaterial = new THREE.MeshPhongMaterial({
      color: 0x333333,
      shininess: 80,
    });

    // Front wheels
    const frontLeftWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    frontLeftWheel.position.set(-1, -0.4, 0.8);
    frontLeftWheel.rotation.y = Math.PI / 2;
    scene.add(frontLeftWheel);

    const frontRightWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    frontRightWheel.position.set(-1, -0.4, -0.8);
    frontRightWheel.rotation.y = Math.PI / 2;
    scene.add(frontRightWheel);

    // Rear wheels
    const rearLeftWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    rearLeftWheel.position.set(1, -0.4, 0.8);
    rearLeftWheel.rotation.y = Math.PI / 2;
    scene.add(rearLeftWheel);

    const rearRightWheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    rearRightWheel.position.set(1, -0.4, -0.8);
    rearRightWheel.rotation.y = Math.PI / 2;
    scene.add(rearRightWheel);

    // Add grill (BMW signature kidney grills)
    const grillGeometry = new THREE.BoxGeometry(0.2, 0.4, 0.2);
    const grillMaterial = new THREE.MeshPhongMaterial({
      color: 0x111111,
      shininess: 100,
    });

    const leftGrill = new THREE.Mesh(grillGeometry, grillMaterial);
    leftGrill.position.set(-1.5, 0, 0.2);
    scene.add(leftGrill);

    const rightGrill = new THREE.Mesh(grillGeometry, grillMaterial);
    rightGrill.position.set(-1.5, 0, -0.2);
    scene.add(rightGrill);

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation following mouse movement
      scene.rotation.y += (mouseX / 5 - scene.rotation.y) * 0.05;
      scene.rotation.x += (mouseY / 5 - scene.rotation.x) * 0.05;

      // Add slight floating animation
      scene.position.y = Math.sin(Date.now() * 0.001) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[400px] bg-navy"
      style={{ marginBottom: '-1px' }}
    />
  );
};

export default BMWModel;