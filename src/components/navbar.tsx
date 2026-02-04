import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Zadrz
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-4">
            <Button variant="secondary" asChild hoverFlip={true} hoverIcon={<></>}>
              <Link href="#use-cases">Use cases</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="#waitlist">Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
