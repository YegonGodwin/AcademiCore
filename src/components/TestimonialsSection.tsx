
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "School.system has transformed how we manage our academic processes. The intuitive interface and comprehensive features make it a must-have for any educational institution.",
    name: "Dr. Sarah Johnson",
    role: "Principal, Lincoln High School",
    rating: 5
  },
  {
    quote: "As a teacher, the grading and feedback tools have saved me countless hours. I can now focus more on actual teaching rather than administrative tasks.",
    name: "Michael Roberts",
    role: "Science Teacher, Oakridge Academy",
    rating: 5
  },
  {
    quote: "The parent-teacher communication features have greatly improved our involvement in our children's education. We feel more connected to the school community.",
    name: "Jennifer Taylor",
    role: "Parent of Two Students",
    rating: 4
  },
  {
    quote: "The analytics provided by school.system have helped us identify areas for improvement in our curriculum. Data-driven decisions have never been easier.",
    name: "David Chen",
    role: "Academic Director, West Valley College",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-brand-blue/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Educators Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our users have to say about their experience with school.system.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="h-full p-6">
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-300" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic mb-4 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
