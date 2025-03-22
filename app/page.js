import Image from "next/image";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import FeaturedWork from "@/components/FeaturedWork";
import WhatIDo from "@/components/WhatIDo";
import LetsWorkTogether from "@/components/LetsWorkTogether";
export default function HomePage() {
  return (
    <div className="w-[95%] mx-auto">
      <Home/>
      <AboutMe/>
      <FeaturedWork/>
      <WhatIDo/>
      <LetsWorkTogether/>
    </div>
  );
}
