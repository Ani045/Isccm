
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const ContactPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <PageBanner
        title="Contact Us"
        description="Get in touch with the Indian Society of Critical Care Medicine"
        breadcrumb="Contact" />


      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action="https://app.formester.com/forms/hphnf8Hpu/submissions" method="POST" className="space-y-6" accept-charset="UTF-8">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    pattern="^[A-Za-z\s]+$"
                    title="Name should contain only alphabets and spaces"
                    required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="9000000000"
                    pattern="^[0-9]{10}$"
                    title="Phone number must be exactly 10 digits"
                    maxLength={10}
                    required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    rows={5}
                    required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700">
                  <div className="flex items-center justify-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </div>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of the following methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">
                      805, 8th Floor, Shakuntala Apartments,
                      Nehru Place Market Road,
                       <br /> Nehru Place, 
                      Delhi 110019, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    
                    <a href="tel:+918076994708" className="text-gray-600 mt-1 hover:text-blue-600 transition-colors block">
                    +91 80769 94708
                    </a>
                    <p className="text-gray-600 mt-1">
                    Ms. Muskan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:isccmdelhichapter@gmail.com" className="text-gray-600 mt-1 hover:text-blue-600 transition-colors block">
                      isccmdelhichapter@gmail.com
                    </a>
                  </div>
                </div>

                
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Our Location</CardTitle>
                <CardDescription>
                  Find us at our office in Nehru Place, New Delhi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7009.384003067644!2d77.252684!3d28.548976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c579bfbe61%3A0xbda2b7e07567dfe1!2sShakuntala%20Apartments%2C%20Nehru%20Pl%20Market%20Rd%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1752578571383!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ISCCM Office Location" />

                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        
      </div>

      <Footer />
    </div>);

};

export default ContactPage;