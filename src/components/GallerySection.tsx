import { useState } from 'react';
import Modal from 'react-modal';

// Import images directly from src directory
import image01 from '../images/gallery/image-01.jpg';
import image02 from '../images/gallery/image-02.jpg';
import image03 from '../images/gallery/image-03.jpg';
import image04 from '../images/gallery/image-04.jpg';
// image-05.jpg is missing
import image06 from '../images/gallery/image-06.jpg';
import image07 from '../images/gallery/image-07.jpg';
import image08 from '../images/gallery/image-08.jpg';
import image09 from '../images/gallery/image-09.jpg';
import image10 from '../images/gallery/image-10.jpg';
import image11 from '../images/gallery/image-11.jpg';
import image12 from '../images/gallery/image-12.jpg';
import image13 from '../images/gallery/image-13.jpg';
import image14 from '../images/gallery/image-14.jpg';

// Set app element for accessibility
Modal.setAppElement('#root');

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: image01, alt: 'Gallery image 1' },
  { src: image02, alt: 'Gallery image 2' },
  { src: image03, alt: 'Gallery image 3' },
  { src: image04, alt: 'Gallery image 4' },
  // image-05.jpg is missing
  { src: image06, alt: 'Gallery image 6' },
  { src: image07, alt: 'Gallery image 7' },
  { src: image08, alt: 'Gallery image 8' },
  { src: image09, alt: 'Gallery image 9' },
  { src: image10, alt: 'Gallery image 10' },
  { src: image11, alt: 'Gallery image 11' },
  { src: image12, alt: 'Gallery image 12' },
  { src: image13, alt: 'Gallery image 13' },
  { src: image14, alt: 'Gallery image 14' }
];

export const GallerySection = () => {

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
    // Small delay to allow the modal to close before resetting the selected image
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer"
                onClick={() => openModal(image)}
              >
                {/* Image Container */}
                <div className="aspect-square bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Image Number */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center p-4 z-50 outline-none"
          overlayClassName="fixed inset-0 bg-black/75 z-40"
          contentLabel="Image Modal"
        >
          {selectedImage && (
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none z-10"
                aria-label="Close modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="max-h-[80vh] w-auto mx-auto object-contain"
                />
                <div className="p-4 bg-white">
                  <p className="text-center text-gray-700">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default GallerySection;
