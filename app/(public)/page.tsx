import Hero from "./_sections/hero";
import LogoTicker from "./_sections/logo-ticker";
import Introduction from "./_sections/introduction";

async function HomePage() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Introduction />
    </>
  );
}

export default HomePage;
