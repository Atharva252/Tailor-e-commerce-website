import React from 'react';
import { Check, Clock, Award } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From custom suits to quick alterations, we provide comprehensive tailoring services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Custom Suits",
                price: "Starting at $899",
                duration: "3-4 weeks",
                image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: [
                  "Personal consultation and measurements",
                  "Premium fabric selection",
                  "Hand-stitched details",
                  "Perfect fit guarantee",
                  "Complimentary alterations within 6 months"
                ]
              },
              {
                title: "Suit Alterations",
                price: "Starting at $49",
                duration: "3-5 days",
                image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: [
                  "Hemming pants and sleeves",
                  "Taking in or letting out seams",
                  "Adjusting jacket length",
                  "Waist suppression",
                  "Button and zipper replacement"
                ]
              },
              {
                title: "Formal Wear",
                price: "Starting at $599",
                duration: "2-3 weeks",
                image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: [
                  "Tuxedos for special events",
                  "Wedding party coordination",
                  "Black tie accessories",
                  "Rush orders available",
                  "Rental and purchase options"
                ]
              },
              {
                title: "Shirt Tailoring",
                price: "Starting at $149",
                duration: "1-2 weeks",
                image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: [
                  "Custom dress shirts",
                  "Collar and cuff styles",
                  "Monogramming available",
                  "French cuff options",
                  "Business and casual styles"
                ]
              },
              {
                title: "Women's Alterations",
                price: "Starting at $39",
                duration: "2-4 days",
                image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: [
                  "Dress hemming and fitting",
                  "Blazer adjustments",
                  "Bridesmaid dress alterations",
                  "Evening gown modifications",
                  "Delicate fabric expertise"
                ]
              },
              {
                title: "Leather & Specialty Items",
                price: "Starting at $79",
                duration: "1-2 weeks",
                image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: [
                  "Leather jacket alterations",
                  "Uniform modifications",
                  "Vintage garment restoration",
                  "Specialty fabric handling",
                  "Custom patches and embellishments"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">{service.price}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold">
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we ensure perfect results every time</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs, style preferences, and take detailed measurements"
              },
              {
                step: "02",
                title: "Design & Fabric",
                description: "Choose from our premium fabric selection and finalize design details"
              },
              {
                step: "03",
                title: "Expert Craftsmanship",
                description: "Our master tailors create your garment with precision and care"
              },
              {
                step: "04",
                title: "Final Fitting",
                description: "Perfect adjustments ensure the ideal fit and finish"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Award className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Quality Guarantee</h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            We stand behind our work with a 100% satisfaction guarantee. If you're not completely 
            satisfied with your garment, we'll make it right at no additional cost.
          </p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
            Learn More About Our Guarantee
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;