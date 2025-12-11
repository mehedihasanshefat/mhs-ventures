"use client";
import { navItems } from "@/constants";
import Image from "next/image";
import logo from "../../../public/images/mhs-ventures-logo.svg";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/container";
import { getSessionClient } from "@/lib/getSessionClient";
import { UserDropdown } from "@/components/user-dropdown";

export default function Navbar() {
  const { data: session } = getSessionClient();
  return (
    <header className="py-4 lg:py-8">
      <Container className="max-w-5xl">
        <nav className="border-border grid grid-cols-2 items-center rounded-full border bg-black/20 p-2 px-4 py-3 backdrop-blur-md lg:grid-cols-3">
          <div>
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={100}
              className="h-9 w-auto"
            />
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <ul className="flex items-center gap-6 font-medium">
              {navItems.map((item) => (
                <Link key={item.name} href={item.path}>
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex justify-end gap-4">
            {session ? (
              <UserDropdown
                name={session?.user?.name}
                email={session?.user?.email}
                image={session?.user?.image || undefined}
              />
            ) : (
              <>
                <Link
                  href="/login"
                  className={buttonVariants({
                    variant: "outline",
                    className: "hidden rounded-full px-6 md:inline-flex",
                  })}
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className={buttonVariants({
                    className: "hidden rounded-full px-6 md:inline-flex",
                  })}
                >
                  Sign Up
                </Link>
              </>
            )}
            <MenuIcon className="md:hidden" />
          </div>
          {/* Mobile Navbar */}
        </nav>
      </Container>
    </header>
  );
}
