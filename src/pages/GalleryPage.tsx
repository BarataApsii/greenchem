import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import GallerySection from "../components/GallerySection";

export default function GalleryPage() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'pest-control', label: 'Pest Control' },
    { id: 'water-chemical', label: 'Water & Chemical' },
    { id: 'construction', label: 'Construction & Landscaping' },
  ];

  console.log('Rendering GalleryPage with category:', activeCategory);
  
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Gallery</h1>
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8" role="alert">
            <p className="font-bold">Debug Info:</p>
            <p>Current Category: {activeCategory}</p>
            <p>URL: {window.location.href}</p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`?category=${category.id}`}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', `?category=${category.id}`);
                  setActiveCategory(category.id);
                }}
              >
                {category.label}
              </a>
            ))}
          </div>
          
          <GallerySection category={activeCategory} />
        </div>
      </main>
    </div>
  );
}
