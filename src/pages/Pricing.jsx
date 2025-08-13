import React from 'react';
import { Check, Star, Clock } from 'lucide-react';

const PricingPage = () => {
  const pricingCategories = [
    {
      title: "Custom Suits",
      icon: "👔",
      services: [
        { name: "Two-Piece Suit (Jacket + Trousers)", price: "$899 - $1,499", time: "3-4 weeks" },
        { name: "Three-Piece Suit (w/ Vest)", price: "$1,299 - $1,999", time: "4-5 weeks" },
        { name: "Tuxedo (Custom)", price: "$1,099 - $1,799", time: "3-4 weeks" },
        { name: "Wedding Party Package (5+ suits)", price: "$799 - $1,299 each", time: "4-6 weeks" },
        { name: "Rush Order (2-week delivery)", price: "+$200", time: "2 weeks" }
      ]
    },
    {
      title: "Alterations",
      icon: "✂️",
      services: [
        { name: "Hem Pants", price: "$18 - $35", time: "2-3 days" },
        { name: "Hem Sleeves", price: "$25 - $45", time: "2-3 days" },
        { name: "Take In/Let Out Waist", price: "$35 - $65", time: "3-4 days" },
        { name: "Shorten/Lengthen Jacket", price: "$45 - $85", time: "4-5 days" },
        { name: "Complete Suit Alteration", price: "$150 - $300", time: "5-7 days" }
      ]
    },
    {
      title: "Shirts & Formal Wear",
      icon: "👕",
      services: [
        { name: "Custom Dress Shirt", price: "$149 - $249", time: "2-3 weeks" },
        { name: "French Cuff Shirt", price: "$189 - $299", time: "2-3 weeks" },
        { name: "Shirt Alterations", price: "$25 - $65", time: "2-4 days" },
        { name: "Bow Tie (Custom)", price: "$89 - $149", time: "1-2 weeks" },
        { name: "Pocket Square", price: "$49 - $89", time: "1 week" }
      ]
    },
    {
      title: "Women's Alterations",
      icon: "👗",
      services: [
        { name: "Dress Hemming", price: "$25 - $85", time: "2-4 days" },
        { name: "Bridesmaid Dress Alterations", price: "$75 - $150", time: "1-2 weeks" },
        { name: "Evening Gown Alterations", price: "$125 - $275", time: "1-2 weeks" },
        { name: "Blazer Adjustments", price: "$45 - $125", time: "3-5 days" },
        { name: "Wedding Dress Alterations", price: "$200 - $500", time: "2-4 weeks" }
      ]
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: 899,
      description: "Perfect for the professional who needs quality basics",
      features: [
        "Two-piece custom suit",
        "Basic fabric selection (50+ options)",
        "Standard measurements",
        "2 fittings included",
        "6-month alteration warranty",
        "Delivery in 4 weeks"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 1299,
      description: "Our most popular package for business professionals",
      features: [
        "Three-piece custom suit",
        "Premium fabric selection (150+ options)",
        "Detailed measurements & consultation",
        "3 fittings included",
        "1-year alteration warranty",
        "Monogramming included",
        "Delivery in 3 weeks",
        "Complimentary shirt"
      ],
      popular: true
    },
    {
      name: "Executive",
      price: 1899,
      description: "Luxury craftsmanship for the discerning gentleman",
      features: [
        "Three-piece bespoke suit",
        "Luxury fabric selection (300+ options)",
        "Personal stylist consultation",
        "Unlimited fittings",
        "Lifetime alteration warranty",
        "Hand-stitched details",
        "Premium linings & buttons",
        "Delivery in 2-3 weeks",
        "Two complimentary shirts",
        "Accessories package"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Pricing</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Transparent pricing for exceptional tailoring services
            </p>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Suit Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-indigo-600 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-5xl font-bold text-indigo-600 mb-2">
                      ${pkg.price}
                    </div>
                    <p className="text-gray-500">Starting price</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Service Pricing</h2>
            <p className="text-xl text-gray-600">Individual services and their costs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pricingCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.time}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <span className="font-semibold text-indigo-600">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-indigo-600 text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Fabrics</h3>
              <p className="text-gray-600">
                All fabric upgrades are clearly priced. We offer options from premium wool 
                to luxury cashmere and exotic materials.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-indigo-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rush Orders</h3>
              <p className="text-gray-600">
                Need it fast? We offer rush services with guaranteed delivery dates. 
                Rush fees vary by service complexity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-indigo-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                All our work comes with our satisfaction guarantee. We'll make it right 
                at no additional cost if you're not completely happy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your needs and get an accurate quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Book Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;