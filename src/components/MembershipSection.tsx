import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Users, BookOpen, Award, Network, FileText, Calendar, MapPin, GraduationCap, FlaskConical, User } from 'lucide-react';

const MembershipSection = () => {
  const benefits = [
  {
    icon: BookOpen,
    title: "Medicine",
    description: "You will get access to Indian Journal of Critical Care Medicine (IJCCM) monthly – (PUBMED INDEXED)"
  },
  {
    icon: FileText,
    title: "News Letter",
    description: "You will get access to ISCCM Newsletter every 2 months and information/updates on Critical care events."
  },
  {
    icon: Calendar,
    title: "Conference",
    description: "Discount on registration fees for national and other conferences of the ISCCM"
  },
  {
    icon: MapPin,
    title: "Branch Meeting",
    description: "Automatically become a member of your ISCCM local branch and get invited to all branch meetings and get regular updates"
  },
  {
    icon: GraduationCap,
    title: "Benefits of Course",
    description: "You can get your ICU recognised to conduct ISCCM run diploma and fellowship courses if they meet the criteria."
  },
  {
    icon: FlaskConical,
    title: "Research Projects",
    description: "Register your ICU with ISCCM and participate in ISCCM research projects"
  }];



  const membershipTypes = [
  {
    type: "Regular Member",
    price: "₹2,500",
    period: "Annual",
    features: ["Full access to resources", "Conference discounts", "Networking events"]
  },
  {
    type: "Life Member",
    price: "₹25,000",
    period: "One-time",
    features: ["Lifetime access", "All regular benefits", "Priority booking", "Special recognition"]
  },
  {
    type: "Student Member",
    price: "₹500",
    period: "Annual",
    features: ["Educational access", "Student events", "Mentorship program"]
  }];


  return (
    <section className="py-8 bg-white" id="membership">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#035D8E] mb-4">
            ISCCM Membership Benefits
          </h2>
          <div className="w-20 h-1 bg-[#BA0A1E] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Critical Care Medicine (CCM) is an evolving specialty overlapping multiple primary specialties. Recognizing the increasing need to consolidate the field and to promote awareness, continuing education and research in this field, the Indian Society of Critical Care Medicine (ISCCM) was Formed on 9th October 1993.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Benefits Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#035D8E] text-center mb-8">
              Membership Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) =>
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-6">
                    <benefit.icon className="h-10 w-10 text-[#BA0A1E] mb-4" />
                    <h4 className="text-lg font-bold text-[#035D8E] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
        
          {/* Call to Action */}
          <div className="text-center">
            <Card className="shadow-lg border-0 bg-gradient-to-r from-[#035D8E] to-[#BA0A1E] text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Join Our Community?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Take the next step in your critical care career. Join thousands of healthcare professionals 
                  who are advancing patient care through excellence in critical care medicine.
                </p>
                <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20 max-w-md mx-auto">
                  <div className="text-sm text-amber-200 font-medium mb-2">⚠️ Important Notice</div>
                  <div className="text-sm text-blue-100">Please enter Delhi/Noida as your city and provide your Delhi/Noida address when applying.</div>
                </div>
                <Button
                  className="bg-white text-[#035D8E] hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                  onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>

                  Start Your Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>);

};

export default MembershipSection;