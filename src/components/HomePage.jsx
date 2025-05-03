import React, { useState, useRef, useEffect } from 'react';
import { Bell, Home, User, Calendar, BookOpen, Bell as BellIcon, Settings, DollarSign, HelpCircle, Menu, X } from 'lucide-react';

function HomePage({ username, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const dropdownRef = useRef(null);
  
  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Get user initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('');
  };

  const userInitials = getInitials(username);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <header className="bg-[#E7BD62] text-white shadow-md z-10">
        <div className="container flex items-center justify-between p-4 mx-auto">
          <div className="flex items-center">
            <button 
              className="mr-4 lg:hidden" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold">ACCRA TECHNICAL UNIVERSITY</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Notification Bell */}
            <button className="p-2 text-white hover:text-gray-200 focus:outline-none relative">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
            </button>
            
            {/* User Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-10 h-10 bg-white text-[#134B70] rounded-full flex items-center justify-center font-bold"
              >
                {userInitials}
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-medium text-gray-900">{username}</p>
                    <p className="text-xs text-gray-500">ID: STU2023{Math.floor(1000 + Math.random() * 9000)}</p>
                  </div>
                  
                  <button 
                    onClick={onLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Left Sidebar Navigation */}
        <aside className={`bg-[#134B70] text-white w-64 min-h-screen flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static z-20`}>
          <div className="p-4">
            <div className="w-16 h-16 bg-[#E7BD62] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">
                {userInitials}
              </span>
            </div>
            <div className="text-center mb-6">
              <p className="font-medium">{username}</p>
              <p className="text-sm text-gray-300">Student</p>
            </div>
          </div>
          
          <nav className="mt-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === 'dashboard' ? 'bg-[#0e3a5d]' : 'hover:bg-[#0e3a5d]'}`}
            >
              <Home size={20} className="mr-3" />
              <span>Home</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === 'profile' ? 'bg-[#0e3a5d]' : 'hover:bg-[#0e3a5d]'}`}
            >
              <User size={20} className="mr-3" />
              <span>Profile</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === 'calendar' ? 'bg-[#0e3a5d]' : 'hover:bg-[#0e3a5d]'}`}
            >
              <Calendar size={20} className="mr-3" />
              <span>Calendar</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('resources')}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === 'resources' ? 'bg-[#0e3a5d]' : 'hover:bg-[#0e3a5d]'}`}
            >
              <BookOpen size={20} className="mr-3" />
              <span>Resources</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('notices')}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === 'notices' ? 'bg-[#0e3a5d]' : 'hover:bg-[#0e3a5d]'}`}
            >
              <BellIcon size={20} className="mr-3" />
              <span>Notice Board</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === 'settings' ? 'bg-[#0e3a5d]' : 'hover:bg-[#0e3a5d]'}`}
            >
              <Settings size={20} className="mr-3" />
              <span>Preferences</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('accounts')}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === 'accounts' ? 'bg-[#0e3a5d]' : 'hover:bg-[#0e3a5d]'}`}
            >
              <DollarSign size={20} className="mr-3" />
              <span>Accounts</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('help')}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${activeTab === 'help' ? 'bg-[#0e3a5d]' : 'hover:bg-[#0e3a5d]'}`}
            >
              <HelpCircle size={20} className="mr-3" />
              <span>Help</span>
            </button>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-grow p-6">
          {activeTab === 'dashboard' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <p className="text-gray-600">
                Welcome to your dashboard! This is where you would see your personalized content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-4 border rounded-md bg-gray-50">
                    <h3 className="font-bold text-lg">Card {item}</h3>
                    <p className="text-gray-600">This is a sample card with some content.</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'profile' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">User Profile</h2>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#E7BD62] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {userInitials}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{username}</h3>
                  <p className="text-gray-600">student@atu.edu.gh</p>
                </div>
              </div>
              <p className="text-gray-600">Profile information would be displayed here</p>
            </div>
          )}
          
          {activeTab === 'calendar' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Calendar</h2>
              <p className="text-gray-600">Your academic calendar and schedule would be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Resources</h2>
              <p className="text-gray-600">Access your learning materials and resources here.</p>
            </div>
          )}
          
          {activeTab === 'notices' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Notice Board</h2>
              <p className="text-gray-600">Important announcements and notices will be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Preferences</h2>
              <p className="text-gray-600">Configure your account preferences here.</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Enable notifications</span>
                  <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute left-1"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Dark mode</span>
                  <div className="w-12 h-6 bg-[#134B70] rounded-full flex items-center relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'accounts' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Accounts</h2>
              <p className="text-gray-600">Your financial information and payment details would be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'help' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Help Center</h2>
              <p className="text-gray-600">Need assistance? Find guides and support information here.</p>
            </div>
          )}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="container p-4 mx-auto text-center text-gray-600">
          <p>&copy; 2025 Accra Technical University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;