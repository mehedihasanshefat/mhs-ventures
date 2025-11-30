import { Button } from "@/components/ui/button";
import Hero from "./_sections/hero";

async function HomePage() {
  return (
    <>
      <section id="hero">
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut
          asperiores quis harum eligendi accusantium. Illo at, quia perspiciatis
          non cumque, consectetur enim rem impedit corporis dolore id ad
          consequuntur?
        </p>
        <Button>Create startup</Button>
      </section>
      <Hero />
    </>
  );
}

export default HomePage;
