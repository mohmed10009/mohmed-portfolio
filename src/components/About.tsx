import { CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { useIntersectionAnimation } from '../hooks/useIntersection';

const expertiseItems = [
  { en: 'LIS-HIS Integration', ar: 'تكامل LIS-HIS' },
  { en: 'Laboratory Analyzer Connectivity', ar: 'ربط محللات المختبر' },
  { en: 'HL7 Integration', ar: 'تكامل HL7' },
  { en: 'ASTM Communication', ar: 'بروتوكول ASTM' },
  { en: 'Middleware Configuration', ar: 'إعداد منصات الوسيط' },
  { en: 'UAT & Go-Live Support', ar: 'دعم الاختبار والإطلاق' },
  { en: 'Technical Troubleshooting', ar: 'استكشاف الأخطاء التقنية' },
  { en: 'Healthcare Data Exchange', ar: 'تبادل بيانات الرعاية الصحية' },
];

export default function About() {
  const { t, isRTL } = useLang();
  const ref = useIntersectionAnimation();

  return (
    <section id="about" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <div className={`text-center mb-16 animate-on-scroll ${isRTL ? 'font-ar' : ''}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            {t('About Me', 'عني')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('Healthcare Integration', 'تكامل الرعاية الصحية')}{' '}
            <span className="gradient-text">{t('Expert', 'خبير')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          {/* Left: Profile visual */}
          <div className={`animate-on-scroll ${isRTL ? 'order-last lg:order-first' : ''}`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-800 to-primary-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">MA</span>
                  </div>
                  <h3 className={`text-2xl font-bold ${isRTL ? 'font-ar' : ''}`}>
                    {t('Mohmed Abdalazim', 'محمد عبد العظيم')}
                  </h3>
                  <p className={`text-blue-200 mt-1 ${isRTL ? 'font-ar' : ''}`}>
                    {t('Healthcare Integration Engineer', 'مهندس تكامل الرعاية الصحية')}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-blue-100">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span className={`text-sm ${isRTL ? 'font-ar' : ''}`}>
                      {t('Riyadh, Kingdom of Saudi Arabia', 'الرياض، المملكة العربية السعودية')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <Briefcase size={16} className="flex-shrink-0" />
                    <span className={`text-sm ${isRTL ? 'font-ar' : ''}`}>
                      {t('Guardia Systems', 'جارديا سيستمز')}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  {[
                    { num: '5+', label: t('Years', 'سنوات') },
                    { num: '7+', label: t('Clusters', 'عناقيد') },
                    { num: '50+', label: t('Projects', 'مشروع') },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-cyan-300">{s.num}</div>
                      <div className={`text-xs text-blue-200 ${isRTL ? 'font-ar' : ''}`}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-20 -z-10 blur-sm" />
            </div>
          </div>

          {/* Right: Description */}
          <div className={`space-y-6 animate-on-scroll ${isRTL ? 'text-right' : ''}`}>
            <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'font-ar' : ''}`}>
              {t(
                'Mohmed Abdalazim is a Healthcare Integration Engineer with extensive experience bridging laboratory systems and hospital information technology. He has worked on complex integration projects across Saudi Ministry of Health clusters and Ministry of Defense healthcare facilities.',
                'محمد عبد العظيم مهندس تكامل في مجال الرعاية الصحية يمتلك خبرة واسعة في ربط أنظمة المختبر بتكنولوجيا معلومات المستشفيات. عمل على مشاريع تكامل معقدة في مجموعات وزارة الصحة السعودية ومرافق الرعاية الصحية في وزارة الدفاع.'
              )}
            </p>

            <p className={`text-gray-600 leading-relaxed ${isRTL ? 'font-ar' : ''}`}>
              {t(
                'His core expertise spans the full lifecycle of healthcare integration projects — from initial configuration and test code mapping through user acceptance testing, go-live support, and post-deployment troubleshooting.',
                'تمتد خبرته الأساسية عبر دورة حياة مشاريع التكامل الصحي بالكامل — من الإعداد الأولي ورسم أكواد الاختبارات إلى اختبار قبول المستخدم ودعم الإطلاق واستكشاف أخطاء ما بعد النشر.'
              )}
            </p>

            <div>
              <h4 className={`text-lg font-bold text-gray-900 mb-4 ${isRTL ? 'font-ar' : ''}`}>
                {t('Areas of Expertise', 'مجالات الخبرة')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertiseItems.map((item) => (
                  <div key={item.en} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0" />
                    <span className={`text-gray-700 text-sm font-medium ${isRTL ? 'font-ar' : ''}`}>
                      {isRTL ? item.ar : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
