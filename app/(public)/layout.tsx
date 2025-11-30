import Container from "@/components/container";
import Navbar from "./_sections/navbar";
export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="mt-auto">
        <Container>Footer</Container>
      </footer>
    </>
  );
}

export default PublicLayout;
