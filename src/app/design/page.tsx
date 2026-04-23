"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { 
  Calendar,
  Clock,
  User,
  MessageCircle,
  Video,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  Check,
  Gem,
  Users
} from 'lucide-react';

// Designer interface definition
interface Designer {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  rating: number;
  reviews: number;
  image: string;
  availability: string[];
  languages: string[];
  achievements: string[];
}

const TalkToDesigner = () => {
  // TypeScript types for state
  const [selectedDesigner, setSelectedDesigner] = useState<number | null>(null);
  const [consultationType, setConsultationType] = useState<string>('video');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    budget: '',
    message: ''
  });

  const designers: Designer[] = [
    {
      id: 1,
      name: 'Anita Sharma',
      role: 'Lead Couture Designer',
      experience: '12+ years',
      specialties: ['Bridal Wear', 'Indo-Western', 'Sustainable Fashion'],
      rating: 4.9,
      reviews: 328,
      image: '👩‍🎨',
      availability: ['Mon', 'Wed', 'Fri'],
      languages: ['English', 'Hindi'],
      achievements: ['Lakme Fashion Week Alum', 'IIFD Graduate']
    },
    {
      id: 2,
      name: 'Rajiv Mehta',
      role: 'Creative Director',
      experience: '15+ years',
      specialties: ['Traditional Wear', 'Textile Innovation', 'Red Carpet'],
      rating: 5.0,
      reviews: 512,
      image: '👨‍🎨',
      availability: ['Tue', 'Thu', 'Sat'],
      languages: ['English', 'Hindi', 'Gujarati'],
      achievements: ['National Design Award', 'Paris Fashion Week']
    },
    {
      id: 3,
      name: 'Priya Kapoor',
      role: 'Fusion Specialist',
      experience: '8+ years',
      specialties: ['Contemporary', 'Minimalist', 'Sustainable'],
      rating: 4.8,
      reviews: 256,
      image: '👩‍💼',
      availability: ['Mon', 'Tue', 'Thu'],
      languages: ['English', 'Hindi', 'French'],
      achievements: ['Vogue India Featured', 'Eco-Fashion Advocate']
    }
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  // Fix: Added ChangeEvent type
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fix: Added FormEvent type
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking consultation:', {
      designer: selectedDesigner,
      consultationType,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert("Consultation request sent successfully!");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-stone-50">
      {/* Header */}
      <nav className="px-8 py-6 bg-white/80 backdrop-blur-md border-b border-rose-100 flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <Gem className="w-6 h-6 text-rose-600" />
          <h2 className="text-xl font-light tracking-[0.3em] uppercase text-stone-800">STUDIO LUXE</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-stone-500 hidden md:block">Connect with our experts</span>
          <div className="h-4 w-px bg-rose-200 hidden md:block" />
          <button className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-100 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Live Chat</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-rose-600 to-rose-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                ✨ Personalized Design Consultation
              </span>
              <h1 className="text-5xl font-light mb-6">
                Talk to Our<br />
                <span className="font-serif italic">Design Experts</span>
              </h1>
              <p className="text-lg text-rose-50 mb-8 max-w-md">
                Get one-on-one guidance from our master designers. Transform your vision into a breathtaking reality.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-rose-100">Expert Designers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5k+</div>
                    <div className="text-sm text-rose-100">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24h</div>
                  <div className="text-sm text-rose-100">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-rose-100">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">Free</div>
                  <div className="text-sm text-rose-100">First Consult</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">4.9</div>
                  <div className="text-sm text-rose-100">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-stone-800 mb-2">Choose Your Designer</h2>
            <p className="text-stone-500">Each expert brings unique vision and expertise to your creation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {designers.map((designer) => (
              <div
                key={designer.id}
                onClick={() => setSelectedDesigner(designer.id)}
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedDesigner === designer.id ? 'scale-105' : 'hover:scale-[1.02]'
                }`}
              >
                <div className={`bg-white rounded-3xl shadow-lg overflow-hidden border-2 transition-all ${
                  selectedDesigner === designer.id 
                    ? 'border-rose-500 shadow-xl' 
                    : 'border-transparent hover:border-rose-200'
                }`}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{designer.image}</span>
                        <div>
                          <h3 className="text-xl font-medium text-stone-800">{designer.name}</h3>
                          <p className="text-sm text-rose-600">{designer.role}</p>
                        </div>
                      </div>
                      {selectedDesigner === designer.id && (
                        <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{designer.rating}</span>
                      </div>
                      <span className="text-sm text-stone-400">({designer.reviews} reviews)</span>
                      <span className="text-sm text-stone-300">•</span>
                      <span className="text-sm text-stone-600">{designer.experience}</span>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex flex-wrap gap-2">
                        {designer.specialties.map((specialty, index) => (
                          <span key={index} className="px-3 py-1 bg-rose-50 text-rose-600 text-xs rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <Calendar className="w-4 h-4 text-stone-400" />
                        <span>Available: {designer.availability.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <Award className="w-4 h-4 text-stone-400" />
                        <span className="truncate">{designer.achievements[0]}</span>
                      </div>
                    </div>
                    
                    <button type="button" className="w-full py-3 border-2 border-stone-200 rounded-xl text-stone-600 font-medium group-hover:border-rose-500 group-hover:text-rose-600 transition-colors">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Booking Form */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-linear-to-br from-rose-600 to-rose-800 p-8 text-white">
              <h3 className="text-2xl font-light mb-6">Your Consultation</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Video Consultation</h4>
                    <p className="text-sm text-rose-100">Face-to-face virtual meeting with your designer</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">In-Studio Visit</h4>
                    <p className="text-sm text-rose-100">Meet us at our flagship store for fabric selection</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">45-Minute Session</h4>
                    <p className="text-sm text-rose-100">Ample time to discuss your vision in detail</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">What to expect</span>
                </div>
                <ul className="space-y-3 text-sm text-rose-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Personalized style consultation</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Fabric and material guidance</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Custom design sketches</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Budget planning assistance</li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">Consultation Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setConsultationType('video')}
                      className={`p-4 rounded-xl border-2 transition-all ${consultationType === 'video' ? 'border-rose-500 bg-rose-50' : 'border-stone-200 hover:border-rose-200'}`}
                    >
                      <Video className={`w-5 h-5 mb-2 ${consultationType === 'video' ? 'text-rose-500' : 'text-stone-400'}`} />
                      <div className={`text-sm font-medium ${consultationType === 'video' ? 'text-rose-500' : 'text-stone-600'}`}>Video Call</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setConsultationType('instudio')}
                      className={`p-4 rounded-xl border-2 transition-all ${consultationType === 'instudio' ? 'border-rose-500 bg-rose-50' : 'border-stone-200 hover:border-rose-200'}`}
                    >
                      <MapPin className={`w-5 h-5 mb-2 ${consultationType === 'instudio' ? 'text-rose-500' : 'text-stone-400'}`} />
                      <div className={`text-sm font-medium ${consultationType === 'instudio' ? 'text-rose-500' : 'text-stone-600'}`}>In-Studio</div>
                    </button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">Preferred Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-rose-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">Preferred Time</label>
                    <select 
                      className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-rose-500 focus:outline-none"
                      onChange={(e) => setSelectedTime(e.target.value)}
                      value={selectedTime}
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map(time => <option key={time} value={time}>{time}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-rose-500 focus:outline-none" />
                  <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-rose-500 focus:outline-none" />
                </div>

                <button
                  type="submit"
                  disabled={!selectedDesigner || !selectedDate || !selectedTime}
                  className="w-full py-4 bg-linear-to-r from-rose-600 to-rose-500 text-white rounded-xl font-medium hover:from-rose-700 hover:to-rose-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToDesigner;