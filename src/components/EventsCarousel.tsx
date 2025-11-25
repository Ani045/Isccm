import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    Star,
    ExternalLink,
    ArrowRight,
    Sparkles,
    Award,
    Globe,
    Zap,
    Brain,
    FileText,
    Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventsCarousel = () => {
    const navigate = useNavigate();

    const events = [
        {
            id: 1,
            title: "NCR Mega CritiCon 2025",
            date: "November 14-16, 2025",
            time: "9:00 AM - 6:00 PM",
            location: "The Stein Auditorium, India Habitat Centre, New Delhi",
            attendees: "500+",
            image: "mega.jpeg",
            description:
                "A groundbreaking collaboration between ISCCM Delhi-Noida & ISCCM Gurugram Branch. This landmark event combines the 20th DCCS & 3rd Gurugram Criticon, featuring world-renowned faculty, interactive workshops, and cutting-edge research presentations that will shape the future of critical care medicine.",
            featured: true,
            type: "Conference",
            speakers: [
                "Dr. Global Expert 1",
                "Dr. Global Expert 2",
                "Dr. National Expert",
            ],
            price: "₹18,000",
            highlights: [
                "25 Keynote Sessions",
                "60+ Research Papers",
                "Live Surgery Demonstrations",
                "International Faculty",
                "Hands-on Workshops",
            ],
            category: "Major Conference",
            registrationOpen: true,
            videoUrl:
                "https://www.youtube.com/embed/kfGm6rt4YDo?si=oDVsdg4eR7SKcnIT",
        },
    ];

    const handleRegisterClick = (eventId) => {
        navigate("/events");
    };

    const handleBrochureDownload = () => {
        window.open("/Brochure.pdf", "_blank");
    };

    return (
        <section
            className="py-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-red-50/20 relative overflow-hidden"
            id="events">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg%2Bxml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23035D8E%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-red-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-red-200/20 to-blue-200/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#035D8E]/10 to-[#BA0A1E]/10 px-4 py-2 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-[#BA0A1E]" />
                        <span className="text-sm font-medium text-[#035D8E]">
                            Featured Events
                        </span>
                    </div>

                    <h2 className="text-5xl font-bold bg-gradient-to-r from-[#035D8E] to-[#BA0A1E] bg-clip-text text-transparent mb-6">
                        Upcoming Events
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] mx-auto mb-6 rounded-full"></div>

                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Join our educational programs, workshops, and
                        conferences designed to advance your critical care
                        expertise
                    </p>
                </div>

                {/* Video, Image and Info Section */}
                {events[0].videoUrl && (
                    <div className="max-w-7xl mx-auto mb-12">
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Left Side - Video with Brochure Button */}
                            <div className="flex flex-col gap-4">
                                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl overflow-hidden flex-grow">
                                    <CardContent className="p-4 h-full flex flex-col">
                                        <div
                                            className="relative w-full flex-grow"
                                            style={{ minHeight: "300px" }}>
                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                                src={events[0].videoUrl}
                                                title="Conference Overview Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen></iframe>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Brochure Download Button */}
                                <Button
                                    onClick={handleBrochureDownload}
                                    variant="outline"
                                    className="w-full border-2 border-[#035D8E] text-[#035D8E] hover:bg-[#035D8E] hover:text-white py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Download Event Brochure
                                    <Download className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            {/* Right Side - Image and Event Info */}
                            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group">
                                <CardContent className="p-0">
                                    {/* Event Image with overlays */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={events[0].image}
                                            alt={events[0].title}
                                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                        {/* Badges on image */}
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1.5 border-0 shadow-lg">
                                                <Star className="w-3 h-3 mr-1" />
                                                Featured Event
                                            </Badge>
                                        </div>

                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-green-500 text-white text-xs px-3 py-1.5 border-0 shadow-lg">
                                                Registration Open
                                            </Badge>
                                        </div>

                                        {/* Title overlay on image */}
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-2xl font-bold text-white mb-1 leading-tight drop-shadow-lg">
                                                {events[0].title}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <Badge
                                                    variant="outline"
                                                    className="bg-white/90 text-[#BA0A1E] border-0 text-xs">
                                                    {events[0].type}
                                                </Badge>
                                                <Badge
                                                    variant="outline"
                                                    className="bg-white/90 text-[#035D8E] border-0 text-xs">
                                                    {events[0].category}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Information Below Image */}
                                    <div className="p-5">
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                                            {events[0].description}
                                        </p>

                                        {/* Event Details - Compact Grid */}
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="flex items-start text-gray-700 text-xs">
                                                <Calendar className="h-4 w-4 mr-2 text-[#BA0A1E] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <div className="font-semibold">
                                                        {
                                                            events[0].date.split(
                                                                ","
                                                            )[0]
                                                        }
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {events[0].time}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-start text-gray-700 text-xs">
                                                <Users className="h-4 w-4 mr-2 text-[#BA0A1E] flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <div className="font-semibold">
                                                        {events[0].attendees}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Expected
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start text-gray-700 text-xs mb-4">
                                            <MapPin className="h-4 w-4 mr-2 text-[#BA0A1E] flex-shrink-0 mt-0.5" />
                                            <span className="line-clamp-2">
                                                {events[0].location}
                                            </span>
                                        </div>

                                        {/* Highlights */}
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-1.5">
                                                {events[0].highlights
                                                    .slice(0, 3)
                                                    .map((highlight, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="outline"
                                                            className="text-xs px-2 py-1 text-[#035D8E] border-[#035D8E]/30">
                                                            {highlight}
                                                        </Badge>
                                                    ))}
                                            </div>
                                            {events[0].highlights.length >
                                                3 && (
                                                <span className="text-xs text-gray-500 mt-1 inline-block">
                                                    +
                                                    {events[0].highlights
                                                        .length - 3}{" "}
                                                    more highlights
                                                </span>
                                            )}
                                        </div>

                                        {/* Register Button */}
                                        <Button
                                            onClick={() =>
                                                handleRegisterClick(
                                                    events[0].id
                                                )
                                            }
                                            className="w-full bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white text-sm py-5 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                                            <span className="flex items-center justify-center gap-2">
                                                Register Now
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {/* Original Carousel for other events */}
                {events.length > 1 && (
                    <div className="max-w-7xl mx-auto">
                        <Carousel
                            className="w-full"
                            opts={{ align: "start", loop: true }}>
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {events.slice(1).map((event) => (
                                    <CarouselItem
                                        key={event.id}
                                        className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                        <Card className="h-full border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden group">
                                            <CardContent className="p-0">
                                                <div className="relative overflow-hidden">
                                                    <img
                                                        src={event.image}
                                                        alt={event.title}
                                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />

                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg">
                                                        {
                                                            event.date.split(
                                                                ","
                                                            )[0]
                                                        }
                                                    </div>

                                                    {event.featured && (
                                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg animate-pulse">
                                                            {event.id === 2 ? (
                                                                <Brain className="w-3 h-3" />
                                                            ) : (
                                                                <Star className="w-3 h-3" />
                                                            )}
                                                            {event.id === 2
                                                                ? "Quiz Round 2"
                                                                : "Featured"}
                                                        </div>
                                                    )}

                                                    {event.id === 8 && (
                                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg">
                                                            <Brain className="w-3 h-3" />
                                                            Quiz Round 1 -
                                                            Completed
                                                        </div>
                                                    )}

                                                    <div className="absolute bottom-4 left-4">
                                                        <Badge
                                                            className={`${
                                                                event.registrationOpen
                                                                    ? "bg-green-500 hover:bg-green-600"
                                                                    : "bg-gray-500 hover:bg-gray-600"
                                                            } text-white text-xs px-2 py-1 shadow-md`}>
                                                            {event.registrationOpen
                                                                ? "Open"
                                                                : "Closed"}
                                                        </Badge>
                                                    </div>

                                                    <div className="absolute bottom-4 right-4">
                                                        <Badge className="bg-white/90 text-[#035D8E] hover:bg-white text-xs px-2 py-1 shadow-md">
                                                            {event.category}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                <div className="p-5">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <Badge
                                                            variant="outline"
                                                            className="text-[#BA0A1E] border-[#BA0A1E] text-xs">
                                                            {event.type}
                                                        </Badge>
                                                        {event.featured && (
                                                            <div className="flex items-center gap-1">
                                                                <Award className="w-3 h-3 text-yellow-500" />
                                                                <span className="text-xs text-yellow-600 font-medium">
                                                                    Premium
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <h3 className="text-lg font-bold text-[#035D8E] mb-3 line-clamp-2 group-hover:text-[#BA0A1E] transition-colors duration-300">
                                                        {event.title}
                                                    </h3>

                                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                                                        {event.description}
                                                    </p>

                                                    <div className="space-y-2 mb-4">
                                                        <div className="flex items-center text-gray-600 text-xs">
                                                            <Calendar className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                                                            <span className="font-medium">
                                                                {event.date}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center text-gray-600 text-xs">
                                                            <MapPin className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                                                            <span className="line-clamp-1">
                                                                {event.location}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center text-gray-600 text-xs">
                                                            <Users className="h-3 w-3 mr-2 text-[#BA0A1E]" />
                                                            <span className="font-medium">
                                                                {
                                                                    event.attendees
                                                                }{" "}
                                                                {event.id ===
                                                                    2 ||
                                                                event.id === 8
                                                                    ? ""
                                                                    : "Expected"}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="flex flex-wrap gap-1 mb-2">
                                                            {event.highlights
                                                                .slice(0, 3)
                                                                .map(
                                                                    (
                                                                        highlight,
                                                                        index
                                                                    ) => (
                                                                        <Badge
                                                                            key={
                                                                                index
                                                                            }
                                                                            variant="outline"
                                                                            className="text-xs px-2 py-0.5 text-[#035D8E] border-[#035D8E]/30">
                                                                            {
                                                                                highlight
                                                                            }
                                                                        </Badge>
                                                                    )
                                                                )}
                                                        </div>
                                                        {event.highlights
                                                            .length > 3 && (
                                                            <span className="text-xs text-gray-500">
                                                                +
                                                                {event
                                                                    .highlights
                                                                    .length -
                                                                    3}{" "}
                                                                more
                                                            </span>
                                                        )}
                                                    </div>

                                                    <Button
                                                        onClick={() =>
                                                            handleRegisterClick(
                                                                event.id
                                                            )
                                                        }
                                                        className="w-full bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] hover:from-[#035D8E] hover:to-[#BA0A1E] text-white text-sm py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                                                        <span className="flex items-center justify-center gap-2">
                                                            {event.registrationOpen
                                                                ? "Register Now"
                                                                : "Learn More"}
                                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                        </span>
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="left-2 bg-white/90 hover:bg-white shadow-lg border-0 text-[#035D8E] hover:text-[#BA0A1E] transition-colors duration-300" />
                            <CarouselNext className="right-2 bg-white/90 hover:bg-white shadow-lg border-0 text-[#035D8E] hover:text-[#BA0A1E] transition-colors duration-300" />
                        </Carousel>
                    </div>
                )}

                {/* Call to action */}
                <div className="text-center mt-12">
                    <Button
                        onClick={() => handleRegisterClick(null)}
                        variant="outline"
                        className="border-2 border-[#035D8E] text-[#035D8E] hover:bg-[#035D8E] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105">
                        View All Events
                        <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default EventsCarousel;
