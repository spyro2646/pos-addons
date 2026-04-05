import React from "react";
import { Plus } from "lucide-react";

export function FAB() {
  return (
    <button
      className="md:hidden fixed bottom-20 right-4 w-14 h-14 bg-trust-blue text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-trust-blue/90 active:scale-95 transition-all"
      title="Digitize Records"
    >
      <Plus className="w-8 h-8" />
    </button>
  );
}
