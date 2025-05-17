import React from 'react';

function Home() {
  // دالة الرجوع لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      padding: '20px',
      paddingTop: '100px', // ← هذا السطر أُضيف لتفادي تغطية الـ Navbar
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>مرحباً بك في الصفحة الرئيسية</h1>
      <p>هذه فقرة تعريفية بالموقع.</p>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center', // محاذاة رأسية
          height: '300px',      // ارتفاع ثابت
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Image/01.jpeg`}
          alt="صورة رئيسية"
          style={{
            width: '50%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />

        <video
          controls
          style={{
            width: '50%',
            height: '100%',
            borderRadius: '8px',
            objectFit: 'cover',
          }}
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
          zIndex: 1000
        }}
      >
        ↑ إلى الأعلى
      </button>
    </div>
  );
}

export default Home;
