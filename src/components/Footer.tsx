import { MessageCircle, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t, isRTL } = useLang();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className={isRTL ? 'text-right font-ar' : ''}>
            <div className="flex items-center gap-3 mb-4 justify-start">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <div>
                <div className="font-bold text-white text-base">
                  {t('Mohmed Abdalazim', 'محمد عبد العظيم')}
                </div>
                <div className="text-blue-400 text-xs">
                  {t('Healthcare Integration Engineer', 'مهندس تكامل الرعاية الصحية')}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t(
                'LIS-HIS Integration Specialist with expertise in HL7, ASTM, and middleware platforms across Saudi Arabia.',
                'متخصص تكامل LIS-HIS بخبرة في HL7 وASTM ومنصات الوسيط في المملكة العربية السعودية.'
              )}
            </p>
          </div>

          {/* Quick links */}
          <div className={isRTL ? 'text-right font-ar' : ''}>
            <h3 className="text-white font-bold mb-4">{t('Quick Links', 'روابط سريعة')}</h3>
            <ul className="space-y-2">
              {[
                { href: '#about', en: 'About', ar: 'عني' },
                { href: '#services', en: 'Services', ar: 'الخدمات' },
                { href: '#experience', en: 'Experience', ar: 'الخبرة' },
                { href: '#skills', en: 'Skills', ar: 'المهارات' },
                { href: '#certifications', en: 'Certifications', ar: 'الشهادات' },
                { href: '#contact', en: 'Contact', ar: 'تواصل' },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {isRTL ? item.ar : item.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className={isRTL ? 'text-right font-ar' : ''}>
            <h3 className="text-white font-bold mb-4">{t('Connect', 'تواصل')}</h3>
            <div className="space-y-3 mb-5">
              <a
                href="https://wa.me/966500014260"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                <MessageCircle size={16} className="flex-shrink-0" />
                <span>+966 500 014 260</span>
              </a>
              <a
                href="mailto:mohmed.abdalazim@guardiasystems.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span className="break-all">mohmed.abdalazim@guardiasystems.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohmeda-adbdalrahim/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-300 transition-colors text-sm"
              >
                <Linkedin size={16} className="flex-shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://wa.me/966500014260"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center hover:bg-green-500/30 transition-colors"
              >
                <MessageCircle size={16} className="text-green-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohmeda-adbdalrahim/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
              >
                <Linkedin size={16} className="text-blue-400" />
              </a>
              <a
                href="mailto:mohmed.abdalazim@guardiasystems.com"
                className="w-9 h-9 rounded-lg bg-gray-500/20 border border-gray-500/30 flex items-center justify-center hover:bg-gray-500/30 transition-colors"
              >
                <Mail size={16} className="text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className={`text-center sm:text-left text-sm text-gray-500 ${isRTL ? 'font-ar sm:text-right' : ''}`}>
            <span>© 2026 {t('Mohmed Abdalazim', 'محمد عبد العظيم')}. {t('All Rights Reserved.', 'جميع الحقوق محفوظة.')}</span>
            <span className="block sm:inline sm:ml-2 text-blue-400 text-xs mt-1 sm:mt-0">
              {t('Powered by Healthcare Integration Excellence', 'مدعوم بتميز التكامل الصحي')}
            </span>
          </div>
          <button
            onClick={scrollTop}
            className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center hover:bg-blue-600/30 transition-colors flex-shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
