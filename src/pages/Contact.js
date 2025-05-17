import React from 'react';

export default function Contact() {
  // دالة الرجوع لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        padding: '20px',
        paddingTop: '100px', // ✅ لحل مشكلة تغطية النافبار
        direction: 'rtl',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>تواصل معنا</h1>
      <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>
          نحن هنا من أجلك! يمكنك التواصل معنا عبر الوسائل الزأدحية:
      </p>
    
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginTop: '30px',
          maxWidth: '800px',
          marginInline: 'auto',
        }}
      >
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>📧 البريد الإلكتروني</h3>
          <p>support@example.com</p>
        </div>

        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>📞 الهاتف</h3>
          <p>+90 555 123 4567</p>
        </div>

        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>📍 العنوان</h3>
          <p>اسطنبول، تركيا</p>
        </div>

        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3>🌐 الموقع الإلكتروني</h3>
          <p><a href="https://example.com" target="_blank" rel="noreferrer">www.example.com</a></p>
        </div>
      </div>

      {/* زر الرجوع لأعلى الصفحة */}
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
