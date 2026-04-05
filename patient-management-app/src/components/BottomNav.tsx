import React from "react";
import { Home, Calendar, Users, Stethoscope } from "lucide-react";

export function BottomNav() {
  const navItems = [
    { icon: Home, label: "Home" },
    { icon: Calendar, label: "Calendar" },
    { icon: Users, label: "Patients" },
    { icon: Stethoscope, label: "Consults" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-light-gray flex justify-around items-center h-16 pb-safe z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-trust-blue"
        >
          <item.icon className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
