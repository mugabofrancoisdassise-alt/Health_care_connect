import React, { useState, useEffect } from 'react';
import { ArrowLeft, Stethoscope, Clock, CalendarCheck, MapPin, Pill, CheckCircle2, Activity, ChevronRight } from 'lucide-react';
import SymptomInput from './components/SymptomInput';
import DoctorDiscovery from './components/DoctorDiscovery';
import AppointmentBooking from './components/AppointmentBooking';
import Confirmation from './components/Confirmation';
import HospitalArrival from './components/HospitalArrival';
import LiveWaiting from './components/LiveWaiting';
import PostVisitSummary from './components/PostVisitSummary';
import FollowUp from './components/FollowUp';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [patientData, setPatientData] = useState({
    symptoms: [],
    doctor: null,
    appointmentTime: null,
    checkedIn: false,
    medications: []
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 8));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const goToStep = (step) => setCurrentStep(step);

  const updatePatientData = (newData) => {
    setPatientData(prev => ({ ...prev, ...newData }));
  };

  const stepTitles = {
    1: "How are you feeling?",
    2: "Recommended for you",
    3: "Choose a time",
    4: "You're all set",
    5: "Welcome to the Clinic",
    6: "Live Queue",
    7: "Visit Summary",
    8: "Home Care"
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center overflow-hidden">
      {/* Mobile container constraint */}
      <div className="w-full max-w-md h-[100dvh] bg-white relative flex flex-col shadow-2xl overflow-hidden">
        
        {/* Dynamic Header */}
        <header className="px-6 py-5 flex items-center justify-between z-10 bg-white/80 backdrop-blur-md sticky top-0">
          <div className="w-10">
            {currentStep > 1 && currentStep !== 4 && currentStep !== 8 && (
              <button 
                onClick={prevStep}
                className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="flex-1 text-center flex flex-col items-center">
             <div className="flex gap-1 mb-1.5">
               {[1,2,3,4,5,6,7,8].map(step => (
                 <div 
                   key={step} 
                   className={`h-1 rounded-full transition-all duration-300 ${
                     step === currentStep ? 'w-4 bg-blue-500' : 
                     step < currentStep ? 'w-2 bg-blue-200' : 'w-2 bg-slate-100'
                   }`} 
                 />
               ))}
             </div>
             <h1 className="font-semibold text-slate-800 tracking-tight animate-fade-in">
               {stepTitles[currentStep]}
             </h1>
          </div>
          <div className="w-10 flex justify-end">
             {/* Optional avatar or menu */}
          </div>
        </header>

        {/* Content Area - Scrollable */}
        <main className="flex-1 overflow-y-auto px-6 pb-24 scroll-smooth">
          <div className="animate-slide-up h-full">
            {currentStep === 1 && <SymptomInput data={patientData} updateData={updatePatientData} onNext={nextStep} />}
            {currentStep === 2 && <DoctorDiscovery data={patientData} updateData={updatePatientData} onNext={nextStep} />}
            {currentStep === 3 && <AppointmentBooking data={patientData} updateData={updatePatientData} onNext={nextStep} />}
            {currentStep === 4 && <Confirmation data={patientData} onNext={nextStep} />}
            {currentStep === 5 && <HospitalArrival data={patientData} updateData={updatePatientData} onNext={nextStep} />}
            {currentStep === 6 && <LiveWaiting data={patientData} onNext={nextStep} />}
            {currentStep === 7 && <PostVisitSummary data={patientData} onNext={nextStep} />}
            {currentStep === 8 && <FollowUp data={patientData} onRestart={() => goToStep(1)} />}
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
