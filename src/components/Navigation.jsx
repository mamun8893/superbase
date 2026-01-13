"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white fixed top-0 left-0 right-0 z-50"
      style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              {" "}
              <Image
                src="/logo.png"
                alt="SuperBase Logo"
                width={140}
                height={45}
              />
            </Link>
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
                href="#"
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors"
              >
                PROGRAMS & SERVICES
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors"
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingBag />
            </button>
            <Button
              className="text-white px-4 sm:px-8 lg:px-7 py-4 sm:py-6 rounded-lg font-semibold text-xs sm:text-sm transition-all hover:opacity-90"
              style={{
                background:
                  "linear-gradient(318deg, #5D06E9 13.21%, #0B23FA 98.3%)",
              }}
            >
              SIGN IN
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors px-2 py-2 hover:bg-gray-50 rounded-lg"
              >
                HOME
              </Link>
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors px-2 py-2 hover:bg-gray-50 rounded-lg"
              >
                PROGRAMS & SERVICES
              </Link>
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors px-2 py-2 hover:bg-gray-50 rounded-lg"
              >
                ABOUT
              </Link>
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#555] hover:text-[#070012] transition-colors px-2 py-2 hover:bg-gray-50 rounded-lg"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
