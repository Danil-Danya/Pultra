<template>
    <div class="viewer-container">
        <div class="zoomer">
            <button @click="zoomOut" class="zoom-btn">+</button>
            <button @click="zoomIn" class="zoom-btn">—</button>
        </div>
        <canvas ref="canvasEl" class="canvas_3d"> </canvas>
    </div>
</template>

<script setup>
    import { onMounted, onBeforeUnmount, ref } from 'vue';
    import * as THREE from 'three';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    const props = defineProps({
        modelUrl: {
            type: String,
            required: true
        }
    })

    console.log(props.modelUrl);
    

    const canvasEl = ref(null);

    let renderer, scene, camera, controls, model;
    let animationId;

    let zoomFactor = 0.8;
    let currentZoom = 1.5;

    let size = 1;

    const zoomIn = () => {
        zoomFactor = Math.min(zoomFactor + 0.5, 10);
    };

    const zoomOut = () => {
        zoomFactor = Math.max(zoomFactor - 0.5, 0.2);
    };

    const handleResize = () => {
        if (camera && renderer && canvasEl.value) {
            const width = canvasEl.value.clientWidth;
            const height = canvasEl.value.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height, false);
        }
    };


    onMounted(() => {
        scene = new THREE.Scene();
        scene.background = new THREE.Color('#DFDFDF');
        camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

        renderer = new THREE.WebGLRenderer({ canvas: canvasEl.value, antialias: true });
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.5;

        scene.add(new THREE.AmbientLight(0xffffff, 1.2));

        const dirLight = new THREE.DirectionalLight(0xffffff, 2);

        dirLight.position.set(10, 10, 10);
        scene.add(dirLight);

        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableRotate = true;

        const loader = new GLTFLoader();
        loader.load(props.modelUrl, (gltf) => {
            model = gltf.scene;
            scene.add(model);

            const box = new THREE.Box3().setFromObject(model);
            size = box.getSize(new THREE.Vector3()).length();
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);

            camera.position.set(0, size / 2, size * zoomFactor);
            controls.target.set(0, 0, 0);
            controls.update();
        });

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            currentZoom += (zoomFactor - currentZoom) * 0.1;

            if (camera && controls) {
                const dir = new THREE.Vector3();
                camera.getWorldDirection(dir);
                dir.multiplyScalar(-size * currentZoom);
                camera.position.copy(controls.target).add(dir);
            }

            controls.update();
            renderer.render(scene, camera);
        };

        handleResize();
        animate();

        window.addEventListener('resize', handleResize);
    });


    onBeforeUnmount(() => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
    });

</script>
