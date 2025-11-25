import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Users, CreditCard, Gift, Calendar, CheckCircle, IndianRupee } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const NCRRegistrationPage = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    specialization: '',
    category: '',
    accommodation: false
  });

  const registrationCategories = [
  {
    id: 'consultant',
    title: 'Consultant/Faculty',
    earlyBird: 8000,
    regular: 10000,
    features: ['All sessions access', 'Conference kit', 'Lunch & refreshments', 'Certificate', 'Networking dinner']
  },
  {
    id: 'resident',
    title: 'Resident/Fellow',
    earlyBird: 5000,
    regular: 6000,
    features: ['All sessions access', 'Conference kit', 'Lunch & refreshments', 'Certificate']
  },
  {
    id: 'nurse',
    title: 'Nursing Staff',
    earlyBird: 3000,
    regular: 4000,
    features: ['All sessions access', 'Conference kit', 'Lunch & refreshments', 'Certificate']
  },
  {
    id: 'student',
    title: 'Medical Student',
    earlyBird: 2000,
    regular: 2500,
    features: ['All sessions access', 'Conference kit', 'Lunch & refreshments', 'Certificate']
  }];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) {
      toast({
        title: "Please select a registration category",
        description: "Choose your professional category to proceed with registration.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Initiated!",
      description: "You will be redirected to the payment gateway shortly."
    });

    // Simulate payment gateway redirect
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "Your registration has been confirmed. Check your email for details."
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <PageBanner
        title="NCR Mega CritiCon 2025"
        subtitle="Registration"
        description="Register for the premier critical care conference in NCR region"
        backgroundImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f2394449-2345-4f46-8b64-66136d63e0bb.jpeg" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Registration Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
            Registration Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {registrationCategories.map((category) =>
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-300 ${
              selectedCategory === category.id ?
              'ring-4 ring-[#BA0A1E] bg-gradient-to-br from-[#BA0A1E]/5 to-[#035D8E]/5' :
              'hover:shadow-xl bg-white/80 backdrop-blur-sm'} border-0 shadow-xl`
              }
              onClick={() => setSelectedCategory(category.id)}>

                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#BA0A1E] to-[#035D8E] flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <IndianRupee size={16} className="text-green-600" />
                      <span className="text-2xl font-bold text-green-600">
                        {category.earlyBird}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">Early</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <IndianRupee size={14} className="text-gray-500" />
                      <span className="text-lg text-gray-500 line-through">
                        {category.regular}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">Regular</span>
                    </div>
                  </div>
                  <ul className="text-xs space-y-1">
                    {category.features.map((feature, index) =>
                  <li key={index} className="flex items-center">
                        <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                  )}
                  </ul>
                  {selectedCategory === category.id &&
                <Badge className="w-full mt-3 bg-[#BA0A1E] hover:bg-[#BA0A1E]/90">
                      Selected
                    </Badge>
                }
                </CardContent>
              </Card>
            )}
          </div>

          {/* Early Bird Notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Gift className="text-amber-600 mr-2" size={20} />
              <span className="font-semibold text-amber-800">Early Bird Offer</span>
            </div>
            <p className="text-sm text-amber-700">
              Register before <strong>February 1, 2025</strong> and save up to ₹2,000! 
              Limited seats available.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-[#BA0A1E]">
                  <CreditCard className="mr-3" size={28} />
                  Registration Form
                </CardTitle>
                <p className="text-gray-600">Please fill out all required fields to register</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                        required
                        className="mt-1" />

                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                        required
                        className="mt-1" />

                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="mt-1" />

                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 9999999999"
                        required
                        className="mt-1" />

                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="institution" className="text-sm font-medium">Institution/Hospital *</Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => handleInputChange('institution', e.target.value)}
                        placeholder="Your workplace"
                        required
                        className="mt-1" />

                    </div>
                    <div>
                      <Label htmlFor="specialization" className="text-sm font-medium">Specialization *</Label>
                      <select
                        id="specialization"
                        value={formData.specialization}
                        onChange={(e) => handleInputChange('specialization', e.target.value)}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BA0A1E]">

                        <option value="">Select Specialization</option>
                        <option value="critical-care">Critical Care Medicine</option>
                        <option value="anesthesiology">Anesthesiology</option>
                        <option value="emergency">Emergency Medicine</option>
                        <option value="pulmonology">Pulmonology</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="surgery">Surgery</option>
                        <option value="nursing">Nursing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="accommodation"
                        checked={formData.accommodation}
                        onChange={(e) => handleInputChange('accommodation', e.target.checked)}
                        className="mr-3" />

                      <label htmlFor="accommodation" className="text-sm">
                        I need accommodation assistance (₹3,500/night - Twin sharing)
                      </label>
                    </div>
                  </div>

                  {/* Registration Summary */}
                  {selectedCategory &&
                  <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Registration Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Category:</span>
                          <span>{registrationCategories.find((c) => c.id === selectedCategory)?.title}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Registration Fee:</span>
                          <span className="text-green-600 font-medium">
                            ₹{registrationCategories.find((c) => c.id === selectedCategory)?.earlyBird}
                          </span>
                        </div>
                        {formData.accommodation &&
                      <div className="flex justify-between">
                            <span>Accommodation (2 nights):</span>
                            <span>₹7,000</span>
                          </div>
                      }
                        <div className="border-t pt-2 flex justify-between font-semibold">
                          <span>Total Amount:</span>
                          <span className="text-[#BA0A1E]">
                            ₹{(registrationCategories.find((c) => c.id === selectedCategory)?.earlyBird || 0) + (
                          formData.accommodation ? 7000 : 0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  }

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!selectedCategory}
                      className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white px-12 py-3 text-lg disabled:opacity-50">

                      Proceed to Payment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Registration Information */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-[#BA0A1E]">
                  <Calendar className="mr-3" size={24} />
                  Registration Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What's Included</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Access to all conference sessions</li>
                      <li>• Welcome coffee & lunch</li>
                      <li>• Conference materials & kit</li>
                      <li>• CME certificate</li>
                      <li>• Networking opportunities</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Payment Methods</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Credit/Debit Cards</li>
                      <li>• Net Banking</li>
                      <li>• UPI Payments</li>
                      <li>• Bank Transfer (NEFT/RTGS)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Before Feb 15: 80% refund</li>
                      <li>• Feb 15-28: 50% refund</li>
                      <li>• After Feb 28: No refund</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 mb-1">Need Help?</h4>
                    <p className="text-xs text-blue-700">
                      Contact us at registration@isccmdelhi.org or call +91-9999999999 for assistance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>);

};

export default NCRRegistrationPage;