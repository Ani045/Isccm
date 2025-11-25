import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileText, Upload, CheckCircle, Calendar, Award, Users, MapPin, Phone, Mail, ExternalLink, Star, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const NCRAbstractSubmissionPage = () => {
  const { toast } = useToast();

  const handleSubmitRedirect = () => {
    window.open('https://in.eregnow.com/ticketing/register/dccs2025', '_blank');
  };

  const organizingCommittee = [
  {
    title: "Organizing Chairperson",
    name: "Dr Prashant Saxena",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f7011acf-5974-440b-8e55-370a77505722.jpeg"
  },
  {
    title: "Co-Organizing Chairperson",
    name: "Dr Tarun Jhamb",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ca17dbdb-aed8-4e19-93ed-2425f1b1400c.png"
  },
  {
    title: "Organizing Secretary",
    name: "Dr Sweta J Patel",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/c0fa3eaa-338b-4c0f-bde8-a5155ecf4d99.png"
  },
  {
    title: "Co-Organizing Secretary",
    name: "Dr Akhil Taneja",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/105d4daf-44cb-4f47-b39f-b42ece6ed840.jpg"
  },
  {
    title: "Treasurer",
    name: "Dr Amit Goel",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/81786931-bfbd-4e91-a9c0-615ea68f75eb.jpg"
  },
  {
    title: "Co-Treasurer",
    name: "Dr Deeksha Singh Tomar",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9ef9446b-6ac9-4671-a87c-8e6f62e513c2.png"
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
       <PageBanner
        title="NCR CritiCon - Abstract Submission"
        subtitle="20th DCCS & 3rd Gurugram Criticon"
        badgeText="Abstract Submission"
        showContactButton={false} />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
           <Button
            onClick={handleSubmitRedirect}
            size="lg"
            className="bg-white text-[#BA0A1E] hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <ExternalLink className="mr-2" size={20} />
                  Click Here to Submit Abstract
                </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Event Information */}
        <div className="mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] p-6 text-white">
              <h1 className="text-3xl font-bold text-center mb-2 drop-shadow-lg">Conference Information</h1>
              <p className="text-center text-xl md:text-2xl opacity-90 drop-shadow-md">Bridging the Gaps: Translating Vision into Action</p>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Calendar className="mx-auto mb-4 text-[#BA0A1E]" size={40} />
                  <h3 className="text-lg font-semibold mb-2">Workshop Date</h3>
                  <p className="text-[#BA0A1E] font-bold text-xl">14th November 2025</p>
                </div>
                <div className="text-center">
                  <Calendar className="mx-auto mb-4 text-[#035D8E]" size={40} />
                  <h3 className="text-lg font-semibold mb-2">Conference Dates</h3>
                  <p className="text-[#035D8E] font-bold text-xl">15th-16th November 2025</p>
                </div>
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-[#BA0A1E]" size={40} />
                  <h3 className="text-lg font-semibold mb-2">Venue</h3>
                  <p className="text-gray-800 font-medium">The Stein Auditorium</p>
                  <p className="text-gray-600 text-sm">India Habitat Centre, Delhi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call for Abstracts Banner */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white shadow-2xl overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="mr-2 animate-pulse" size={32} />
                <h2 className="text-3xl font-bold">CALL FOR ABSTRACT</h2>
                <Star className="ml-2 animate-pulse" size={32} />
              </div>
              <p className="text-2xl font-semibold mb-6">Abstract SUBMISSION NOW OPEN!</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <Clock className="mx-auto mb-2" size={28} />
                  <h3 className="font-semibold mb-2">Submission Deadline</h3>
                  <p className="text-lg font-bold">Till 15th September 2025</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Award className="mx-auto mb-2" size={28} />
                  <h3 className="font-semibold mb-2">Special Offer</h3>
                  <p className="text-sm">First 25 accepted abstracts receive complimentary workshop registration!</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                  onClick={() => window.open('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/257e2506-a49e-48a7-85f2-419cf256e830.pdf', '_blank')}
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-[#BA0A1E] px-6 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <FileText className="mr-2" size={20} />
                  View More Details
                </Button> */}
                <Button
                  onClick={handleSubmitRedirect}
                  size="lg"
                  className="bg-white text-[#BA0A1E] hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <ExternalLink className="mr-2" size={20} />
                  Click Here to Submit Abstract
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organizing Committee */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
            Organizing Committee
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingCommittee.map((member, index) =>
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  {/* <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-r from-[#BA0A1E] to-[#035D8E]">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover" />

                  </div> */}
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-[#BA0A1E] font-medium">{member.title}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Conference Secretariat */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-[#BA0A1E] flex items-center">
                  <Phone className="mr-2" size={24} />
                  Conference Secretariat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Address:</h4>
                  <p className="text-sm text-gray-600">805, 8th floor, Shakuntla Building<br />59, Nehru Place New Delhi-110019</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Contact Person:</h4>
                  <p className="text-sm text-gray-600">Ms. Muskan Kashyap</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone:</h4>
                  <p className="text-sm text-[#BA0A1E] font-medium">+91 80769 94708</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email:</h4>
                  <p className="text-sm text-[#035D8E] font-medium">ncrmegacriticon@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Website:</h4>
                  <p className="text-sm text-[#035D8E] font-medium">www.isccmdelhi.org</p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Conference Partner */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-[#035D8E] flex items-center">
                  <Users className="mr-2" size={24} />
                  Professional Conference Partner
                </CardTitle>
                <p className="text-sm text-gray-600">Meetings and More</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Address:</h4>
                  <p className="text-sm text-gray-600">Unit No. 604, Tower B, Millennium Plaza<br />Sector 27, Gurugram, Haryana</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Contact Person:</h4>
                  <p className="text-sm text-gray-600">Ms. Pooja Sharma</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mobile:</h4>
                  <p className="text-sm text-[#BA0A1E] font-medium">+91 96274 75770</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email:</h4>
                  <p className="text-sm text-[#035D8E] font-medium">corporate@meetingsnmore.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#035D8E] to-[#BA0A1E] text-white shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Share Your Research?</h3>
              <p className="mb-6 text-lg opacity-90">Join us at NCR Mega CritiCon 2025 and be part of advancing critical care medicine</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                  onClick={() => window.open('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/257e2506-a49e-48a7-85f2-419cf256e830.pdf', '_blank')}
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-[#035D8E] px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <FileText className="mr-2" size={20} />
                  View Abstract Guidelines
                </Button> */}
                <Button
                  onClick={handleSubmitRedirect}
                  size="lg"
                  className="bg-white text-[#035D8E] hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <ExternalLink className="mr-2" size={20} />
                  Submit Your Abstract Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>);

};

export default NCRAbstractSubmissionPage;