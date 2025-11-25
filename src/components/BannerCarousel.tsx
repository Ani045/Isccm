import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BannerCarousel = () => {
  const navigate = useNavigate();

  const banners = [
      {
    id: 1,
    image: "ISCCM-banner-m.png",

    alt: "Banner 1",
    title: "",
    subtitle: ""
  },
  {
    id: 1,
    image: "dccs3.jpg",

    alt: "Banner 1",
    title: "Welcome to ISCCM Delhi/Noida",
    subtitle: "Indian Society of Critical Care Medicine"
  },
  {
    id: 2,
    image: "2.jpg",
    alt: "Banner 2",
    title: "Excellence in Critical Care",
    subtitle: "Advancing Critical Care Medicine in India"
  },
  {
    id: 3,
    image: "1.jpg",
    alt: "Banner 3",
    title: "Join Our Community",
    subtitle: "Connect with Critical Care Professionals"
  }];

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section className="relative">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {banners.map((banner) =>
          <CarouselItem key={banner.id}>
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover" />
                
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/40" /> */}
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="max-w-4xl mx-auto px-4 text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                      {banner.title}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md">
                      {banner.subtitle}
                    </p>
                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                      size="lg"
                      className="bg-white hover:bg-black text-black hover:text-white  px-8 py-3 text-lg"
                      onClick={handleContactUs}>

                        <Mail className="mr-2 h-5 w-5" />
                        Contact Us
                      </Button>
                    
                    </div> */}
                  </div>
                </div>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
        <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
      </Carousel>
    </section>);

};

export default BannerCarousel;