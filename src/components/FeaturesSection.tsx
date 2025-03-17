
import { 
  Calendar, 
  MessageSquare, 
  FileText, 
  BarChart4, 
  Bell, 
  UserCog 
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Scheduling & Planning",
    description: "Manage class schedules, events, and academic calendars in one place"
  },
  {
    icon: MessageSquare,
    title: "Communication Tools",
    description: "Built-in messaging system connecting students, teachers, and parents"
  },
  {
    icon: FileText,
    title: "Assignment Management",
    description: "Create, distribute, and grade assignments with detailed feedback"
  },
  {
    icon: BarChart4,
    title: "Performance Analytics",
    description: "Comprehensive reports and analytics on student and class performance"
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Stay updated with important announcements and deadlines"
  },
  {
    icon: UserCog,
    title: "User Management",
    description: "Easily manage users, roles, and permissions across the platform"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to streamline educational processes and enhance learning outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
