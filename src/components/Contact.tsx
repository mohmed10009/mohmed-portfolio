import { MessageCircle, Mail, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { useIntersectionAnimation } from '../hooks/useIntersection';

export default function Contact() {
  const { t, isRTL } = useLang();
  const ref = useIntersectionAnimation();

  return (
    <section id="contact" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-16 animate-on-scroll ${isRTL ? 'font-ar' : ''}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            {t('Contact', 'تواصل')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('Get In', 'تواصل')}{' '}
            <span className="gradient-text">{t('Touch', 'معي')}</span>
          </h2>
          <p className={`text-gray-500 max-w-xl mx-auto ${isRTL ? 'font-ar' : ''}`}>
            {t(
              'Ready to discuss your healthcare integration project? Reach out through any of the channels below.',
              'هل أنت مستعد لمناقشة مشروع تكامل الرعاية الصحية الخاص بك؟ تواصل عبر أي من القنوات أدناه.'
            )}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Icon buttons row */}
          <div className="animate-on-scroll flex flex-wrap justify-center gap-5 mb-10">
            <a
              href="https://wa.me/966500014260"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 active:scale-95">
                <MessageCircle size={28} className="text-white" />
              </div>
              <span className={`text-xs font-semibold text-gray-500 group-hover:text-green-600 transition-colors ${isRTL ? 'font-ar' : ''}`}>
                WhatsApp
              </span>
            </a>

            <a
              href="mailto:mohmed.abdalazim@guardiasystems.com"
              aria-label="Email"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 active:scale-95">
                <Mail size={28} className="text-white" />
              </div>
              <span className={`text-xs font-semibold text-gray-500 group-hover:text-blue-600 transition-colors ${isRTL ? 'font-ar' : ''}`}>
                {t('Email', 'البريد')}
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/mohmeda-adbdalrahim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-700 hover:bg-blue-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 active:scale-95">
                <Linkedin size={28} className="text-white" />
              </div>
              <span className={`text-xs font-semibold text-gray-500 group-hover:text-blue-700 transition-colors ${isRTL ? 'font-ar' : ''}`}>
                LinkedIn
              </span>
            </a>

            <div className="group flex flex-col items-center gap-2 cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-gray-500 flex items-center justify-center shadow-lg">
                <MapPin size={28} className="text-white" />
              </div>
              <span className={`text-xs font-semibold text-gray-500 ${isRTL ? 'font-ar' : ''}`}>
                {t('Riyadh, KSA', 'الرياض')}
              </span>
            </div>
          </div>

          {/* Company link */}
          <div className="animate-on-scroll text-center">
            <div className={`card-premium p-6 inline-flex flex-col sm:flex-row items-center gap-4 ${isRTL ? 'font-ar' : ''}`}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">GS</span>
              </div>
              <div className={`text-center sm:text-left ${isRTL ? 'sm:text-right' : ''}`}>
                <p className="font-bold text-gray-900">Guardia Systems</p>
                <p className="text-gray-500 text-sm">{t('Company Website', 'موقع الشركة')}</p>
              </div>
              <a
                href="https://guardiasystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                {t('Visit Website', 'زيارة الموقع')}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
