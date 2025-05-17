import React from 'react';

function Nedal() {
  // دالة للتمرير إلى أعلى الصفحة smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '20px', paddingTop: '80px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>مرحبا بك في صفحة نضال</h1>
      <p style={{ textAlign: 'center' }}>
        هذه الصفحة تحتوي على مجموعة صور تعبر عن أعمال نضال.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          maxWidth: '550px',
          margin: '30px auto',
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/Image/05.jpeg"}
          alt="صورة 05"
          title="صورة 05 - أعمال نضال"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <img
          src={process.env.PUBLIC_URL + "/Image/06.jpeg"}
          alt="صورة 06"
          title="صورة 06 - أعمال نضال"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <img
          src={process.env.PUBLIC_URL + "/Image/07.jpeg"}
          alt="صورة 07"
          title="صورة 07 - أعمال نضال"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <img
          src={process.env.PUBLIC_URL + "/Image/08.jpeg"}
          alt="صورة 08"
          title="صورة 08 - أعمال نضال"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      {/* زر الرجوع للأعلى ثابت */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          padding: '12px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
        }}
        aria-label="العودة إلى الأعلى"
        title="العودة إلى الأعلى"
      >
        ↑ الأعلى
      </button>
    </div>
  );
}

export default Nedal;
