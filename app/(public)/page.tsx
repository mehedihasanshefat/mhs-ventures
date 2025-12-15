"use client";
import Hero from "./_sections/hero";
import LogoTicker from "./_sections/logo-ticker";
import Introduction from "./_sections/introduction";
import Features from "./_sections/features";
import Integrations from "./_sections/integrations";
import Faqs from "./_sections/faqs";
import CallToAction from "./_sections/call-to-action";
import Container from "@/components/container";
function HomePage() {
  return (
    <>
      <Hero />
      <Container>
        <LogoTicker />
      </Container>
      <Container>
        <Introduction />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <Integrations />
      </Container>
      <Faqs />
      <Container>
        <CallToAction />
      </Container>
    </>
  );
}

export default HomePage;
