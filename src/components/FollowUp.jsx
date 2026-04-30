import React, { useState } from 'react';
import { Pill, Bell, CheckCircle2, Moon, Sun, Home } from 'lucide-react';

export default function FollowUp({ data, onRestart }) {
  const [taken, setTaken] = useState(false);

  return (
    <div className="flex flex-col h-full pt-4">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-6 text-white mb-8 shadow-lg shadow-blue-500/20 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-1">Rest & Recover</h2>
          <p className="text-blue-100 text-sm mb-4">Your personalized care plan is active.</p>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg w-max text-sm">
            <Bell className="w-4 h-4" /> Reminders ON
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      <h3 className="font-medium text-slate-800 mb-4 px-1">Today's Schedule</h3>

      <div className="space-y-4 mb-8">
        {/* Morning Meds */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
            <Sun className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-semibold text-slate-800">Morning Meds</h4>
              <span className="text-xs font-medium text-slate-500">08:00 AM</span>
            </div>
            <p className="text-sm text-slate-500 mb-3">Paracetamol • Vitamin C</p>
            
            <button 
              onClick={() => setTaken(!taken)}
              className={`w-full py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                taken 
                  ? 'bg-green-50 text-green-600 border border-green-200' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              {taken ? (
                <><CheckCircle2 className="w-4 h-4" /> Taken</>
              ) : (
                'Mark as taken'
              )}
            </button>
          </div>
        </div>

        {/* Evening Meds */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 opacity-60">
          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center shrink-0">
            <Moon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-semibold text-slate-800">Evening Meds</h4>
              <span className="text-xs font-medium text-slate-500">08:00 PM</span>
            </div>
            <p className="text-sm text-slate-500 mb-3">Paracetamol</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 pb-4 w-full">
        <button 
          onClick={onRestart}
          className="btn-secondary flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" /> Back to Home
        </button>
      </div>
    </div>
  );
}
