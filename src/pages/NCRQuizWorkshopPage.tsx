import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Brain, Users, Clock, Award, MapPin, Calendar, Trophy, Phone, Mail, User, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const NCRQuizWorkshopPage = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    email: '',
    teamMember1: '',
    teamMember2: '',
    teamMember3: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Hospital name validation
    if (!formData.hospitalName.trim()) {
      newErrors.hospitalName = 'Hospital name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Team member validations
    if (!formData.teamMember1.trim()) {
      newErrors.teamMember1 = 'Team member 1 name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.teamMember1)) {
      newErrors.teamMember1 = 'Name should contain only alphabets and spaces';
    }

    if (!formData.teamMember2.trim()) {
      newErrors.teamMember2 = 'Team member 2 name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.teamMember2)) {
      newErrors.teamMember2 = 'Name should contain only alphabets and spaces';
    }

    if (!formData.teamMember3.trim()) {
      newErrors.teamMember3 = 'Team member 3 name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.teamMember3)) {
      newErrors.teamMember3 = 'Name should contain only alphabets and spaces';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // If validation passes, let the form submit normally to the external URL
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  const organizingCommittee = [
  { name: 'Dr Prashant Saxena', role: 'Organizing Chairperson' },
  { name: 'Dr Tarun Jhamb', role: 'Co-Organizing Chairperson' },
  { name: 'Dr Sweta J Patel', role: 'Organizing Secretary' },
  { name: 'Dr Akhil Taneja', role: 'Co-Organizing Secretary' },
  { name: 'Dr Amit Goel', role: 'Treasurer' },
  { name: 'Dr Deeksha Singh Tomar', role: 'Co-Treasurer' }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <PageBanner
        title="NCR Mega CritiCon 2025"
        subtitle="Brain Tussle Quiz Competition - Round 2"
        badgeText="Quiz Round 2"
        showContactButton={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#BA0A1E] text-[#BA0A1E] hover:bg-[#BA0A1E] hover:text-white text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.open('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/cf685da4-348e-48d1-9277-9567520208f9.jpeg', '_blank')}>
              View More Details
            </Button> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Event Information */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
              Event Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#BA0A1E] mb-2">Event Name:</h4>
                  <p className="text-gray-700">NCR Mega CritiCon 2025 - Brain Tussle (Quiz Round 2)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#BA0A1E] mb-2">Full Conference:</h4>
                  <p className="text-gray-700">20th DCCS & 3rd Gurugram Criticon</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#BA0A1E] mb-2">Theme:</h4>
                  <p className="text-gray-700">"Bridging the Gaps: Translating Vision into Action"</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#BA0A1E] mb-2">Organizers:</h4>
                  <p className="text-gray-700">Joint initiative of SCCM Delhi-Noida & Gurugram City Branch, ISCCM</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#BA0A1E] to-[#035D8E] flex items-center justify-center">
                  <Brain className="text-white" size={64} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Round 2 Specific Information */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#BA0A1E] flex items-center justify-center">
              <Trophy className="mr-3" size={24} />
              Quiz Round 2 Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                <h4 className="font-semibold text-[#035D8E] mb-2">Date & Time</h4>
                <p className="text-gray-700">26th September, 2025</p>
                <p className="text-gray-700">Friday, 07:00 PM</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <h4 className="font-semibold text-[#035D8E] mb-2">Venue</h4>
                <p className="text-gray-700">Magnolia Hall</p>
                <p className="text-gray-700">India Habitat Centre, New Delhi</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Dates */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#BA0A1E] flex items-center justify-center">
              <Calendar className="mr-3" size={24} />
              Key Dates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Round 2 (Current)</h4>
                <p className="text-gray-700">September 26, 2025, Friday</p>
                <p className="text-gray-700">7:00 PM</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#035D8E]/10 to-[#BA0A1E]/10 rounded-lg">
                <h4 className="font-semibold text-[#035D8E] mb-2">Workshops</h4>
                <p className="text-gray-700">November 14, 2025</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#BA0A1E]/10 to-[#035D8E]/10 rounded-lg">
                <h4 className="font-semibold text-[#BA0A1E] mb-2">Main Conference & Final</h4>
                <p className="text-gray-700">November 15-16, 2025</p>
                <p className="text-gray-700">The Stein Auditorium, IHC, Delhi</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Points for Round 2 */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#BA0A1E] flex items-center justify-center">
              <Users className="mr-3" size={24} />
              Important Points for Round 2
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-orange-400">
                <Users className="text-[#035D8E] mr-3 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Team Composition</h5>
                  <p className="text-gray-600">Each team comprising 3 members from the same institute</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-400">
                <Badge className="bg-[#BA0A1E] mr-3 mt-1" />
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Mandatory Requirement</h5>
                  <p className="text-gray-600">Conference registration and ISCCM Membership is mandatory for appearance for the final round</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
                <Clock className="text-[#035D8E] mr-3 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Round 2 Format</h5>
                  <p className="text-gray-600">20 MCQ to be solved in 20 mins</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prize Structure */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#BA0A1E] flex items-center justify-center">
              <Award className="mr-3" size={24} />
              Prize Structure - Final Round Winners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 font-medium">
                Finalists will participate in Brain Tussle at NCR Mega CritiCon 2025 with cash prizes for winners
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h4 className="font-bold text-xl text-yellow-600">1st Prize</h4>
                <p className="text-3xl font-bold text-green-600">₹15,000</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h4 className="font-bold text-xl text-gray-600">2nd Prize</h4>
                <p className="text-3xl font-bold text-green-600">₹10,000</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg border border-orange-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h4 className="font-bold text-xl text-orange-600">3rd Prize</h4>
                <p className="text-3xl font-bold text-green-600">₹5,000</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quiz Registration Form - KEPT EXACTLY AS ORIGINAL */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
          <CardHeader>
            <CardTitle id="hospitalNamess" className="text-3xl font-bold text-center bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
              Quiz Registration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              acceptCharset="UTF-8"
              action="https://app.formester.com/forms/aG6IGKBnc/submissions"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6 max-w-2xl mx-auto">

              <div>
                <Label htmlFor="hospitalName" className="text-sm font-medium text-gray-700">
                  Hospital/Institute Name *
                </Label>
                <Input
                  id="hospitalName"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleInputChange}
                  placeholder="Enter hospital/institute name"
                  className="mt-1"
                  required />
                {errors.hospitalName &&
                <p className="text-sm text-red-500 mt-1">{errors.hospitalName}</p>
                }
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="mt-1"
                  required />
                {errors.email &&
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                }
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-medium text-gray-700">
                  Team Members (3 members required) *
                </Label>
                
                <div>
                  <Input
                    name="teamMember1"
                    value={formData.teamMember1}
                    onChange={handleInputChange}
                    placeholder="Team Member 1 Name"
                    className="mt-1"
                    required />
                  {errors.teamMember1 &&
                  <p className="text-sm text-red-500 mt-1">{errors.teamMember1}</p>
                  }
                </div>

                <div>
                  <Input
                    name="teamMember2"
                    value={formData.teamMember2}
                    onChange={handleInputChange}
                    placeholder="Team Member 2 Name"
                    className="mt-1"
                    required />
                  {errors.teamMember2 &&
                  <p className="text-sm text-red-500 mt-1">{errors.teamMember2}</p>
                  }
                </div>

                <div>
                  <Input
                    name="teamMember3"
                    value={formData.teamMember3}
                    onChange={handleInputChange}
                    placeholder="Team Member 3 Name"
                    className="mt-1"
                    required />
                  {errors.teamMember3 &&
                  <p className="text-sm text-red-500 mt-1">{errors.teamMember3}</p>
                  }
                </div>
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white hover:from-[#9A0818] hover:to-[#024A73] text-lg px-12 py-3 shadow-xl hover:shadow-2xl transition-all duration-300">
                  Register Team
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-[#BA0A1E] flex items-center justify-center">
                <Phone className="mr-3" size={24} />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-[#035D8E] mb-3">Professional Conference Partner - Meetings and More</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <User className="mr-2" size={16} />
                      <span className="font-medium">Ms. Pooja Sharma:</span>
                      <span className="ml-2">+91 96274 75770</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-2" size={16} />
                      corporate@meetingsnmore.com
                    </p>
                    <p className="text-gray-600">
                      <strong>Address:</strong> Unit No. 604, Tower B, Millennium Plaza, Sector 27, Gurugram, Haryana
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-[#BA0A1E] mb-3">Conference Secretariat</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <User className="mr-2" size={16} />
                      <span className="font-medium">Ms. Muskan Kashyap:</span>
                      <span className="ml-2">+91 80769 94708</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-2" size={16} />
                      ncrmegacriticon@gmail.com
                    </p>
                    <p className="text-gray-600">
                      <strong>Address:</strong> 805, 8th floor, Shakuntla Building 59, Nehru Place New Delhi -110019
                    </p>
                    <p className="text-gray-600">
                      <strong>Website:</strong> www.isccmdelhi.org
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Organizing Committee */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-[#BA0A1E] flex items-center justify-center">
                <Users className="mr-3" size={24} />
                Organizing Committee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {organizingCommittee.map((member, index) =>
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <User className="text-[#035D8E] mr-3" size={20} />
                    <div>
                      <h5 className="font-semibold text-gray-800">{member.name}</h5>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registration Call to Action */}
        <Card className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] border-0 shadow-xl text-white">
          <CardContent className="text-center py-12">
            <Brain className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl font-bold mb-4">Ready for Round 2?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join Quiz Round 2 on September 26th and compete for a spot in the NCR Mega CritiCon 2025 finals
            </p>
            <Button
              size="lg"
              className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-bold px-8 py-3"
              onClick={() => document.querySelector('#hospitalNamess')?.scrollIntoView({ behavior: 'smooth' })}>
              Register Your Team Now
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>);

};

export default NCRQuizWorkshopPage;