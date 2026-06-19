import { Award, CheckCircle2 } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { useIntersectionAnimation } from '../hooks/useIntersection';

const certs = [
  {
    title: 'CCNA',
    full_en: 'Cisco Certified Network Associate',
    full_ar: 'شهادة سيسكو المعتمدة للشبكات',
    issuer: 'Cisco',
    color: 'from-blue-600 to-blue-800',
    badge: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'CompTIA Network+',
    full_en: 'CompTIA Network+ Certification',
    full_ar: 'شهادة CompTIA Network+',
    issuer: 'CompTIA',
    color: 'from-red-500 to-red-700',
    badge: 'bg-red-100 text-red-600',
  },
  {
    title: 'Google Data Analytics',
    full_en: 'Google Data Analytics Professional',
    full_ar: 'شهادة محترف تحليل بيانات Google',
    issuer: 'Google',
    color: 'from-green-500 to-green-700',
    badge: 'bg-green-100 text-green-600',
  },
  {
    title: 'Healthcare Integration',
    full_en: 'Healthcare IT Integration Specialist',
    full_ar: 'متخصص تكامل تقنية المعلومات الصحية',
    issuer: 'Healthcare IT',
    color: 'from-cyan-500 to-cyan-700',
    badge: 'bg-cyan-100 text-cyan-600',
  },
  {
    title: 'HL7 Knowledge',
    full_en: 'HL7 International Standards Knowledge',
    full_ar: 'معرفة معايير HL7 الدولية',
    issuer: 'HL7 International',
    color: 'from-primary-600 to-primary-800',
    badge: 'bg-primary-100 text-primary-600',
  },
];

export default function Certifications() {
  const { t, isRTL } = useLang();
  const ref = useIntersectionAnimation();

  return (
    <section id="certifications" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-16 animate-on-scroll ${isRTL ? 'font-ar' : ''}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            {t('Certifications', 'الشهادات')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('Professional', 'الشهادات')}{' '}
            <span className="gradient-text">{t('Certifications', 'المهنية')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className="animate-on-scroll card-premium overflow-hidden group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                    <Award size={26} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-gray-900 text-base leading-snug ${isRTL ? 'font-ar text-right' : ''}`}>
                      {cert.title}
                    </h3>
                    <p className={`text-gray-500 text-sm mt-1 leading-snug ${isRTL ? 'font-ar text-right' : ''}`}>
                      {isRTL ? cert.full_ar : cert.full_en}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center gap-2 mt-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span className="text-xs text-gray-500">{t('Issuer', 'الجهة المانحة')}:</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cert.badge}`}>{cert.issuer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
