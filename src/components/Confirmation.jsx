import React from 'react';
import { CalendarCheck, MapPin, BellRing, Navigation } from 'lucide-react';

export default function Confirmation({ data, onNext }) {
  return (
    <div className="flex flex-col h-full pt-8 items-center text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
        <CalendarCheck className="w-10 h-10 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Appointment Confirmed!</h2>
      <p className="text-slate-500 mb-8">We've sent the details to your phone.</p>

      <div className="w-full card bg-white text-left mb-8 animate-slide-up">
        <div className="flex items-center gap-4 mb-6">
          <img src={data.doctor?.image} alt={data.doctor?.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
          <div>
            <h4 className="font-semibold text-slate-800">{data.doctor?.name}</h4>
            <p className="text-slate-500 text-sm">{data.doctor?.specialty}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-500 mt-1">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Date & Time</p>
              <p className="font-medium text-slate-800">{data.appointmentTime?.date} at {data.appointmentTime?.time}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-500 mt-1">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Location</p>
              <p className="font-medium text-slate-800">City General Hospital</p>
              <p className="text-xs text-slate-400 mt-1">123 Health Ave, Medical District</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-3 mb-8">
        <button className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors">
          <BellRing className="w-4 h-4" /> Add Reminder
        </button>
        <button className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors">
          <Navigation className="w-4 h-4" /> Get Directions
        </button>
      </div>

      <div className="mt-auto pt-4 pb-4 w-full">
        <button 
          onClick={onNext}
          className="btn-primary"
        >
          Simulate Arrival
        </button>
      </div>
    </div>
  );
}
