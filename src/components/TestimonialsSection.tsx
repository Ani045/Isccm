import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
  {
    id: 1,
    name: "Dr. Ankit Purohit",
    designation: "Consultant Critical Care Medicine , Fortis Hospital",
    location: "Manesar , Gurugram",
    image: "testimonails.jpeg",
    testimonial: "ISCCM is vital support to remain updated and practice evidence based medicine. A motivation to strive for perfection.",
    rating: 5
  },
  {
    id: 2,
    name: " Dr Rishabh Mittal",
    designation: "Additional Director & Head",
    location: "Fortis Hospital Manesar ( Delhi - NCR)",
    image: "dr-risabh-kumar.jpg",
    testimonial: "ISCCM is a very good platform for critical care medicine physicians to share knowledge and innovations with each other",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Amit Gupta",
    designation: "ICU Director, Apollo Hospital",
    location: "Gurgaon",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
    testimonial: "Being part of ISCCM has connected me with leading experts in critical care. The research collaborations have significantly enhanced our patient outcomes.",
    rating: 5
  },
  {
    id: 4,
    name: "Sister Mary Thomas",
    designation: "ICU Nurse Manager, AIIMS",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1748200100142-e8d4f689acd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwcGVyc29uJTI3cyUyMGZhY2UlMkMlMjBsaWtlbHklMjBhJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQufGVufDB8fHx8MTc1MTkyODYxMnww&ixlib=rb-4.1.0&q=80&w=200$w=100",
    testimonial: "ISCCM's inclusive approach to healthcare professionals is commendable. As a nurse, I feel valued and supported in my professional development.",
    rating: 5
  },
  {
    id: 5,
    name: "Dr. Sandeep Mehta",
    designation: "Pulmonologist, Medanta Hospital",
    location: "Gurgaon",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face",
    testimonial: "The society's focus on evidence-based medicine and continuous learning has helped me stay updated with the latest advancements in critical care.",
    rating: 5
  },
  {
    id: 6,
    name: "Dr. Neha Agarwal",
    designation: "Resident, Critical Care Medicine",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=100&h=100&fit=crop&crop=face",
    testimonial: "As a resident, ISCCM has provided me with mentorship and guidance that has been crucial for my training in critical care medicine.",
    rating: 5
  }];


  return (
    <section className="py-8 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#035D8E] mb-4">
            What Our Members Say
          </h2>
          <div className="w-20 h-1 bg-[#BA0A1E] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from healthcare professionals who are part of our vibrant community
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) =>
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Quote className="h-8 w-8 text-[#BA0A1E] mr-3" />
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) =>
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        )}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        "{testimonial.testimonial}"
                      </p>
                      
                      <div className="flex items-center">
                        <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4" />

                        <div>
                          <h4 className="font-bold text-[#035D8E]">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.designation}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;