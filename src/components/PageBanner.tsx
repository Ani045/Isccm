import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  showContactButton?: boolean;
  backgroundImage?: string;
  customHeight?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  badgeText,
  showContactButton = false,
  backgroundImage,
  customHeight = "py-16"
}) => {
  const handleContactUs = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  // Default background gradient if no image provided
  const defaultBackground = "bg-gradient-to-r from-[#BA0A1E] to-[#035D8E]";

  return (
    <div
      className={`${defaultBackground} text-white ${customHeight} relative overflow-hidden`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : undefined}>

      {/* Overlay for better text visibility when background image is used */}
      {backgroundImage &&
      <div className="absolute inset-0 bg-black/50" />
      }
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {badgeText &&
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {badgeText}
            </Badge>
          }
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          {subtitle &&
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
              {subtitle}
            </p>
          }
          {showContactButton &&
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black hover:text-black px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactUs}>

                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          }
        </div>
      </div>
    </div>);

};

export default PageBanner;