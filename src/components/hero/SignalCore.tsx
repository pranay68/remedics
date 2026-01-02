"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

export function SignalCore({ className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 40);
    camera.position.set(0, 0.2, 5.5);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 0.85);
    key.position.set(2, 3, 4);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x00e5ff, 0.45);
    fill.position.set(-3, -1, 2);
    scene.add(fill);

    const accent = new THREE.PointLight(0x00e5ff, 1.2, 10);
    accent.position.set(0, 0, 3);
    scene.add(accent);

    const coreGeom = new THREE.IcosahedronGeometry(1, 4);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a1428,
      roughness: 0.2,
      metalness: 0.35,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transmission: 0.3,
      thickness: 1.2,
      ior: 1.45,
      sheen: 0.8,
      sheenColor: new THREE.Color(0x4f7fff),
      emissive: new THREE.Color(0x1b2545),
      emissiveIntensity: 0.85,
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    group.add(core);

    const wireGeom = new THREE.IcosahedronGeometry(1.03, 2);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(wireGeom),
      new THREE.LineBasicMaterial({
        color: 0x4f7fff,
        transparent: true,
        opacity: 0.65,
      }),
    );
    group.add(wire);

    const outerWireGeom = new THREE.IcosahedronGeometry(1.18, 1);
    const outerWire = new THREE.LineSegments(
      new THREE.WireframeGeometry(outerWireGeom),
      new THREE.LineBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.25,
      }),
    );
    group.add(outerWire);

    const ringGeom = new THREE.TorusGeometry(1.65, 0.015, 8, 256);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.55,
    });

    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Mesh(ringGeom, ringMat.clone());
      ring.rotation.x = (i * Math.PI) / 4 + 0.35;
      ring.rotation.y = (i * Math.PI) / 5;
      ring.rotation.z = (i * Math.PI) / 6;
      rings.push(ring);
      group.add(ring);
    }

    const pointsCount = 2000;
    const pts = new Float32Array(pointsCount * 3);
    const speeds = new Float32Array(pointsCount);
    const radii = new Float32Array(pointsCount);
    const colors = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount; i++) {
      const a = Math.random() * Math.PI * 2;
      const b = (Math.random() - 0.5) * Math.PI;
      const r = 1.85 + Math.random() * 1.65;
      const x = Math.cos(a) * Math.cos(b) * r;
      const y = Math.sin(b) * r * 0.8;
      const z = Math.sin(a) * Math.cos(b) * r;
      pts[i * 3 + 0] = x;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = z;
      speeds[i] = 0.4 + Math.random() * 1.0;
      radii[i] = r;
      
      const mixRatio = Math.random();
      if (mixRatio > 0.7) {
        colors[i * 3 + 0] = 0.0;
        colors[i * 3 + 1] = 0.9;
        colors[i * 3 + 2] = 1.0;
      } else {
        colors[i * 3 + 0] = 0.7;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 1.0;
      }
    }
    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute("position", new THREE.BufferAttribute(pts, 3));
    particlesGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.015,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeom, particlesMat);
    group.add(particles);

    const ray = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mouse = new THREE.Vector2(0, 0);
    const target = new THREE.Vector3(0, 0, 0);

    let w = 1;
    let h = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.set(x, y);
      ray.setFromCamera(mouse, camera);
      ray.ray.intersectPlane(plane, target);
    };

    const onLeave = () => target.set(0, 0, 0);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    canvas.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave, { passive: true });

    resize();

    let raf = 0;
    const clock = new THREE.Clock();

    const tick = () => {
      const t = clock.getElapsedTime();

      const inertia = reducedMotion ? 0.05 : 0.14;
      group.rotation.y += (target.x * 0.1 - group.rotation.y) * inertia;
      group.rotation.x += (-target.y * 0.08 - group.rotation.x) * inertia;

      const autoRotSpeed = reducedMotion ? 0.0008 : 0.002;
      group.rotation.y += autoRotSpeed;

      core.rotation.y += reducedMotion ? 0.0012 : 0.004;
      core.rotation.x += reducedMotion ? 0.0005 : 0.0015;
      wire.rotation.y -= reducedMotion ? 0.0012 : 0.0035;
      outerWire.rotation.y += reducedMotion ? 0.0008 : 0.002;
      outerWire.rotation.x -= reducedMotion ? 0.0005 : 0.0012;

      rings.forEach((r, idx) => {
        r.rotation.z += (reducedMotion ? 0.0015 : 0.004) * (idx % 2 === 0 ? 1 : -1);
        const mat = r.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.4 + Math.sin(t * 1.2 + idx) * 0.15;
      });

      const pos = particlesGeom.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < pointsCount; i++) {
        const ix = i * 3;
        const x = pos.array[ix + 0] as number;
        const y = pos.array[ix + 1] as number;
        const z = pos.array[ix + 2] as number;

        const r = radii[i];
        const ang = t * speeds[i] * 0.25;
        const nx = x * Math.cos(ang) - z * Math.sin(ang);
        const nz = x * Math.sin(ang) + z * Math.cos(ang);

        (pos.array[ix + 0] as number) = nx;
        (pos.array[ix + 1] as number) = y + Math.sin(t * (0.6 + speeds[i] * 0.1) + r) * 0.0009;
        (pos.array[ix + 2] as number) = nz;
      }
      pos.needsUpdate = true;

      const pulse = (Math.sin(t * 1.8) + 1) / 2;
      const pulse2 = (Math.sin(t * 2.3 + 0.5) + 1) / 2;
      
      const o = 0.5 + pulse * 0.25;
      (wire.material as THREE.LineBasicMaterial).opacity = o;
      (outerWire.material as THREE.LineBasicMaterial).opacity = 0.15 + pulse2 * 0.15;

      const dist = clamp01(target.length() / 2.5);
      coreMat.emissiveIntensity = 0.65 + dist * 0.45 + pulse * 0.2;
      
      accent.intensity = 1.0 + pulse * 0.5 + dist * 0.3;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      ro.disconnect();

      particlesGeom.dispose();
      particlesMat.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      wireGeom.dispose();
      (wire.material as THREE.Material).dispose();
      ringGeom.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        aria-label="Remedics signal core visual"
      />
    </div>
  );
}
