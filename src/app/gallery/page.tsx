export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p>Check out moments from our surf guiding adventures, hosted stays, and epic sessions in Bouznika.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {/* Placeholder for gallery images */}
        <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">Image 1</div>
        <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">Image 2</div>
        <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">Image 3</div>
        {/* Add more images later */}
      </div>
    </div>
  );
} 