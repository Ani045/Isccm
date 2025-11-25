import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Building, Award, Globe, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutISCCM = ({
  showPopup = false,
  popupDelay = 0, // Initial delay
  reappearInterval = 15, // Reappear every 15 seconds (10-20 range)
  popupImage = "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/cf685da4-348e-48d1-9277-9567520208f9.jpeg",
  popupTitle = "Welcome to ISCCM Delhi/Noida",
  popupMessage = "Join India's leading critical care medical society"
}) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const stats = [
  {
    icon: Users,
    number: "1040",
    label: "Total Members",
    color: "text-[#BA0A1E]"
  },
  {
    icon: Award,
    number: "27+",
    label: "Years of Excellence",
    color: "text-[#035D8E]"
  }];


  useEffect(() => {
    let initialTimer;
    let intervalTimer;

    if (showPopup) {
      // Show popup immediately or after initial delay
      initialTimer = setTimeout(() => {
        setIsPopupOpen(true);

        // Set up recurring interval after first show
        intervalTimer = setInterval(() => {
          setIsPopupOpen(true);
        }, reappearInterval * 1000);

      }, popupDelay * 1000);
    }

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [showPopup, popupDelay, reappearInterval]);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAboutUs = () => {
    navigate('/about');
  };

  return (
    <>
      <section className="py-8 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#035D8E] mb-4">
              About ISCCM
            </h2>
            <div className="w-20 h-1 bg-[#BA0A1E] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#035D8E] mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The Society of Critical Care Medicine Delhi/Nodia was established on 3rd March, 1999, in Delhi, India. 
                    It is the largest non-profit association of Indian Physicians, Nurses, Physiotherapists and other 
                    allied health care professionals involved in the care of the critically ill.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our society is dedicated to advancing the art and science of critical care medicine through education, 
                    research, and advocacy. We strive to improve patient outcomes and promote excellence in critical care 
                    practices across India.
                  </p>
                  <Button className="bg-[#BA0A1E] hover:bg-[#035D8E] text-white px-6 py-3" onClick={handleAboutUs}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) =>
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 text-center">
                      <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-4`} />
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
              
              <Card className="shadow-lg border-0 bg-[#035D8E]">
                <CardContent className="p-6 text-center text-white">
                  <h4 className="text-xl font-bold mb-2">Join Our Community</h4>
                  <p className="text-blue-100 mb-4">
                    Be part of India's leading critical care medical society
                  </p>
                  <div className="mb-4 p-3 bg-white/10 rounded-lg border border-white/20">
                    <div className="text-xs text-amber-200 font-medium mb-1">⚠️ Important Notice</div>
                    <div className="text-xs text-blue-100">Please enter Delhi/Noida as your city and provide your Delhi/Noida address when applying.</div>
                  </div>
                  <Button
                    className="bg-[#BA0A1E] hover:bg-white hover:text-[#035D8E] text-white px-6 py-2"
                    onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>
                    Become a Member
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Popup Modal */}
      {isPopupOpen &&
      <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
          className="absolute inset-0 bg-black bg-opacity-80"
          onClick={handleClosePopup}>
        </div>
          
          {/* Full Image Display */}
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
            onClick={handleClosePopup}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110">

              <X className="h-6 w-6 text-gray-800" />
            </button>
            
            {/* Full Image - Clickable */}
            <img
            src={popupImage}
            alt="ISCCM"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300 cursor-pointer hover:opacity-90 transition-opacity"
            // onClick={() => window.open('https://in.eregnow.com/ticketing/register/dccs25', '_blank')}
          />

          </div>
        </div>
      }
    </>);

};

export default AboutISCCM;