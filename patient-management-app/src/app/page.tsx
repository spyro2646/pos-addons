"use client";

import React, { useState } from "react";
import { CalendarView } from "@/components/Calendar";
import { PatientEMR } from "@/components/PatientEMR";

export default function Home() {
  const [view, setView] = useState<"calendar" | "emr">("calendar");

  return (
    <div className="h-full flex flex-col relative bg-white">
      <div className="absolute top-4 right-4 z-10 flex border border-light-gray rounded-md overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => setView("calendar")}
          className={`px-4 py-1.5 text-sm font-medium transition-colors ${view === "calendar" ? "bg-trust-blue text-white" : "text-gray-600 hover:bg-gray-50"}`}
        >
          Calendar
        </button>
        <button
          onClick={() => setView("emr")}
          className={`px-4 py-1.5 text-sm font-medium transition-colors ${view === "emr" ? "bg-trust-blue text-white" : "text-gray-600 hover:bg-gray-50"}`}
        >
          EMR
        </button>
      </div>

      {view === "calendar" ? <CalendarView /> : <PatientEMR />}
    </div>
  );
}
