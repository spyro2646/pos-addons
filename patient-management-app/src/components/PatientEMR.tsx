"use client";

import React from "react";

import { FileText, ShieldAlert, Activity, Shield, Search } from "lucide-react";

export function PatientEMR() {
  return (
    <div className="flex h-full w-full bg-white divide-x divide-light-gray overflow-x-auto">
      {/* Column 1: Profile */}
      <div className="w-[300px] shrink-0 p-4 flex flex-col h-full overflow-y-auto">
        <div className="sticky top-0 bg-white pb-4 z-10">
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-sm text-gray-500 font-medium">32 Y/O • Male • ID: PT-8492</p>

          <div className="mt-4 border-2 border-red-500 bg-red-50 rounded-md p-3">
            <div className="flex items-center text-red-700 font-bold mb-1">
              <ShieldAlert className="w-4 h-4 mr-2" />
              Allergies
            </div>
            <ul className="text-sm text-red-600 list-disc list-inside">
              <li>Penicillin</li>
              <li>Peanuts</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="border border-light-gray rounded-md overflow-hidden">
            <div className="bg-gray-50 px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-light-gray">
              Vitals (Last Visit)
            </div>
            <div className="p-3 grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-gray-400 block">BP</span>
                <span className="text-lg font-bold text-gray-800">120/80</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Heart Rate</span>
                <span className="text-lg font-bold text-gray-800">72 bpm</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Weight</span>
                <span className="text-lg font-bold text-gray-800">75 kg</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Temp</span>
                <span className="text-lg font-bold text-gray-800">98.6 °F</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <button className="w-full flex items-center p-2 hover:bg-gray-50 rounded-md text-sm text-gray-700 font-medium transition-colors border border-transparent hover:border-light-gray">
              <Activity className="w-4 h-4 mr-3 text-trust-blue" />
              Medical History
            </button>
            <button className="w-full flex items-center p-2 hover:bg-gray-50 rounded-md text-sm text-gray-700 font-medium transition-colors border border-transparent hover:border-light-gray">
              <FileText className="w-4 h-4 mr-3 text-trust-blue" />
              Lab Reports
            </button>
            <button className="w-full flex items-center p-2 hover:bg-gray-50 rounded-md text-sm text-gray-700 font-medium transition-colors border border-transparent hover:border-light-gray">
              <Shield className="w-4 h-4 mr-3 text-trust-blue" />
              Insurance Details
            </button>
          </div>
        </div>
      </div>

      {/* Column 2: Timeline */}
      <div className="flex-1 min-w-[400px] flex flex-col h-full overflow-hidden bg-gray-50/50">
        <div className="p-4 border-b border-light-gray bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search records (e.g., 'BP', 'Fever')..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-trust-blue/50 text-sm"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Visit Card 1 */}
          <div className="relative pl-6 border-l-2 border-trust-blue/20">
            <div className="absolute w-3 h-3 bg-trust-blue rounded-full -left-[7px] top-1"></div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-light-gray">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-gray-800">Today, 10:30 AM</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Consultation</span>
              </div>
              <div className="mb-3">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Chief Complaint</span>
                <p className="text-sm font-medium text-gray-800">Persistent cough and mild fever for 3 days.</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Diagnosis</span>
                <p className="text-sm text-gray-700">Viral Upper Respiratory Tract Infection.</p>
              </div>
            </div>
          </div>

          {/* Visit Card 2 */}
          <div className="relative pl-6 border-l-2 border-trust-blue/20">
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-1"></div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-light-gray opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-gray-700">Oct 12, 2023</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Follow-up</span>
              </div>
              <div className="mb-3">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Chief Complaint</span>
                <p className="text-sm font-medium text-gray-800">Review BP logs.</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Notes</span>
                <p className="text-sm text-gray-700">BP stabilized at 120/80. Continue current medication.</p>
              </div>
            </div>
          </div>

          {/* Visit Card 3 */}
          <div className="relative pl-6 border-l-2 border-transparent">
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-1"></div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-light-gray opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-gray-700">Sep 05, 2023</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Consultation</span>
              </div>
              <div className="mb-3">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Chief Complaint</span>
                <p className="text-sm font-medium text-gray-800">Routine physical.</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Notes</span>
                <p className="text-sm text-gray-700">All vitals normal. Blood work requested.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Column 3: Prescription / Actions */}
      <div className="w-[350px] shrink-0 p-4 flex flex-col h-full overflow-y-auto bg-gray-50/30">
        <h2 className="text-lg font-bold mb-4 text-gray-800">New Prescription</h2>

        <div className="mb-4">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Quick Templates</label>
          <div className="grid grid-cols-2 gap-2">
            <button className="text-xs font-medium bg-white border border-light-gray p-2 rounded hover:bg-trust-blue/10 hover:border-trust-blue hover:text-trust-blue transition-colors text-left">
              Standard Fever Pack
            </button>
            <button className="text-xs font-medium bg-white border border-light-gray p-2 rounded hover:bg-trust-blue/10 hover:border-trust-blue hover:text-trust-blue transition-colors text-left">
              Acid Reflux
            </button>
            <button className="text-xs font-medium bg-white border border-light-gray p-2 rounded hover:bg-trust-blue/10 hover:border-trust-blue hover:text-trust-blue transition-colors text-left">
              Basic Cough
            </button>
            <button className="text-xs font-medium bg-white border border-light-gray p-2 rounded hover:bg-trust-blue/10 hover:border-trust-blue hover:text-trust-blue transition-colors text-left">
              Pain Relief
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white border border-light-gray rounded-md p-3 mb-4 shadow-sm flex flex-col">
          <textarea
            className="w-full flex-1 resize-none focus:outline-none text-sm text-gray-700"
            placeholder="Type medications here..."
            defaultValue="1. Paracetamol 500mg - 1-1-1 (After meals) - 3 days&#10;2. Cough Syrup - 10ml - 1-0-1 - 5 days"
          ></textarea>
        </div>

        <div className="mt-auto">
          <div className="border border-dashed border-gray-300 rounded-md p-4 mb-4 bg-white text-center cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="font-script text-xl text-gray-400 block mb-1">Dr. Smith Signature</span>
            <span className="text-xs text-gray-400">Click to sign</span>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 bg-white border border-light-gray text-gray-700 py-2 rounded-md font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm">
              Save Draft
            </button>
            <button className="flex-1 bg-trust-blue text-white py-2 rounded-md font-medium text-sm hover:bg-trust-blue/90 transition-colors shadow-sm">
              Sign & Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
