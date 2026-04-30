import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const TIMES = [
  '09:00 AM', '09:30 AM', '10:00 AM', '11:00 AM',
  '01:30 PM', '02:00 PM', '03:30 PM', '04:00 PM'
];

export default function AppointmentBooking({ data, updateData, onNext }) {
  // Default to today's date
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleContinue = () => {
    // Parse date safely avoiding timezone shifts by appending a time component
    const dateObj = new Date(selectedDate + 'T12:00:00');
    const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    
    updateData({ 
      appointmentTime: { date: formattedDate, time: selectedTime } 
    });
    onNext();
  };

  return (
    <div className="flex flex-col h-full pt-4">
      {/* Doctor summary snippet */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl mb-8 border border-slate-100 shadow-sm">
        <img src={data.doctor?.image} alt={data.doctor?.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-slate-800 text-sm">{data.doctor?.name}</h4>
          <p className="text-slate-500 text-xs">{data.doctor?.specialty}</p>
        </div>
      </div>

      <h3 className="font-medium text-slate-800 mb-4 flex items-center gap-2">
        <CalendarIcon className="w-5 h-5 text-blue-500" /> Select Date
      </h3>
      
      <div className="mb-8">
        <input 
          type="date" 
          value={selectedDate}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm cursor-pointer"
        />
      </div>

      <h3 className="font-medium text-slate-800 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-500" /> Select Time
      </h3>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {TIMES.map(time => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`py-3 rounded-xl border text-sm font-medium transition-all ${
              selectedTime === time
                ? 'bg-blue-50 border-blue-500 text-blue-700 ring-1 ring-blue-500'
                : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300'
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <div className="mt-auto pt-4 pb-4">
        <button 
          onClick={handleContinue}
          disabled={!selectedTime || !selectedDate}
          className="btn-primary"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
