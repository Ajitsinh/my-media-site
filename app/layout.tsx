import './globals.css';

export const metadata = {
  title: 'My Media Site',
  description: 'Images, audio and video deployed on Vercel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen">
        <main className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-6">My Media Site</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
