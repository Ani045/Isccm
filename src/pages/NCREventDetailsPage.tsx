import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    Award,
    Stethoscope,
    Phone,
    Mail,
    Globe,
    Building,
    Heart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const NCREventDetailsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Navbar />

            <PageBanner
                title="NCR Mega CritiCon"
                subtitle="20th DCCS & 3rd Gurugram Criticon"
                badgeText="NCR Mega CritiCon 2025"
                showContactButton={false}
            />

            {/* Hero Section CTA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white hover:from-[#9A0818] hover:to-[#024A73] text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                            onClick={() =>
                                window.open(
                                    "https://in.eregnow.com/ticketing/register/dccs25",
                                    "_blank"
                                )
                            }>
                            Register Now
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-[#BA0A1E] text-[#BA0A1E] hover:bg-[#BA0A1E] hover:text-white text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                            onClick={() =>
                                window.open("/Brochure.pdf", "_blank")
                            }>
                            View More Details
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Organizations */}
                <div className="mb-12">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="py-8">
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#BA0A1E] to-[#035D8E] flex items-center justify-center">
                                        <Heart
                                            className="text-white"
                                            size={32}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">
                                            ISCCM
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Indian Society of Critical Care
                                            Medicine
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden lg:block w-px h-16 bg-gray-300"></div>

                                <div className="flex items-center gap-4">
                                    {/* <img
                                        src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6e629c3e-d499-4a4f-b0f4-6dc118f23bad.jpeg"
                                        alt="Mega CritiCon"
                                        className="w-16 h-16 rounded-full object-cover"
                                    /> */}

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">
                                            MEGA CRITICON
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Premier Critical Care Conference
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Event Details Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Date & Time */}
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center text-xl text-[#BA0A1E]">
                                <Calendar className="mr-3" size={24} />
                                Event Dates
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#BA0A1E]/10 to-[#035D8E]/10 rounded-lg">
                                    <div>
                                        <Badge
                                            variant="outline"
                                            className="mb-2">
                                            Workshops
                                        </Badge>
                                        <p className="text-lg font-semibold">
                                            14th Nov 2025
                                        </p>
                                    </div>
                                    <Clock
                                        className="text-[#035D8E]"
                                        size={24}
                                    />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#035D8E]/10 to-[#BA0A1E]/10 rounded-lg">
                                    <div>
                                        <Badge
                                            variant="outline"
                                            className="mb-2">
                                            Conference
                                        </Badge>
                                        <p className="text-lg font-semibold">
                                            15th-16th Nov 2025
                                        </p>
                                    </div>
                                    <Users
                                        className="text-[#BA0A1E]"
                                        size={24}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Venue */}
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center text-xl text-[#BA0A1E]">
                                <MapPin className="mr-3" size={24} />
                                Venue
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <h4 className="font-semibold text-lg">
                                    The Stein Auditorium
                                </h4>
                                <p className="text-gray-600">
                                    India Habitat Centre, Delhi
                                </p>
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-gray-700">
                                        <Building
                                            className="inline mr-2"
                                            size={16}
                                        />
                                        Premium venue with state-of-the-art
                                        facilities and excellent connectivity
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Conference Video */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
                        Conference Overview
                    </h2>
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="py-8">
                            <div className="max-w-4xl mx-auto">
                                <div
                                    className="relative w-full"
                                    style={{ paddingBottom: "56.25%" }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                        src="https://www.youtube.com/embed/kfGm6rt4YDo?si=oDVsdg4eR7SKcnIT"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Conference Secretariat */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
                        Contact Information
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Conference Secretariat */}
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-xl text-[#BA0A1E] flex items-center">
                                    <Building className="mr-3" size={24} />
                                    Conference Secretariat
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="font-medium text-gray-800 mb-2">
                                        Address:
                                    </p>
                                    <p className="text-gray-600">
                                        805, 8th floor, Shakuntla Building
                                        <br />
                                        59, Nehru Place
                                        <br />
                                        New Delhi - 110019
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <Users
                                            className="mr-3 text-[#035D8E]"
                                            size={20}
                                        />
                                        <div>
                                            <p className="font-medium">
                                                Contact Person:
                                            </p>
                                            <p className="text-gray-600">
                                                Ms. Muskan Kashyap
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone
                                            className="mr-3 text-[#BA0A1E]"
                                            size={20}
                                        />
                                        <div>
                                            <p className="font-medium">
                                                Phone:
                                            </p>
                                            <p className="text-gray-600">
                                                +91 80769 94708
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail
                                            className="mr-3 text-[#035D8E]"
                                            size={20}
                                        />
                                        <div>
                                            <p className="font-medium">
                                                Email:
                                            </p>
                                            <p className="text-gray-600">
                                                isccmdelhichapter@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Globe
                                            className="mr-3 text-[#BA0A1E]"
                                            size={20}
                                        />
                                        <div>
                                            <p className="font-medium">
                                                Website:
                                            </p>
                                            <p className="text-gray-600">
                                                www.isccmdelhi.org
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Professional Conference Partner */}
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-xl text-[#035D8E] flex items-center">
                                    <Award className="mr-3" size={24} />
                                    Professional Conference Partner
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-2">
                                        Meetings and More
                                    </h4>
                                    <p className="text-gray-600">
                                        Unit No. 604, Tower B<br />
                                        Millennium Plaza, Sector 27
                                        <br />
                                        Gurugram, Haryana
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <Users
                                            className="mr-3 text-[#BA0A1E]"
                                            size={20}
                                        />
                                        <div>
                                            <p className="font-medium">
                                                Contact Person:
                                            </p>
                                            <p className="text-gray-600">
                                                Ms. Pooja Sharma
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone
                                            className="mr-3 text-[#035D8E]"
                                            size={20}
                                        />
                                        <div>
                                            <p className="font-medium">
                                                Mobile:
                                            </p>
                                            <p className="text-gray-600">
                                                +91 96274 75770
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail
                                            className="mr-3 text-[#BA0A1E]"
                                            size={20}
                                        />
                                        <div>
                                            <p className="font-medium">
                                                Email:
                                            </p>
                                            <p className="text-gray-600">
                                                corporate@meetingsnmore.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Event Highlights */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
                        Event Highlights
                    </h2>
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                        <CardContent className="py-8">
                            <p className="text-center text-lg mb-6 text-gray-700">
                                The conference offers 11 key edutainment
                                highlights:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "SCCM Delhi-Noida & Gurugram City Branch joining hands for the first time",
                                    "NCR Mega CritiCon Oration",
                                    "Plenary Sessions and Expert Keynote Lectures",
                                    "Eminent National and Local Faculty",
                                    "Young Speaker Session",
                                    "Provocative Debates, Case Studies and Panel Discussions",
                                    "Competitive paper & E-poster presentation",
                                    "Quiz Competition with attractive prizes",
                                    "Hands-on workshops focusing on practical skills and innovative techniques",
                                    "Sach Ka Saamna",
                                    "Gala Dinner",
                                ].map((highlight, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-sm mr-3">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700">
                                            {highlight}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Registration Information */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
                        Registration Information
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-xl text-[#BA0A1E] flex items-center">
                                    <Award className="mr-3" size={24} />
                                    Registration Fees
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="p-4 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg">
                                        <p className="font-semibold text-lg mb-1">
                                            Conference Only
                                        </p>
                                        <p className="text-2xl font-bold text-[#BA0A1E]">
                                            INR 2,500
                                        </p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg">
                                        <p className="font-semibold text-lg mb-1">
                                            Conference + Workshop
                                        </p>
                                        <p className="text-2xl font-bold text-[#035D8E]">
                                            INR 3,500
                                        </p>
                                    </div>
                                    <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                                        <p className="text-sm font-medium text-yellow-800">
                                            <strong>GST:</strong> 18% included
                                            in registration fees
                                        </p>
                                    </div>
                                    <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                                        <p className="text-sm font-medium text-green-800">
                                            <strong>
                                                Student Registration:
                                            </strong>{" "}
                                            Free for IDCCM/DNB/MD students with
                                            proof
                                        </p>
                                    </div>
                                    <div className="text-center mt-6">
                                        <Button
                                            size="lg"
                                            className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white hover:from-[#9A0818] hover:to-[#024A73] text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                                            onClick={() =>
                                                window.open(
                                                    "https://in.eregnow.com/ticketing/register/dccs25",
                                                    "_blank"
                                                )
                                            }>
                                            Register Now
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-xl text-[#035D8E] flex items-center">
                                    <Heart className="mr-3" size={24} />
                                    Important Notes
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                                        <h4 className="font-semibold text-lg mb-2 text-[#035D8E]">
                                            Registration Benefits
                                        </h4>
                                        <ul className="text-gray-600 space-y-1">
                                            <li>
                                                • Conference kit and materials
                                            </li>
                                            <li>• Lunch and refreshments</li>
                                            <li>
                                                • Certificate of participation
                                            </li>
                                            <li>
                                                • Access to all sessions and
                                                workshops
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg">
                                        <h4 className="font-semibold text-lg mb-2 text-[#BA0A1E]">
                                            Quick Registration
                                        </h4>
                                        <p className="text-gray-600 mb-3">
                                            Secure your spot in this premier
                                            critical care conference
                                        </p>
                                        <Button
                                            size="lg"
                                            className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white hover:from-[#9A0818] hover:to-[#024A73] text-lg px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                                            onClick={() =>
                                                window.open(
                                                    "https://in.eregnow.com/ticketing/register/dccs25",
                                                    "_blank"
                                                )
                                            }>
                                            Register Now
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Workshop Venues and Topics */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] bg-clip-text text-transparent">
                        Workshop Venues and Topics
                    </h2>
                    <p className="text-center text-lg mb-8 text-gray-700">
                        Six specialized workshops are offered at different
                        hospital locations:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                topic: "Point of Care Ultrasound",
                                venue: "Medanta, The Medicity, Gurugram",
                                icon: (
                                    <Stethoscope
                                        className="text-[#BA0A1E]"
                                        size={32}
                                    />
                                ),
                            },
                            {
                                topic: "Hemodynamic Monitoring",
                                venue: "Artemis Hospital, Gurgaon",
                                icon: (
                                    <Heart
                                        className="text-[#035D8E]"
                                        size={32}
                                    />
                                ),
                            },
                            {
                                topic: "CRRT & ECCOR",
                                venue: "Max Super Speciality Hospital, Patparganj, Delhi",
                                icon: (
                                    <Building
                                        className="text-[#BA0A1E]"
                                        size={32}
                                    />
                                ),
                            },
                            {
                                topic: "Mechanical Ventilation, Difficult Airway & Bronchoscopy",
                                venue: "BLK-Max Super Speciality Hospital, Delhi",
                                icon: (
                                    <Users
                                        className="text-[#035D8E]"
                                        size={32}
                                    />
                                ),
                            },
                            {
                                topic: "Research and Academic Paper Writing",
                                venue: "AIIMS, Delhi",
                                icon: (
                                    <Award
                                        className="text-[#BA0A1E]"
                                        size={32}
                                    />
                                ),
                            },
                            {
                                topic: "Neuro Critical Care",
                                venue: "Sir Ganga Ram Hospital, Delhi",
                                icon: (
                                    <Globe
                                        className="text-[#035D8E]"
                                        size={32}
                                    />
                                ),
                            },
                        ].map((workshop, index) => (
                            <Card
                                key={index}
                                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex justify-center">
                                        {workshop.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-3 text-center text-gray-800">
                                        {workshop.topic}
                                    </h3>
                                    <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                                        <div className="flex items-start">
                                            <MapPin
                                                className="text-[#BA0A1E] mr-2 mt-1 flex-shrink-0"
                                                size={16}
                                            />
                                            <p className="text-sm text-gray-600">
                                                {workshop.venue}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Registration CTA */}
                <div className="text-center">
                    <Card className="bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white border-0 shadow-xl">
                        <CardContent className="py-12">
                            <h2 className="text-3xl font-bold mb-4">
                                Ready to Join Us?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Register now for NCR Mega CritiCon 2025 and be
                                part of this transformative learning experience
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-[#BA0A1E] hover:bg-gray-100 text-lg px-8 py-3"
                                    onClick={() =>
                                        window.open(
                                            "https://in.eregnow.com/ticketing/register/dccs25",
                                            "_blank"
                                        )
                                    }>
                                    Register Now
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-white text-[#BA0A1E] hover:bg-gray-100 text-lg px-8 py-3"
                                    onClick={() =>
                                        window.open("/Brochure.pdf", "_blank")
                                    }>
                                    Download Brochure
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NCREventDetailsPage;
