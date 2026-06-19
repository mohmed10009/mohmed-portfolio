import { useLang } from '../context/LanguageContext';
import { useIntersectionAnimation } from '../hooks/useIntersection';

const skills = [
  { en: 'LIS', ar: 'LIS', level: 95 },
  { en: 'HIS', ar: 'HIS', level: 92 },
  { en: 'ARCUS', ar: 'ARCUS', level: 90 },
  { en: 'HL7 v2.x', ar: 'HL7 v2.x', level: 90 },
  { en: 'ASTM', ar: 'ASTM', level: 88 },
  { en: 'Mirth Connect', ar: 'Mirth Connect', level: 85 },
  { en: 'Middleware', ar: 'وسيط', level: 88 },
  { en: 'Analyzer Integration', ar: 'تكامل المحللات', level: 90 },
  { en: 'TCP/IP', ar: 'TCP/IP', level: 82 },
  { en: 'RS232', ar: 'RS232', level: 80 },
  { en: 'LOINC Mapping', ar: 'رسم LOINC', level: 78 },
  { en: 'Healthcare IT', ar: 'تقنية المعلومات الصحية', level: 92 },
  { en: 'UAT', ar: 'اختبار القبول', level: 93 },
  { en: 'Go-Live', ar: 'الإطلاق المباشر', level: 92 },
  { en: 'Troubleshooting', ar: 'استكشاف الأخطاء', level: 90 },
];

const badgeSkills = skills.slice(0, 15);

export default function Skills() {
  const { t, isRTL } = useLang();
  const ref = useIntersectionAnimation();

  return (
    <section id="skills" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-16 animate-on-scroll ${isRTL ? 'font-ar' : ''}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            {t('Skills', 'المهارات')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('Technical', 'المهارات')}{' '}
            <span className="gradient-text">{t('Skills', 'التقنية')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Progress bars */}
          <div className="animate-on-scroll space-y-5">
            {skills.slice(0, 8).map((skill, i) => (
              <div key={skill.en} style={{ transitionDelay: `${i * 50}ms` }}>
                <div className={`flex justify-between mb-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`text-sm font-semibold text-gray-700 ${isRTL ? 'font-ar' : ''}`}>
                    {isRTL ? skill.ar : skill.en}
                  </span>
                  <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll space-y-5">
            {skills.slice(8).map((skill, i) => (
              <div key={skill.en} style={{ transitionDelay: `${i * 50}ms` }}>
                <div className={`flex justify-between mb-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`text-sm font-semibold text-gray-700 ${isRTL ? 'font-ar' : ''}`}>
                    {isRTL ? skill.ar : skill.en}
                  </span>
                  <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badge pills */}
        <div className="animate-on-scroll mt-12">
          <div className={`flex flex-wrap gap-3 justify-center ${isRTL ? 'font-ar' : ''}`}>
            {badgeSkills.map((skill) => (
              <span key={skill.en} className="skill-badge">
                {isRTL ? skill.ar : skill.en}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
