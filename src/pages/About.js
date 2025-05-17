import React from 'react';

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const imageStyle = {
    width: '48%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const containerStyle = {
    padding: '20px',
    paddingTop: '100px',
    direction: 'rtl',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: 'auto',
  };

  const images = [
    '17.jpeg',
    '18.jpeg',
    '11.jpeg',
    '12.jpeg',
    '13.jpeg',
    '14.jpeg',
    '15.jpeg',
    '16.jpeg',
  ];

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>زأدخ للبرمجيات والمعدات الثقيلة</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444', textAlign: 'center' }}>
        زأدح شخصية مجهولة، لكنه يلعب دورًا كبيرًا في حياتنا جميعًا. بالرغم من أننا لا نعرفه شخصيًا، إلا أن تأثيره ملموس ويثير الفضول والابتسامة.
        وجود زأدح يذكرنا بأن بعض الأشياء في الحياة لا تحتاج لأن تُعرف بشكل مباشر حتى تكون مهمة وذات قيمة.
        <br />
        <br />
        هو رمز لكل ما هو غامض لكنه ضروري، وجوده يعطينا لمسة من الدعابة والسرور وسط جدية الحياة.
        فلتكن زأدح في نفسك قبل ما تكون زأدح في عيون الآخرين. زأدح سر من أسرار الحياة الجميلة!
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={`${process.env.PUBLIC_URL}/Image/${img}`}
            alt={`صورة ${idx + 1}`}
            style={imageStyle}
          />
        ))}
      </div>

      {/* زر الرجوع للأعلى */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          padding: '12px 18px',
          borderRadius: '50%',
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 1000,
        }}
        aria-label="العودة إلى الأعلى"
        title="العودة إلى الأعلى"
      >
        ↑
      </button>
    </div>
  );
}
