import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, MapPin, Clock, Users, ExternalLink, Star, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const navigate = useNavigate();

  // Upcoming events
  const upcomingEvents = [
  {
    id: 1,
    title: "NCR Mega CritiCon 2025",
    date: "November 14-16, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "The Stein Auditorium, India Habitat Centre, New Delhi",
    type: "Conference",
    featured: true,
    image: "mega.jpeg",
    description: "Historic collaboration between ISCCM Delhi-Noida & ISCCM Gurugram Branch. This landmark event combines 20th DCCS & 3rd Gurugram Criticon, featuring global faculty, interactive workshops, and cutting-edge research in critical care medicine.",
    attendees: "500+",
    speakers: ["Dr. Global Expert 1", "Dr. Global Expert 2", "Dr. National Expert"],
    registrationOpen: true
  }];


  // Past events list with recent 2024-2025 events organized chronologically
  const pastEvents = [
  {
    id: 2,
    title: "NCR Mega CritiCon 2025 - Brain Tussle Quiz Round 2",
    date: "September 26, 2025",
    location: "Magnolia Hall, India Habitat Centre, New Delhi",
    type: "Quiz Competition",
    image: "quiz-2.jpeg",
    description: "Quiz Round 2 of 'Bridging the Gaps: Translating Vision into Action' - An exciting quiz competition by SCCM Delhi-Noida & Gurugram City Branch, ISCCM. Teams of 3 competed in 20 MCQs in 20 minutes with finalists advancing to the main conference.",
    attendees: "Teams of 3",
    highlights: [
    "Quiz Round 2 - Completed",
    "20 MCQs in 20 minutes",
    "Teams of 3 from same institute",
    "Finalists advanced to main conference",
    "Prize Structure: ₹15,000, ₹10,000, ₹5,000",
    "Conference registration required for finals"]

  },
  {
    id: 32,
    title: "SCCM DELHI-NOIDA, COLS based CPR awareness program",
    date: "October 10, 2025",
    location: "Sardar Patel Vidyalaya",
    type: "Educational Program",
    image: "past-ev.jpeg",
    description: "SCCM Delhi-Noida successfully conducted a COLS based CPR awareness program at Sardar Patel Vidyalaya. This educational initiative aimed to empower students and staff with life-saving CPR skills, contributing to building a safer community through hands-on training and awareness.",
    attendees: "Students & Staff",
    highlights: [
    "CPR Awareness Program",
    "COLS Initiative",
    "Student Education",
    "Life-saving Skills Training",
    "Community Outreach",
    "Hands-on Training",
    "School Partnership",
    "Emergency Response Education"]

  },
  {
    id: 31,
    title: "9th Monthly Clinical Meet",
    date: "TBD",
    location: "Rajiv Gandhi Cancer Institute and Research Centre",
    type: "Clinical Meeting",
    image: "9th-monthly-meet.jpeg",
    description: "The 9th Monthly Clinical Meet hosted by Rajiv Gandhi Cancer Institute and Research Centre. This educational evening featured expert presentations on critical care topics, fostering professional development and knowledge exchange among healthcare professionals.",
    attendees: "Healthcare Professionals",
    highlights: [
    "Monthly Clinical Session",
    "Expert Presentations",
    "Clinical Discussions",
    "Professional Development",
    "Knowledge Exchange",
    "Healthcare Networking"]

  },
  {
    id: 8,
    title: "NCR Mega CritiCon 2025 - Brain Tussle Quiz Round 1 (Preliminaries)",
    date: "August 29, 2025",
    location: "Magnolia Hall, India Habitat Centre, New Delhi",
    type: "Quiz Competition",
    image: "quiz-1.jpeg",
    description: "NCR MEGA CRITICON 2025 QUIZ 1st PRELIMS held on 29th August 2025 at Magnolia Hall, India Habitat Centre. This preliminary round of 'Bridging the Gaps: Translating Vision into Action' quiz competition saw teams of 3 from various hospitals compete in 20 MCQs in 20 minutes to qualify for Round 2.",
    attendees: "11 Teams (33 Participants)",
    highlights: [
    "Quiz Round 1 - Completed",
    "11 Teams Participated",
    "20 MCQs in 20 minutes",
    "Teams of 3 from same institute",
    "Qualifiers advanced to Round 2",
    "Multiple Prestigious Hospitals Participated"],

    participatingHospitals: [
    "Dharamshila Narayana Super Speciality Hospital",
    "Max Super Speciality Hospital, IP Extension",
    "Safdarjung Hospital",
    "Fortis Escort Heart Institute",
    "ABVIMS & Dr RML Hospital, New Delhi",
    "Dr Ram Manohar Lohia Hospital",
    "Maharaja Agarsen Hospital",
    "Indraprastha Apollo Hospital",
    "Medanta Medicity Gurgaon",
    "Artemis Hospital"]

  },
  {
    id: 30,
    title: "8th Monthly Clinical Meet",
    date: "August 29, 2025",
    location: "Sarvodaya Hospital, Greater Noida",
    type: "Clinical Meeting",
    image: "29-august.jpeg",
    description: "The 8th Monthly Clinical Meet hosted by Sarvodaya Hospital, Greater Noida. This educational evening featured expert presentations on current clinical research and developments in critical care medicine, fostering professional development and knowledge exchange among healthcare professionals.",
    attendees: "Healthcare Professionals",
    highlights: [
    "Monthly Clinical Session",
    "Educational Presentations",
    "Clinical Research Updates",
    "Professional Development",
    "Knowledge Exchange",
    "Healthcare Networking"]

  },



  {
    id: 24,
    title: "Industry Meeting for NCR Mega CritiCon 2025",
    date: "August 7, 2025",
    location: "Magnolia Hall, India Habitat Centre, New Delhi",
    type: "Industry Meeting",
    image: "7-aug.jpeg",
    description: "The industry meeting organized on behalf of SCCM, Delhi-Noida & Gurugram city branch by Organizing Committee of NCR, Mega CritiCon 2025. This strategic meeting brought together industry stakeholders and medical professionals to discuss collaboration opportunities and enhance critical care standards.",
    attendees: "37",
    highlights: ["Industry Collaboration", "Strategic Planning", "NCR Mega CritiCon 2025", "Stakeholder Engagement", "Partnership Development", "Medical Industry Interface"]
  },
  {
    id: 25,
    title: "COLS Based School CPR Program",
    date: "August 6, 2025",
    location: "Salwan Public School, Mayur Vihar, Delhi",
    type: "Educational Program",
    image: "6-aug.jpeg",
    description: "Delhi Noida branch of ISCCM successfully conducted its next COLS based School CPR Program for students of 9th and 10th class in Delhi at Salwan Public School, Mayur Vihar. Around 110 students and teachers were trained with ample hands-on training on mannequins. Everyone participated with a lot of enthusiasm.",
    attendees: "110+ Students & Teachers",
    highlights: ["School CPR Training", "Student Education", "COLS Initiative", "Hands-on Training", "Life-saving Skills", "Community Outreach", "Mannequin Training", "Enthusiastic Participation"]
  },
  {
    id: 21,
    title: "Central Lines, Critical Risks: The CRBSI Summit",
    date: "August 1, 2025",
    location: "Juniper Hall, India Habitat Centre, New Delhi",
    type: "Summit",
    image: "1-aug.jpeg",
    description: "This summit focused on central line-associated bloodstream infections (CRBSI), especially their risks and management in ICU settings. The event featured keynote addresses, expert talks, and a panel discussion covering infection impacts, challenges, future prevention strategies, and building ICU safety culture.",
    attendees: "80+",
    highlights: ["CRBSI Prevention", "ICU Safety Culture", "Healthcare Associated Infections", "Panel Discussion", "Expert Faculty", "Clinical Best Practices"],
    schedule: [
    { time: "7:30â€“7:40 PM", event: "Welcome & Keynote Address", speaker: "SCCM Delhi-Noida" },
    { time: "7:40â€“8:05 PM", event: "Impact of Healthcare Associated Infections in ICU Settings - Care and Costs", speaker: "Dr. Rajesh Kumar Pande" },
    { time: "8:05â€“8:30 PM", event: "Emerging Challenges and Future Directions in Prevention of CLABSI", speaker: "Dr. Y.P. Singh" },
    { time: "8:30â€“9:00 PM", event: "Panel Discussion - Integrated Approaches for Preventing and Managing CRBSI", moderator: "Dr. Prashant Saxena" },
    { time: "9:00â€“9:30 PM", event: "Vote of Thanks and Dinner", speaker: "" }],

    panelists: ["Dr. Sweta Patel", "Dr. Munish Chauhan", "Dr. Rajat Agrawal", "Dr. Niraj Tyagi", "Dr. Kapil Dev Soni"],
    organizingTeam: {
      chairperson: "Dr. Prashant Saxena",
      secretary: "Dr. Akhil Taneja",
      treasurer: "Dr. Amit Goel",
      ecMembers: ["Dr. Anup Agarwal", "Dr. Ashutosh Kumar Garg", "Dr. Gaurav Pratap Singh", "Dr. Prashant Singh", "Dr. Rajat Agrawal", "Dr. Rishabh Kumar"]
    }
  },
  {
    id: 22,
    title: "Critical Airways in Critical Places: Outside-the-OR Airway Management Workshop",
    date: "July 12, 2025",
    location: "Max Super Speciality Hospital, IP Extension",
    type: "Workshop",
    image: "12-july.jpeg",
    description: "SCCM, Delhi-Noida hosted Critical Airways in Critical Places: Outside-the-OR Airway Management Workshop. This comprehensive workshop focused on advanced airway management techniques in critical care settings outside the operating room, providing hands-on training and expert insights.",
    attendees: "60+",
    highlights: ["Airway Management", "Outside-OR Techniques", "Hands-on Training", "Critical Care Skills", "Expert Faculty", "Clinical Excellence"]
  },
  {
    id: 23,
    title: "COLS Based School CPR Program",
    date: "July 21, 2025",
    location: "Ahlcon International School, Mayur Vihar",
    type: "Educational Program",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6c534cc1-7fb5-4d9f-abcd-1a96a9b7e08c.png",
    description: "SCCM Delhi Noida successfully conducted its first COLS based school CPR program which is the initiative of ISCCM in collaboration with ICRF for students of 11th and 12th in Delhi. This groundbreaking program aimed to empower young students with life-saving CPR skills.",
    attendees: "50+ Students",
    highlights: ["School CPR Program", "Student Education", "ISCCM Initiative", "ICRF Collaboration", "Life-saving Skills", "Community Outreach"]
  },

  {
    id: 15,
    title: "7th Clinical Academic Meet",
    date: "June 27, 2025",
    location: "Fortis Escorts Heart Institute, New Delhi",
    type: "Clinical Meeting",
    image: "27-june-25.png",
    description: "7th Clinical Academic Meet. Scientific meeting was organized on behalf of SCCM, Delhi-Noida by Dept of critical care medicine, Presented by Fortis Escorts Heart Institute, New Delhi.",
    attendees: "29",
    highlights: ["Clinical Academic Session", "Scientific Meeting", "Expert Faculty", "Knowledge Exchange", "Professional Development"]
  },
  {
    id: 16,
    title: "ISCCM, PulmoIntensiva 2025 Conference",
    date: "June 15, 2025",
    location: "Fortis Hospital Vasant Kunj",
    type: "Conference",
    image: "15-june-25.png",
    description: "ISCCM, PulmoIntensiva 2025 Conference- Fortis Hospital Vasant Kunj presents it's 2nd Conference on Respiratory Diseases, Acute Medical Emergencies and critical care Medicine. Over 150 delegates joined at Pulmointensiva 2.0, making it a memorable and impactful academic event.",
    attendees: "150+",
    highlights: ["Respiratory Diseases", "Acute Medical Emergencies", "Critical Care Medicine", "Academic Excellence", "Large Participation"]
  },
  {
    id: 17,
    title: "SCCM Critical Care Connect 4th Webinar Series",
    date: "May 14, 2025",
    location: "Online Webinar",
    type: "Webinar",
    image: "14-may-25.png",
    description: "SCCM DELHI-NOIDA Presents Critical care connect 4th Webinar series on 'END OF LIFE CARE ISSUES IN INDIA'.",
    attendees: "44",
    highlights: ["End of Life Care", "Healthcare Ethics", "Indian Context", "Critical Care Guidelines", "Medical Education"]
  },
  {
    id: 18,
    title: "SCCM Critical Care Connect 3rd Webinar Series",
    date: "May 06, 2025",
    location: "Online Webinar",
    type: "Webinar",
    image: "6-may-25.png",
    description: "SCCM DELHI-NOIDA Presents Critical care connect 3rd Webinar series.",
    attendees: "40",
    highlights: ["Critical Care Education", "Online Learning", "Professional Development", "Knowledge Sharing", "Medical Training"]
  },
  {
    id: 19,
    title: "SCCM Critical Care Connect 2nd Webinar Series",
    date: "April 22, 2025",
    location: "Online Webinar",
    type: "Webinar",
    image: "22-april-2025.png",
    description: "SCCM DELHI-NOIDA Presents Critical Care Connect 2nd Webinar Series ON IMMUNOMODULATION IN SEPSIS.",
    attendees: "56",
    highlights: ["Immunomodulation", "Sepsis Management", "Clinical Research", "Treatment Strategies", "Medical Education"]
  },
  {
    id: 20,
    title: "SCCM 1st Webinar Series on ICU Fungal Infections",
    date: "April 15, 2025",
    location: "Online Webinar",
    type: "Webinar",
    image: "15-april-25.png",
    description: "SCCM DELHI-NOIDA Presents 1st webinar series on ICU FUNGAL INFECTIONS IN INDIA.",
    attendees: "88",
    highlights: ["ICU Fungal Infections", "Indian Healthcare", "Clinical Guidelines", "Treatment Protocols", "Medical Education"]
  },
  {
    id: 2,
    title: "5th Clinical Monthly Meeting",
    date: "December 27, 2024",
    location: "Sri Balaji Action Medical Institute",
    type: "Clinical Meeting",
    image: "27-dec-24.png",
    description: "5th clinical monthly meeting was hosted by ISCCM Delhi Noida on 27th December 2024 presented by Sri Balaji Action Medical Institute. A focused clinical session for critical care professionals.",
    attendees: "30",
    highlights: ["Clinical Case Discussions", "Monthly Academic Session", "Expert Faculty", "Interactive Sessions", "Knowledge Sharing"]
  },
  {
    id: 3,
    title: "ISCCM Preceptorship Program CME",
    date: "December 17, 2024",
    location: "Ghaziabad District Hospital",
    type: "CME Program",
    image: "17-dec-24.png",
    description: "SCCM DELHI NOIDA hosted a preceptorship program CME cum awareness program at Ghaziabad district hospital. This program is for skill enhancement which is being proposed as part of Critical Care Awareness Initiative of the Indian society of critical care medicine (ISCCM).",
    attendees: "35",
    highlights: ["Skill Enhancement", "Awareness Program", "Critical Care Initiative", "Preceptorship Training", "Medical Education"]
  },
  {
    id: 4,
    title: "ISCCM Preceptorship Program",
    date: "October 16, 2024",
    location: "Hamdard Institute of Medical Science & Research (HIMSR), New Delhi",
    type: "Preceptorship",
    image: "16-oct-24.png",
    description: "SCCM DELHI-NOIDA ignited a spark of knowledge with a 1-day ISCCM Preceptorship Program, themed 'Core Concept in Critical Care Medicine', at Hamdard Institute of Medical Science & Research (HIMSR), New Delhi, inspiring 80 postgraduate students to embrace the essence of Critical Care Medicine.",
    attendees: "80",
    highlights: ["Core Concepts", "Postgraduate Education", "Medical Students", "Critical Care Training", "Academic Excellence"]
  },
  {
    id: 5,
    title: "ISCCM Day Celebration Walkathon",
    date: "October 13, 2024",
    location: "Delhi-Noida",
    type: "Community Event",
    image: "13-oct-24.png",
    description: "SCCM, Delhi-Noida organised Walkathon to mark ISCCM Day Celebration with theme 'Empowering the Community against critical illness' held on 13th Oct 2024.",
    attendees: "100+",
    highlights: ["Community Awareness", "ISCCM Day", "Health Promotion", "Community Empowerment", "Public Engagement"]
  },
  {
    id: 6,
    title: "6th Monthly Meet with Quiz Session",
    date: "September 27, 2024",
    location: "Kailash Hospital & Heart Institute, Sector-27, Noida",
    type: "Monthly Meet",
    image: "27-sept-24-quiz.png",
    description: "The Quiz Session was organised by SCCM Delhi-Noida as a secondary round for finale in DCCS 2024, and scientific meeting was organised on behalf of SCCM Delhi-Noida by Dept of critical care medicine, Kailash Hospital & Heart Institute.",
    attendees: "64 (Quiz: 21)",
    highlights: ["Quiz Competition", "DCCS Preparation", "Scientific Meeting", "Academic Competition", "Knowledge Assessment"]
  },
  {
    id: 7,
    title: "Sepsis Awareness Programme",
    date: "September 26, 2024",
    location: "Dharamshila Narayana Hospital",
    type: "Awareness Program",
    image: "26-sept-26.png",
    description: "A very enlightening sepsis awareness programme in Dharamshila Narayana Hospital under the able leadership of respected Dr. Ashutosh Bhardwaj Sir in collaboration with SCCM Delhi-Noida.",
    attendees: "45",
    highlights: ["Sepsis Awareness", "Hospital Collaboration", "Medical Education", "Clinical Guidelines", "Healthcare Workers"]
  },
  {
    id: 8,
    title: "Sepsis Awareness CME",
    date: "September 19, 2024",
    location: "Kailash Deepak Hospital, Delhi",
    type: "CME",
    image: "19-sept-24.png",
    description: "SCCM DELHI-NOIDA hosted a CME titled 'Sepsis Awareness' at Kailash Deepak Hospital, Delhi, as part of its initiative to enhance sepsis awareness.",
    attendees: "40",
    highlights: ["Sepsis Management", "Clinical Education", "Awareness Initiative", "Medical Training", "Best Practices"]
  },
  {
    id: 9,
    title: "ISCCM Preceptorship Program",
    date: "August 30, 2024",
    location: "Rama Medical College, Hapur (UP)",
    type: "Preceptorship",
    image: "29-august.jpeg",
    description: "SCCM DELHI-NOIDA ignited a spark of knowledge with a 1-day ISCCM Preceptorship Program, themed 'Critical Care Awareness', at Rama Medical College, Hapur (UP).",
    attendees: "80",
    highlights: ["Critical Care Awareness", "Medical College", "Educational Outreach", "Student Training", "Academic Partnership"]
  },
  {
    id: 10,
    title: "3rd Annual Airway and Mechanical Ventilation Conference",
    date: "July 27-28, 2024",
    location: "Mata Chanan Devi Hospital and Ease Life Health Care",
    type: "Conference",
    image: "27-28-july.png",
    description: "The 3rd Annual Airway and Mechanical Ventilation Conference and workshop in celebration with ISCCM, at Mata Chanan Devi Hospital and Ease life health care.",
    attendees: "52",
    highlights: ["Airway Management", "Mechanical Ventilation", "Hands-on Workshop", "Clinical Excellence", "Technical Skills"]
  },
  {
    id: 11,
    title: "Infectious Disease Update Symposium",
    date: "July 27, 2024",
    location: "Fortis Escorts Heart Institute, New Delhi",
    type: "Symposium",
    image: "27-28-july.png",
    description: "Department of Critical Care Medicine FEHI in collaboration with ISCCM Delhi NOIDA conducted a (Infectious Disease Update) symposium at Fortis Escorts Heart Institute New Delhi. There were multiple case based discussions and a hands on workshop covering all aspects of management of Infectious disease.",
    attendees: "80",
    highlights: ["Infectious Disease", "Case Discussions", "Clinical Update", "Workshop", "Disease Management"]
  },
  {
    id: 12,
    title: "4th Clinical Meeting",
    date: "July 26, 2024",
    location: "Indian Habitat Centre, Delhi",
    type: "Clinical Meeting",
    image: "26-july-24-max.png",
    description: "4th Clinical Meeting was hosted by SCCM, Delhi Noida on 26th July 2024, Friday, 07:30pm, Maple Hall, Indian Habitat Centre, Delhi presented by Max Superspeciality Hospital Patparganj.",
    attendees: "45",
    highlights: ["Clinical Updates", "Evening Session", "Hospital Partnership", "Academic Discussion", "Medical Exchange"]
  },
  {
    id: 13,
    title: "3rd Clinical Academic Meet",
    date: "June 28, 2024",
    location: "Fortis Hospital Vasant Kunj, New Delhi",
    type: "Academic Meet",
    image: "28-june-2024.png",
    description: "3rd Clinical Academic Meet, Meeting was organised on behalf of SCCM Delhi-Noida by Dept of critical care medicine, Fortis Hospital Vasant Kunj, New Delhi. Held on 28th June 2024 Magnolia hall.",
    attendees: "65",
    highlights: ["Clinical Academia", "Hospital Partnership", "Academic Excellence", "Knowledge Exchange", "Professional Development"]
  },
  {
    id: 14,
    title: "1st Clinical Academic Meet",
    date: "January 19, 2024",
    location: "Swami Dayanand Hospital",
    type: "Academic Meet",
    image: "31-jan-25-swami.png",
    description: "1st Clinical Academic Meet. Scientific meeting was organised on behalf of SCCM, Delhi-Noida by Dept of critical care medicine, Swami Dayanand Hospital.",
    attendees: "54",
    highlights: ["Inaugural Meeting", "Scientific Discussion", "Hospital Collaboration", "Academic Foundation", "Professional Network"]
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <PageBanner
        title="Events & Conferences"
        subtitle="Join us for world-class educational events, workshops, and networking opportunities"
        badgeText="Events & Conferences"
        showContactButton={false} />

      {/* Events Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 backdrop-blur-md shadow-lg">
              <TabsTrigger
                value="upcoming"
                className="text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BA0A1E] data-[state=active]:to-[#035D8E] data-[state=active]:text-white">
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger
                value="past"
                className="text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#BA0A1E] data-[state=active]:to-[#035D8E] data-[state=active]:text-white">
                Past Events
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg text-gray-600">
                  Don't miss this exciting opportunity to advance your knowledge and network with peers
                </p>
              </div>

              <div className="space-y-8">
                {upcomingEvents.map((event) =>
                <Card key={event.id} className="overflow-hidden ring-2 ring-[#BA0A1E]/20 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-md">
                    <div className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white px-6 py-3">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        <span className="font-semibold text-lg">Featured Event</span>
                      </div>
                    </div>

                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 md:h-full object-cover" />
                      </div>

                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-2xl font-bold text-gray-900">
                              {event.title}
                            </CardTitle>
                            <Badge className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white">
                              {event.type}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="p-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="w-4 h-4 text-[#BA0A1E]" />
                              {event.date}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4 text-[#035D8E]" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="w-4 h-4 text-[#BA0A1E]" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Users className="w-4 h-4 text-[#035D8E]" />
                              {event.attendees} Expected
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {event.description}
                          </p>

                          {/* Competition Details for Brain Tussle Quiz Round 2 */}
                          {event.competitionDetails &&
                        <div className="mb-6">
                              <h4 className="font-semibold text-gray-900 mb-3">Competition Details:</h4>
                              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <span className="font-medium text-[#BA0A1E]">Theme:</span>
                                    <p className="text-gray-700">{event.competitionDetails.theme}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-[#035D8E]">Team Size:</span>
                                    <p className="text-gray-700">{event.competitionDetails.teamComposition}</p>
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <span className="font-medium text-[#BA0A1E]">Current Round (Round 2):</span>
                                  <div className="mt-2 space-y-1 text-sm text-gray-700">
                                    <p>📅 {event.competitionDetails.currentRound.date} at {event.competitionDetails.currentRound.time}</p>
                                    <p>📍 {event.competitionDetails.currentRound.venue}</p>
                                    <p>📝 {event.competitionDetails.currentRound.format}</p>
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <span className="font-medium text-[#035D8E]">Prize Structure (Finals):</span>
                                  <div className="grid grid-cols-3 gap-2 mt-2">
                                    {event.competitionDetails.prizeStructure.map((prize, index) =>
                                <div key={index} className="text-center p-2 bg-white rounded-lg shadow">
                                        <div className="font-medium text-gray-900 text-sm">{prize.position}</div>
                                        <div className="text-[#BA0A1E] font-bold">{prize.amount}</div>
                                      </div>
                                )}
                                  </div>
                                </div>

                                <div className="text-sm text-gray-600 bg-yellow-50 p-2 rounded">
                                  ⚠️ {event.competitionDetails.mandatoryRequirement}
                                </div>
                              </div>
                            </div>
                        }

                          {/* Registration Fees for regular conference */}
                          {!event.competitionDetails &&
                        <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Registration Fees:</h4>
                              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="flex justify-between items-center">
                                    <span className="font-medium">Conference Only:</span>
                                    <span className="text-[#BA0A1E] font-bold">INR 2,500</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="font-medium">Conference + Workshop:</span>
                                    <span className="text-[#035D8E] font-bold">INR 3,500</span>
                                  </div>
                                </div>
                                <div className="border-t pt-3 mt-3">
                                  <div className="flex justify-between items-center text-sm text-gray-600">
                                    <span>GST (18%) included in registration fees</span>
                                  </div>
                                  <div className="flex items-center gap-2 mt-2">
                                    <Badge variant="outline" className="border-green-500 text-green-700">
                                      Student Special
                                    </Badge>
                                    <span className="text-sm text-green-700 font-medium">Free for IDCCM/DNB/MD students with proof</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                        }

                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
                              {event.price || "Registration Required"}
                            </div>
                            <div className="flex gap-2">
                              <Button
                              variant="outline"
                              className="border-[#BA0A1E] text-[#BA0A1E] hover:bg-[#BA0A1E] hover:text-white"
                              onClick={() => window.open('Brochure.pdf', '_blank')}>
                                Learn More
                              </Button>
                              <Button
                              className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white"
                              onClick={() => window.open('https://in.eregnow.com/ticketing/register/dccs25', '_blank')}>
                                Register Now
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Past Events
                </h2>
                <p className="text-lg text-gray-600">
                  Explore our previous successful events and their impact on the critical care community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) =>
                <Card key={event.id} className="group overflow-hidden hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-md hover:scale-105 transform">
                    <div className="relative overflow-hidden">
                      <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white shadow-lg">
                        {event.type}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                          className="w-full bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => setSelectedEvent(event)}>
                            View More About Event
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
                          <div className="relative">
                            <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-auto max-h-[70vh] object-contain" />

                            <div className="p-6 bg-white">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    {event.title}
                                  </h2>
                                  <Badge className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white">
                                    {event.type}
                                  </Badge>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center gap-2 text-gray-600">
                                  <Calendar className="w-4 h-4 text-[#BA0A1E]" />
                                  {event.date}
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <MapPin className="w-4 h-4 text-[#035D8E]" />
                                  {event.location}
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <Users className="w-4 h-4 text-[#BA0A1E]" />
                                  {event.attendees} Attendees
                                </div>
                              </div>

                              <p className="text-gray-700 mb-4 leading-relaxed">
                                {event.description}
                              </p>

                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                  {event.highlights.map((highlight, index) =>
                                <div key={index} className="flex items-center gap-2 text-gray-600">
                                      <div className="w-2 h-2 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-full"></div>
                                      {highlight}
                                    </div>
                                )}
                                </div>

                                {/* Special section for Quiz Round 1 participating hospitals */}
                                {event.participatingHospitals &&
                              <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Participating Hospitals/Institutes:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                                      {event.participatingHospitals.map((hospital, index) =>
                                  <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                                          <div className="w-2 h-2 bg-gradient-to-r from-[#035D8E] to-[#BA0A1E] rounded-full"></div>
                                          {hospital}
                                        </div>
                                  )}
                                    </div>
                                  </div>
                              }
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>);

};

export default EventsPage;