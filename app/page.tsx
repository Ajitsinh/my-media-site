import Gallery from '../components/Gallery';

export default function Page() {
  // Example local media references (small files fine for demo)
  const images = [
    { src: '/media/sample.jpg', alt: 'Sample' },
  ];
  const audios = [
    { src: '/media/sample.mp3', title: 'Sample audio' },
  ];
  const videos = [
    { src: '/media/sample.mp4', title: 'Sample video' },
  ];

  return (
    <section className="space-y-8">
      <Gallery images={images} />
      <div>
        <h2 className="text-2xl mb-2">Audio</h2>
        {audios.map((a) => (
          <div key={a.src} className="mb-4">
            <audio controls src={a.src} className="w-full" />
            <div className="text-sm mt-1">{a.title}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl mb-2">Video</h2>
        {videos.map((v) => (
          <div key={v.src} className="mb-4">
            <video controls playsInline width="100%" src={v.src} />
            <div className="text-sm mt-1">{v.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
