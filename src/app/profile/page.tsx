"use client";

import React, { useState, useRef } from "react";
import { 
  MapPin, Heart, History, HelpCircle, Camera, 
  ChevronRight, X, Edit3 
} from "lucide-react";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- 1. MAIN STATE (Jo screen par dikhega) ---
  const [user, setUser] = useState({
    firstName: "Eleanor",
    lastName: "Pena",
    email: "elanorpena@gmail.com",
    mobile: "+91 9182939202",
    profileImage: null as string | null
  });

  // --- 2. TEMPORARY STATE (Sirf modal ke andar preview ke liye) ---
  const [tempImage, setTempImage] = useState<string | null>(null);

  // Jab Modal khule, tempImage ko current image se set karein
  const openModal = () => {
    setTempImage(user.profileImage);
    setIsModalOpen(true);
  };

  // Image selection logic (Sirf preview dikhayega)
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempImage(imageUrl); // Sirf modal mein dikhega abhi
    }
  };

  // --- 3. FINAL SAVE HANDLER ---
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Sab kuch ek saath update ho raha hai
    setUser({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      mobile: formData.get("mobile") as string,
      profileImage: tempImage // Ab final photo save hogi
    });

    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] py-12 px-4 lg:px-20 relative font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-red-900 mb-10 tracking-tight">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center relative">
              <button 
                onClick={openModal}
                className="absolute top-5 right-5 p-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-all shadow-sm"
              >
                <Edit3 size={18} />
              </button>

              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-pink-50 flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
                  {user.profileImage ? (
                    <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl font-bold text-pink-600 uppercase">
                      {user.firstName[0]}{user.lastName[0]}
                    </span>
                  )}
                </div>
                
                {/* Camera icon bhi modal open karega taaki wahi se change ho */}
                <button 
                  onClick={openModal}
                  className="absolute bottom-1 right-1 bg-gray-900 text-white p-2 rounded-full hover:bg-pink-600 transition-colors shadow-lg"
                >
                  <Camera size={18} />
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900">{user.firstName} {user.lastName}</h2>
              <p className="text-gray-400 text-sm">Member since 2024</p>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <nav className="space-y-1">
                <ProfileNavLink icon={<MapPin size={20}/>} label="Saved Addresses" />
                <ProfileNavLink icon={<Heart size={20}/>} label="Wishlist" />
                <ProfileNavLink icon={<History size={20}/>} label="Order History" />
                <ProfileNavLink icon={<HelpCircle size={20}/>} label="Help Center" />
              </nav>
            </div>
          </div>

          {/* --- RIGHT COLUMN (DISPLAY) --- */}
          <div className="lg:col-span-8">
            <div className="bg-pink-50 p-8 md:p-12 rounded-[3rem] shadow-xl shadow-pink-100/20 border border-pink-100">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <DisplayField label="First Name" value={user.firstName} />
                  <DisplayField label="Last Name" value={user.lastName} />
                </div>
                <DisplayField label="Email" value={user.email} />
                <DisplayField label="Mobile Number" value={user.mobile} />

                <div className="flex justify-end pt-4">
                  <button 
                    onClick={openModal}
                    className="w-full md:w-auto px-6 py-3 bg-red-900 text-white rounded-xl font-bold text-lg hover:bg-red-800 transition-all shadow-lg active:scale-95"
                  >
                    Save Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- EDIT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-pink-50 p-6 flex justify-between items-center border-b border-pink-100">
              <h3 className="text-xl font-black text-gray-900">Edit Profile</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-pink-100 rounded-full">
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-8">
              <form className="space-y-6" onSubmit={handleSave}>
                
                {/* Image Update Section inside Modal */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-24 h-24 mb-2">
                    <div className="w-full h-full rounded-full bg-gray-100 border-2 border-pink-100 overflow-hidden flex items-center justify-center">
                      {tempImage ? (
                        <img src={tempImage} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-2xl font-bold text-pink-300 uppercase">{user.firstName[0]}</span>
                      )}
                    </div>
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-md border border-gray-100 text-pink-600 hover:bg-pink-600 hover:text-white transition-all"
                    >
                      <Camera size={14} />
                    </button>
                  </div>
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                </div>
               

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">First Name</label>
                    <input name="firstName" defaultValue={user.firstName} className="w-full bg-white border border-pink-200 rounded-xl px-6 py-4 focus:border-pink-500 outline-none shadow-sm" />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Last Name</label>
                    <input name="lastName" defaultValue={user.lastName} className="w-full bg-white border border-pink-200 rounded-xl px-6 py-4 focus:border-pink-500 outline-none shadow-sm" />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
                  <input name="email" type="email" defaultValue={user.email} className="w-full bg-white border border-pink-200 rounded-xl px-6 py-4 focus:border-pink-500 outline-none shadow-sm" />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Mobile Number</label>
                  <input name="mobile" defaultValue={user.mobile} className="w-full bg-white border border-pink-200 rounded-xl px-6 py-4 focus:border-pink-500 outline-none shadow-sm" />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2 border border-gray-100 rounded-lg font-bold text-gray-500 hover:bg-gray-50">Cancel</button>
                  <button type="submit" className="px-8 py-2 bg-red-900 text-white rounded-lg font-bold hover:bg-red-800 shadow-md transition-all">Update Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- HELPERS ---
const DisplayField = ({ label, value }: { label: string, value: string }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-gray-500 ml-1">{label}</label>
    <div className="w-full bg-white border border-pink-100 rounded-xl px-6 py-4 font-bold text-gray-900 shadow-sm">{value}</div>
  </div>
);

const ProfileNavLink = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button type="button" className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-pink-50 rounded-2xl transition-all group">
    <div className="flex items-center gap-4 text-gray-600 group-hover:text-pink-600 transition-colors">
      <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-white transition-colors shadow-sm">{icon}</div>
      <span className="font-bold text-sm">{label}</span>
    </div>
    <ChevronRight size={16} className="text-gray-300 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
  </button>
);

export default ProfilePage;