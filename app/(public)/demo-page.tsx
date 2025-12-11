// Navar ////////////////////////////////////
"use client";
import { navItems } from "@/constants";
import Image from "next/image";
import logo from "../../../public/images/mhs-ventures-logo.svg";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/container";
import { getSessionClient } from "@/lib/getSessionClient";
import { UserDropdown } from "@/components/user-dropdown";

function DemoPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();
  const constraintRef = useRef(null);

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);
  return (
    <main className="relative mx-auto">
      <header className="z-50 w-full bg-transparent">
        <div className="py-3 lg:py-6">
          <Container className="max-w-4xl">
            <nav className="border-border flex items-center justify-between gap-4 rounded-full border bg-black/10 px-4 py-2 backdrop-blur-md">
              {/* Left: Logo */}
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  className="h-8 w-auto sm:h-9"
                  priority
                />
              </Link>

              {/* Center Menu (desktop only) */}
              <ul className="hidden items-center gap-6 font-medium lg:flex">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.path}>
                    {item.name}
                  </Link>
                ))}
              </ul>

              {/* Right side */}
              <div className="flex items-center gap-3">
                {session ? (
                  <UserDropdown
                    name={session?.user?.name}
                    email={session?.user?.email}
                    image={session?.user?.image || undefined}
                  />
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="hidden rounded-full px-5 md:inline-flex"
                    >
                      Log In
                    </Button>
                    <Button className="hidden rounded-full px-5 md:inline-flex">
                      Sign Up
                    </Button>
                  </>
                )}

                {/* Mobile Menu Icon */}
                <MenuIcon className="h-6 w-6 cursor-pointer lg:hidden" />
              </div>
            </nav>
          </Container>
        </div>
      </header>
      <section
        className="mx-auto mt-20 max-w-[1600px] overflow-x-clip py-24"
        style={{
          cursor: `url(${cursorYouImage.src}), auto`,
        }}
        ref={constraintRef}
      >
        <div className="relative container">
          <motion.div
            ref={leftDesignScope}
            initial={{ opacity: 0, y: 100, x: -100 }}
            drag
            // dragConstraints={constraintRef}
            dragConstraints={{ left: -100, top: -300, right: 850, bottom: 200 }}
            className="absolute top-16 -left-32 z-50 hidden lg:block"
          >
            <Image
              src={designExample1Image}
              alt="design example 1 image"
              draggable={false}
            />
          </motion.div>
          <motion.div
            ref={leftPointerScope}
            initial={{ opacity: 0, y: 100, x: -200 }}
            className="absolute top-96 left-56 z-[60] hidden lg:block"
          >
            <Pointer name="Andrea" />
          </motion.div>

          <motion.div
            ref={rightDesignScope}
            initial={{ opacity: 0, x: 100, y: 100 }}
            drag
            dragConstraints={{ left: -850, top: -300, right: 150, bottom: 200 }}
            className="absolute -top-16 -right-64 z-50 hidden lg:block"
          >
            <Image
              src={designExample2Image}
              alt="design example 2 image"
              draggable={false}
            />
          </motion.div>
          <motion.div
            ref={rightPointerScope}
            initial={{ opacity: 0, x: 275, y: 100 }}
            className="absolute -top-4 right-80 z-[60] hidden lg:block"
          >
            <Pointer name="Bryan" color="red" />
          </motion.div>

          <div className="flex justify-center">
            <div className="from-primary inline-flex rounded-full bg-gradient-to-r to-pink-400 px-3 py-1 font-semibold text-neutral-950">
              ✨ Secured £7.5M in Seed Funding
            </div>
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-center text-4xl font-medium md:text-5xl lg:text-8xl">
            Pitch Your Startup, <br />
            Connect With Entrepreneurs
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
            Submit your startup ideas, explore innovative pitches, and shine in
            virtual competitions with a sleek, user-friendly platform designed
            to empower entrepreneurs.
          </p>
          <SearchForm query={query} />
        </div>
      </section>
      <Container>
        <h3 className="text-center text-xl text-white/50">
          Trusted by Innovative Companies
        </h3>

        <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-8 pr-12 md:gap-14 md:pr-20 lg:gap-16 lg:pr-24"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <React.Fragment key={index}>
                {logos.map((logo) => (
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    key={logo.name}
                    className="h-6 w-auto opacity-80 md:h-8 lg:h-10"
                    draggable={false}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </Container>
    </main>
  );
}

export default DemoPage;
