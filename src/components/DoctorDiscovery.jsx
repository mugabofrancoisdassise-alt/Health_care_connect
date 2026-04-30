import React, { useState } from 'react';
import { Star, MapPin, Clock, ChevronRight } from 'lucide-react';

const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Mugabo Francois',
    specialty: 'General Practitioner',
    rating: 4.9,
    reviews: 124,
    distance: '1.2 km',
    available: 'Today',
    image: '/mugabo.png',
    recommended: true
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Internal Medicine',
    rating: 4.8,
    reviews: 98,
    distance: '2.5 km',
    available: 'Tomorrow',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    recommended: false
  }
];

export default function DoctorDiscovery({ data, updateData, onNext }) {
  const [selectedDoctor, setSelectedDoctor] = useState(data.doctor?.id || null);

  const handleContinue = () => {
    const doctor = DOCTORS.find(d => d.id === selectedDoctor);
    updateData({ doctor });
    onNext();
  };

  return (
    <div className="flex flex-col h-full pt-4">
      <p className="text-slate-500 mb-6 text-sm">Based on your symptoms, we recommend these specialists nearby.</p>
      
      <div className="flex flex-col gap-4 mb-8 overflow-y-auto">
        {DOCTORS.map(doc => (
          <div 
            key={doc.id}
            onClick={() => setSelectedDoctor(doc.id)}
            className={`card cursor-pointer transition-all border-2 ${
              selectedDoctor === doc.id 
                ? 'border-blue-500 ring-4 ring-blue-50' 
                : 'border-transparent hover:border-slate-200'
            }`}
          >
            {doc.recommended && (
              <div className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wide">
                Best Match
              </div>
            )}
            <div className="flex items-center gap-4">
              <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 text-lg">{doc.name}</h3>
                <p className="text-slate-500 text-sm mb-1">{doc.specialty}</p>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1 font-medium text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" /> {doc.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> {doc.distance}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Divider */}
            <div className="h-px bg-slate-100 my-4 w-full"></div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
                <Clock className="w-4 h-4" /> Next available: {doc.available}
              </div>
              <ChevronRight className={`w-5 h-5 transition-colors ${selectedDoctor === doc.id ? 'text-blue-500' : 'text-slate-300'}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4 pb-4 bg-gradient-to-t from-slate-50 to-transparent sticky bottom-0">
        <button 
          onClick={handleContinue}
          disabled={!selectedDoctor}
          className="btn-primary"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
