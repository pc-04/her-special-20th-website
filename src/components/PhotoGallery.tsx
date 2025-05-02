
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  caption: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, className }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openPhotoModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  return (
    <>
      <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6", className)}>
        {photos.map((photo, index) => (
          <div 
            key={photo.id}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={() => openPhotoModal(photo)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 backdrop-blur-sm">
              <p className="text-white text-sm line-clamp-2">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying enlarged photos */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closePhotoModal}>
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full"
              onClick={closePhotoModal}
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
            
            <div className="max-h-[70vh] overflow-hidden">
              <img
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="p-4 bg-white">
              <p className="text-gray-800">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
