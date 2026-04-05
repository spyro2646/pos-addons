"use client";

import React, { useState } from "react";
import { Calendar, Users, FileText, BarChart2, Settings } from "lucide-react";

export function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { icon: Calendar, label: "Calendar" },
    { icon: Users, label: "Patients" },
    { icon: FileText, label: "Billing" },
    { icon: BarChart2, label: "Reports" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside
      className={`hidden md:flex flex-col bg-trust-blue text-white transition-all duration-300 ease-in-out h-full ${
        isHovered ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 mb-4 flex items-center justify-center h-16 border-b border-white/20">
        <span className="font-bold text-xl">{isHovered ? "Practo Vibe" : "PV"}</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center p-2 rounded hover:bg-white/10 transition-colors"
                title={item.label}
              >
                <item.icon className="w-6 h-6 min-w-6" />
                {isHovered && (
                  <span className="ml-4 whitespace-nowrap">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
