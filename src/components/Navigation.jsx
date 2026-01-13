import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav
      className="bg-white fixed top-0 left-0 right-0 z-50"
      style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SuperBase Logo"
              width={140}
              height={45}
            />
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 mr-6">
              <Link
                href="/"
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/programs"
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors"
              >
                PROGRAMS & SERVICES
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors"
              >
                CONTACT
              </Link>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingBag />
            </button>
            <Button
              className="text-white px-8 sm:px-7 py-6 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
              style={{
                background:
                  "linear-gradient(318deg, #5D06E9 13.21%, #0B23FA 98.3%)",
              }}
            >
              SIGN IN
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
