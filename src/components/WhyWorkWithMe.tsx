import { CheckCircle2 } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { useIntersectionAnimation } from '../hooks/useIntersection';

const reasons = [
  { en: 'Specialized in LIS-HIS Integration', ar: 'متخصص في تكامل LIS-HIS' },
  { en: 'Extensive Healthcare IT Experience', ar: 'خبرة واسعة في تقنية المعلومات الصحية' },
  { en: 'Strong Understanding of Laboratory Workflows', ar: 'فهم قوي لسير عمل المختبر' },
  { en: 'Experience with ARCUS Platform', ar: 'خبرة في منصة ARCUS' },
  { en: 'Healthcare Interoperability Expertise', ar: 'خبرة في قابلية التشغيل البيني للرعاية الصحية' },
  { en: 'Analyzer Connectivity Troubleshooting', ar: 'استكشاف أخطاء ربط المحللات' },
  { en: 'UAT & Go-Live Support', ar: 'دعم اختبار القبول والإطلاق المباشر' },
  { en: 'Vendor Coordination', ar: 'تنسيق الموردين' },
  { en: 'Ministry of Health Project Experience', ar: 'خبرة مشاريع وزارة الصحة' },
  { en: 'Ministry of Defense Project Experience', ar: 'خبرة مشاريع وزارة الدفاع' },
];

export default function WhyWorkWithMe() {
  const { t, isRTL } = useLang();
  const ref = useIntersectionAnimation();

  return (
    <section id="why" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-accent-800" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-16 animate-on-scroll ${isRTL ? 'font-ar' : ''}`}>
          <span className="inline-block px-4 py-1.5 bg-white/10 text-cyan-300 border border-white/20 rounded-full text-sm font-semibold mb-4">
            {t('Why Choose Me', 'لماذا تختارني')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('Why Work', 'لماذا')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              {t('With Me', 'العمل معي')}
            </span>
          </h2>
          <p className={`text-blue-200 max-w-xl mx-auto ${isRTL ? 'font-ar' : ''}`}>
            {t(
              'A dedicated specialist bringing deep domain knowledge and proven results to every healthcare integration project.',
              'متخصص متفان يجلب معرفة عميقة بالمجال ونتائج مثبتة لكل مشروع تكامل رعاية صحية.'
            )}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={r.en}
              className="animate-on-scroll flex items-center gap-4 bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/12 transition-all duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-cyan-400/20 border border-cyan-300/30 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} className="text-cyan-300" />
              </div>
              <span className={`text-white font-medium text-sm leading-snug ${isRTL ? 'font-ar' : ''}`}>
                {isRTL ? r.ar : r.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
