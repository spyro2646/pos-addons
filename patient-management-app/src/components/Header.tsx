import React from "react";
import { Search, Building, Plus } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-light-gray flex items-center justify-between px-4 sticky top-0 z-10 shadow-sm">
      {/* Global Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients by Name, ID, or Phone"
            className="w-full pl-10 pr-4 py-2 bg-light-gray/50 border border-light-gray rounded-full focus:outline-none focus:ring-2 focus:ring-trust-blue/50 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        {/* Clinic Switcher */}
        <div className="hidden sm:flex items-center text-sm border border-light-gray rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-50">
          <Building className="w-4 h-4 mr-2 text-gray-500" />
          <select className="bg-transparent focus:outline-none cursor-pointer font-medium">
            <option>City Clinic</option>
            <option>Main Hospital</option>
          </select>
        </div>

        {/* Quick Action Button */}
        <button className="bg-trust-blue text-white px-4 py-2 rounded-md font-medium text-sm flex items-center shadow-sm hover:bg-trust-blue/90 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">New Appointment</span>
          <span className="sm:hidden">New</span>
        </button>
      </div>
    </header>
  );
}
