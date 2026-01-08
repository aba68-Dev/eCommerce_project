import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeturedProducts from "./FeturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the
        power of the latest iPhone 14 with our most Pro camera ever."
        link="/products/694f57ce7da22558596bf659"
        image={iphone}
      />
      <FeturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add studio display and color-matched Magic accessories to your bag after configure your Mac mini"
        link="/products/694f57ce7da22558596bf661"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
