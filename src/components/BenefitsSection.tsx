
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Building } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits for Every Stakeholder
          </h2>
          <p className="text-lg text-gray-600">
            See how school.system empowers students, teachers, and administrators.
          </p>
        </div>
        
        <Tabs defaultValue="students" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="students" className="flex items-center gap-2 py-3">
              <GraduationCap className="h-5 w-5" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex items-center gap-2 py-3">
              <Users className="h-5 w-5" />
              <span className="hidden sm:inline">Teachers</span>
            </TabsTrigger>
            <TabsTrigger value="administrators" className="flex items-center gap-2 py-3">
              <Building className="h-5 w-5" />
              <span className="hidden sm:inline">Administrators</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="students" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Student using laptop" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">For Students</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Track assignments and due dates in one place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Access learning resources anytime, anywhere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Receive instant feedback on submitted work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Collaborate with peers on group projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="teachers" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Teacher helping students" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">For Teachers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Create and grade assignments efficiently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Track student progress with detailed analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Communicate with students and parents seamlessly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Reduce administrative workload through automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="administrators" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="School administrators in meeting" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">For Administrators</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Comprehensive view of school operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Generate reports for data-driven decision making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Streamline resource allocation and scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Ensure compliance with educational standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BenefitsSection;
