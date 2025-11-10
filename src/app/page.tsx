import HomeHero from "../components/HomeHero";
import AnimatedProductCards from "../components/AnimatedProductCards";
import AnimatedTimeline from "../components/AnimatedTimeline";
// TestimonialsCarousel component has been removed
import AnimatedTeam from "../components/AnimatedTeam";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <AnimatedProductCards />
      <AnimatedTimeline />
      {/* TestimonialsCarousel component has been removed */}
      <AnimatedTeam />
      {/* Newsletter Signup Section */}
      {/* FAQ Section */}
      {/* Blog Preview Section */}
      {/* ...more modular, animated sections coming ... */}
    </div>
  );
}
