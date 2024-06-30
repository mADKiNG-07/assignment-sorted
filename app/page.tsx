import Stats from "./components/Feature_Stats";
import Unique from "./components/Feature_Unique";
import Works from "./components/Feature_Works";
import Hero from "./components/Hero";
import Review from "./components/Review";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <Hero />

      {/* General: Stats */}
      <Stats />

      {/* General: Unique */}
      <Unique />

      {/* General: Works */}
      <Works />

      {/* Reviews */}
      <Review />
    </main>
  );
}
