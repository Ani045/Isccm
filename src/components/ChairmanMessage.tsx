import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail, ChevronDown, ChevronUp, Play } from 'lucide-react';

const ChairmanMessage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-blue-50" id="chairman">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#035D8E] mb-4">
            Leadership Message
          </h2>
          <div className="w-20 h-1 bg-[#BA0A1E] mx-auto"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* New side-by-side layout for desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
                
                {/* Left side - Video and Leadership */}
                <div className="bg-gradient-to-br from-[#035D8E] to-[#0B7AAA] p-6 sm:p-8 text-white flex flex-col justify-center">
                  
                  {/* Video Section - Reduced height */}
                  <div className="mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-yellow-200 mb-4 flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Chairperson's Message
                    </h4>
                    <div className="relative w-full max-w-sm mx-auto">
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-white/20">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/glJKawehtMc"
                          title="Chairperson Message for the Official Website of SCCM, Delhi Noida"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="rounded-lg">
                        </iframe>
                      </div>
                    </div>
                  </div>

                  {/* Leadership Team - Improved layout */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Chairman */}
                    <div className="flex flex-col items-center text-center">
                      <img
                        src="prashant.jpeg"
                        alt="Dr. Prashant Saxena"
                        className="w-16 h-16 rounded-full mb-2 object-cover border-2 border-white shadow-lg" />

                      <h3 className="text-sm font-bold mb-1">Dr. Prashant Saxena</h3>
                      <p className="text-yellow-200 font-medium text-xs">Chairperson</p>
                    </div>

                    {/* Secretary */}
                    <div className="flex flex-col items-center text-center">
                      <img
                        src="dr-akhil-taneja_new.png"
                        alt="Dr. Akhil Taneja"
                        className="w-16 h-16 rounded-full mb-2 object-cover border-2 border-white shadow-lg" />

                      <h3 className="text-sm font-bold mb-1">Dr. Akhil Taneja</h3>
                      <p className="text-yellow-200 font-medium text-xs">Secretary</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      className="bg-[#BA0A1E] hover:bg-red-700 text-white px-4 py-2 text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('mailto:isccmdelhichapter@gmail.com', '_blank')}>
                      <Mail className="h-4 w-4" />
                      Contact Leadership
                    </Button>
                  </div>
                </div>
                
                {/* Right side - Message Content */}
                <div className="p-6 sm:p-8 bg-white flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#035D8E] mb-2">Welcome Message</h3>
                    <div className="w-16 h-1 bg-[#BA0A1E]"></div>
                  </div>
                  
                  <ScrollArea className="max-h-96 pr-4">
                    <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <p>
                        <strong className="text-[#035D8E]">Dear Colleagues and Friends,</strong>
                      </p>
                      
                      <p>
                        Welcome to the official website of the SCCM Delhi-Noida branch. It is a matter of great honour and pride to serve this esteemed organization which stands at the forefront of advancing critical care medicine.
                      </p>
                      
                      <p>
                        In the rapidly evolving field of critical care, our society remains committed to fostering excellence in patient care, education, and research. The challenges we face in the intensive care units are immense, and it is through our collective dedication and expertise that we can improve outcomes for the critically ill.
                      </p>
                      
                      {isExpanded &&
                      <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                          <p>
                            Our society serves as a platform for collaboration among healthcare professionals, researchers, and policymakers. By sharing knowledge, best practices, and innovations, we aim to drive advancements in critical care that make a tangible difference in the lives of patients and their families.
                          </p>
                          
                          <p>
                            This website is designed to be a resource for all members, providing access to the latest research, guidelines, and educational opportunities. I encourage you to explore the content, participate in our events, and contribute to the ongoing dialogue within our community.
                          </p>
                          
                          <p>
                            As we look to the future, we are confident that together, we will continue to push the boundaries of what is possible in critical care medicine. Thank you for your unwavering commitment and passion. Together, we are making a difference.
                          </p>
                          
                          <p>
                            Our society's strength lies in its members. Together, we represent a diverse and talented group united by a common goal. Inclusivity is vital to our society's character. We hope that every member feels appreciated, heard, and empowered, and that they have equitable opportunities to actively participate in and contribute to the society's efforts.
                          </p>
                          
                          <p>
                            We invite comments and feedback at <a href="mailto:isccmdelhichapter@gmail.com" className="text-[#BA0A1E] hover:text-[#035D8E] font-semibold transition-colors duration-200">isccmdelhichapter@gmail.com</a> to improve upon ourselves and society.
                          </p>
                          
                          <div className="mt-6 pt-4 border-t border-gray-200">
                            <p><strong className="text-[#035D8E]">Warm regards,</strong></p>
                            <p><strong className="text-[#BA0A1E]">Long Live SCCM (Delhi-Noida)</strong></p>
                          </div>
                          
                          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="text-center sm:text-left">
                              <p className="font-semibold text-[#035D8E]">Dr Prashant Saxena</p>
                              <p className="text-sm text-gray-600">Chairperson</p>
                              <p className="text-sm text-gray-600">SCCM, Delhi-Noida</p>
                            </div>
                            
                            <div className="text-center sm:text-left">
                              <p className="font-semibold text-[#035D8E]">Dr. Akhil Taneja</p>
                              <p className="text-sm text-gray-600">Secretary</p>
                              <p className="text-sm text-gray-600">SCCM, Delhi-Noida</p>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </ScrollArea>
                  
                  <div className="flex justify-center mt-6">
                    <Button
                      onClick={() => setIsExpanded(!isExpanded)}
                      variant="outline"
                      className="text-[#035D8E] border-[#035D8E] hover:bg-[#035D8E] hover:text-white flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      {isExpanded ? 'Show Less' : 'Read Full Message'}
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>);

};

export default ChairmanMessage;