import { useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import { useIntersectionAnimation } from '../hooks/useIntersection';

const organizations = [
  {
    logo: '/assets/logos/image.png',
    en: 'Saudi Ministry of Health',
    ar: 'وزارة الصحة السعودية',
    type_en: 'Ministry of Health',
    type_ar: 'وزارة الصحة',
  },
  {
    logo: '/assets/logos/الخدمات.png',
    en: 'Medical Services – Ministry of Defense',
    ar: 'الخدمات الطبية – وزارة الدفاع',
    type_en: 'Ministry of Defense',
    type_ar: 'وزارة الدفاع',
  },
  {
    logo: '/assets/logos/JOU.png',
    en: 'Al Jouf Health Cluster',
    ar: 'عنقود الجوف الصحي',
    type_en: 'Ministry of Health',
    type_ar: 'وزارة الصحة',
  },
  {
    logo: '/assets/logos/R1.png',
    en: 'Riyadh First Health Cluster',
    ar: 'عنقود الرياض الصحي الأول',
    type_en: 'Ministry of Health',
    type_ar: 'وزارة الصحة',
  },
  {
    logo: '/assets/logos/R2.png',
    en: 'Riyadh Second Health Cluster',
    ar: 'عنقود الرياض الصحي الثاني',
    type_en: 'Ministry of Health',
    type_ar: 'وزارة الصحة',
  },
  {
    logo: '/assets/logos/R3.png',
    en: 'Riyadh Third Health Cluster',
    ar: 'عنقود الرياض الصحي الثالث',
    type_en: 'Ministry of Health',
    type_ar: 'وزارة الصحة',
  },
  {
    logo: '/assets/logos/TAB.png',
    en: 'Tabuk Health Cluster',
    ar: 'عنقود تبوك الصحي',
    type_en: 'Ministry of Health',
    type_ar: 'وزارة الصحة',
  },
];

// Duplicate for seamless infinite loop
const slides = [...organizations, ...organizations];

export default function Experience() {
  const { t, isRTL } = useLang();
  const ref = useIntersectionAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5; // px per frame
    const totalWidth = track.scrollWidth / 2; // half = one set of slides

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        if (posRef.current >= totalWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section id="experience" className="section-padding bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className={`text-center mb-4 animate-on-scroll ${isRTL ? 'font-ar' : ''}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            {t('Experience', 'الخبرة')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('Trusted', 'تجارب')}{' '}
            <span className="gradient-text">{t('Project Experience', 'المشاريع الموثوقة')}</span>
          </h2>
          <p className={`text-gray-500 max-w-2xl mx-auto text-lg mb-2 ${isRTL ? 'font-ar' : ''}`}>
            {t(
              'Major healthcare integration projects delivered across Saudi Ministry of Health clusters and Ministry of Defense healthcare services.',
              'مشاريع تكامل رعاية صحية رائدة مُنجزة عبر مجموعات وزارة الصحة السعودية وخدمات وزارة الدفاع الصحية.'
            )}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mt-4 mb-12" />
        </div>
      </div>

      {/* Full-width carousel */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 py-2"
            style={{ width: 'max-content', willChange: 'transform' }}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            {slides.map((org, i) => (
              <div
                key={`${org.en}-${i}`}
                className="flex-shrink-0 w-48 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-5 flex flex-col items-center justify-center gap-3 transition-shadow duration-300 cursor-default"
              >
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={org.logo}
                    alt={isRTL ? org.ar : org.en}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="text-center">
                  <p className={`font-bold text-gray-800 text-xs leading-snug ${isRTL ? 'font-ar' : ''}`}>
                    {isRTL ? org.ar : org.en}
                  </p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                    {isRTL ? org.type_ar : org.type_en}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
