import React from 'react';

function Hesham() {
  const mediaStyle = {
    width: '50%',
    height: '300px',
    borderRadius: '8px',
    objectFit: 'cover',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '20px', paddingTop: '80px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      <h1>مرحباً بك في صفحة هشام</h1>
      <p>
        هذه فقرة نصية تعريفية عن هشام. يمكنك هنا عرض معلوماته، خدماته، أو أي محتوى تريده.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Image/04.jpeg`}
          alt="صورة هشام"
          style={mediaStyle}
        />

        <video
          controls
          style={mediaStyle}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>

      {/* زر الرجوع لأعلى الصفحة */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#1976d2',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          zIndex: 1000,
        }}
      >
        ↑ إلى الأعلى
      </button>
    </div>
  );
}

export default Hesham;
