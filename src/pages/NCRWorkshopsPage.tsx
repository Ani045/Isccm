import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const NCRWorkshopsPage = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const workshops = [
      {
          id: 1,
          title: "Mechanical ventilation/ Airway Bronchoscopy workshop",
          venue: "BLK MAX super speciality hospital",
          image: "1.png",
          category: "respiratory",
      },
      {
          id: 2,
          title: "POCCUS WORKSHOP",
          venue: "Medanta Medicity hospital gurugram",
          image: "2.png",
          category: "ultrasound",
      },
      {
          id: 3,
          title: "Hemodynamic monitoring workshop",
          venue: "Artemis hospital Gurugram",
          image: "3.png",
          category: "monitoring",
      },
      {
          id: 4,
          title: "Research Methodology and publications (REAP)",
          venue: "AIIMS, New Delhi",
          image: "4.png",
          category: "research",
      },
      {
          id: 5,
          title: "Neuro critical Care workshop",
          venue: "Sir ganga ram hospital",
          image: "5.png",
          category: "neurology",
      },
      {
          id: 6,
          title: "CRRT and ECCOR WORKSHOP",
          venue: "Max super speciality hospital, ip extension",
          image: "6.png",
          category: "extracorporeal",
      },
  ];

  const getCategoryBadge = (category: string) => {
    const colors = {
      respiratory: "bg-green-100 text-green-800",
      ultrasound: "bg-blue-100 text-blue-800",
      monitoring: "bg-red-100 text-red-800",
      research: "bg-purple-100 text-purple-800",
      neurology: "bg-indigo-100 text-indigo-800",
      extracorporeal: "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <PageBanner
        title="NCR Mega CritiCon 2025 Workshops"
        subtitle="Specialized Training Sessions"
        badgeText="Coming Soon"
        showContactButton={false} />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Workshop Details
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Six specialized workshops covering essential topics in critical care medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="border-2 border-gray-100 hover:border-[#BA0A1E]/20 transition-all duration-300 overflow-hidden group h-auto">
                <div className="relative overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setEnlargedImage(workshop.image)}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryBadge(workshop.category)}>
                      {workshop.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle  onClick={() => setEnlargedImage(workshop.image)} className="text-lg text-gray-900 leading-tight">
                    {workshop.title}
                  </CardTitle>
                </CardHeader>

                <CardContent  onClick={() => setEnlargedImage(workshop.image)} className="pb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{workshop.venue}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image Enlargement Modal */}
          {enlargedImage && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setEnlargedImage(null)}
            >
              <div className="relative max-w-3xl max-h-3/4">
                <button
                  onClick={() => setEnlargedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-10"
                >
                  <X size={24} />
                </button>
                <img
                  src={enlargedImage}
                  alt="Enlarged workshop image"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

      
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NCRWorkshopsPage;