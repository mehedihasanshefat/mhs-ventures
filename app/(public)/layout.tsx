import Container from "@/components/container";
import Navbar from "./_sections/navbar";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative mx-auto">
      <Navbar />
      {children}
      <footer className="mt-auto">
        <Container>Footer</Container>
      </footer>
    </main>
  );
}

export default PublicLayout;
