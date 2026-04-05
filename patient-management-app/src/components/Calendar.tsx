"use client";

import React, { useState } from "react";
import { Check, Clock, User, X } from "lucide-react";

type AppointmentStatus = "confirmed" | "waiting" | "in-progress" | "completed";

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  duration: number; // in minutes
  type: string;
  status: AppointmentStatus;
  reason: string;
  lastVisitNote: string;
}

const APPOINTMENTS: Appointment[] = [
  {
    id: "1",
    patientName: "John Doe",
    time: "09:00 AM",
    duration: 30,
    type: "Consultation",
    status: "completed",
    reason: "Routine Checkup",
    lastVisitNote: "Prescribed basic vitamins. Vitals normal.",
  },
  {
    id: "2",
    patientName: "Jane Smith",
    time: "09:30 AM",
    duration: 60,
    type: "Surgery",
    status: "in-progress",
    reason: "Minor Excision",
    lastVisitNote: "Discussed procedure, patient consented.",
  },
  {
    id: "3",
    patientName: "Alice Johnson",
    time: "10:30 AM",
    duration: 15,
    type: "Follow-up",
    status: "waiting",
    reason: "Review blood reports",
    lastVisitNote: "High BP, advised diet changes and tests.",
  },
  {
    id: "4",
    patientName: "Bob Brown",
    time: "11:00 AM",
    duration: 45,
    type: "Consultation",
    status: "confirmed",
    reason: "Back pain",
    lastVisitNote: "N/A - First visit",
  },
];

export function CalendarView() {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const getStatusColor = (status: AppointmentStatus) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 border-blue-400 text-blue-800";
      case "waiting":
        return "bg-yellow-100 border-yellow-400 text-yellow-800";
      case "in-progress":
        return "bg-green-100 border-green-400 text-green-800";
      case "completed":
        return "bg-gray-100 border-gray-400 text-gray-600";
      default:
        return "bg-gray-100 border-gray-300";
    }
  };

  const getStatusIcon = (status: AppointmentStatus) => {
    switch (status) {
      case "completed":
        return <Check className="w-4 h-4 text-gray-500" />;
      case "in-progress":
        return <User className="w-4 h-4 text-green-600" />;
      case "waiting":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full relative">
      {/* Calendar Grid */}
      <div
        className={`flex-1 flex flex-col p-4 transition-all duration-300 ${
          selectedAppointment ? "mr-80 md:mr-96" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Today's Appointments</h2>
          <div className="flex space-x-4 text-sm text-gray-600">
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span> Confirmed</div>
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span> Waiting</div>
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span> In Progress</div>
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-gray-400 mr-2"></span> Completed</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto border border-light-gray rounded-lg bg-white">
          <div className="grid grid-cols-1 divide-y divide-light-gray">
            {APPOINTMENTS.map((apt) => (
              <div
                key={apt.id}
                onClick={() => setSelectedAppointment(apt)}
                className={`p-4 cursor-pointer hover:bg-gray-50 flex items-start border-l-4 transition-colors ${
                  selectedAppointment?.id === apt.id ? "bg-gray-50" : ""
                } ${getStatusColor(apt.status).replace("bg-", "hover:bg-opacity-50 ")}`}
                style={{
                  borderLeftColor:
                    apt.status === "confirmed" ? "#60a5fa" :
                    apt.status === "waiting" ? "#facc15" :
                    apt.status === "in-progress" ? "#4ade80" : "#9ca3af"
                }}
              >
                <div className="w-24 font-medium text-gray-600 shrink-0">
                  {apt.time}
                </div>
                <div className="flex-1 ml-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{apt.patientName}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
                        {apt.type}
                      </span>
                      {getStatusIcon(apt.status)}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{apt.reason}</p>
                </div>
              </div>
            ))}
            {/* Mock empty slots */}
            <div className="p-4 text-gray-400 text-center text-sm py-8 border-l-4 border-transparent">
              No more appointments today
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Quick View Panel */}
      {selectedAppointment && (
        <div className="w-80 md:w-96 bg-white border-l border-light-gray absolute right-0 top-0 bottom-0 shadow-xl flex flex-col z-20">
          <div className="p-4 border-b border-light-gray flex justify-between items-center bg-gray-50">
            <h3 className="font-bold text-gray-800">Quick View</h3>
            <button
              onClick={() => setSelectedAppointment(null)}
              className="text-gray-500 hover:text-gray-800 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-trust-blue">{selectedAppointment.patientName}</h4>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <Clock className="w-4 h-4 mr-1" /> {selectedAppointment.time} ({selectedAppointment.duration} mins)
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Today's Visit</h5>
              <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
                <p className="font-medium text-gray-800">{selectedAppointment.reason}</p>
                <div className="mt-2 inline-block px-2 py-1 rounded text-xs font-medium bg-white border border-gray-200">
                  Type: {selectedAppointment.type}
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Last Visit Note</h5>
              <div className="bg-blue-50/50 p-3 rounded-md border border-blue-100/50 text-gray-700 text-sm leading-relaxed">
                {selectedAppointment.lastVisitNote}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-light-gray bg-gray-50">
            <button className="w-full bg-trust-blue text-white py-2.5 rounded-md font-medium hover:bg-trust-blue/90 transition-colors shadow-sm">
              Open EMR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
