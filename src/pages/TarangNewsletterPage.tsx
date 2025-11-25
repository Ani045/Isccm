import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download, Eye, FileText, ArrowRight, Mail, Bell, BookOpen, Users, Heart, Award, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const TarangNewsletterPage = () => {
  const newsletters = [
  {
    id: 1,
    title: "SCCM Delhi-Noida Newsletter 'Tarang'",
    issue: "Volume 2, Issue 3",
    date: "2024-12-31",
    period: "September-December 2024",
    description: "SCCM Delhi-Noida Newsletter 'Tarang' featuring new leadership team for 2024-26 and record-breaking DCCS 2024 conference with 403 registrations. Comprehensive review of ECMO guidelines and clinical cases.",
    leadership: {
      chairperson: "Dr. Prashant Saxena",
      secretary: "Dr. Akhil Taneja",
      treasurer: "Dr. Amit Goel"
    },
    achievement: "Successfully hosted DCCS 2024 with record 403 registrations - a new milestone",
    mainEvent: "DCCS 2024: 3-day conference with 4 pre-conference workshops at prominent Delhi hospitals and main conference at India Habitat Centre",
    newMembers: "24 new life members welcomed to expand the society",
    highlights: [
    "ECMO Guidelines: Comprehensive review of contemporary extracorporeal membrane oxygenation therapy fundamentals by Dr. Vinod Kumar Singh",
    "Clinical Cases: Hyperviscosity syndrome in a 68-year-old cancer patient",
    "BRASH syndrome case with detailed management approach",
    "PUMA Guidelines: Detailed review on preventing unrecognized esophageal intubation",
    "Student Café: Hemodynamics overview for trainees",
    "Outreach Programs: Multiple sepsis awareness CMEs, walkathon for ISCCM Day, and preceptorship programs"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/80a4d250-bc41-4735-b158-786dac69fb6b.pdf",
    featured: true
  },
  {
    id: 2,
    title: "SCCM Delhi-Noida Newsletter 'Tarang'",
    issue: "Volume 2, Issue 2",
    date: "2024-09-30",
    period: "August-September 2024",
    description: "Quarterly Newsletter 'Tarang' featuring new Executive Committee for 2024-26 and comprehensive educational content on critical care burnout, antimicrobial resistance patterns, and latest sepsis guidelines.",
    leadership: {
      chairperson: "Dr. Prashant Saxena",
      secretary: "Dr. Akhil Taneja",
      treasurer: "Dr. Amit Goel"
    },
    achievement: "New Executive Committee for 2024-26 established with continued leadership excellence",
    mainEvent: "19th Delhi Critical Care Symposium (DCCS 2024) scheduled for November 8-10, 2024 at India Habitat Centre, Delhi",
    newMembers: "10 new life members welcomed from Delhi and surrounding areas",
    highlights: [
    "Pearls of Wisdom: Article on critical care burnout and the importance of de-stressing both healthcare providers and patients",
    "Cases to Remember: ISMRK (Imipenem Sensitive Meropenem Resistant Klebsiella) - an unusual antimicrobial resistance pattern",
    "Student's Café: Comprehensive review of the Latest Surviving Sepsis Guidelines",
    "Journal Quest: Analysis of the ENRICH trial on early minimally invasive removal of intracerebral hemorrhage",
    "Multiple clinical meetings (150+ attendees at Pulmo Intensiva 2024)",
    "Infectious disease symposium, Airway and mechanical ventilation conference, Outreach program at Rama Medical College, Hapur"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d51c9c46-d1fa-485c-8902-db1b3177993e.pdf",
    featured: false
  },
  {
    id: 3,
    title: "SCCM Delhi-Noida Newsletter 'Tarang'",
    issue: "Volume 2, Issue 1",
    date: "2024-06-30",
    period: "April-June 2024",
    description: "Quarterly Newsletter 'Tarang' celebrating SCCM Delhi-Noida's second consecutive 'Best City Branch (Metro) Award' at CRITICARE 2024 in Kolkata, featuring comprehensive educational content and upcoming DCCS 2024 details.",
    leadership: {
      chairperson: "Dr. Prashant Saxena",
      secretary: "Dr. Akhil Taneja",
      treasurer: "Dr. Amit Goel"
    },
    achievement: "Won 'Best City Branch (Metro) Award' for the second consecutive year at CRITICARE 2024 in Kolkata",
    mainEvent: "19th Delhi Critical Care Symposium (DCCS 2024) scheduled for November 9-10, 2024 at India Habitat Centre, Delhi",
    clinicalFocus: "Candida auris as an emerging superbug in critical care and Targeted Temperature Management post-cardiac arrest",
    highlights: [
    "Pearls of Wisdom: Article on Candida auris as an emerging superbug in critical care",
    "Cases to Remember: Clinical case about right lower lobe lung pathology mimicking pneumoperitoneum",
    "Journal Quest: Review of the REVISE trial on stress ulcer prophylaxis during mechanical ventilation",
    "Student's Café: Comprehensive guide on Targeted Temperature Management post-cardiac arrest",
    "Educational resource covering critical care medicine topics, society activities, new member welcomes",
    "Quiz sections and clinical meeting updates to foster knowledge sharing among healthcare professionals"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3b880d9b-eceb-4ce0-9ce1-8e4a60d7fa3e.pdf",
    featured: false
  },
  {
    id: 4,
    title: "SCCM Delhi-Noida Newsletter 'Tarang'",
    issue: "Volume 1, Issue 4",
    date: "2024-03-31",
    period: "Jan-March 2024",
    description: "The 4th quarterly issue featuring SCCM Delhi-Noida's second consecutive 'Best Metro Branch' award at CRITICARE Kolkata 2024, with comprehensive medical content and organizational updates.",
    achievement: "Won 'Best Metro Branch' award for the second consecutive year at CRITICARE Kolkata 2024",
    survivalRate: "77% survival rate in drowning emergency management case series",
    newMembers: "7 new members welcomed to the society",
    highlights: [
    "Drowning Emergency Management: Case series of 14 young patients (12-16 years)",
    "BRASH Syndrome Case: 59-year-old CKD patient management",
    "CLOVERS Trial Review: Restrictive vs liberal fluid management in sepsis",
    "Student café section on wearables in hospital early warning systems",
    "Quiz section on lung ultrasound with prizes",
    "Final messages from outgoing Chairperson Dr. Anil Gurnani"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/934376f5-40d5-4bc7-bee5-a55f48ab6c2d.pdf",
    featured: false
  },
  {
    id: 5,
    title: "तरंग (Tarang) - SCCM Delhi-Noida E-Bulletin",
    issue: "Volume 1, Issue 1",
    date: "2023-05-19",
    period: "April-June 2023",
    description: "First-ever quarterly e-bulletin of SCCM Delhi-Noida, launched on May 19, 2023. The inaugural bulletin serves as an educational and communication platform for the Delhi-NCR critical care medical community.",
    leadership: {
      chairperson: "Dr. Anil Gurnani",
      secretary: "Dr. Ashutosh Bhardwaj",
      treasurer: "Dr. Prashant Saxena"
    },
    achievement: "Won Best Metro Branch Award at ISCCM CRITICARE INDORE 2023",
    memberCount: "900+ active members",
    highlights: [
    "Clinical articles on end-of-life care and fluid resuscitation",
    "Case reports and student education materials",
    "Monthly meeting records (April 2022 - April 2023)",
    "'Save the Saviours' Walkathon (Oct 2, 2022) - 296 participants",
    "BLS Workshop for 100 school students",
    "Upcoming 18th DCCS Conference (Nov 3-5, 2023)"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/19618c26-1ec1-4acc-9875-96a8851960eb.pdf",
    featured: false
  },
  {
    id: 6,
    title: "Tarang - Quarterly E-Bulletin",
    issue: "Volume 1, Issue 2",
    date: "2023-09-30",
    period: "July-September 2023",
    description: "The quarterly e-bulletin of the Society of Critical Care Medicine (SCCM) Delhi-Noida chapter, continuing the tradition of excellence in critical care education and communication.",
    leadership: {
      chairperson: "Dr. Anil Gurnani",
      secretary: "Dr. Ashutosh Bhardwaj",
      treasurer: "Dr. Prashant Saxena"
    },
    achievement: "SCCM Delhi-Noida won 'Best Metro Branch' award at CRITICARE Indore 2023",
    mainEvent: "18th Delhi Critical Care Symposium (DCCS 2023) scheduled for November 3-5, 2023",
    eventTheme: "Critical Care-Team Work, Dream Work",
    highlights: [
    "Medical case studies on trauma in pregnancy and naphthalene poisoning",
    "Journal review of vitamin C therapy in sepsis (LOVIT trial)",
    "Clinical meeting summaries and new member welcomes",
    "Educational workshops on simulation, hemodynamic monitoring",
    "Mechanical ventilation workshops",
    "Quiz section and light-hearted medical humor"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6acb83c8-4109-44d1-92e8-91c9a09eb7a9.pdf",
    featured: false
  },
  {
    id: 7,
    title: "Tarang - Quarterly E-Bulletin",
    issue: "Volume 1, Issue 3",
    date: "2023-12-31",
    period: "October-December 2023",
    description: "The quarterly e-bulletin of the Society of Critical Care Medicine (SCCM) Delhi-Noida chapter, featuring comprehensive coverage of newer oral anticoagulants and critical care updates.",
    leadership: {
      chairperson: "Dr. Anil Gurnani",
      secretary: "Dr. Ashutosh Bhardwaj",
      treasurer: "Dr. Prashant Saxena"
    },
    achievement: "Won Best Metro Branch Award at ISCCM CRITICARE INDORE 2023",
    clinicalFocus: "Newer Oral Anticoagulants (NOACs)",
    highlights: [
    "Brief Overview: Newer Oral Anticoagulants (NOACs)",
    "Critical medications with narrow therapeutic window",
    "Dabigatran, rivaroxaban, and apixaban usage guidelines",
    "Prevention of stroke and thromboembolism",
    "Nonvalvular atrial fibrillation management",
    "ICU admission protocols for anticoagulant complications"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/61a021a2-c8c1-46fa-a5b6-421a97d0bafe.pdf",
    featured: false
  },
  {
    id: 4,
    title: "SCCM Delhi-Noida Newsletter 'Tarang'",
    issue: "Volume 1, Issue 4",
    date: "2024-03-31",
    period: "Jan-March 2024",
    description: "The 4th quarterly issue featuring SCCM Delhi-Noida's second consecutive 'Best Metro Branch' award at CRITICARE Kolkata 2024, with comprehensive medical content and organizational updates.",
    achievement: "Won 'Best Metro Branch' award for the second consecutive year at CRITICARE Kolkata 2024",
    survivalRate: "77% survival rate in drowning emergency management case series",
    newMembers: "7 new members welcomed to the society",
    highlights: [
    "Drowning Emergency Management: Case series of 14 young patients (12-16 years)",
    "BRASH Syndrome Case: 59-year-old CKD patient management",
    "CLOVERS Trial Review: Restrictive vs liberal fluid management in sepsis",
    "Student café section on wearables in hospital early warning systems",
    "Quiz section on lung ultrasound with prizes",
    "Final messages from outgoing Chairperson Dr. Anil Gurnani"],

    downloadUrl: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/934376f5-40d5-4bc7-bee5-a55f48ab6c2d.pdf",
    featured: true
  }];


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDownload = (downloadUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="Tarang Newsletter"
        subtitle="The official quarterly e-bulletin of the Society of Critical Care Medicine (ISCCM) Delhi-Noida Chapter. A comprehensive educational and communication platform for critical care professionals, featuring clinical pearls, case studies, journal reviews, and society updates."
        badgeText="Newsletter"
        showContactButton={false} />

      {/* Newsletter Issues */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Newsletter Issues
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our quarterly publications featuring the latest in critical care medicine, 
            research updates, and community insights.
          </p>
        </div>

        {/* Grid Layout for Smaller Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsletters.map((newsletter) =>
          <Card key={newsletter.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${newsletter.featured ? 'ring-2 ring-[#BA0A1E]' : ''}`}>
              <CardHeader className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white">
                <div className="flex items-center justify-between">
                  <Badge className="bg-white/20 text-white border-white/30">
                    {newsletter.issue}
                  </Badge>
                  {newsletter.featured &&
                <Badge className="bg-yellow-400 text-yellow-900 border-yellow-500">
                      <Trophy size={12} className="mr-1" />
                      Latest
                    </Badge>
                }
                </div>
                <CardTitle className="text-lg font-bold leading-tight">
                  {newsletter.title}
                </CardTitle>
                <p className="text-white/90 text-sm font-medium">
                  {newsletter.period}
                </p>
              </CardHeader>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {newsletter.description}
                </p>

                {/* Leadership */}
                {newsletter.leadership &&
              <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <Users size={14} className="mr-2 text-[#BA0A1E]" />
                      Leadership:
                    </h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p><strong>Chairperson:</strong> {newsletter.leadership.chairman}</p>
                      <p><strong>Secretary:</strong> {newsletter.leadership.secretary}</p>
                      <p><strong>Treasurer:</strong> {newsletter.leadership.treasurer}</p>
                    </div>
                  </div>
              }

                {/* Achievement */}
                <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <Award size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-green-800 font-medium">
                      {newsletter.achievement}
                    </p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Heart size={14} className="mr-2 text-[#BA0A1E]" />
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {newsletter.highlights.slice(0, 4).map((highlight, index) =>
                  <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#BA0A1E] rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                  )}
                    {newsletter.highlights.length > 4 &&
                  <li className="flex items-start gap-2 text-xs text-gray-500 italic">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>+{newsletter.highlights.length - 4} more highlights...</span>
                      </li>
                  }
                  </ul>
                </div>

                {/* Special Info */}
                {newsletter.memberCount &&
              <div className="mb-4 p-2 bg-blue-50 rounded border border-blue-200">
                    <p className="text-xs text-blue-800">
                      <strong>Members:</strong> {newsletter.memberCount}
                    </p>
                  </div>
              }

                {newsletter.newMembers &&
              <div className="mb-4 p-2 bg-indigo-50 rounded border border-indigo-200">
                    <p className="text-xs text-indigo-800">
                      <strong>New Members:</strong> {newsletter.newMembers}
                    </p>
                  </div>
              }

                {newsletter.clinicalFocus &&
              <div className="mb-4 p-2 bg-orange-50 rounded border border-orange-200">
                    <p className="text-xs text-orange-800">
                      <strong>Clinical Focus:</strong> {newsletter.clinicalFocus}
                    </p>
                  </div>
              }

                {newsletter.mainEvent &&
              <div className="mb-4 p-2 bg-purple-50 rounded border border-purple-200">
                    <p className="text-xs text-purple-800">
                      <strong>Main Event:</strong> {newsletter.mainEvent}
                    </p>
                    {newsletter.eventTheme &&
                <p className="text-xs text-purple-700 italic">
                        Theme: "{newsletter.eventTheme}"
                      </p>
                }
                  </div>
              }

                {newsletter.survivalRate &&
              <div className="mb-4 p-2 bg-emerald-50 rounded border border-emerald-200">
                    <p className="text-xs text-emerald-800">
                      <strong>Clinical Success:</strong> {newsletter.survivalRate}
                    </p>
                  </div>
              }

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={12} />
                    {formatDate(newsletter.date)}
                  </div>
                  {/* <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white"
                  onClick={() => handleDownload(newsletter.downloadUrl, `tarang-${newsletter.issue.toLowerCase().replace(/[^a-z0-9]/g, '-')}.pdf`)}>

                    <Download size={12} className="mr-1" />
                     View More
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        

        {/* Newsletter Subscription Section */}
        <div className="mt-16 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Never Miss an Issue
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to receive the latest Tarang Newsletter directly in your inbox. 
            Stay updated with critical care medicine advancements, research findings, and ISCCM community news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50" />
            <Button
              size="lg"
              className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-semibold">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>);

};

export default TarangNewsletterPage;