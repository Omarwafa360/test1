import React, { useEffect, useState } from 'react';

function Khaled() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '20px', paddingTop: '100px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2c3e50' }}>مرحباً بك في صفحة خالد</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        خالد مهندس طموح يعشق الابتكار ويسعى دائمًا إلى تطوير نفسه ومساعدة الآخرين في تحقيق أحلامهم.
      </p>

      <h3 style={{ marginTop: '30px', color: '#34495e' }}>اهتمامات خالد</h3>
      <ul style={{ fontSize: '16px', lineHeight: '1.5' }}>
        <li>التعليم والتدريب في مجال الهندسة</li>
        <li>برمجة التطبيقات وتطوير المشاريع</li>
        <li>دعم الشباب وتحفيزهم نحو النجاح</li>
        <li>الكتابة والتأليف في المجالات التقنية والتنموية</li>
      </ul>

      <img
        src={process.env.PUBLIC_URL + '/Image/09.jpeg'}
        alt="صورة خالد"
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '8px' }}
      />

      <br /><br />

      <video width="400" controls style={{ borderRadius: '8px' }}>
        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#7f8c8d' }}>
        "الإبداع لا حدود له... فقط آمن بنفسك وابدأ."
      </p>

      {/* زر الرجوع لأعلى الصفحة */}
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        >
          ↑ للأعلى
        </button>
      )}
    </div>
  );
}

export default Khaled;
