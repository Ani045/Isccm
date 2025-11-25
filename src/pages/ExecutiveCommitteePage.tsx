import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Award, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const ExecutiveCommitteePage = () => {
  const executiveMembers = [
  {
    id: 1,
    name: 'Dr. Prashant Saxena',
    position: 'Chairperson',
    image: 'prashant.jpeg',
    designation: 'Senior Director and Head- Pulmonology, Critical Care and Sleep Medicine',
    department: 'At Fortis Hospital, Vasant Kunj'
  },
  {
    id: 2,
    name: 'Dr. Akhil Taneja',
    position: 'Secretary',
    image: 'dr-akhil-taneja_new.png',
    designation: 'Associate Director, Critical Care Medicine',
    department: 'At Max Super Speciality Hospital, Patparganj Delhi'
  },
  {
    id: 3,
    name: 'Dr. Amit Goel',
    position: 'Treasurer',
    image: 'dr-amit-goel.jpg',
    designation: 'Director and Head - Critical Care Medicine',
    department: 'At Yatharth Super Speciality Hospital, Greater Noida West, Uttar Pradesh'
  },
  {
    id: 4,
    name: 'Dr. Anup Agarwal',
    position: 'EC Member',
    image: 'dr-anup-aggarwal.jpg',
    designation: 'Consultant - Department of Anaesthesia & Intensive Care',
    department: 'At Kailash Hospital Noida'
  },
  {
    id: 5,
    name: 'Dr. Ashutosh Garg',
    position: 'EC Member',
    image: 'dr-ashutosh-garg.jpg',
    designation: 'Head, Department of Critical Care Medicine',
    department: 'At Kailash Deepak Hospital, New Delhi'
  },
  {
    id: 8,
    name: 'Dr. Gaurav Singh',
    position: 'EC Member',
    image: 'dr-gaurav-pratap-singh.jpg',
    designation: 'Principal Consultant',
    department: 'At Max Superspeciality Hospital, I.P Extension, Patparganj, Delhi'
  },
  {
    id: 7,
    name: 'Dr. Prashant Singh',
    position: 'EC Member',
    image: 'dr-prashant-singh.jpg',
    designation: 'Consultant & Head SICU-1, Critical Care Medicine',
    department: 'At Rajiv Gandhi Cancer Institute and Research Centre, Rohini, Delhi'
  },
  {
    id: 6,
    name: 'Dr. Rajat Agarwal',
    position: 'EC Member',
    image: 'dr-rajat-aggarwal.jpg',
    designation: 'Director & Head Department of Critical Care Medicine',
    department: 'At Fortis Escorts Hospital New Delhi'
  },
  {
    id: 9,
    name: 'Dr. Rishabh Mittal',
    position: 'EC Member',
    image: 'dr-risabh-kumar.jpg',
    designation: 'Additional Director & Head - Department of Critical Care Medicine',
    department: 'At Fortis Hospital, Manesar, Gurugram'
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <PageBanner
        title="Executive Committee"
        subtitle="Meet the distinguished leaders driving excellence in critical care medicine"
        badgeText="Executive Committee"
        showContactButton={false} />


      {/* Our Team Section */}
      <section className="py-8 sm:py-12 bg-white/30">
        <div className="container mx-auto px-4">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                <Users className="text-[#BA0A1E]" size={24} />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-6xl mx-auto">
                <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                  Our executive committee comprises distinguished professionals committed to advancing critical care medicine through leadership, innovation, and excellence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                  {executiveMembers.map((member) =>
                  <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300" />

                          <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">{member.name}</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">{member.position}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="text-xs text-gray-600 leading-relaxed">
                            <p className="font-medium">{member.designation}</p>
                            <p className="text-gray-500 mt-1">{member.department}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

     

      {/* Past Members Section */}
      <section className="py-8 sm:py-12 bg-gray-50/30">
        <div className="container mx-auto px-4">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                <Award className="text-[#BA0A1E]" size={24} />
                Past Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-6xl mx-auto">
                <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                  Honoring the distinguished professionals who have contributed to the growth and excellence of our organization.
                </p>


                 {/* Previous Past Members */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Previous Leadership (2022-24)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                       <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            AG
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Anil Gurnani</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Past Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            PS
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Prashant Saxena</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Past Treasurer</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            AB
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Ashutosh Bhardwaj</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Past Secretary</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Past Members 2020 */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Past Members 2020-22</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            RKP
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Rajesh Kumar Pande</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            DJ
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Deven Juneja</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            SKG
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Suneel Kumar Garg</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Treasurer</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Past Members 2018 */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Past Members 2018-20</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            YJ
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Yash Javeri</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            PK
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Prashant Kumar</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            ST
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Saurabh Taneja</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Treasurer</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Past Members 2016 */}
                 <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Past Members 2016-18</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            DD
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Debashis Dhar</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            YJ
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Yash Javeri </h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                      </CardContent>
                    </Card>

                   
                  </div>
                </div>

                 {/* Past Members 2014 */}
                 <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Past Members 2014-16</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            DS
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Vinod Singh</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            YJ
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Yash Javeri</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                      </CardContent>
                    </Card>

                    
                  </div>
                </div>
                {/* Past Members 2012 */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Past Members 2012-14</h3>
                  <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                 In 2012, the ISCCM Delhi Chapter was registered under the leadership of three key office bearers.
                </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            PSS
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr Prakash Srinivas Shastri</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          RKP
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Rajesh Kunar Pande</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                      </CardContent>
                    </Card>

                     <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            RU
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr Rajiv Uttam</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Treasurer</p>
                      </CardContent>
                    </Card>

                    
                  </div>
                </div>

                {/* Past Members 2009-10 */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Past Members 2009-10</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            PS
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Prakash Shastri</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            PK
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Praveen Kulharia</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            DG
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Deepak Govil</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Treasurer</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                  {/* Past Members 2006-08 */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Past Members 2006-08</h3>
                  <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                 In 2006-08, the SCCM Expanded from Delhi to Delhi - NCR branch.
                </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            KC
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. K. Chug
                      </h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            DG
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Deepak Govil</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            DG
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Tarun Jhamb</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Treasurer</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Past Members 2005 */}
                 <div className="mb-8">
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Past Members 2004-06</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            RC
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Rajesh Chawla</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            YJ
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Praveen Khilnani</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Vice Chairperson</p>
                      </CardContent>
                    </Card>

                         <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                           RU
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Rajiv Uttam</h3>
                        <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                      </CardContent>
                    </Card>

                    
                  </div>
                </div>

                <div className="mb-8">
  <h3 className="text-lg font-bold text-center text-gray-900 mb-6">Ex officio members</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
      <CardContent className="p-4 sm:p-6 text-center">
       <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            AB
                          </div>
                        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Ashutosh Bhardwaj</h3>
       
      </CardContent>
    </Card>

    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
      <CardContent className="p-4 sm:p-6 text-center">
        <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            RC
                          </div>
                        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Ranajit Chatterjee</h3>
      
      </CardContent>
    </Card>

    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
      <CardContent className="p-4 sm:p-6 text-center">
      <div className="relative mb-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            PK
                          </div>
                        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Prashant Kumar</h3>
       
      </CardContent>
    </Card>
  </div>
                </div>

               
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

       {/* Founding Members Section */}
      <section className="py-8 sm:py-12 bg-white/30">
        <div className="container mx-auto px-4">
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                <Award className="text-[#BA0A1E]" size={24} />
                Founding Members (1999)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-6xl mx-auto">
                <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                  Honoring the visionary founders who established ISCCM in 1999 and laid the foundation for excellence in critical care medicine.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
                  {/* Dr Prakash Srinivas Shastri - Chairperson */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                          RC
                        </div>
                       
                        <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Rajesh Chawla</h3>
                      <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Chairperson</p>
                     
                    </CardContent>
                  </Card>

                  {/* Dr. Rajesh Kunar Pande - Secretary */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                          PK
                        </div>
                       
                        <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr. Praveen Khilnani</h3>
                      <p className="text-[#BA0A1E] font-semibold text-xs mb-3">Secretary</p>
                     
                    </CardContent>
                  </Card>

                  {/* Dr Rajiv Uttam - Treasurer */}
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 overflow-hidden">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                          RU
                        </div>
                       
                        <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-r from-[#BA0A1E]/20 to-[#035D8E]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">Dr Rajiv Uttam</h3>
                      <p className="text-[#BA0A1E] font-semibold text-xs mb-3"> Treasurer</p>
                      
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-center mb-3">Legacy of Excellence</h4>
                  <p className="text-gray-700 text-center text-sm">
                    These visionary leaders established ISCCM in 1999 with the mission to advance critical care medicine and create a professional community dedicated to improving patient outcomes across India. Their pioneering efforts continue to inspire our organization's commitment to excellence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Committee Structure Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Leadership Structure */}
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                  <Award className="text-[#BA0A1E]" size={24} />
                  Leadership Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#BA0A1E]/10 to-[#035D8E]/10 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Executive Hierarchy</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Chairperson:</span>
                        <span className="text-gray-700">Dr. Prashant Saxena</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Secretary:</span>
                        <span className="text-gray-700">Dr. Akhil Taneja</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Treasurer:</span>
                        <span className="text-gray-700">Dr. Amit Goel</span>
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium mb-2">EC Members:</div>
                        <div className="text-gray-700 text-sm space-y-1 pl-2">
                          <div>• Dr. Anup Agarwal</div>
                          <div>• Dr. Ashutosh Garg</div>
                          <div>• Dr. Gaurav Singh</div>
                          <div>• Dr. Prashant Singh</div>
                          <div>• Dr. Rajat Agarwal</div>
                          
                          
                          <div>• Dr. Rishabh Mittal</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-700 text-sm">
                      Our executive committee works collaboratively to ensure the highest standards of critical care medicine and professional development across the Delhi-Noida region.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Committee Mission */}
            <Card className="bg-white/80 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-900 flex items-center justify-center gap-3">
                  <Target className="text-[#035D8E]" size={24} />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 text-center text-sm md:text-base">
                    Our executive committee is dedicated to advancing critical care medicine through:
                  </p>
                  <div className="space-y-3">
                    {[
                    'Enhance patient care standards in intensive care units',
                    'Promote continuous medical education and research',
                    'Enable knowledge-sharing among healthcare professionals',
                    'Serve as a collaborative platform for clinical innovation',
                    'Foster professional development and networking',
                    'Advocate for best practices in critical care medicine'].
                    map((mission, index) =>
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-sm">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#BA0A1E] to-[#035D8E] rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-sm md:text-base font-medium">{mission}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
       <section className="py-12  bg-gradient-to-r from-[#BA0A1E] to-[#035D8E]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of India's largest critical care community and help us advance the standards of patient care.
          </p>
          <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20 max-w-md mx-auto">
                  <div className="text-sm text-amber-200 font-medium mb-2">⚠️ Important Notice</div>
                  <div className="text-sm text-blue-100">Please enter Delhi/Noida as your city or provide your Delhi/Noida address when applying.</div>
                </div>
          <Button
            size="lg"
            className="bg-white text-[#BA0A1E] hover:bg-gray-100 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://isccm.org/Membership/ApplyOnline/', '_blank')}>

            Become a Member
          </Button>
        </div>
      </section>
      <Footer />
    </div>);

};

export default ExecutiveCommitteePage;