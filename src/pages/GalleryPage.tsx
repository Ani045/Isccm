import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Filter, Calendar, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Conference', 'Workshops', 'CME', 'Monthly meets', 'Preceptorship Programme'];

  const galleryItems = [
      // Conference Images
      {
          id: 1,
          title: "NCR MEGACRITICON 2025, INAUGURATION",
          category: "Conference",
          image: "inaug.png",
          date: "November 2025",
          location: "Indian Habitat Center ,New Delhi",
          description:
              "Main conference banner showcasing the annual gathering of critical care specialists.",
      },
      {
          id: 2,
          title: "NCR MEGACRITICON 2025, SOUVENIR LAUNCH",
          category: "Conference",
          image: "sov-launch.jpeg",
          date: "November 2025",
          location: "Indian Habitat Center ,New Delhi",
          description:
              "Main conference banner showcasing the annual gathering of critical care specialists.",
      },
      {
          id: 23,
          title: "DCCS 2024 Souvenir Launch",
          category: "Conference",
          image: "dccs-sov-lauch.jpg",
          date: "November 2024",
          location: "New Delhi",
          description:
              "Main conference banner showcasing the annual gathering of critical care specialists.",
      },
      {
          id: 24,
          title: "DCCS 2024 Inaugration",
          category: "Conference",
          image: "dccs-5.jpg",
          date: "November 2024",
          location: "Delhi",
          description:
              "Conference highlighting innovations and technological advances in critical care.",
      },

      // Workshop Images
      {
          id: 3,
          title: "Toxicology Changing Needs",
          category: "Workshops",
          image: "toxic-work.png",
          date: "Ongoing",
          location: "Kailash Heart Institute, Sector 27 Noida",
          description:
              "Comprehensive workshop addressing the evolving needs in toxicology management and patient care.",
      },
      {
          id: 4,
          title: "Mechanical Ventilation",
          category: "Workshops",
          image: "mech-vent.png",
          date: "Ongoing",
          location: "Fortis Escorts Heart Institute, Okhla, New-Delhi",
          description:
              "Advanced workshop on mechanical ventilation techniques and protocols in critical care settings.",
      },
      {
          id: 5,
          title: "Focus Critical Care Ultrasound",
          category: "Workshops",
          image: "focus-critical.jpg",
          date: "Ongoing",
          location: "Max Hospital IP Extension, Delhi",
          description:
              "Specialized workshop focusing on critical care ultrasound techniques and applications.",
      },
      {
          id: 6,
          title: "Hemodynamic Monitoring",
          category: "Workshops",
          image: "hero-dyn.png",
          date: "Ongoing",
          location: "Holy Family Hospital, Delhi",
          description:
              "Comprehensive workshop on hemodynamic monitoring techniques in critical care medicine.",
      },
      {
          id: 23,
          title: "Critical Airways in critical places outside- the- OR - Airway Management Workshop",
          category: "Workshops",
          image: "12-july.jpeg",
          date: "12th July 2025",
          location: "Max Super Speciality Hospital Patparganj Delhi",
          description:
              "Critical Airways in critical places outside- the- OR - Airway Management Workshop held on 12th July 2025, at Max Super Speciality Hospital Patparganj Delhi.",
      },

      // CME Images
      {
          id: 7,
          title: "Department of Critical Care Medicine FEHI: Infectious Disease Update Symposium",
          category: "CME",
          image: "27-28-july.png",
          date: "27th July 2024",
          location: "Fortis Escorts Heart Institute New Delhi",
          description:
              "Department of Critical Care Medicine FEHI in collaboration with ISCCM Delhi NOIDA conducted a (Infectious Disease Update) symposium at Fortis Escorts Heart Institute New Delhi on 27th July 2024.",
      },
      {
          id: 8,
          title: "CME: Sepsis Awareness",
          category: "CME",
          image: "19-sept-24.png",
          date: "19th September 2024",
          location: "Kailash Deepak Hospital, Delhi",
          description:
              "Today, SCCM DELHI-NOIDA hosted a CME titled 'Sepsis Awareness' at Kailash Deepak Hospital, Delhi.",
      },
      {
          id: 9,
          title: "Sepsis Awareness Programme",
          category: "CME",
          image: "26-sept-26.png",
          date: "26th September 2024",
          location: "Dharamshila Narayana Hospital",
          description:
              "Sepsis awareness programme in Dharamshila Narayana Hospital.",
      },
      {
          id: 10,
          title: "ISCCM Day Celebration Walkathon",
          category: "CME",
          image: "13-oct-24.png",
          date: "13th Oct 2024",
          location: "Delhi",
          description:
              "SCCM, Delhi-Noida Organises Walkathon to mark ISCCM Day Celebration on 13th Oct 2024.",
      },
      // {
      //     id: 11,
      //     title: "FLUID SYMPOSIUM: Fluid therapy challenges in ICU",
      //     category: "CME",
      //     image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6a3d9822-61d3-456d-ba73-6db19bf860e4.jpeg",
      //     date: "21st MARCH 2025",
      //     location: "India Habitat Centre, Delhi",
      //     description:
      //         "SCCM,DELHI-NOIDA hosted a [FLUID SYMPOSIUM] Fluid therapy challenges in ICU on 21st march 2025, at India Habitat Centre, Delhi.",
      // },
      {
          id: 12,
          title: "PulmoIntensiva 2025 Conference",
          category: "CME",
          image: "15-june-25.png",
          date: "15th JUNE 2025",
          location: "Fortis Hospital Vasant Kunj",
          description:
              "PulmoIntensiva 2025 Conference- Fortis Hospital Vasant Kunj presents it's 2nd Conference on Respiratory Diseases, Acute Medical Emergencies and critical care Medicine.",
      },

      // Monthly Meet Images
      {
          id: 13,
          title: "SCCM Delhi-Noida Monthly Meet",
          category: "Monthly meets",
          image: "28-june-2024.png",
          date: "28th June 2024",
          location: "Fortis Hospital Vasant Kunj, New Delhi",
          description:
              "SCCM, Delhi-Noida, Monthly Meet Presented by Fortis Hospital Vasant Kunj, New Delhi.",
      },
      {
          id: 14,
          title: "SCCM Delhi-Noida Monthly Meet",
          category: "Monthly meets",
          image: "26-july-24-max.png",
          date: "26th July 2024",
          location: "Max Superspeciality Hospital Patparganj",
          description:
              "SCCM, Delhi-Noida, Monthly Meet Presented by Max Superspeciality Hospital Patparganj.",
      },
      {
          id: 15,
          title: "SCCM Delhi-Noida Monthly Meet",
          category: "Monthly meets",
          image: "27-sept-24.png",
          date: "27th September 2024",
          location: "Kailash Hospital & Heart Institute, Sector-27, Noida",
          description:
              "SCCM, Delhi-Noida, Monthly Meet Presented by Kailash Hospital & Heart Institute, Sector-27, Noida.",
      },
      {
          id: 16,
          title: "SCCM Delhi-Noida Monthly Meet",
          category: "Monthly meets",
          image: "27-dec-24.png",
          date: "27th December 2024",
          location: "Sri Action Balaji Medical Institute",
          description:
              "SCCM, Delhi-Noida, Monthly Meet Presented by Sri Action Balaji Medical Institute.",
      },
      {
          id: 17,
          title: "SCCM Delhi-Noida Monthly Meet",
          category: "Monthly meets",
          image: "31-jan-25-swami.png",
          date: "31st January 2025",
          location: "Swami Dayanand Hospital",
          description:
              "SCCM, Delhi-Noida, Monthly Meet Presented by Swami Dayanand Hospital.",
      },
      {
          id: 18,
          title: "SCCM Delhi-Noida Monthly Meet",
          category: "Monthly meets",
          image: "27-june-25.png",
          date: "27th June 2025",
          location: "Fortis Escorts Heart Institute, New Delhi",
          description:
              "SCCM, Delhi-Noida, Monthly Meet Presented by Fortis Escorts Heart Institute, New Delhi.",
      },
      // NEW: 8th Monthly Clinical Meet added
      {
          id: 24,
          title: "8th Monthly Clinical Meet",
          category: "Monthly meets",
          image: "29-august.jpeg",
          date: "29th August 2025",
          location: "Sarvodaya Hospital, Greater Noida",
          description:
              "The 8th Monthly Clinical Meet hosted by Sarvodaya Hospital, Greater Noida. This educational evening featured expert presentations on current clinical research and developments in critical care medicine.",
      },

      // Preceptorship Programme Images
      {
          id: 19,
          title: "ISCCM Preceptorship Program: Critical Care Awareness",
          category: "Preceptorship Programme",
          image: "29-august.jpeg",
          date: "30th August 2024",
          location: "Rama Medical College, Hapur (UP)",
          description:
              "ISCCM Preceptorship Program themed 'Critical Care Awareness' at Rama Medical College, Hapur (UP).",
      },
      {
          id: 20,
          title: "ISCCM Preceptorship Program: Core Concept in Critical Care Medicine",
          category: "Preceptorship Programme",
          image: "16-oct-24.png",
          date: "16th October 2024",
          location:
              "Hamdard Institute of Medical Science & Research (HIMSR), New Delhi",
          description:
              "ISCCM Preceptorship Program themed 'Core Concept in Critical Care Medicine' at HIMSR, New Delhi.",
      },
      {
          id: 21,
          title: "ISCCM Preceptorship Program: Critical Care Awareness Program",
          category: "Preceptorship Programme",
          image: "17-dec-24.png",
          date: "17th December 2024",
          location: "Ghaziabad District Hospital",
          description:
              "ISCCM Preceptorship Program themed Critical Care Awareness Program at Ghaziabad district hospital.",
      },
      {
          id: 22,
          title: "ISCCM Preceptorship Program: Critical Care Awareness Program",
          category: "Preceptorship Programme",
          image: "22-jan-25.png",
          date: "22nd January 2025",
          location: "Baghpat District hospital",
          description:
              "ISCCM Critical Care Awareness Initiative Preceptorship program at Baghpat District hospital, on 22nd January 2025.",
      },
  ];


  const filteredItems = selectedCategory === 'All' ?
  galleryItems :
  galleryItems.filter((item) => item.category === selectedCategory);

  const handleRegisterClick = () => {
    navigate('/events');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <PageBanner
        title="ISCCM Gallery"
        subtitle="Explore moments from our conferences, workshops, and community initiatives"
        badgeText="ISCCM Gallery"
        showContactButton={false} />

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/30 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) =>
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#BA0A1E]/90 hover:to-[#035D8E]/90" : ""}>
                  {category}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'All Images' : selectedCategory}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? 'image' : 'images'} found
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) =>
            <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-md border-0">
                    <div className="relative">
                      <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" />

                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#BA0A1E] transition-colors line-clamp-1">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl">
                  <div className="space-y-4">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-contain rounded-lg" />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        <Badge className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white">{item.category}</Badge>
                      </div>

                      <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Don't miss our upcoming events and activities. Follow us to stay connected
            with the latest in critical care medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRegisterClick}
              size="lg"
              className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-bold">
              View Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default GalleryPage;