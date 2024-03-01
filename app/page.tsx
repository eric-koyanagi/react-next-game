import Image from "next/image";
import ParallaxLayer from "./components/parallaxLayer";
import Character from "./components/character";

export default function Home() {
  return (
    <main className="">
      <ParallaxLayer speed={1.0}/>
      <ParallaxLayer speed={0.5}/>

      <Character/>
    </main>
  );
}
