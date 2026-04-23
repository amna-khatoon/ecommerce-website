'use client'

import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Sparkles,
  Heart,
  ArrowRight,
  Palette,
  Droplets,
  Shirt,
  Gem,
  Star
} from 'lucide-react';

const DesignYourself = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    category: 'Gown',
    fabric: 'Silk',
    color: 'Emerald Green',
    colorHex: '#046307',
    neckline: 'V-Neck',
    sleeves: 'Full Sleeves'
  });

  const categories = [
    { 
      name: 'Gown', 
      price: 5999,
      description: 'Elegant floor-length silhouette',
      image: '👗',
      popular: true
    },
    { 
      name: 'Saree', 
      price: 4599,
      description: 'Timeless six yards of grace',
      image: '🧵',
      popular: false
    },
    { 
      name: 'Kurti Set', 
      price: 3299,
      description: 'Contemporary ethnic chic',
      image: '👚',
      popular: false
    },
    { 
      name: 'Co-ord Set', 
      price: 3999,
      description: 'Modern matching separates',
      image: '👘',
      popular: true
    }
  ];

  const fabrics = [
    { 
      name: 'Silk', 
      desc: 'Lustrous & Smooth',
      weight: 'Medium weight',
      care: 'Dry clean only',
      icon: '✨'
    },
    { 
      name: 'Organza', 
      desc: 'Sheer & Airy',
      weight: 'Lightweight',
      care: 'Gentle hand wash',
      icon: '🌸'
    },
    { 
      name: 'Georgette', 
      desc: 'Flowy & Lightweight',
      weight: 'Very light',
      care: 'Hand wash cold',
      icon: '🍃'
    },
    { 
      name: 'Velvet', 
      desc: 'Rich & Heavy',
      weight: 'Heavy weight',
      care: 'Dry clean only',
      icon: '👑'
    }
  ];

  const colors = [
    { name: 'Emerald Green', hex: '#046307', mood: 'Royal & Luxurious' },
    { name: 'Ruby Red', hex: '#9B111E', mood: 'Passionate & Bold' },
    { name: 'Midnight Blue', hex: '#191970', mood: 'Mysterious & Deep' },
    { name: 'Champagne', hex: '#F7E7CE', mood: 'Elegant & Soft' },
    { name: 'Classic Black', hex: '#000000', mood: 'Timeless & Chic' },
    { name: 'Blush Pink', hex: '#FADADD', mood: 'Romantic & Delicate' },
    { name: 'Lavender Mist', hex: '#E6E6FA', mood: 'Dreamy & Calm' },
    { name: 'Burgundy Wine', hex: '#800020', mood: 'Rich & Sophisticated' }
  ];

  const necklineOptions = [
    { name: 'High Neck', style: 'Modest & Regal' },
    { name: 'V-Neck', style: 'Flattering & Classic' },
    { name: 'Sweetheart', style: 'Romantic & Feminine' },
    { name: 'Deep U', style: 'Modern & Bold' },
    { name: 'Boat Neck', style: 'Elegant & Sophisticated' },
    { name: 'Off-Shoulder', style: 'Trendy & Glamorous' }
  ];

  const sleeveOptions = [
    { name: 'Sleeveless', style: 'Contemporary & Cool' },
    { name: 'Cap Sleeves', style: 'Delicate & Sweet' },
    { name: 'Half Sleeves', style: 'Everyday Comfort' },
    { name: 'Three-Quarter', style: 'Elegant & Practical' },
    { name: 'Full Sleeves', style: 'Classic & Modest' },
    { name: 'Bell Sleeves', style: 'Dramatic & Boho' }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const getStepTitle = () => {
    switch(step) {
      case 1: return { title: 'Choose Your Silhouette', subtitle: 'Select the foundation of your dream outfit' };
      case 2: return { title: 'Select Fabric', subtitle: 'Choose from our premium material collection' };
      case 3: return { title: 'Pick Your Shade', subtitle: 'Find the perfect color that speaks to you' };
      case 4: return { title: 'Final Details', subtitle: 'Add the finishing touches to your creation' };
      default: return { title: '', subtitle: '' };
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-50 via-white to-stone-50">
      {/* HEADER */}
      <nav className="px-8 py-6 bg-white/80 backdrop-blur-md border-b border-stone-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gem className="w-6 h-6 text-stone-800" />
          <h2 className="text-xl font-light tracking-[0.3em] uppercase ">STUDIO LUXE</h2>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            {['Silhouette', 'Fabric', 'Color', 'Details'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                    step > index + 1 
                      ? 'bg-stone-800 text-white' 
                      : step === index + 1 
                      ? 'bg-stone-800 text-white ring-4 ring-stone-200' 
                      : 'bg-stone-100 text-stone-400'
                  }`}>
                    {step > index + 1 ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className={`text-xs mt-1 ${
                    step === index + 1 ? 'text-stone-800 font-medium' : 'text-stone-400'
                  }`}>
                    {label}
                  </span>
                </div>
                {index < 3 && (
                  <ArrowRight className={`w-4 h-4 mx-2 ${
                    step > index + 1 ? 'text-stone-800' : 'text-stone-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Progress Dots */}
          <div className="flex md:hidden gap-1.5">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={`h-2 rounded-full transition-all duration-300 ${
                  step >= s ? 'bg-stone-800 w-6' : 'bg-stone-200 w-2'
                }`} 
              />
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
        
        {/* LEFT: PREVIEW PANEL */}
        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col items-center justify-center bg-linear-to-br from-stone-100 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-stone-800 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl" />
          </div>
          
          {/* Preview Card */}
          <div className="relative w-full max-w-md group">
            {/* 3D Effect Layers */}
            <div className="absolute -inset-1 bg-linear-to-r from-stone-300 to-stone-500 rounded-4xl opacity-20 group-hover:opacity-30 transition-opacity blur" />
            
            <div className="relative bg-white rounded-4xl shadow-2xl overflow-hidden">
              {/* Color Overlay */}
              <div 
                className="absolute inset-0 opacity-10 transition-colors duration-700"
                style={{ backgroundColor: selections.colorHex }}
              />
              
              {/* Main Preview */}
              <div className="relative aspect-`[3/4]` p-8 flex flex-col items-center justify-between">
                {/* Top Decorative Element */}
                <div className="w-full flex justify-between items-start">
                  <Sparkles className="w-5 h-5 text-stone-400" />
                  <Heart className="w-5 h-5 text-stone-400" />
                </div>
                
                {/* Outfit Visualization */}
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="text-8xl mb-4 animate-float">
                      {categories.find(c => c.name === selections.category)?.image}
                    </div>
                    <h3 className="text-4xl font-light tracking-wide text-stone-800">
                      {selections.category}
                    </h3>
                  </div>
                  
                  {/* Details Badge */}
                  <div className="inline-block px-6 py-3 bg-stone-800/5 backdrop-blur-sm rounded-full">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Shirt className="w-4 h-4" />
                        {selections.fabric}
                      </span>
                      <span className="w-1 h-1 bg-stone-400 rounded-full" />
                      <span className="flex items-center gap-1">
                        <Palette className="w-4 h-4" />
                        {selections.color}
                      </span>
                    </div>
                  </div>
                  
                  {/* Style Tags */}
                  <div className="flex justify-center gap-2 text-xs uppercase tracking-wider text-stone-500">
                    <span className="px-3 py-1 bg-stone-100 rounded-full">{selections.neckline}</span>
                    <span className="px-3 py-1 bg-stone-100 rounded-full">{selections.sleeves}</span>
                  </div>
                </div>
                
                {/* Color Swatch */}
                <div className="w-full flex justify-center">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md" 
                      style={{ backgroundColor: selections.colorHex }}
                    />
                    <span className="text-sm text-stone-600">{selections.color}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-stone-500 flex items-center gap-2">
            <Droplets className="w-4 h-4" />
            Your unique creation, visualized in real-time
          </p>
        </div>

        {/* RIGHT: CONFIGURATOR */}
        <div className="lg:col-span-5 bg-white p-8 lg:p-12 overflow-y-auto">
          
          {/* Step Header */}
          <div className="mb-10">
            <span className="text-sm font-medium text-stone-400 uppercase tracking-wider">
              Step {step} of 4
            </span>
            <h1 className="text-4xl font-light text-stone-800 mt-2">
              {getStepTitle().title}
            </h1>
            <p className="text-stone-500 mt-2">
              {getStepTitle().subtitle}
            </p>
          </div>

          {/* STEP 1: CATEGORY */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              {categories.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => setSelections({...selections, category: item.name})}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left group hover:shadow-lg ${
                    selections.category === item.name 
                      ? 'border-stone-800 bg-stone-50' 
                      : 'border-stone-100 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{item.image}</span>
                      <div>
                        <h3 className="text-xl font-medium text-stone-800 flex items-center gap-2">
                          {item.name}
                          {item.popular && (
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-stone-500 mt-1">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-light text-stone-800">₹{item.price}</span>
                      <p className="text-xs text-stone-400">starting from</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* STEP 2: FABRIC */}
          {step === 2 && (
            <div className="grid grid-cols-1 gap-4 animate-fadeIn">
              {fabrics.map((f) => (
                <button 
                  key={f.name}
                  onClick={() => setSelections({...selections, fabric: f.name})}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    selections.fabric === f.name 
                      ? 'border-stone-800 bg-stone-50 shadow-md' 
                      : 'border-stone-100 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{f.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-stone-800">{f.name}</h3>
                        <span className="text-xs text-stone-400">{f.weight}</span>
                      </div>
                      <p className="text-sm text-stone-600 mt-1">{f.desc}</p>
                      <p className="text-xs text-stone-400 mt-2">{f.care}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* STEP 3: COLOR */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-2 gap-3">
                {colors.map((c) => (
                  <button 
                    key={c.name}
                    onClick={() => setSelections({...selections, color: c.name, colorHex: c.hex})}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selections.color === c.name 
                        ? 'border-stone-800 bg-stone-50' 
                        : 'border-stone-100 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg shadow-inner" 
                        style={{ backgroundColor: c.hex }}
                      />
                      <div className="flex-1 text-left">
                        <div className="font-medium text-sm text-stone-800">{c.name}</div>
                        <div className="text-xs text-stone-400 mt-0.5">{c.mood}</div>
                      </div>
                      {selections.color === c.name && (
                        <Check className="w-4 h-4 text-stone-800" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Color Psychology Note */}
              <div className="mt-6 p-4 bg-stone-50 rounded-xl">
                <p className="text-xs text-stone-500 leading-relaxed">
                  <span className="font-medium text-stone-700">✨ Color Note:</span> The color you choose influences the overall mood and versatility of your outfit. Consider your skin tone and occasion when making your selection.
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: FINAL DETAILS */}
          {step === 4 && (
            <div className="space-y-10 animate-fadeIn">
              {/* Neckline Selection */}
              <div>
                <h3 className="text-sm font-medium text-stone-800 uppercase tracking-wider mb-4">
                  Neckline Style
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {necklineOptions.map((n) => (
                    <button 
                      key={n.name} 
                      onClick={() => setSelections({...selections, neckline: n.name})}
                      className={`px-4 py-3 rounded-xl border-2 text-left transition-all duration-300 ${
                        selections.neckline === n.name 
                          ? 'border-stone-800 bg-stone-50' 
                          : 'border-stone-100 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-medium text-stone-800">{n.name}</div>
                      <div className="text-xs text-stone-400 mt-1">{n.style}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Sleeve Selection */}
              <div>
                <h3 className="text-sm font-medium text-stone-800 uppercase tracking-wider mb-4">
                  Sleeve Style
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {sleeveOptions.map((s) => (
                    <button 
                      key={s.name} 
                      onClick={() => setSelections({...selections, sleeves: s.name})}
                      className={`px-4 py-3 rounded-xl border-2 text-left transition-all duration-300 ${
                        selections.sleeves === s.name 
                          ? 'border-stone-800 bg-stone-50' 
                          : 'border-stone-100 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-medium text-stone-800">{s.name}</div>
                      <div className="text-xs text-stone-400 mt-1">{s.style}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Card */}
              <div className="mt-8 p-6 bg-linear-to-r from-stone-800 to-stone-700 rounded-2xl text-white">
                <h4 className="text-sm uppercase tracking-wider opacity-80 mb-3">Your Creation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Silhouette</span>
                    <span className="font-light">{selections.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fabric</span>
                    <span className="font-light">{selections.fabric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Color</span>
                    <span className="font-light">{selections.color}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/20">
                    <span>Estimated Price</span>
                    <span className="text-xl">₹{categories.find(c => c.name === selections.category)?.price}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* NAVIGATION BUTTONS */}
          <div className="mt-12 flex gap-4">
            {step > 1 && (
              <button 
                onClick={prevStep}
                className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-stone-200 rounded-xl hover:border-stone-800 hover:bg-stone-50 transition-all duration-300 group"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                Back
              </button>
            )}
            
            {step < 4 ? (
              <button 
                onClick={nextStep}
                className="flex-2 flex items-center justify-center gap-2 py-4 bg-stone-800 text-white rounded-xl hover:bg-stone-900 transition-all duration-300 group"
              >
                Continue 
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button 
                className="flex-2 py-4 bg-linear-to-r from-stone-800 to-stone-700 text-white rounded-xl hover:from-stone-900 hover:to-stone-800 transition-all duration-300 font-medium flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4" />
                Create My Masterpiece
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DesignYourself;