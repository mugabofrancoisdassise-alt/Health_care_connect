import React from 'react';
import { FileText, Pill, Stethoscope, Download } from 'lucide-react';

export default function PostVisitSummary({ data, onNext }) {
  return (
    <div className="flex flex-col h-full pt-4">
      <p className="text-slate-500 mb-6 text-sm">Here is a summary of your visit today. Your records have been updated securely.</p>

      <div className="card mb-6">
        <h3 className="font-semibold text-slate-800 flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
          <Stethoscope className="w-5 h-5 text-blue-500" /> Diagnosis
        </h3>
        <p className="text-slate-700 font-medium">Mild Viral Infection</p>
        <p className="text-slate-500 text-sm mt-1">Advised rest and hydration for the next 3 days. Monitor temperature.</p>
      </div>

      <div className="card mb-6 bg-blue-50/50 border-blue-100">
        <h3 className="font-semibold text-slate-800 flex items-center gap-2 mb-4 border-b border-blue-100 pb-3">
          <Pill className="w-5 h-5 text-blue-500" /> Prescription
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-medium text-slate-800">Paracetamol 500mg</p>
            <p className="text-xs text-slate-500">Take 1 tablet every 8 hours after meals</p>
          </div>
          <span className="text-xs font-bold bg-white text-blue-600 px-2 py-1 rounded shadow-sm">3 Days</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-slate-800">Vitamin C Supplement</p>
            <p className="text-xs text-slate-500">Take 1 tablet daily</p>
          </div>
          <span className="text-xs font-bold bg-white text-blue-600 px-2 py-1 rounded shadow-sm">7 Days</span>
        </div>
      </div>

      <button className="flex items-center justify-center gap-2 w-full py-3 text-blue-600 font-medium hover:bg-blue-50 rounded-xl transition-colors mb-4">
        <Download className="w-4 h-4" /> Download Medical Certificate
      </button>

      <div className="mt-auto pt-4 pb-4">
        <button 
          onClick={onNext}
          className="btn-primary"
        >
          Setup Home Care Plan
        </button>
      </div>
    </div>
  );
}
