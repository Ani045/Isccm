import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Heart, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const AboutPage = () => {
  const teamMembers = [
  {
    name: 'Dr. Prashant Saxena',
    position: 'Chairperson',
    image: 'prashant.jpeg'
  },
  {
    name: 'Dr. Akhil Taneja',
    position: 'Secretary',
    image: 'dr-akhil-taneja_new.png'
  },
  {
    name: 'Dr. Amit Goel',
    position: 'Treasurer',
    image: 'dr-amit-goel.jpg'
  },
  {
    name: 'Dr. Anup Agarwal',
    position: 'Executive Committee Member',
    image: 'dr-anup-aggarwal.jpg'
  },
  {
    name: 'Dr. Ashutosh Kumar Garg',
    position: 'Executive Committee Member',
    image: 'dr-ashutosh-garg.jpg'
  },
  {
    name: 'Dr. Rajat Agrawal',
    position: 'Executive Committee Member',
    image: 'dr-rajat-aggarwal.jpg'
  },
  {
    name: 'Dr. Prashant Singh',
    position: 'Executive Committee Member',
    image: 'dr-prashant-singh.jpg'
  },
  {
    name: 'Dr. Gaurav Pratap Singh',
    position: 'Executive Committee Member',
    image: 'dr-gaurav-pratap-singh.jpg'
  },
  {
    name: 'Dr. Rishabh Kumar',
    position: 'Executive Committee Member',
    image: 'dr-risabh-kumar.jpg'
  }];


  const missionPoints = [
  'Enhance patient care in intensive care units (ICUs)',
  'Promote continuous medical education and research',
  'Enable knowledge-sharing among healthcare professionals',
  'Serve as a collaborative platform for clinical innovation'];


  const achievements = [
  { icon: Award, title: 'Excellence in Care', description: 'Recognized for outstanding patient outcomes and clinical standards' },
  { icon: Users, title: 'Largest Network', description: 'Connecting over 1040 healthcare professionals nationwide' },
  { icon: Target, title: 'Research Impact', description: 'Contributing to breakthrough research in critical care medicine' },
  { icon: Heart, title: 'Patient First', description: 'Committed to putting patient welfare at the center of everything we do' }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="About ISCCM"
        subtitle="Advancing Critical Care Medicine through Excellence, Education, and Innovation"
        badgeText="About ISCCM"
        showContactButton={false} />


      {/* ISCCM Overview */}
      <section className="py-8 sm:py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0 h-full">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Award className="text-[#BA0A1E]" size={24} />
                  The Indian Society of Critical Care Medicine Delhi Branch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Founded on <strong>3 March , 1999</strong>, in Delhi, India, ISCCM has become the largest non-profit association of Indian healthcare professionals in critical care.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  From a small group of dedicated consultants to a robust national organization with <strong>1040</strong> members.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#BA0A1E]/10 to-[#035D8E]/10 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-[#BA0A1E]">1040</div>
                <div className="text-xs sm:text-sm text-gray-600">Members</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#035D8E]/10 to-[#BA0A1E]/10 rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-[#035D8E]">27+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years of Excellence</div>
              </div>
             
            
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-8 sm:py-12  bg-white/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) =>
            <Card key={index} className="bg-white/80 backdrop-blur-md shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 sm:p-6 text-center">
                  <achievement.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#BA0A1E] mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{achievement.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Delhi-Noida Branch and Mission Section - Parallel Layout */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Delhi-Noida Branch */}
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                  <MapPin className="text-[#035D8E]" size={24} />
                  Delhi-Noida Branch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Welcome to the official website of the ISCCM Delhi-Noida Branch. It is a matter of great honor and pride to represent this esteemed organization at the regional level.
                  </p>
                  <div className="bg-gradient-to-r from-[#BA0A1E]/10 to-[#035D8E]/10 p-4 rounded-xl">
                    <p className="text-gray-700 font-medium text-sm">
                      We extend our heartfelt gratitude to all our members for placing their trust in us. Your support is the foundation of our strength and progress.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Section */}
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                  <Target className="text-[#BA0A1E]" size={24} />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 text-center text-sm md:text-base">
                    In the ever-evolving field of critical care, we are steadfast in our mission to:
                  </p>
                  <div className="space-y-3">
                    {missionPoints.map((point, index) =>
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg font-medium">{point}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

      {/* Team Section */}
      <section className="py-8 sm:py-12  bg-white/30">
        <div className="container mx-auto px-4">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                <Users className="text-[#BA0A1E]" size={24} />
                Meet Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-6xl mx-auto">
                <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                  Our leadership team is composed of experienced and dedicated professionals who bring insight, innovation, and integrity to our mission:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                  {teamMembers.map((member, index) =>
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-3 sm:p-6 text-center">
                        <div className="relative mb-3 sm:mb-4">
                          <img
                          src={member.image}
                          alt={member.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300" />

                          <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm">{member.name}</h3>
                        <p className="text-gray-600 text-xs">{member.position}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12  bg-gradient-to-r from-[#BA0A1E] to-[#035D8E]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of India's largest critical care community and help us advance the standards of patient care.
          </p>
          <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20 max-w-md mx-auto">
                  <div className="text-sm text-amber-200 font-medium mb-2">⚠️ Important Notice</div>
                  <div className="text-sm text-blue-100">Please enter Delhi/Noida as your city or provide your Delhi/Noida address when applying.</div>
                </div>
          <Button
            size="lg"
            className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>

            Become a Member
          </Button>
        </div>
      </section>

      <Footer />
    </div>);

};

export default AboutPage;