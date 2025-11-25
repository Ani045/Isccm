import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Users,
  Shield,
  Award,
  CreditCard,
  CheckCircle,
  UserPlus,
  UserCheck,
  UserMinus,
  Info,
  MessageSquare,
  Send } from
'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { useNavigate } from 'react-router-dom';

const MembersForumPage = () => {
  const membershipTypes = [
  {
    type: 'Patron',
    icon: <Award className="h-6 w-6" />,
    description: 'Any person who, in the opinion of the Executive Committee, can contribute to the image and objectives of the Society significantly.',
    eligibility: 'Special recognition by Executive Committee',
    votingRights: false,
    canHoldOffice: false,
    color: 'from-amber-500 to-orange-500'
  },
  {
    type: 'Life Member',
    icon: <UserCheck className="h-6 w-6" />,
    description: 'Postgraduation in specialties approved as pre-requisite for Indian Diploma in Critical Care Medicine (IDCCM).',
    eligibility: 'Postgraduate degree/diploma recognized by Medical Council of India with active interest in critical care',
    votingRights: true,
    canHoldOffice: true,
    fee: 'Rs. 11,110 (Online)',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    type: 'Associate Life Member',
    icon: <Users className="h-6 w-6" />,
    description: 'Allopathic doctor, person with nursing or technical background, with active interest in CCM.',
    eligibility: 'Active interest in CCM but not fulfilling criteria for Life member',
    votingRights: false,
    canHoldOffice: false,
    fee: 'Rs. 5,669 (Online)',
    color: 'from-green-500 to-emerald-500'
  },
  {
    type: 'Associate Life Member (Nurse)',
    icon: <UserPlus className="h-6 w-6" />,
    description: 'Nursing professionals with active interest in Critical Care Medicine.',
    eligibility: 'Nursing background with active interest in CCM',
    votingRights: false,
    canHoldOffice: false,
    specialNote: 'Nursing ALMs shall elect the Chairperson of the nursing section',
    fee: 'Rs. 2,596 (Online)',
    color: 'from-purple-500 to-pink-500'
  },
  {
    type: 'International Member',
    icon: <Shield className="h-6 w-6" />,
    description: 'International healthcare professionals interested in Critical Care Medicine.',
    eligibility: 'International healthcare professional',
    votingRights: true,
    canHoldOffice: true,
    fee: 'Rs. 11,110 (Online)',
    color: 'from-red-500 to-rose-500'
  },
  {
    type: 'Life Member (SAARC)',
    icon: <UserCheck className="h-6 w-6" />,
    description: 'Healthcare professionals from SAARC countries.',
    eligibility: 'Healthcare professional from SAARC countries',
    votingRights: true,
    canHoldOffice: true,
    fee: 'Rs. 11,110 (Online)',
    color: 'from-indigo-500 to-blue-500'
  }];


  const benefits = [
  'Access to ISCCM educational programs and workshops',
  'Participation in DCCS (Delhi Conference on Critical Care)',
  'Subscription to IJCCM and IJCCR journals',
  'Access to Tarang Newsletter',
  'Networking opportunities with critical care professionals',
  'CME credits for continuing medical education',
  'Discounted conference registration fees',
  'Access to research collaboration opportunities'];


  const procedureSteps = [
  {
    step: 1,
    title: 'Application Review',
    description: 'Executive Committee has authority to admit/reject applications for all membership categories'
  },
  {
    step: 2,
    title: 'Proposal & Seconding',
    description: 'Application must be proposed and seconded by existing valid members'
  },
  {
    step: 3,
    title: 'Documentation',
    description: 'Submit documentary evidence of eligibility, qualification and prescribed fees'
  },
  {
    step: 4,
    title: 'Payment',
    description: 'Bank draft/cheque payable at Mumbai in name "Indian Society of Critical Care Medicine-Membership"'
  },
  {
    step: 5,
    title: 'Final Decision',
    description: 'All decisions at National Executive Committee Meeting are final and binding'
  }];
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="Members Forum"
        subtitle="Join the Indian Society of Critical Care Medicine and be part of India's premier Critical Care community"
        badgeText="Members Forum"
        showContactButton={false} />


      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
                How to be a Member
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Critical Care Medicine (CCM) is an evolving specialty overlapping multiple primary specialties. 
                Recognizing the increasing need to consolidate the field and to promote awareness, continuing 
                education and research in this field, the Indian Society of Critical Care Medicine (ISCCM) 
                was formed on 9th October 1993.
              </p>
              
              <div className="text-center mt-8">
              
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Membership Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
            Membership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) =>
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Membership Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
            Membership Categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {membershipTypes.map((membership, index) =>
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${membership.color} text-white`}>
                      {membership.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {membership.type}
                      </CardTitle>
                      {membership.fee &&
                    <Badge variant="secondary" className="mt-1">
                          <CreditCard className="h-3 w-3 mr-1" />
                          {membership.fee}
                        </Badge>
                    }
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{membership.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Eligibility:</h4>
                      <p className="text-sm text-gray-600">{membership.eligibility}</p>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Voting Rights:</span>
                        {membership.votingRights ?
                      <CheckCircle className="h-4 w-4 text-green-500" /> :

                      <UserMinus className="h-4 w-4 text-red-500" />
                      }
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Can Hold Office:</span>
                        {membership.canHoldOffice ?
                      <CheckCircle className="h-4 w-4 text-green-500" /> :

                      <UserMinus className="h-4 w-4 text-red-500" />
                      }
                      </div>
                    </div>
                    
                    {membership.specialNote &&
                  <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Info className="h-4 w-4 text-blue-500 mt-0.5" />
                          <p className="text-sm text-blue-700">{membership.specialNote}</p>
                        </div>
                      </div>
                  }
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Membership Procedure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
            Membership Procedure
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {procedureSteps.map((step, index) =>
                <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <Separator className="my-8" />
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold text-amber-800 mb-2">Important Notes:</h3>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Conversion of Associate member to Life Member can be done by General Secretary</li>
                  <li>• All outstation cheques please add Rs.100/- (Hundred only)</li>
                  <li>• All fees are inclusive of bank charges</li>
                  <li>• Honorary Life Members pay no fees</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cessation of Membership */}
        <div className="mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Cessation of Membership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The Executive Committee by 2/3 majority of total members may remove the name of any member 
                from the Register of Members for gross misconduct after giving him a proper opportunity to 
                defend himself and a hearing in person.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Member Suggestions Form */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
            Share Your Suggestions & Reviews
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Member Feedback Form
                  </CardTitle>
                  <p className="text-gray-600 mt-1">Help us improve by sharing your suggestions and reviews</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form action="https://app.formester.com/forms/TL3MsCN2S/submissions" method="POST" accept-charset="UTF-8" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="membershipNumber">Membership Number *</Label>
                    <Input
                      id="membershipNumber"
                      name="membershipNumber"
                      placeholder="Enter your membership number"
                      required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject of your suggestion/review"
                    required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share your suggestions or reviews"
                    rows={6}
                    required />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Suggestion
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Join ISCCM?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Become part of India's premier Critical Care Medicine society and contribute to advancing 
                the field of critical care in the country.
              </p>
               <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20 max-w-md mx-auto">
                  <div className="text-sm text-amber-200 font-medium mb-2">⚠️ Important Notice</div>
                  <div className="text-sm text-blue-100">Please enter Delhi/Noida as your city and provide your Delhi/Noida address when applying.</div>
                </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}
                  className="bg-white text-[#BA0A1E] hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  size="lg">



                  <UserPlus className="mr-2 h-5 w-5" />
                  Apply for Membership
                </Button>
                <Button
                  onClick={handleRegisterClick}
                  variant="outline"
                  className="bg-white text-[#BA0A1E] hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  size="lg">

                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>);

};

export default MembersForumPage;