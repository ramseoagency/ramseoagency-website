"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Html, OrbitControls, Sparkles, Text } from "@react-three/drei";
import { MathUtils, Mesh, Vector3 } from "three";
import { Activity, MousePointer2, Rotate3D, ZoomIn } from "lucide-react";

function GrowthCore() {
  const group = useRef<Mesh>(null);
  const pointer = useThree((state) => state.pointer);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.28;
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, pointer.y * 0.2 + scrollY * 0.00012, 0.06);
    group.current.rotation.z = MathUtils.lerp(group.current.rotation.z, pointer.x * 0.12, 0.06);
    const scale = 1 + Math.min(scrollY / 7000, 0.09);
    group.current.scale.lerp(new Vector3(scale, scale, scale), 0.06);
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshPhysicalMaterial color="#2563eb" roughness={0.14} metalness={0.7} clearcoat={1} clearcoatRoughness={0.1} transmission={0.08} emissive="#0f2d73" emissiveIntensity={0.32} />
      </mesh>
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.35}>
        <torusGeometry args={[1.2, 0.018, 16, 96]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.9} />
      </mesh>
      <mesh rotation={[0.7, Math.PI / 3, 0]} scale={1.52}>
        <torusGeometry args={[1.18, 0.012, 12, 96]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.72} />
      </mesh>
      <Text position={[0, 0, 1.38]} fontSize={0.3} letterSpacing={0.04} color="#ffffff" anchorX="center" anchorY="middle">
        RAM SEO
      </Text>
      <Html position={[1.7, 0.9, 0.2]} center distanceFactor={7} transform>
        <div className="glass-card rounded-xl px-3 py-2 whitespace-nowrap shadow-xl shadow-electric-500/10">
          <p className="text-[10px] uppercase tracking-widest text-slate-500">Organic growth</p>
          <p className="text-lg font-bold text-emerald-400">+147%</p>
        </div>
      </Html>
      <Html position={[-1.7, -0.85, 0.2]} center distanceFactor={7} transform>
        <div className="glass-card rounded-xl px-3 py-2 whitespace-nowrap shadow-xl shadow-purple-500/10">
          <p className="text-[10px] uppercase tracking-widest text-slate-500">Visibility</p>
          <p className="text-lg font-bold text-electric-400">+89%</p>
        </div>
      </Html>
    </group>
  );
}

function Scene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ transform: `translateY(${Math.min(scrollY * 0.035, 26)}px) scale(${1 + Math.min(scrollY / 12000, 0.035)})` }}
    >
      <color attach="background" args={["#050b19"]} />
      <fog attach="fog" args={["#050b19", 5, 12]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} color="#93c5fd" />
      <pointLight position={[-3, -2, 2]} intensity={15} distance={8} color="#10b981" />
      <pointLight position={[3, 1, -2]} intensity={12} distance={7} color="#8b5cf6" />
      <Sparkles count={70} scale={[7, 5, 5]} size={1.4} speed={0.25} color="#93c5fd" />
      <Float speed={1.8} rotationIntensity={0.12} floatIntensity={0.5}>
        <GrowthCore />
      </Float>
      <OrbitControls enablePan={false} minDistance={4.3} maxDistance={8} autoRotate={false} enableDamping dampingFactor={0.08} />
    </Canvas>
  );
}

export default function ThreeDHero() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b19]/80 shadow-2xl shadow-electric-950/30 sm:h-[540px] lg:h-[620px]">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(3,7,18,0.2)_68%,rgba(3,7,18,0.75)_100%)]" />
      <Scene />
      <div className="pointer-events-none absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-navy-950/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 backdrop-blur-md">
        <Activity size={13} className="text-emerald-400" /> Live growth engine
      </div>
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-navy-950/65 px-4 py-2 text-[10px] text-slate-400 backdrop-blur-md">
        <span className="flex items-center gap-1"><MousePointer2 size={12} /> Move</span>
        <span className="flex items-center gap-1"><Rotate3D size={12} /> Drag</span>
        <span className="flex items-center gap-1"><ZoomIn size={12} /> Zoom</span>
      </div>
    </div>
  );
}
