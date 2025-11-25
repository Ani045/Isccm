import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Phone,
  Mail,
  Star,
  Award,
  BookOpen,
  Stethoscope,
  Heart,
  Building,
  Trophy,
  ChevronRight,
  Home,
  Camera,
  Target } from
'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const DCCS2024Page = () => {
  const committeeMembers = [
      {
          name: "Dr Prashant Saxena",
          role: "Chairperson",
          image: "prashant.jpeg",
      },
      {
          name: "Dr Akhil Taneja",
          role: "Secretary",
          image: "dr-akhil-taneja.png",
      },
      {
          name: "Dr Amit Goel",
          role: "Treasurer",
          image: "dr-amit-goel.jpg",
      },
      {
          name: "Dr Anup Agarwal",
          role: "EC Member",
          image: "dr-anup-aggarwal.jpg",
      },
      {
          name: "Dr Ashutosh Kumar Garg",
          role: "EC Member",
          image: "dr-ashutosh-garg.jpg",
      },
      {
          name: "Dr Gaurav Pratap Singh",
          role: "EC Member",
          image: "dr-gaurav-pratap-singh.jpg",
      },
      {
          name: "Dr Prashant Singh",
          role: "EC Member",
          image: "dr-prashant-singh.jpg",
      },
      {
          name: "Dr Rajat Agrawal",
          role: "EC Member",
          image: "dr-rajat-aggarwal.jpg",
      },
      {
          name: "Dr Rishabh Kumar",
          role: "EC Member",
          image: "dr-risabh-kumar.jpg",
      },
  ];


  const workshops = [
  {
    title: "FOCCUS (Focused Critical Care Ultrasound)",
    venue: "Max Hospital, IP Extension, Delhi",
    icon: <Stethoscope className="h-6 w-6" />
  },
  {
    title: "Mechanical Ventilation, Difficult Airway & ICU Bronchoscopy",
    venue: "Fortis Escorts Heart Institute, Okhla, New Delhi",
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: "Toxicology - Changing Needs: Needed Changes",
    venue: "Kailash Heart Institute, Sector-27, Noida",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: "Hemodynamic Monitoring",
    venue: "Holy Family Hospital, Delhi",
    icon: <Award className="h-6 w-6" />
  }];


  const highlights = [
  "Plenary Sessions and Expert Keynote Lectures",
  "DCCS Oration",
  "Eminent National and Local Faculty",
  "Young Speaker Session",
  "Provocative Debates, Case Studies and Panel Discussions",
  "Competitive Paper & E-poster Presentation",
  "Quiz Competition with Attractive Prizes",
  "Hands-on Workshops",
  "Sach Ka Saamna (Entertainment Event)",
  "Burlesque Show (Entertainment Event)",
  "Gala Dinner"];


  const eventImages = [
      {
          url: "dccs.jpg",
          alt: "DCCS 2024 Opening Ceremony",
      },
      {
          url: "dccs1.jpg",
          alt: "DCCS 2024 Conference Proceedings",
      },
      {
          url: "dccs3.jpg",
          alt: "DCCS 2024 Attendees",
      },
      {
          url: "dccs-4.jpg",
          alt: "DCCS 2024 Ribbon Cutting Ceremony",
      },
      {
          url: "dccs-5.jpg",
          alt: "DCCS 2024 Panel Discussion",
      },
      {
          url: "dccs-7.jpg",
          alt: "DCCS 2024 Inauguration Ceremony",
      },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <PageBanner
        title="19th Delhi Critical Care Symposium"
        subtitle="Timed Decision Making & Clinical Judgement"
        badgeText="DCCS 2024"
        showContactButton={false} />


      {/* Event Gallery Section */}
      <section className="py-6 sm:py-8 px-0 md:px-2 bg-white/30">
        <div className="container mx-auto">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                <Camera className="text-[#BA0A1E]" size={24} />
                Event Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {eventImages.map((image, index) =>
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                    src={image.url}

                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">

                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-6 sm:py-8 px-0 md:px-2 bg-gray-50/50">
        <div className="container mx-auto">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                <Heart className="text-[#BA0A1E]" size={24} />
                Conference Video
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/qxDVPoOI8kA?si=i-c777h7SYBZXOPq"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen />

                </div>
                <p className="text-center text-gray-600 text-sm mt-4">
                  Watch highlights from DCCS 2024 Conference
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-8 px-2 md:px-4">
        <div className="container mx-auto">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
                <Star className="h-6 w-6 text-yellow-500" />
                Event Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Schedule</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-[#BA0A1E]" />
                      <div>
                        <p className="font-medium">Workshops</p>
                        <p className="text-sm text-gray-600">November 8th, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-[#035D8E]" />
                      <div>
                        <p className="font-medium">Main Conference</p>
                        <p className="text-sm text-gray-600">November 9th & 10th, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-[#BA0A1E]" />
                      <div>
                        <p className="font-medium">Venue</p>
                        <p className="text-sm text-gray-600">The Stein Auditorium, India Habitat Centre, Lodhi Road, Delhi</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Fees</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-800 mb-2">Early Bird (Till Sep 15, 2024)</h4>
                      <div className="text-sm text-green-700">
                        <p>Conference: Rs 1,500 + 18% GST</p>
                        <p>Workshop: Rs 1,000 + 18% GST</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-2">Regular (After Sep 15, 2024)</h4>
                      <div className="text-sm text-blue-700">
                        <p>Conference: Rs 2,000 + 18% GST</p>
                        <p>Workshop: Rs 1,500 + 18% GST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-6 sm:py-8 px-2 md:px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="committee" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white/80 backdrop-blur-md shadow-lg text-xs sm:text-sm">
              <TabsTrigger value="committee" className="text-xs sm:text-sm">Committee</TabsTrigger>
              <TabsTrigger value="workshops" className="text-xs sm:text-sm">Workshops</TabsTrigger>
              <TabsTrigger value="highlights" className="text-xs sm:text-sm">Highlights</TabsTrigger>
              <TabsTrigger value="abstracts" className="text-xs sm:text-sm">Abstracts</TabsTrigger>
              <TabsTrigger value="contact" className="text-xs sm:text-sm">Contact</TabsTrigger>
              <TabsTrigger value="mission" className="text-xs sm:text-sm">Mission</TabsTrigger>
            </TabsList>

            <TabsContent value="committee" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
                    <Users className="h-6 w-6 text-[#BA0A1E]" />
                    Executive Committee
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {committeeMembers.map((member, index) =>
                    <div key={index} className="text-center group">
                        <div className="relative mb-4">
                          <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300" />

                          <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{member.name}</h3>
                        <p className="text-xs sm:text-sm text-blue-600">{member.role}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2">
                    <Target className="h-5 w-5 text-[#035D8E]" />
                    Academic Council
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Leadership</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Patron:</span> Dr Anil Gurnani</p>
                        <p><span className="font-medium">Guide & Mentor:</span> Dr Ashutosh Bhardwaj</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Council Members</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {[
                        "Dr Amber Kumar", "Dr Ashutosh Kumar Singh", "Dr Hanish Bhagria",
                        "Dr Harshdeep Tyagi", "Dr Nandani Gulati", "Dr Nikita Trehan Tripathi",
                        "Dr Nilesh Jain", "Dr Prashant Kumar", "Dr Rahul Garg",
                        "Dr Sahil Kataria", "Dr Satish Bhardwaj", "Dr Saurabh Taneja",
                        "Dr Shalini Singh", "Dr K M Shoeab Ahmed", "Dr Sindil Kumar Sahu",
                        "Dr Varun Arora", "Mrs Neelam Jangra"].
                        map((name, index) =>
                        <p key={index} className="text-gray-700">{name}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workshops" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
                    <BookOpen className="h-6 w-6 text-[#035D8E]" />
                    Workshops (November 8th, 2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {workshops.map((workshop, index) =>
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white/60">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-gradient-to-r from-[#BA0A1E]/10 to-[#035D8E]/10 rounded-lg">
                            {workshop.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{workshop.title}</h3>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {workshop.venue}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="highlights" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    Conference Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) =>
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white shadow-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-full"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="abstracts" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold text-gray-900">
                    <BookOpen className="h-6 w-6 text-[#035D8E]" />
                    Abstract Submission Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-2">Important Deadline</h3>
                    <p className="text-red-700">Abstract submission deadline: September 15th, 2024</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Registration mandatory before submission</li>
                        <li>• English language only</li>
                        <li>• Maximum 250 words</li>
                        <li>• Single line spacing</li>
                        <li>• Calibri font required</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Special Incentive</h4>
                      <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                        <p className="text-sm text-green-700">
                          First 20 accepted abstracts receive complimentary workshop registration
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Abstract Structure</h4>
                    <ol className="space-y-1 text-sm text-gray-700">
                      <li>1. Title (Calibri Font, Size 15, Bold)</li>
                      <li>2. Presenting Author Details (Size 12, Bold, Underline)</li>
                      <li>3. Co-Authors (Size 12)</li>
                      <li>4. Aims & Objectives</li>
                      <li>5. Methods</li>
                      <li>6. Results</li>
                      <li>7. Conclusion</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                      <Phone className="h-5 w-5 text-[#BA0A1E]" />
                      Conference Secretariat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">Mrs. Neelam Jangra</h4>
                        <p className="text-sm text-gray-600">Senior Office Manager</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#BA0A1E]" />
                          <span className="text-sm">+91 84477 55830</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[#BA0A1E]" />
                          <span className="text-sm">isccmdelhichapter@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
                      <Building className="h-5 w-5 text-[#035D8E]" />
                      Conference Partner
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">Meetings and More</h4>
                        <p className="text-sm text-gray-600">Ms. Pooja Sharma</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#035D8E]" />
                          <span className="text-sm">9627475770</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[#035D8E]" />
                          <span className="text-sm">corporate@meetingsnmore.com</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2">
                    <MapPin className="h-5 w-5 text-[#BA0A1E]" />
                    Delhi Attractions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Connaught Place</h4>
                      <p className="text-sm text-blue-700">Historic market with concentric circles design</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Lodi Garden</h4>
                      <p className="text-sm text-green-700">90-acre garden with historical monuments</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Chandni Chowk</h4>
                      <p className="text-sm text-yellow-700">Iconic market with 1500+ shops</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mission" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                    <Heart className="text-[#BA0A1E]" size={28} />
                    Mission Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-gray-700 leading-relaxed text-lg italic mb-4">
                        "The symposium aims to pursue the interplay between knowledge, technological advancements, and compassionate conduct of safe critical care practices."
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        It features distinguished keynote speakers sharing wisdom and insights to stimulate thoughtful dialogue and inspire new approaches in improving patient outcomes, while providing ample networking opportunities for professional growth and collaboration among medical fellows.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-2 md:px-4 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E]">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join DCCS</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of India's premier critical care symposium and advance your knowledge with leading experts in the field.
          </p>
          {/* <Button
            size="lg"
            className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/09c74ccd-bd0d-486d-b6d3-b69a984bc06f.pdf', '_blank')}>

            Download Brochure
          </Button> */}
        </div>
      </section>

      <Footer />
    </div>);

};

export default DCCS2024Page;