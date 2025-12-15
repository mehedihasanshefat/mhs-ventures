import Container from "@/components/container";
import Navbar from "./_sections/navbar";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative mx-auto">
      <Navbar />
      {children}
      <footer className="mt-auto">
        <Container>
          <h1 className="text-primary py-10 text-center">
            Made with ❤ by MH Shefat 👨‍💻
          </h1>
        </Container>
      </footer>
    </main>
  );
}

export default PublicLayout;
