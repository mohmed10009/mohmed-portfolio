import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Linkedin } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const navItems = [
  { href: '#home', en: 'Home', ar: 'الرئيسية' },
  { href: '#about', en: 'About', ar: 'عني' },
  { href: '#services', en: 'Services', ar: 'الخدمات' },
  { href: '#experience', en: 'Experience', ar: 'الخبرة' },
  { href: '#skills', en: 'Skills', ar: 'المهارات' },
  { href: '#certifications', en: 'Certifications', ar: 'الشهادات' },
  { href: '#contact', en: 'Contact', ar: 'تواصل' },
];

export default function Header() {
  const { lang, setLang, t, isRTL } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0">
            <div className={`flex items-center gap-2 ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-sm leading-tight ${scrolled ? 'text-blue-900' : 'text-white'} ${isRTL ? 'font-ar' : ''}`}>
                  {isRTL ? 'محمد عبد العظيم' : 'Mohmed Abdalazim'}
                </div>
                <div className={`text-xs ${scrolled ? 'text-blue-500' : 'text-blue-200'} ${isRTL ? 'font-ar' : ''}`}>
                  {isRTL ? 'أخصائي تكامل LIS-HIS' : 'LIS-HIS Integration Specialist'}
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {isRTL ? item.ar : item.en}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 border ${
                scrolled
                  ? 'border-blue-200 text-blue-600 hover:bg-blue-50'
                  : 'border-white/40 text-white hover:bg-white/10'
              }`}
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/966500014260"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohmeda-adbdalrahim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors"
              >
                {isRTL ? item.ar : item.en}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-gray-100 mt-2">
              <button
                onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setMenuOpen(false); }}
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-200 text-blue-600 rounded-xl font-semibold"
              >
                {lang === 'en' ? 'عربي' : 'EN'}
              </button>
              <a
                href="https://wa.me/966500014260"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl font-semibold"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/mohmeda-adbdalrahim/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-700 text-white rounded-xl font-semibold"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
