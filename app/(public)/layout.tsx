import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
