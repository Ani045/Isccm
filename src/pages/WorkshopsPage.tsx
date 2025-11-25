import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const WorkshopsPage = () => {
  const workshops = [
      {
          id: 1,
          title: "FOCCUS (Focused Critical Care Ultrasound)",
          venue: "Max Hospital, IP Extension, Delhi",
          date: "November 14, 2025",
          time: "9:00 AM - 5:00 PM",
          capacity: "30 participants",
          level: "Advanced",
          description:
              "Comprehensive hands-on training in focused critical care ultrasound techniques for bedside diagnostic and therapeutic applications.",
          topics: [
              "Basic ultrasound physics and knobology",
              "Cardiac ultrasound assessment",
              "Lung ultrasound patterns",
              "Vascular access guidance",
              "Abdominal ultrasound in ICU",
          ],

          category: "ultrasound",
          image: "focus-critical.jpg",
      },
      {
          id: 2,
          title: "MECHANICAL VENTILATION, DIFFICULT AIRWAY & ICU BRONCHOSCOPY",
          venue: "Fortis Escorts Heart Institute, Okhla, New Delhi",
          date: "November 14, 2025",
          time: "9:00 AM - 5:00 PM",
          capacity: "25 participants",
          level: "Advanced",
          description:
              "Advanced training in mechanical ventilation strategies, difficult airway management, and therapeutic bronchoscopy in critical care.",
          topics: [
              "Advanced ventilation modes",
              "Difficult airway algorithms",
              "Bronchoscopy techniques in ICU",
              "Airway management in COVID-19",
              "Ventilator troubleshooting",
          ],

          category: "respiratory",
          image: "mech-vent.png",
      },
      {
          id: 3,
          title: "TOXICOLOGY- CHANGING NEEDS: NEEDED CHANGES",
          venue: "Kailash Heart Institute, Sector-27, Noida",
          date: "November 14, 2025",
          time: "9:00 AM - 5:00 PM",
          capacity: "35 participants",
          level: "Intermediate",
          description:
              "Contemporary approaches to toxicology in critical care, addressing emerging toxins and evolving treatment strategies.",
          topics: [
              "Emerging drug toxicities",
              "Antidote management",
              "Novel poisoning patterns",
              "Toxicology in pregnancy",
              "Environmental toxin exposure",
          ],

          category: "toxicology",
          image: "toxic-work.png",
      },
      {
          id: 4,
          title: "HEMODYNAMIC MONITORING",
          venue: "Holy Family Hospital, Delhi",
          date: "November 14, 2025",
          time: "9:00 AM - 5:00 PM",
          capacity: "30 participants",
          level: "Advanced",
          description:
              "Advanced hemodynamic monitoring techniques and interpretation for optimal patient management in critical care settings.",
          topics: [
              "Advanced cardiac output monitoring",
              "Pressure waveform analysis",
              "Fluid responsiveness assessment",
              "Shock identification and management",
              "Vasopressor optimization",
          ],

          category: "monitoring",
          image: "hero-dyn.png",
      },
  ];


  const getCategoryBadge = (category: string) => {
    const colors = {
      ultrasound: "bg-blue-100 text-blue-800",
      respiratory: "bg-green-100 text-green-800",
      toxicology: "bg-purple-100 text-purple-800",
      monitoring: "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getLevelBadge = (level: string) => {
    const colors = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-yellow-100 text-yellow-800",
      Advanced: "bg-red-100 text-red-800",
      Specialized: "bg-purple-100 text-purple-800"
    };
    return colors[level as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <PageBanner
        title="DCCS 2024 Workshops"
        subtitle="Hands-on Training Sessions by Expert Faculty"
        badgeText="November 14, 2025"
        showContactButton={false} />


      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Workshop Details
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four intensive workshops covering essential topics in critical care medicine.
              All workshops will be held on November 14, 2025, at different venues across Delhi-NCR.
            </p>
          </div>

          {/* Workshop Categories */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="all">All Workshops</TabsTrigger>
              <TabsTrigger value="ultrasound">Ultrasound</TabsTrigger>
              <TabsTrigger value="respiratory">Respiratory</TabsTrigger>
              <TabsTrigger value="toxicology">Toxicology</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6">
                {workshops.map((workshop) =>
                <Card key={workshop.id} className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300 overflow-hidden">
                    <div className="md:flex">
                      {/* Workshop Image */}
                      <div className="md:w-1/3 lg:w-1/4">
                        <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-48 md:h-full object-cover" />

                      </div>

                      {/* Workshop Content */}
                      <div className="md:w-2/3 lg:w-3/4">
                        <CardHeader>
                          <div className="flex flex-col gap-4">
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <Badge className={getCategoryBadge(workshop.category)}>
                                  {workshop.category}
                                </Badge>
                                <Badge className={getLevelBadge(workshop.level)}>
                                  {workshop.level}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                                {workshop.title}
                              </CardTitle>
                            </div>

                          </div>
                        </CardHeader>

                        <CardContent>
                          <p className="text-gray-600 mb-4">{workshop.description}</p>

                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                              <div className="flex items-center text-gray-600">
                                <Calendar className="h-4 w-4 mr-2" />
                                {workshop.date}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Clock className="h-4 w-4 mr-2" />
                                {workshop.time}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                {workshop.venue}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Users className="h-4 w-4 mr-2" />
                                {workshop.capacity}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                <BookOpen className="h-4 w-4 mr-2" />
                                Topics Covered
                              </h4>
                              <ul className="space-y-1">
                                {workshop.topics.map((topic, index) =>
                              <li key={index} className="text-sm text-gray-600 flex items-start">
                                    <div className="w-1.5 h-1.5 bg-[#BA0A1E] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                    {topic}
                                  </li>
                              )}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Individual category content */}
            {['ultrasound', 'respiratory', 'toxicology', 'monitoring'].map((category) =>
            <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid gap-6">
                  {workshops.filter((workshop) => workshop.category === category).map((workshop) =>
                <Card key={workshop.id} className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300 overflow-hidden">
                      <div className="md:flex">
                        {/* Workshop Image */}
                        <div className="md:w-1/3 lg:w-1/4">
                          <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-48 md:h-full object-cover" />

                        </div>

                        {/* Workshop Content */}
                        <div className="md:w-2/3 lg:w-3/4">
                          <CardHeader>
                            <div className="flex flex-col gap-4">
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <Badge className={getCategoryBadge(workshop.category)}>
                                    {workshop.category}
                                  </Badge>
                                  <Badge className={getLevelBadge(workshop.level)}>
                                    {workshop.level}
                                  </Badge>
                                </div>
                                <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                                  {workshop.title}
                                </CardTitle>
                              </div>

                            </div>
                          </CardHeader>

                          <CardContent>
                            <p className="text-gray-600 mb-4">{workshop.description}</p>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div className="space-y-2">
                                <div className="flex items-center text-gray-600">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {workshop.date}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Clock className="h-4 w-4 mr-2" />
                                  {workshop.time}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {workshop.venue}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Users className="h-4 w-4 mr-2" />
                                  {workshop.capacity}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                  <BookOpen className="h-4 w-4 mr-2" />
                                  Topics Covered
                                </h4>
                                <ul className="space-y-1">
                                  {workshop.topics.map((topic, index) =>
                              <li key={index} className="text-sm text-gray-600 flex items-start">
                                      <div className="w-1.5 h-1.5 bg-[#BA0A1E] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                      {topic}
                                    </li>
                              )}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                )}
                </div>
              </TabsContent>
            )}
          </Tabs>

          {/* Registration Information */}
          <div className="bg-gradient-to-r from-[#BA0A1E]/5 to-[#035D8E]/5 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Workshop Registration
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Secure your spot in our hands-on workshops. Limited seats available for each session.
                All workshops will be held on November 14, 2025.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Award className="h-8 w-8 text-[#BA0A1E] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">CME Credits</h4>
                  <p className="text-gray-600">6 CME hours per workshop</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-[#035D8E] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Small Groups</h4>
                  <p className="text-gray-600">Limited to 25-35 participants</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-[#BA0A1E] mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Materials</h4>
                  <p className="text-gray-600">All materials included</p>
                </div>
              </div>
              {/* <Button
                size="lg"
                className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white font-semibold">

                Register for Workshops
              </Button> */}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Award className="h-5 w-5 mr-2 text-yellow-600" />
              Important Information
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                All workshops are scheduled for November 14, 2025, from 9:00 AM to 5:00 PM
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Registration includes workshop materials, refreshments, and CME certificate
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Each workshop has limited seats - early registration recommended
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Participants can attend multiple workshops (subject to availability)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>);

};

export default WorkshopsPage;