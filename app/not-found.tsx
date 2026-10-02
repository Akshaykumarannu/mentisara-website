import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-20 bg-ivory">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-sand-200 text-forest-900 font-serif text-3xl font-bold flex items-center justify-center mx-auto shadow-soft-sm">
          404
        </div>
        
        <h1 className="text-3xl font-serif text-forest-950 font-medium">Page Not Found</h1>
        
        <p className="text-sm text-slate-600 leading-relaxed">
          The page you are looking for may have been moved or does not exist. Please return to the homepage or explore our services.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <Link href="/">
            <Button size="md">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="md">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
