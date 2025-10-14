import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Building2 } from 'lucide-react';

const Login = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Calendar className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Welcome to EventHub</h1>
          <p className="text-muted-foreground mt-2">
            Your gateway to amazing college events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* User Login/Register Card */}
          <Link to="/auth/user">
            <Card className="group cursor-pointer hover:shadow-lg transition-all hover:scale-105 hover:border-primary/50 h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Student / Attendee</CardTitle>
                <CardDescription className="text-base">
                  Browse and book amazing college events
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2 pb-6">
                <p className="text-sm text-muted-foreground">
                  ✓ Discover events across colleges
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ Book tickets & get QR codes
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ Track your registrations
                </p>
                <Button className="w-full mt-4" variant="default">
                  Continue as Student
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Organizer Login Card */}
          <Link to="/auth/organiser">
            <Card className="group cursor-pointer hover:shadow-lg transition-all hover:scale-105 hover:border-primary/50 h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                  <Building2 className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-2xl">Organizer / Club</CardTitle>
                <CardDescription className="text-base">
                  Manage and promote your events
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2 pb-6">
                <p className="text-sm text-muted-foreground">
                  ✓ Create & manage events
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ Track registrations & attendance
                </p>
                <p className="text-sm text-muted-foreground">
                  ✓ Analytics & insights
                </p>
                <Button className="w-full mt-4" variant="secondary">
                  Continue as Organizer
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
