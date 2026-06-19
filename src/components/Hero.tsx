import { MessageCircle, Linkedin, ChevronDown, ArrowRight } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Hero() {
const { t, isRTL } = useLang();

return ( <section id="home" className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
{/* Background orbs */} <div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="orb absolute w-96 h-96 bg-cyan-400 -top-20 -right-20" style={{ animationDelay: '0s' }} />
<div className="orb absolute w-80 h-80 bg-blue-400 bottom-20 -left-20" style={{ animationDelay: '2s' }} />
<div className="orb absolute w-64 h-64 bg-indigo-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} /> </div>

```
  {/* Grid pattern overlay */}
  <div
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Text content */}
      <div className={`text-white space-y-6 ${isRTL ? 'lg:col-start-2 text-right' : ''}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-blue-100">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          {t('Healthcare Integration Engineer', 'مهندس تكامل الرعاية الصحية')}
        </div>

        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isRTL ? 'font-ar' : ''}`}>
          {t('Mohmed', 'محمد')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            {t('Abdalazim', 'عبد العظيم')}
          </span>
        </h1>

        <div className="space-y-2">
          <p className={`text-xl font-semibold text-cyan-300 ${isRTL ? 'font-ar' : ''}`}>
            {t('LIS-HIS Integration Specialist', 'متخصص تكامل LIS-HIS')}
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            {['HL7', 'ASTM', 'Middleware'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/90 font-medium">
                {tag}
              </span>
            ))}
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/90 font-medium">
              {t('Healthcare Interoperability', 'قابلية التشغيل البيني')}
            </span>
          </div>
        </div>

        <p className={`text-lg text-blue-100 leading-relaxed max-w-xl ${isRTL ? 'font-ar' : ''}`}>
          {t(
            'Experienced Healthcare Integration Engineer specializing in connecting Laboratory Information Systems (LIS) with Hospital Information Systems (HIS), laboratory analyzers, middleware platforms, and healthcare interoperability solutions across major healthcare organizations in Saudi Arabia.',
            'مهندس تكامل رعاية صحية متمرس متخصص في ربط أنظمة معلومات المختبر (LIS) بأنظمة معلومات المستشفيات (HIS)، ومحللات المختبر، ومنصات الوسيط، وحلول قابلية التشغيل البيني في كبرى منظمات الرعاية الصحية في المملكة العربية السعودية.'
          )}
        </p>

        <div className={`flex flex-wrap gap-3 pt-2 ${isRTL ? 'justify-end' : ''}`}>
          <a href="#contact" className="btn-primary">
            {t('Contact Me', 'تواصل معي')}
            <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
          </a>
          <a
            href="https://wa.me/966500014260"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/mohmeda-adbdalrahim/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Portrait */}
      <div className={`flex justify-center lg:justify-end ${isRTL ? 'lg:col-start-1 lg:justify-start' : ''}`}>
        <div className="relative">
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-300/30 scale-110 animate-pulse-slow" />
          <div className="absolute inset-0 rounded-full border border-white/10 scale-125" />

          {/* Profile image container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-cyan-500/20" />
            <div className="w-full h-full bg-gradient-to-br from-blue-700 to-cyan-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white/80">MA</span>
                </div>
                <p className="text-sm text-white/70 font-medium">Mohmed Abdalazim</p>
              </div>
            </div>
          </div>

          {/* Floating stats */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">5+</div>
              <div className="text-xs text-gray-500">{t('Years Exp.', 'سنوات خبرة')}</div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600">7+</div>
              <div className="text-xs text-gray-500">{t('Health Clusters', 'تجمع صحي')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <a
    href="#about"
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors animate-bounce"
  >
    <span className="text-xs font-medium">{t('Scroll', 'مرر')}</span>
    <ChevronDown size={20} />
  </a>
</section>


);
}
