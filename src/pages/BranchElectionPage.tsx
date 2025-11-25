
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, Phone, Mail, Globe, Calendar, User, Users, Building } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const BranchElectionPage = () => {
  const handleDownloadPDF = () => {
    const pdfUrl = 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/198331c8-3006-4e74-a69f-ac6c45cf8208.pdf';
    window.open(pdfUrl, '_blank');
  };

  const electedOfficeBearers = [
  { position: 'Chaiperson', name: 'Dr. Prashant Saxena', status: 'Unopposed' },
  { position: 'Secretary', name: 'Dr. Akhil Taneja', status: 'Unopposed' },
  { position: 'Treasurer', name: 'Dr. Amit Goel', status: 'Unopposed' }];


  const executiveMembers = [
  'Dr. Anup Agarwal',
  'Dr. Ashutosh Kumar Garg',
  'Dr. Gaurav Pratap Singh',
  'Dr. Prashant Singh',
  'Dr. Rajat Agarwal',
  'Dr. Rishab Kumar'];


  const currentLeadership = [
  { position: 'Chaiperson', name: 'Dr. Anil Gurnani', phone: '9811017238' },
  { position: 'Past Chairperson', name: 'Dr. Rajesh Kumar Pande', phone: '9810536268' },
  { position: 'Secretary', name: 'Dr. Ashutosh Bhardwaj', phone: '9971004640' },
  { position: 'Treasurer', name: 'Dr. Prashant Saxena', phone: '9711198892' }];


  const executiveLeadership = [
  { name: 'Dr. Akhil Taneja', phone: '9560322993' },
  { name: 'Dr. Amit Goel', phone: '9999849981' },
  { name: 'Dr. Ashutosh Kumar Garg', phone: '9958657770' },
  { name: 'Dr. Nitin Jain', phone: '9818155350' },
  { name: 'Dr. Rakesh Garg', phone: '9810394950' },
  { name: 'Dr. Rajat Agrawal', phone: '9818851504' }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="ISCCM Delhi-Noida Branch Election Results"
        subtitle="Society of Critical Care Medicine (SCCM), Delhi-Noida - A Branch of Indian Society of Critical Care Medicine"
        badgeText="2024-2026"
        showContactButton={false} />

      
      <div className="container mx-auto px-4 py-8">
        {/* Download PDF Button */}
        <div className="text-center mb-12">
          {/* <Button
            onClick={handleDownloadPDF}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download Election Results PDF
          </Button> */}
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* Organization Details */}
          <Card className="shadow-lg border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Building className="h-6 w-6" />
                Organization Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Registration:</strong> Society Registration Act XXI of 1860 Reg.no S/932/Distt. south/2012
                </p>
                <p className="text-gray-700">
                  <strong>GSTIN:</strong> 07AAHAS9366D1Z6
                </p>
                <p className="text-gray-700">
                  <strong>Election Period:</strong> 2024-2026
                </p>
                <p className="text-gray-700">
                  <strong>Notification Date:</strong> May 28, 2024
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Elected Office Bearers */}
          <Card className="shadow-lg border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <User className="h-6 w-6" />
                Elected Office Bearers (2024-2026)
              </CardTitle>
              <CardDescription>Executive Positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {electedOfficeBearers.map((officer, index) =>
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-gray-800">{officer.position}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {officer.status}
                      </Badge>
                    </div>
                    <p className="text-blue-600 font-medium">{officer.name}</p>
                  </div>
                )}
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Executive Members (6 Positions)
                </h3>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {executiveMembers.map((member, index) =>
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-blue-600 font-medium">{member}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        Unopposed
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Leadership Structure */}
          <Card className="shadow-lg border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6" />
                Current Leadership Structure
              </CardTitle>
              <CardDescription>Office Bearers & Executive Members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Leadership Positions */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Leadership Positions</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {currentLeadership.map((leader, index) =>
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-800">{leader.position}</h4>
                        </div>
                        <p className="text-blue-600 font-medium mb-1">{leader.name}</p>
                        <p className="text-gray-600 text-sm flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {leader.phone}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Executive Members */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Executive Members</h3>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {executiveLeadership.map((member, index) =>
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-blue-600 font-medium mb-1">{member.name}</p>
                        <p className="text-gray-600 text-sm flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {member.phone}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Election Authority & Contact Information */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-lg border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Election Authority
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-gray-800">Election Commissioner</p>
                  <p className="text-blue-600 font-medium">Dr. Rajesh Kumar Pande</p>
                  <p className="text-gray-600">SCCM, Delhi-Noida</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Secretariat Office</p>
                    <p className="text-gray-600 text-sm">
                      805, 8th Floor, Shakuntla Building 59<br />
                      Nehru Place, New Delhi-110019
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>8447755830</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>isccmdelhichapter@gmail.com</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4" />
                      <span>www.isccmdelhi.org</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <Card className="shadow-lg bg-blue-50 border-blue-200">
            <CardContent className="text-center py-6">
              <p className="text-blue-700 font-medium">
                All positions for the 2024-2026 term were filled unopposed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>);

};

export default BranchElectionPage;