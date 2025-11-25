import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PastEventsSection = () => {
  const navigate = useNavigate();

  const pastEvents = [
  {
    id: 1,
    title: "07th Clinical Academic Meet",
    date: "June 27, 2025",
    location: "Fortis Escorts Heart Institute, New Delhi",
    type: "Academic Meet",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3a431980-62e8-463e-9dcc-ff5a9dcbbd4d.jpeg",
    description: "Scientific meeting organized on behalf of SCCM, Delhi-Noida by Department of Critical Care Medicine.",
    attendees: "29"
  },
  {
    id: 2,
    title: "ISCCM, PulmoIntensiva 2025 Conference",
    date: "June 15, 2025",
    location: "Fortis Hospital Vasant Kunj, New Delhi",
    type: "Conference",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d8ad971f-3e60-4ee6-81d6-1e9e25de500e.jpeg",
    description: "Fortis Hospital Vasant Kunj's 2nd Conference on Respiratory Diseases, Acute Medical Emergencies and Critical Care Medicine.",
    attendees: "150+"
  },
  {
    id: 3,
    title: "Critical Care Connect 4th Webinar - End of Life Care",
    date: "May 14, 2025",
    location: "Virtual Event",
    type: "Webinar",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/652012b2-5613-44c7-a8f6-c8aa59744d31.jpeg",
    description: "SCCM DELHI-NOIDA presents webinar on 'END OF LIFE CARE ISSUES IN INDIA'.",
    attendees: "44"
  },
  {
    id: 4,
    title: "ICU Fungal Infections in India - 1st Webinar",
    date: "April 15, 2025",
    location: "Virtual Event",
    type: "Webinar",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f31c205a-4045-437c-b403-7fca2241d926.jpeg",
    description: "SCCM DELHI-NOIDA presents 1st webinar series on ICU FUNGAL INFECTIONS IN INDIA.",
    attendees: "88"
  }];


  const handleViewAllClick = () => {
    navigate('/events');
  };

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg%2Bxml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23035D8E%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-red-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-red-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#BA0A1E]/10 to-[#035D8E]/10 px-4 py-2 rounded-full mb-4">
            <Clock className="w-4 h-4 text-[#BA0A1E]" />
            <span className="text-sm font-medium text-[#035D8E]">Recent Events</span>
          </div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#035D8E] to-[#BA0A1E] bg-clip-text text-transparent mb-6">
            Past Events
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our recent successful events and their impact on the critical care community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pastEvents.map((event) =>
          <Card key={event.id} className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />

                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Date badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg">
                    {event.date.split(',')[0]}
                  </div>
                  
                  {/* Type badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-[#035D8E] hover:bg-white text-xs px-2 py-1 shadow-md">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#035D8E] mb-3 line-clamp-2 group-hover:text-[#BA0A1E] transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-xs">
                      <Calendar className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Users className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                      <span className="font-medium">{event.attendees} Attendees</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <Button
            onClick={handleViewAllClick}
            variant="outline"
            className="border-2 border-[#035D8E] text-[#035D8E] hover:bg-[#035D8E] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">

            View All Past Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>);

};

export default PastEventsSection;