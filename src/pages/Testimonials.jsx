import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "CEO, Tech Innovations",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Elite Tailors transformed my wardrobe completely. The attention to detail and perfect fit of my custom suits has elevated my professional image tremendously. I've received countless compliments and feel confident in every business meeting.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Wedding Bride",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "They handled all the alterations for my wedding dress and the groomsmen's suits. The results were absolutely perfect! The team was professional, accommodating, and delivered exactly what we envisioned for our special day.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Robert Martinez",
      role: "Investment Banker",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "I've been a customer for over 3 years now. The quality is consistently exceptional, and their customer service is unmatched. Giovanni and his team understand exactly what I need and deliver every single time.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Amanda Wilson",
      role: "Corporate Lawyer",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "As a professional woman, finding properly fitted blazers and suits was always a challenge. Elite Tailors solved this problem beautifully. My custom pieces fit perfectly and look incredibly professional.",
      date: "2 months ago"
    },
    {
      id: 5,
      name: "David Thompson",
      role: "Groom",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "They created the perfect wedding tuxedo for me and coordinated suits for my groomsmen. The process was smooth, the quality outstanding, and the service impeccable. Highly recommend for any special occasion.",
      date: "6 weeks ago"
    },
    {
      id: 6,
      name: "Jennifer Adams",
      role: "Real Estate Agent",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "The alterations on my designer dresses were flawless. They preserved the original design while ensuring a perfect fit. I trust them with my most expensive pieces because their craftsmanship is exceptional.",
      date: "1 month ago"
    }
  ];

  const stats = [
    { number: "98%", label: "Customer Satisfaction", description: "Based on 1,200+ reviews" },
    { number: "5,000+", label: "Happy Clients", description: "Served since 1995" },
    { number: "4.9/5", label: "Average Rating", description: "Across all platforms" },
    { number: "25+", label: "Years Experience", description: "In bespoke tailoring" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Hear from our satisfied clients about their exceptional experience with Elite Tailors
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="h-8 w-8 text-indigo-600" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-center mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-indigo-600 text-sm mb-1">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Quote className="h-12 w-12 text-indigo-200" />
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
            "Elite Tailors doesn't just make clothes; they craft confidence. 
            Every piece they create is a work of art that makes you feel like the best version of yourself."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Featured Client"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-indigo-100 font-semibold">Marcus Thompson</div>
              <div className="text-indigo-200 text-sm">Fortune 500 Executive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">See and hear directly from our clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">Client Success Story</p>
                <p className="text-sm text-gray-500">Custom Suit Experience</p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600 font-medium">Wedding Testimonial</p>
                <p className="text-sm text-gray-500">Perfect Day Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference of expert craftsmanship and personalized service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
              Book Your Consultation
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors font-semibold">
              View Our Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Find us on review platforms
            </h3>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium text-gray-700">Google Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium text-gray-700">Yelp</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium text-gray-700">Better Business Bureau</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;