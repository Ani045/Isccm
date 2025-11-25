import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, FileText, Calendar, MapPin, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const DCCS2024BrochurePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="DCCS 2024 Brochure"
        subtitle="Download the official conference brochure with complete details"
        badgeText="Conference Brochure"
        showContactButton={false} />

      
      {/* Quick Action Buttons */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              size="lg"
              className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/09c74ccd-bd0d-486d-b6d3-b69a984bc06f.pdf';
                link.download = 'DCCS-2024-Brochure.pdf';
                link.click();
              }}>
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button> */}
            {/* <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#BA0A1E] text-[#BA0A1E] hover:bg-[#BA0A1E] hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/09c74ccd-bd0d-486d-b6d3-b69a984bc06f.pdf', '_blank')}>
              <FileText className="mr-2 h-5 w-5" />
              View Online
            </Button> */}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Conference Overview */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Conference Overview
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Delhi Chapter Critical Care Society (DCCS) 2024 conference brings together 
                leading experts in critical care medicine from across the globe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <Calendar className="h-8 w-8 text-[#BA0A1E] mx-auto mb-2" />
                  <CardTitle className="text-lg">Date</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">March 15-17, 2024</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-[#035D8E] mx-auto mb-2" />
                  <CardTitle className="text-lg">Venue</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">India Habitat Centre, New Delhi</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-[#BA0A1E] mx-auto mb-2" />
                  <CardTitle className="text-lg">Attendees</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">500+ Delegates</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300">
                <CardHeader className="text-center">
                  <Award className="h-8 w-8 text-[#035D8E] mx-auto mb-2" />
                  <CardTitle className="text-lg">CME Credits</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">15 CME Hours</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Brochure Highlights */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#BA0A1E]">
                  What's Inside the Brochure
                </CardTitle>
                <CardDescription>
                  Comprehensive information about the conference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#BA0A1E] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Scientific Program</h4>
                      <p className="text-gray-600">Detailed schedule of sessions, workshops, and keynote speakers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#035D8E] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Faculty Information</h4>
                      <p className="text-gray-600">Profiles of renowned speakers and session chairs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#BA0A1E] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Registration Details</h4>
                      <p className="text-gray-600">Fee structure, accommodation, and travel information</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#035D8E] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sponsors & Partners</h4>
                      <p className="text-gray-600">Information about conference sponsors and partners</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl text-[#035D8E]">
                  Conference Themes
                </CardTitle>
                <CardDescription>
                  Key focus areas for DCCS 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="w-full justify-center p-2 border-[#BA0A1E]/20 text-[#BA0A1E]">
                    Advanced Mechanical Ventilation
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center p-2 border-[#035D8E]/20 text-[#035D8E]">
                    Sepsis Management
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center p-2 border-[#BA0A1E]/20 text-[#BA0A1E]">
                    Cardiac Critical Care
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center p-2 border-[#035D8E]/20 text-[#035D8E]">
                    Neurological Emergencies
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center p-2 border-[#BA0A1E]/20 text-[#BA0A1E]">
                    Quality & Safety in ICU
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center p-2 border-[#035D8E]/20 text-[#035D8E]">
                    Pediatric Critical Care
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Download Section */}
          {/* <div className="bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download the Official Brochure
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the complete conference brochure with detailed program schedule, 
                speaker profiles, and registration information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white font-semibold"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/09c74ccd-bd0d-486d-b6d3-b69a984bc06f.pdf';
                    link.download = 'DCCS-2024-Brochure.pdf';
                    link.click();
                  }}>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF (2.5 MB)
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#BA0A1E] text-[#BA0A1E] hover:bg-[#BA0A1E] hover:text-white font-semibold"
                  onClick={() => window.open('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/09c74ccd-bd0d-486d-b6d3-b69a984bc06f.pdf', '_blank')}>
                  <FileText className="mr-2 h-5 w-5" />
                  View Online Version
                </Button>
              </div>
            </div>
          </div> */}

          {/* Additional Information */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-lg text-[#BA0A1E]">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-600 hover:text-[#BA0A1E] transition-colors">
                    Registration Form
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#BA0A1E] transition-colors">
                    Abstract Submission
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#BA0A1E] transition-colors">
                    Hotel Booking
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-[#BA0A1E] transition-colors">
                    Travel Information
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-lg text-[#035D8E]">Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Early Bird:</span>
                    <span className="font-semibold">Jan 31, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Regular:</span>
                    <span className="font-semibold">Feb 28, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">On-site:</span>
                    <span className="font-semibold">Mar 15, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle className="text-lg text-[#BA0A1E]">Contact Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>Email:</strong> info@dccs2024.com
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +91-11-12345678
                  </p>
                  <p className="text-gray-600">
                    <strong>Address:</strong> ISCCM Office, New Delhi
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>);

};

export default DCCS2024BrochurePage;