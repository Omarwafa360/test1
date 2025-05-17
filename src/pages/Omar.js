import React from 'react';

function Omar() {
  return (
    <div style={{ padding: '20px', paddingTop: '80px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2c3e50' }}>مرحباً بك في صفحة عمر</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        عمر شخص يحب التعلم والتطور المستمر. يؤمن بأن كل يوم هو فرصة جديدة لتحقيق أهدافه وأحلامه.
      </p>

      <h3 style={{ marginTop: '30px', color: '#34495e' }}>هوايات عمر</h3>
      <ul style={{ fontSize: '16px', lineHeight: '1.5' }}>
        <li>القراءة في مجالات التكنولوجيا والتطوير الذاتي</li>
        <li>ممارسة الرياضة للحفاظ على الصحة والنشاط</li>
        <li>تجربة وصفات طبخ جديدة</li>
        <li>السفر واكتشاف أماكن جديدة</li>
      </ul>

      <img
        src={`${process.env.PUBLIC_URL}/Image/03.jpeg`}
        alt="صورة عمر"
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '8px' }}
      />

      <br /><br />

      <video width="400" controls style={{ borderRadius: '8px' }}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#7f8c8d' }}>
        "النجاح هو نتيجة العمل الجاد، والشغف، والاستمرارية."
      </p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        العودة إلى الأعلى
      </button>
    </div>
  );
}

export default Omar;
