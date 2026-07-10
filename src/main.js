import './style.css';
import { SceneManager } from './core/SceneManager.js';

const sceneManager = new SceneManager();

// Objeto de teste, só pra confirmar que a cena está funcionando
import * as THREE from 'three';
const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, flatShading: true });
const testObject = new THREE.Mesh(geometry, material);
sceneManager.scene.add(testObject);

function animate() {
  requestAnimationFrame(animate);
  testObject.rotation.x += 0.005;
  testObject.rotation.y += 0.01;
  sceneManager.render();
}

animate();