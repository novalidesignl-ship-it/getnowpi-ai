"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            G
          </div>
          <span className="text-xl font-bold text-white">
            GetNow<span className="text-blue-400">PI</span>{" "}
            <span className="text-gray-400 font-normal text-sm">AI</span>
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Каталог
          </Link>
          <Link href="/submit" className="hover:text-white transition-colors">
            Предложить сервис
          </Link>
        </nav>
      </div>
    </header>
  );
}
