import React, { useState } from 'react';
import { MapPin, QrCode, Building, ArrowRight } from 'lucide-react';

export default function HospitalArrival({ data, updateData, onNext }) {
  const [checkingIn, setCheckingIn] = useState(false);

  const handleCheckIn = () => {
    setCheckingIn(true);
    setTimeout(() => {
      updateData({ checkedIn: true });
      onNext();
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full pt-6 items-center">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 relative">
        <Building className="w-12 h-12 text-blue-500 z-10" />
        <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20"></div>
      </div>
      
      <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">You have arrived!</h2>
      <p className="text-slate-500 mb-8 text-center px-4">We detected you are at City General Hospital. Please check in to let the doctor know you're here.</p>

      <div className="w-full card bg-white mb-8 border-dashed border-2 border-slate-200">
        <div className="flex flex-col items-center justify-center py-4">
          <QrCode className="w-32 h-32 text-slate-800 mb-4" />
          <p className="text-sm text-slate-500">Scan at kiosk if required</p>
        </div>
      </div>

      <div className="mt-auto pt-4 pb-4 w-full">
        <button 
          onClick={handleCheckIn}
          disabled={checkingIn}
          className="btn-primary relative overflow-hidden"
        >
          {checkingIn ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Checking you in...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Check In Now <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
