import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Clock } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800">
            Thank You!
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Thank you for submitting the details
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          <p className="text-gray-500">
            Your submission has been received successfully. We appreciate your time and will get back to you soon.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
            <Clock className="w-4 h-4" />
            <span>Redirecting to home page in {countdown} seconds</span>
          </div>
          
          <Button
            onClick={handleGoHome}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white">

            <Home className="w-4 h-4 mr-2" />
            Go to Home Page
          </Button>
        </CardContent>
      </Card>
    </div>);

};

export default ThankYouPage;