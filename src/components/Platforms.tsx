import { useLang } from '../context/LanguageContext';
import { useIntersectionAnimation } from '../hooks/useIntersection';
import { Server, GitBranch, Workflow, Database, Network, Cpu, Activity, FlaskConical } from 'lucide-react';

const platforms = [
  { icon: Server, en: 'ARCUS Platform', ar: 'منصة ARCUS', highlight: true },
  { icon: FlaskConical, en: 'LIS', ar: 'نظام معلومات المختبر (LIS)' },
  { icon: Database, en: 'HIS', ar: 'نظام معلومات المستشفى (HIS)' },
  { icon: Activity, en: 'HL7 v2.x', ar: 'HL7 الإصدار 2.x' },
  { icon: Cpu, en: 'ASTM', ar: 'بروتوكول ASTM' },
  { icon: GitBranch, en: 'Mirth Connect', ar: 'Mirth Connect' },
  { icon: Network, en: 'Healthcare Interoperability', ar: 'قابلية التشغيل البيني الصحي' },
  { icon: FlaskConical, en: 'Laboratory Integration', ar: 'تكامل المختبر' },
  { icon: Workflow, en: 'Middleware Platforms', ar: 'منصات الوسيط' },
];

export default function Platforms() {
  const { t, isRTL } = useLang();
  const ref = useIntersectionAnimation();

  return (
    <section id="platforms" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-16 animate-on-scroll ${isRTL ? 'font-ar' : ''}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            {t('Platforms & Systems', 'المنصات والأنظمة')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('Healthcare Platforms', 'منصات الرعاية الصحية')}{' '}
            <span className="gradient-text">{t('& Systems', 'والأنظمة')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* ARCUS Spotlight */}
        <div className="animate-on-scroll mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800 p-8 lg:p-12 text-white shadow-2xl">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className={`relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              {/* IQVIA logo area */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-black text-white tracking-tight">IQVIA</div>
                    <div className="text-xs text-blue-200 mt-1">Healthcare IT</div>
                  </div>
                </div>
              </div>

              <div className={`flex-1 ${isRTL ? 'text-right font-ar' : ''}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 border border-cyan-300/30 rounded-full text-cyan-300 text-sm font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {t('Featured Platform', 'المنصة المميزة')}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-3">ARCUS Platform</h3>
                <p className="text-blue-100 leading-relaxed text-lg mb-4">
                  {t(
                    'Extensive hands-on experience working on ARCUS healthcare integration platform developed and implemented by IQVIA for healthcare interoperability and LIS-HIS integration projects across Saudi healthcare organizations.',
                    'خبرة عملية واسعة في العمل على منصة التكامل الصحي ARCUS التي طورتها وطبقتها IQVIA لمشاريع قابلية التشغيل البيني للرعاية الصحية وتكامل LIS-HIS عبر المنظمات الصحية السعودية.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['LIS-HIS Integration', 'HL7 Messaging', 'ASTM Protocol', 'Test Code Mapping', 'Analyzer Connectivity'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platforms grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.en}
                className={`animate-on-scroll card-premium p-5 flex items-center gap-4 ${p.highlight ? 'border-blue-200 bg-blue-50/50' : ''}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${p.highlight ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100'}`}>
                  <Icon size={22} className={p.highlight ? 'text-white' : 'text-blue-600'} />
                </div>
                <div className={isRTL ? 'font-ar text-right' : ''}>
                  <p className={`font-bold text-gray-900 ${p.highlight ? 'text-blue-700' : ''}`}>
                    {isRTL ? p.ar : p.en}
                  </p>
                  {p.highlight && (
                    <p className="text-xs text-blue-500 font-medium mt-0.5">{t('Primary Platform', 'المنصة الرئيسية')}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
