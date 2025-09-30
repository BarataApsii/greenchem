import GallerySection from "../components/GallerySection";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Gallery</h1>
          <GallerySection />
        </div>
      </main>
    </div>
  );
}
