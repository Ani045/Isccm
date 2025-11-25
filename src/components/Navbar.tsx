import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ExternalLink, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDccsOpen, setMobileDccsOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileNCROpen, setMobileNCROpen] = useState(false);

  // Desktop dropdown states for 1024px screens
  const [desktopDccsOpen, setDesktopDccsOpen] = useState(false);
  const [desktopAcademicsOpen, setDesktopAcademicsOpen] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);
  const [desktopNCROpen, setDesktopNCROpen] = useState(false);

  const location = useLocation();

  // Refs for click outside detection
  const dccsRef = useRef<HTMLDivElement>(null);
  const academicsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const ncrRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dccsRef.current && !dccsRef.current.contains(event.target as Node)) {
        setDesktopDccsOpen(false);
      }
      if (academicsRef.current && !academicsRef.current.contains(event.target as Node)) {
        setDesktopAcademicsOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setDesktopMoreOpen(false);
      }
      if (ncrRef.current && !ncrRef.current.contains(event.target as Node)) {
        setDesktopNCROpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const mainMenuItems = [
  { name: 'About ISCCM', href: '/about', type: 'internal' },
  { name: 'Events', href: '/events', type: 'internal' },
  { name: 'Executive Committee', href: '/executive-committee', type: 'internal' },
  { name: 'Gallery', href: '/gallery', type: 'internal' }];


  const moreMenuItems = [
  { name: 'Members Forum', href: '/members-forum', type: 'internal' },
  { name: 'SCCM Delhi/Noida Members', href: '/members-list', type: 'internal' },
  { name: 'Branch Election 2024', href: '/branch-election', type: 'internal' },
  { name: 'Contact', href: '/contact', type: 'internal' }];


  const dccsMenuItems = [
  { name: 'DCCS 2024', href: '/dccs-2024', type: 'internal' },
  { name: 'DCCS 2024 Brochure', href: '/dccs-2024-brochure', type: 'internal' },
  { name: 'Workshops', href: '/workshops', type: 'internal' }];


  const academicsMenuItems = [
  { name: 'News & Publications', href: '/news', type: 'internal' },
  { name: 'Tarang Newsletter', href: '/tarang-newsletter', type: 'internal' },
  { name: 'IJCCM', href: 'https://www.ijccm.org/journalDetails/IJCCM', type: 'external' },
  { name: 'IJCCR', href: 'https://www.ijccr.org/journalDetails/IJCCR', type: 'external' }];


  const ncrMegaCritiConMenuItems = [
  { name: 'Event Details', href: '/ncr-event-details', type: 'internal' },
  { name: 'Abstract Submission', href: '/ncr-abstract-submission', type: 'internal' },
  { name: 'Registration', href: 'https://in.eregnow.com/ticketing/register/dccs25', type: 'external' },
  { name: 'Quiz', href: '/ncr-quiz-workshop', type: 'internal' },
  { name: 'Workshop', href: '/ncr-workshops', type: 'internal' }
  // { name: 'Partnership-Brochure', href: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/1040138e-7ccd-4dfd-8faf-9e05bb874bff.pdf', type: 'external' }
];


  const isActivePage = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center group flex-shrink-0">
            <Link to="/">
              <img
                src="logo(new).png"
                alt="ISCCM Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />

            </Link>
          </div>

          {/* Desktop Menu - Large screens (1400px+) */}
          <div className="hidden min-[1400px]:flex items-center space-x-1">
            {mainMenuItems.map((item) =>
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group whitespace-nowrap ${
              isActivePage(item.href) ?
              'text-[#BA0A1E]' :
              'text-gray-700 hover:text-[#BA0A1E]'}`
              }>

                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] transition-all duration-300 ${
              isActivePage(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`
              }></div>
              </Link>
            )}
            
            {/* DCCS dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 whitespace-nowrap">
                <span>DCCS</span>
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {dccsMenuItems.map((item) =>
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                      {item.name}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            
            {/* NCR Mega CritiCon dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 whitespace-nowrap">
                <span>NCR Mega CritiCon 2025</span>
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {ncrMegaCritiConMenuItems.map((item) =>
                  item.type === 'internal' ?
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        {item.name}
                      </Link> :

                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        <span>{item.name}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a>

                  )}
                </div>
              </div>
            </div>

            {/* Academics dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 whitespace-nowrap">
                <span>Academics</span>
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {academicsMenuItems.map((item) =>
                  item.type === 'internal' ?
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        {item.name}
                      </Link> :

                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        <span>{item.name}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a>

                  )}
                </div>
              </div>
            </div>
            
            {/* More dropdown for additional items */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 whitespace-nowrap">
                <span>More</span>
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {moreMenuItems.map((item) =>
                  item.type === 'external' ?
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        <span>{item.name}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a> :

                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        {item.name}
                      </Link>

                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu - Medium Large screens (1024px-1399px) - NO JOIN BUTTON */}
          <div className="hidden lg:flex min-[1400px]:hidden items-center space-x-1">
            {/* Show first 3 main items directly */}
            {mainMenuItems.slice(0, 3).map((item) =>
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 group whitespace-nowrap ${
              isActivePage(item.href) ?
              'text-[#BA0A1E]' :
              'text-gray-700 hover:text-[#BA0A1E]'}`
              }>

                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] transition-all duration-300 ${
              isActivePage(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`
              }></div>
              </Link>
            )}
            
            {/* DCCS dropdown */}
            <div className="relative" ref={dccsRef}>
              <button
                onClick={() => {
                  setDesktopDccsOpen(!desktopDccsOpen);
                  setDesktopAcademicsOpen(false);
                  setDesktopMoreOpen(false);
                  setDesktopNCROpen(false);
                }}
                className="flex items-center space-x-1 px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 whitespace-nowrap">

                <span>DCCS</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${desktopDccsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 z-50 ${desktopDccsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2">
                  {dccsMenuItems.map((item) =>
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setDesktopDccsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                      {item.name}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            
            {/* NCR Mega CritiCon dropdown */}
            <div className="relative" ref={ncrRef}>
              <button
                onClick={() => {
                  setDesktopNCROpen(!desktopNCROpen);
                  setDesktopDccsOpen(false);
                  setDesktopAcademicsOpen(false);
                  setDesktopMoreOpen(false);
                }}
                className="flex items-center space-x-1 px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 whitespace-nowrap">

                <span>NCR Mega CritiCon 2025</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${desktopNCROpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 z-50 ${desktopNCROpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2">
                  {ncrMegaCritiConMenuItems.map((item) =>
                  item.type === 'internal' ?
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setDesktopNCROpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        {item.name}
                      </Link> :

                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDesktopNCROpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        <span>{item.name}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a>

                  )}
                </div>
              </div>
            </div>

            {/* Academics dropdown */}
            <div className="relative" ref={academicsRef}>
              <button
                onClick={() => {
                  setDesktopAcademicsOpen(!desktopAcademicsOpen);
                  setDesktopDccsOpen(false);
                  setDesktopMoreOpen(false);
                  setDesktopNCROpen(false);
                }}
                className="flex items-center space-x-1 px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 whitespace-nowrap">

                <span>Academics</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${desktopAcademicsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 z-50 ${desktopAcademicsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2">
                  {academicsMenuItems.map((item) =>
                  item.type === 'internal' ?
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setDesktopAcademicsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        {item.name}
                      </Link> :

                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDesktopAcademicsOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        <span>{item.name}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a>

                  )}
                </div>
              </div>
            </div>
            
            {/* More dropdown with remaining items */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => {
                  setDesktopMoreOpen(!desktopMoreOpen);
                  setDesktopDccsOpen(false);
                  setDesktopAcademicsOpen(false);
                  setDesktopNCROpen(false);
                }}
                className="flex items-center space-x-1 px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 whitespace-nowrap">

                <span>More</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${desktopMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 z-50 ${desktopMoreOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2">
                  {/* Remaining main items (Gallery) */}
                  {mainMenuItems.slice(3).map((item) =>
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setDesktopMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                      {item.name}
                    </Link>
                  )}
                  {/* Separator */}
                  <div className="border-t border-gray-100 my-1"></div>
                  {/* More items */}
                  {moreMenuItems.map((item) =>
                  item.type === 'external' ?
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setDesktopMoreOpen(false)}
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        <span>{item.name}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a> :

                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setDesktopMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 hover:text-[#BA0A1E] transition-all duration-200">

                        {item.name}
                      </Link>

                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Only show on very large screens (1400px+) */}
          <div className="hidden min-[1400px]:block">
            <div className="relative group">
              <Button
                className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm"
                onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>

                Join ISCCM
              </Button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-3">
                  <div className="text-xs text-amber-600 font-medium mb-1">⚠️ Important Notice</div>
                  <div className="text-xs text-gray-700">Please enter Delhi/Noida as your city and provide your Delhi/Noida address when applying.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#BA0A1E] transition-colors duration-300 flex-shrink-0"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              // Reset all dropdowns when menu is closed
              if (isMenuOpen) {
                setMobileDccsOpen(false);
                setMobileAcademicsOpen(false);
                setMobileNCROpen(false);
              }
            }}>

            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />

              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />

            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-1 max-h-[60vh] overflow-y-auto">
              {/* Main Menu Items */}
              {mainMenuItems.map((item) =>
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 font-medium transition-all duration-200 rounded-lg mx-2 text-sm ${
                isActivePage(item.href) ?
                'text-[#BA0A1E] bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5' :
                'text-gray-700 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5'}`
                }
                onClick={() => setIsMenuOpen(false)}>

                  {item.name}
                </Link>
              )}
              
              {/* More Menu Items */}
              {moreMenuItems.map((item) =>
              item.type === 'external' ?
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 font-medium transition-all duration-200 rounded-lg mx-2 text-sm"
                onClick={() => setIsMenuOpen(false)}>

                    <span>{item.name}</span>
                    <ExternalLink size={14} className="opacity-60" />
                  </a> :

              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-3 font-medium transition-all duration-200 rounded-lg mx-2 text-sm ${
                isActivePage(item.href) ?
                'text-[#BA0A1E] bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5' :
                'text-gray-700 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5'}`
                }
                onClick={() => setIsMenuOpen(false)}>

                    {item.name}
                  </Link>

              )}
              
              {/* DCCS Dropdown */}
              <div className="px-2">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setMobileDccsOpen(!mobileDccsOpen)}>

                  <span>DCCS</span>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-300 ${mobileDccsOpen ? 'rotate-90' : ''}`} />

                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileDccsOpen ? 'max-h-40' : 'max-h-0'}`}>
                  {dccsMenuItems.map((item) =>
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-8 py-2 font-medium transition-all duration-200 rounded-lg mx-2 text-sm ${
                    isActivePage(item.href) ?
                    'text-[#BA0A1E] bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5' :
                    'text-gray-600 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5'}`
                    }
                    onClick={() => setIsMenuOpen(false)}>

                      {item.name}
                    </Link>
                  )}
                </div>
              </div>
              
              {/* NCR Mega CritiCon Dropdown */}
              <div className="px-2">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setMobileNCROpen(!mobileNCROpen)}>

                  <span>NCR Mega CritiCon 2025</span>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-300 ${mobileNCROpen ? 'rotate-90' : ''}`} />

                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileNCROpen ? 'max-h-60' : 'max-h-0'}`}>
                  {ncrMegaCritiConMenuItems.map((item) =>
                  item.type === 'internal' ?
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-8 py-2 font-medium transition-all duration-200 rounded-lg mx-2 text-sm ${
                    isActivePage(item.href) ?
                    'text-[#BA0A1E] bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5' :
                    'text-gray-600 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5'}`
                    }
                    onClick={() => setIsMenuOpen(false)}>

                        {item.name}
                      </Link> :

                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-8 py-2 text-gray-600 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 font-medium transition-all duration-200 rounded-lg mx-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}>

                        <span>{item.name}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a>

                  )}
                </div>
              </div>

              {/* Academics Dropdown */}
              <div className="px-2">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 font-medium transition-all duration-200 rounded-lg text-sm"
                  onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}>

                  <span>Academics</span>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-300 ${mobileAcademicsOpen ? 'rotate-90' : ''}`} />

                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileAcademicsOpen ? 'max-h-40' : 'max-h-0'}`}>
                  {academicsMenuItems.map((item) =>
                  item.type === 'internal' ?
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-8 py-2 font-medium transition-all duration-200 rounded-lg mx-2 text-sm ${
                    isActivePage(item.href) ?
                    'text-[#BA0A1E] bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5' :
                    'text-gray-600 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5'}`
                    }
                    onClick={() => setIsMenuOpen(false)}>

                        {item.name}
                      </Link> :

                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-8 py-2 text-gray-600 hover:text-[#BA0A1E] hover:bg-gradient-to-r hover:from-[#BA0A1E]/5 hover:to-[#035D8E]/5 font-medium transition-all duration-200 rounded-lg mx-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}>

                        <span>{item.name}</span>
                        <ExternalLink size={14} className="opacity-60" />
                      </a>

                  )}
                </div>
              </div>
              
              {/* Mobile CTA Section */}
              <div className="px-6 py-3 border-t border-gray-100 mt-4">
                <div className="mb-2 p-2 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="text-xs text-amber-600 font-medium mb-1">⚠️ Important Notice</div>
                  <div className="text-xs text-gray-700">Please enter Delhi/Noida as your city and provide your Delhi/Noida address when applying.</div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white py-3 rounded-full font-medium shadow-lg text-sm"
                  onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>

                  Join ISCCM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>);

};

export default Navbar;