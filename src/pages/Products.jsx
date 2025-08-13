import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Heart, Star, Filter } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'suits', name: 'Suits' },
    { id: 'shirts', name: 'Shirts' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'fabrics', name: 'Premium Fabrics' }
  ];

  const products = [
    {
      id: 1,
      name: "Executive Business Suit",
      category: "suits",
      price: 899,
      originalPrice: 1199,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 124,
      isNew: false,
      onSale: true
    },
    {
      id: 2,
      name: "Premium Dress Shirt",
      category: "shirts",
      price: 149,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 89,
      isNew: true,
      onSale: false
    },
    {
      id: 3,
      name: "Italian Silk Tie Set",
      category: "accessories",
      price: 79,
      originalPrice: 99,
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 45,
      isNew: false,
      onSale: true
    },
    {
      id: 4,
      name: "Navy Three-Piece Suit",
      category: "suits",
      price: 1299,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5.0,
      reviews: 67,
      isNew: false,
      onSale: false
    },
    {
      id: 5,
      name: "Cashmere Blend Fabric",
      category: "fabrics",
      price: 299,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 23,
      isNew: true,
      onSale: false
    },
    {
      id: 6,
      name: "French Cuff Shirt",
      category: "shirts",
      price: 189,
      originalPrice: 229,
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      reviews: 156,
      isNew: false,
      onSale: true
    },
    {
      id: 7,
      name: "Leather Cufflinks Set",
      category: "accessories",
      price: 129,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 78,
      isNew: true,
      onSale: false
    },
    {
      id: 8,
      name: "Charcoal Wedding Suit",
      category: "suits",
      price: 1499,
      originalPrice: 1799,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 92,
      isNew: false,
      onSale: true
    },
    {
      id: 9,
      name: "Egyptian Cotton Fabric",
      category: "fabrics",
      price: 199,
      originalPrice: null,
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 34,
      isNew: false,
      onSale: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = priceRange === 'all' || 
      (priceRange === 'under-200' && product.price < 200) ||
      (priceRange === '200-500' && product.price >= 200 && product.price <= 500) ||
      (priceRange === '500-1000' && product.price >= 500 && product.price <= 1000) ||
      (priceRange === 'over-1000' && product.price > 1000);
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Premium quality suits, shirts, and accessories crafted to perfection
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Prices</option>
                <option value="under-200">Under $200</option>
                <option value="200-500">$200 - $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="over-1000">Over $1000</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        New
                      </span>
                    )}
                    {product.onSale && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Sale
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors block"
                    >
                      <Eye className="h-5 w-5 text-gray-600" />
                    </Link>
                  </div>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.onSale && product.originalPrice && (
                      <span className="text-red-600 font-semibold">
                        Save ${product.originalPrice - product.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with New Arrivals
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Be the first to know about our latest products and exclusive offers
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;