import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'suits', name: 'Custom Suits' },
    { id: 'formal', name: 'Formal Wear' },
    { id: 'alterations', name: 'Alterations' },
    { id: 'shirts', name: 'Shirts' },
    { id: 'womens', name: 'Women\'s Wear' }
  ];
const galleryImages = [
  {
    id: 1,
    src: "/customsuits/images.jpg",
    title: "Navy Blue Custom Suit",
    category: "suits",
    description: "Handcrafted navy wool suit with peak lapels"
  },
  {
    id: 2,
    src: "/formal-wear/images.jpg",
    title: "Black Tie Tuxedo",
    category: "formal",
    description: "Classic black tuxedo with satin lapels"
  },
  {
    id: 3,
    src: "/Alteration/images.jpg",
    title: "Suit Alteration",
    category: "alterations",
    description: "Perfect fit adjustment on vintage suit"
  },
  {
    id: 4,
    src: "/shirts/images.jpg",
    title: "Custom Dress Shirt",
    category: "shirts",
    description: "Egyptian cotton shirt with French cuffs"
  },
  {
    id: 5,
    src: "/womenwears/images.jpg",
    title: "Evening Dress Alteration",
    category: "womens",
    description: "Elegant evening gown hemming and fitting"
  },
  {
    id: 6,
    src: "/customsuits/images (1).jpg",
    title: "Charcoal Three-Piece",
    category: "suits",
    description: "Charcoal wool three-piece suit with vest"
  },
  {
    id: 7,
    src: "/formal-wear/images (1).jpg",
    title: "Wedding Tuxedo",
    category: "formal",
    description: "Midnight blue wedding tuxedo with bow tie"
  },
  {
    id: 8,
    src: "/shirts/images (1).jpg",
    title: "Business Shirt",
    category: "shirts",
    description: "Crisp white business shirt with spread collar"
  },
  {
    id: 9,
    src: "/womenwears/images (1).jpg",
    title: "Evening Dress Alteration",
    category: "womens",
    description: "Elegant evening gown hemming and fitting"
  },
  {
    id: 10,
    src: "/womenwears/download.jpg",
    title: "Evening Dress Alteration",
    category: "womens",
    description: "Elegant evening gown hemming and fitting"
  },
  {
    id: 11,
    src: "/womenwears/download (1).jpg",
    title: "Evening Dress Alteration",
    category: "womens",
    description: "Elegant evening gown hemming and fitting"
  },
  {
    id: 12,
    src: "/womenwears/download (2).jpg",
    title: "Evening Dress Alteration",
    category: "womens",
    description: "Elegant evening gown hemming and fitting"
  },
  {
    id: 13,
    src: "/womenwears/download (3).jpg",
    title: "Evening Dress Alteration",
    category: "womens",
    description: "Elegant evening gown hemming and fitting"
  },
  {
    id: 14,
    src: "/customsuits/images (2).jpg",
    title: "Gray Pinstripe Suit",
    category: "suits",
    description: "Classic gray pinstripe with notch lapels"
  },
  {
    id: 15,
    src: "/customsuits/images (3).jpg",
    title: "Gray Pinstripe Suit",
    category: "suits",
    description: "Classic gray pinstripe with notch lapels"
  },
  {
    id: 16,
    src: "/Alteration/images (1).jpg",
    title: "Suit Alteration",
    category: "alterations",
    description: "Perfect fit adjustment on vintage suit"
  },
  {
    id: 17,
    src: "/Alteration/download.jpg",
    title: "Suit Alteration",
    category: "alterations",
    description: "Perfect fit adjustment on vintage suit"
  },
  {
    id: 18,
    src: "/Alteration/download (2).jpg",
    title: "Suit Alteration",
    category: "alterations",
    description: "Perfect fit adjustment on vintage suit"
  },
  {
    id: 19,
    src: "/formal-wear/download.jpg",
    title: "Wedding Tuxedo",
    category: "formal",
    description: "Midnight blue wedding tuxedo with bow tie"
  },
  {
    id: 20,
    src: "/formal-wear/download (1).jpg",
    title: "Wedding Tuxedo",
    category: "formal",
    description: "Midnight blue wedding tuxedo with bow tie"
  },
  {
    id: 21,
    src: "/shirts/images (2).jpg",
    title: "Business Shirt",
    category: "shirts",
    description: "Crisp white business shirt with spread collar"
  },
  {
    id: 22,
    src: "/shirts/images (3).jpg",
    title: "Business Shirt",
    category: "shirts",
    description: "Crisp white business shirt with spread collar"
  },
  {
    id: 23,
    src: "/shirts/images (4).jpg",
    title: "Business Shirt",
    category: "shirts",
    description: "Crisp white business shirt with spread collar"
  },
  {
    id: 24,
    src: "/shirts/images (5).jpg",
    title: "Business Shirt",
    category: "shirts",
    description: "Crisp white business shirt with spread collar"
  }
];


  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (index) => {
  setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Showcase of our finest work and craftsmanship
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-600">
                  {filteredImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let our master tailors craft something exceptional for you
          </p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;