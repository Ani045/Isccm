import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Phone, MessageSquare, AlertTriangle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const QuickContactForm = () => {

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#035D8E] mb-4">
              Get in Touch with Us
            </h2>
            <div className="w-20 h-1 bg-[#BA0A1E] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              Have questions about our programs, events, or membership? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quick Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl text-[#035D8E] flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Quick Contact
                </CardTitle>
                <CardDescription>
                  Send us a message and we'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action="https://app.formester.com/forms/hphnf8Hpu/submissions" method="POST" className="space-y-4" accept-charset="UTF-8">
                  <div className="space-y-2">
                    <Label htmlFor="quick-name">Full Name *</Label>
                    <Input
                      id="quick-name"
                      name="name"
                      placeholder="Enter your full name"
                      pattern="^[A-Za-z\s]+$"
                      title="Name should contain only alphabets and spaces"
                      required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quick-email">Email Address *</Label>
                      <Input
                        id="quick-email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quick-phone">Phone Number *</Label>
                      <Input
                        id="quick-phone"
                        name="phone"
                        type="tel"
                        placeholder="9000000000"
                        pattern="^[0-9]{10}$"
                        title="Phone number must be exactly 10 digits"
                        maxLength={10}
                        required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quick-message">Message *</Label>
                    <Textarea
                      id="quick-message"
                      name="message"
                      placeholder="Tell us about your inquiry, questions, or how we can help you..."
                      rows={4}
                      required />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#035D8E] hover:bg-[#024B74]">
                    <div className="flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </div>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-[#035D8E] to-[#024B74] text-white">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Reach out to us directly through these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-200" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-100 text-sm">isccmdelhichapter@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-200" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-blue-100 text-sm">+91 80769 94708</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-[#BA0A1E] to-[#9B0818] text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                          onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>
                          Apply for Membership
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="bg-amber-50 border-amber-200 text-amber-800 max-w-xs p-3">

                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-amber-800">⚠️ Important Notice</p>
                            <p className="text-sm text-amber-700">
                              Please enter Delhi/Noida as your city and provide your Delhi/Noida address when applying.
                            </p>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                    onClick={() => window.location.href = '/events'}>

                    View Upcoming Events
                  </Button>
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                    onClick={() => window.location.href = '/about'}>

                    Learn More About ISCCM
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default QuickContactForm;