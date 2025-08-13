import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Elite Tailors</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Three generations of master tailors dedicated to the art of exceptional craftsmanship
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 1995, Elite Tailors began as a small family business with a simple mission: 
                to create exceptional garments that make our clients look and feel their absolute best.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                What started in a modest storefront has grown into one of the city's most trusted names 
                in bespoke tailoring, serving everyone from business professionals to celebrities preparing 
                for red carpet events.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we continue to honor traditional craftsmanship while embracing modern techniques 
                and styles, ensuring every client receives a garment that's perfectly suited to their 
                lifestyle and preferences.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Tailor at work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide every stitch we make</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for perfection in every garment, never settling for anything less than exceptional quality."
              },
              {
                icon: Users,
                title: "Client Focus",
                description: "Your satisfaction is our priority. We listen, understand, and deliver exactly what you envision."
              },
              {
                icon: Target,
                title: "Precision",
                description: "Every measurement, every cut, every stitch is executed with meticulous attention to detail."
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Our love for the craft drives us to continuously innovate and improve our artistry."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Master Tailors</h2>
            <p className="text-xl text-gray-600">Experienced craftsmen dedicated to your satisfaction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Giovanni Martinez",
                role: "Master Tailor & Founder",
                experience: "30+ years experience",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Sarah Chen",
                role: "Senior Alterations Specialist",
                experience: "15+ years experience",
                image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Marcus Thompson",
                role: "Bespoke Suit Designer",
                experience: "20+ years experience",
                image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;