import React, { useEffect, useState } from 'react';
import { Users, Clock, Coffee, Map } from 'lucide-react';

export default function LiveWaiting({ data, onNext }) {
  const [queuePosition, setQueuePosition] = useState(3);
  const [estimatedWait, setEstimatedWait] = useState(15);

  // Simulate queue moving
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setQueuePosition(2);
      setEstimatedWait(10);
    }, 4000);

    const timer2 = setTimeout(() => {
      setQueuePosition(1);
      setEstimatedWait(5);
    }, 8000);

    const timer3 = setTimeout(() => {
      setQueuePosition(0); // It's your turn
    }, 12000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="flex flex-col h-full pt-4 items-center">
      
      {queuePosition > 0 ? (
        <div className="w-full flex flex-col items-center animate-fade-in">
          <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
              <circle 
                cx="96" cy="96" r="88" 
                stroke="currentColor" 
                strokeWidth="12" 
                fill="transparent" 
                strokeDasharray="552.92" 
                strokeDashoffset={552.92 - (552.92 * (4 - queuePosition)) / 4} 
                className="text-blue-500 transition-all duration-1000 ease-in-out" 
              />
            </svg>
            <div className="text-center">
              <span className="text-5xl font-bold text-slate-800">{queuePosition}</span>
              <p className="text-slate-500 text-sm mt-1">people ahead</p>
            </div>
          </div>
          
          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 mb-8 w-full">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-500">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Estimated wait time</p>
              <p className="text-xl font-bold text-slate-800">~{estimatedWait} mins</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center animate-slide-up text-center pt-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <Users className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">It's your turn!</h2>
          <p className="text-slate-500 mb-8 text-lg">Please proceed to Room 4</p>
          
          <button onClick={onNext} className="btn-primary w-full mt-4">
            Finish Appointment
          </button>
        </div>
      )}

      {queuePosition > 0 && (
        <>
          <h3 className="font-medium text-slate-800 self-start mb-4">While you wait</h3>
          <div className="w-full grid grid-cols-2 gap-3 mb-8">
            <button className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-2 shadow-sm hover:border-blue-300 transition-colors">
              <Coffee className="w-6 h-6 text-amber-600" />
              <span className="text-sm font-medium text-slate-700">Cafeteria Menu</span>
            </button>
            <button className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-2 shadow-sm hover:border-blue-300 transition-colors">
              <Map className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Hospital Map</span>
            </button>
          </div>
          
          {/* Debug skip button for testing */}
          <button onClick={() => setQueuePosition(0)} className="text-xs text-slate-300 mt-auto">
            [Skip wait]
          </button>
        </>
      )}

    </div>
  );
}
