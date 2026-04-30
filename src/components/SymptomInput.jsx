import React, { useState } from 'react';
import { Search, Thermometer, Brain, Activity, Heart, Frown } from 'lucide-react';

const COMMON_SYMPTOMS = [
  { id: 'fever', label: 'Fever', icon: Thermometer, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 'headache', label: 'Headache', icon: Brain, color: 'text-purple-500', bg: 'bg-purple-50' },
  { id: 'cough', label: 'Cough', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'chest_pain', label: 'Chest Pain', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
  { id: 'nausea', label: 'Nausea', icon: Frown, color: 'text-green-500', bg: 'bg-green-50' },
];

export default function SymptomInput({ data, updateData, onNext }) {
  const [selected, setSelected] = useState(data.symptoms || []);
  const [search, setSearch] = useState('');

  const toggleSymptom = (id) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    updateData({ symptoms: selected });
    onNext();
  };

  return (
    <div className="flex flex-col h-full pt-4">
      <p className="text-slate-500 mb-6 text-sm">Select what you're experiencing so we can find the right care for you.</p>
      
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search symptoms..." 
          className="input-field pl-12 shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h3 className="font-medium text-slate-800 mb-4 text-sm uppercase tracking-wider">Common Symptoms</h3>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {COMMON_SYMPTOMS.map(({id, label, icon: Icon, color, bg}) => {
          const isSelected = selected.includes(id);
          return (
            <button
              key={id}
              onClick={() => toggleSymptom(id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-200 border ${
                isSelected 
                  ? 'bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/20' 
                  : 'bg-white border-slate-200 hover:border-blue-300 text-slate-700'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : color}`} />
              <span className="font-medium text-sm">{label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-6 pb-4">
        <button 
          onClick={handleContinue}
          disabled={selected.length === 0}
          className="btn-primary"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
