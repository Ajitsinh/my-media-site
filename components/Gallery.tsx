import Image from 'next/image';

export default function Gallery({ images }: { images: { src: string; alt?: string }[] }) {
  return (
    <div>
      <h2 className="text-2xl mb-3">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.src} className="rounded overflow-hidden bg-white shadow-sm">
            <Image src={img.src} alt={img.alt || ''} width={600} height={400} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
