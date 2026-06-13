
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OmPath Math Academy | Excel in Mathematics',
  description: 'Expert maths coaching for Class 5 to 8 — building strong foundations with conceptual clarity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-mist-blue selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
