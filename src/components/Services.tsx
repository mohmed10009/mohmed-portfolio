import {
  Network,
  Activity,
  Cpu,
  Settings,
  Map,
  AlertTriangle,
  FlaskConical,
  ClipboardCheck,
  Rocket,
  FileText,
  RefreshCw,
  Database,
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { useIntersectionAnimation } from '../hooks/useIntersection';

const services = [
  { icon: Network, en: 'LIS-HIS Integration', ar: 'تكامل LIS-HIS', desc_en: 'End-to-end integration between Laboratory and Hospital Information Systems', desc_ar: 'تكامل شامل بين أنظمة المختبر ومعلومات المستشفى' },
  { icon: Activity, en: 'HL7 Interface Implementation', ar: 'تطبيق واجهات HL7', desc_en: 'Design and implementation of HL7 v2.x messaging interfaces', desc_ar: 'تصميم وتطبيق واجهات رسائل HL7 v2.x' },
  { icon: Cpu, en: 'ASTM Communication', ar: 'بروتوكول ASTM', desc_en: 'ASTM protocol setup for analyzer and LIS bidirectional communication', desc_ar: 'إعداد بروتوكول ASTM للاتصال ثنائي الاتجاه' },
  { icon: FlaskConical, en: 'Laboratory Analyzer Connectivity', ar: 'ربط محللات المختبر', desc_en: 'Connecting lab analyzers to LIS via TCP/IP and RS232 interfaces', desc_ar: 'ربط محللات المختبر بنظام LIS عبر TCP/IP وRS232' },
  { icon: Settings, en: 'Middleware Configuration', ar: 'إعداد منصات الوسيط', desc_en: 'Setup and tuning of middleware platforms including ARCUS and Mirth Connect', desc_ar: 'إعداد وضبط منصات الوسيط بما في ذلك ARCUS وMirth Connect' },
  { icon: Map, en: 'Test Code Mapping', ar: 'رسم أكواد الاختبارات', desc_en: 'Accurate mapping of test codes between LIS, analyzers, and HIS', desc_ar: 'رسم دقيق لأكواد الاختبارات بين LIS والمحللات وHIS' },
  { icon: Database, en: 'Host Code Mapping', ar: 'رسم أكواد المضيف', desc_en: 'Comprehensive host code and parameter mapping for seamless data flow', desc_ar: 'رسم شامل لأكواد المضيف والمعاملات لتدفق بيانات سلس' },
  { icon: AlertTriangle, en: 'Result Workflow Troubleshooting', ar: 'استكشاف مشاكل سير النتائج', desc_en: 'Diagnosing and resolving result delivery and routing issues', desc_ar: 'تشخيص وحل مشاكل تسليم وتوجيه النتائج' },
  { icon: ClipboardCheck, en: 'UAT Support', ar: 'دعم اختبار القبول', desc_en: 'Complete user acceptance testing planning and execution support', desc_ar: 'دعم تخطيط وتنفيذ اختبار قبول المستخدم الشامل' },
  { icon: Rocket, en: 'Go-Live Support', ar: 'دعم الإطلاق المباشر', desc_en: 'On-site and remote go-live support for smooth production launch', desc_ar: 'دعم الإطلاق في الموقع وعن بُعد لإطلاق إنتاج سلس' },
  { icon: FileText, en: 'Technical Documentation', ar: 'التوثيق التقني', desc_en: 'Detailed integration documentation, SOPs, and configuration guides', desc_ar: 'توثيق تكامل تفصيلي وإجراءات التشغيل القياسية وأدلة الإعداد' },
  { icon: RefreshCw, en: 'Healthcare Data Exchange', ar: 'تبادل بيانات الرعاية الصحية', desc_en: 'Secure and standardized health data exchange between systems', desc_ar: 'تبادل آمن ومعياري لبيانات الصحة بين الأنظمة' },
];

export default function Services() {
  const { t, isRTL } = useLang();
  const ref = useIntersectionAnimation();

  return (
    <section id="services" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-16 animate-on-scroll ${isRTL ? 'font-ar' : ''}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            {t('Services', 'الخدمات')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('Integration', 'خدمات التكامل')}{' '}
            <span className="gradient-text">{t('Services', 'المتخصصة')}</span>
          </h2>
          <p className={`text-gray-500 max-w-xl mx-auto ${isRTL ? 'font-ar' : ''}`}>
            {t(
              'Comprehensive healthcare IT integration services covering the full project lifecycle',
              'خدمات تكامل تقنية المعلومات الصحية الشاملة تغطي دورة حياة المشروع الكاملة'
            )}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.en}
                className="animate-on-scroll card-premium p-6 group cursor-default"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
                  <Icon size={22} className="text-blue-600" />
                </div>
                <h3 className={`font-bold text-gray-900 mb-2 text-sm leading-snug ${isRTL ? 'font-ar text-right' : ''}`}>
                  {isRTL ? service.ar : service.en}
                </h3>
                <p className={`text-gray-500 text-xs leading-relaxed ${isRTL ? 'font-ar text-right' : ''}`}>
                  {isRTL ? service.desc_ar : service.desc_en}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
