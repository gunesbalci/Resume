import React, { useState } from 'react';
import './App.css'; // CSS dosyamızı import ettik

// SVG İkon Seti
const Icons = {
  Phone: () => <svg style={{width: '20px', height: '20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
  Mail: () => <svg style={{width: '20px', height: '20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  MapPin: () => <svg style={{width: '20px', height: '20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
  Github: () => <svg style={{width: '18px', height: '18px'}} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>,
  Linkedin: () => <svg style={{width: '18px', height: '18px'}} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
  ArrowLeft: () => <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>,
  ArrowRight: () => <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('giris');
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "YERLİ DİJİTAL OYUN MAĞAZASI VE OYUN BAŞLATICI PLATFORMU",
      date: "Nisan 2025 - Nisan 2026",
      desc: "TÜBİTAK 2209-A tarafından desteklenen bu proje, kullanıcıların oyun satın alabildiği, indirebildiği ve başlatabildiği yerli ve çok platformlu bir dijital oyun mağazası uygulamasıdır.",
      badge: "TÜBİTAK 2209-A"
    },
    {
      title: "BULGARİSTAN’DA HARİTA BAZLI YER İSİMLERİ UYGULAMASI",
      date: "Mayıs 2024 - Günümüz",
      desc: "Türk köylerinin ve Bulgaristan’daki köylerin tarihi isimlerini interaktif bir harita üzerinde gösteren çok dilli (Türkçe - Bulgarca) web uygulamasıdır.",
      badge: "Web GIS"
    },
    {
      title: "SOFTVOPER: PASİF OYUN",
      date: "Ekim 2024 - Aralık 2024",
      desc: "Tamamen Java ile yazılmış pasif bir tıklama (idle clicker) oyunudur. Arka planda Spring Boot ve MongoDB teknolojileri entegre edilmiştir.",
      link: "https://github.com/KuroiZZ/Idle-Game",
      badge: "Spring & MongoDB"
    },
    {
      title: "ARABA YARIŞI OYUNU",
      date: "Mayıs 2023 - Haziran 2023",
      desc: "Allegro 5 oyun çerçevesi kullanılarak C dilinde sıfırdan geliştirilmiş, nostaljik ve optimize bir 2D araba yarışı oyunudur.",
      link: "https://github.com/gunesbalci/OS-MAN",
      badge: "C & Allegro 5"
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="top-bar"></div>

      <div className="main-grid">
        
        {/* SOL PANEL - KİŞİSEL BİLGİLER */}
        <div className="sidebar">
          <div style={{ marginTop: '30px' }}>
            <h1 className="profile-title">Güneş Balcı</h1>
            <p className="profile-subtitle">Yazılım Mühendisi</p>
            <div className="text-muted">
              Kocaeli Üniversitesi • Mezun (GNO: 3.52)
            </div>
          </div>

          <hr className="divider" />

          <p className="desc-text">
            Oyun geliştirme, backend teknolojileri ve web ekosistemine tutkuluyum. 
          </p>

          <div className="contact-list">
            <a href="mailto:GunesBalci@outlook.com" className="contact-item">
              <Icons.Mail /> GunesBalci@outlook.com
            </a>
            <a href="tel:+905386241848" className="contact-item">
              <Icons.Phone /> 0538 624 18 48
            </a>
            <div className="contact-item">
              <Icons.MapPin /> Muğla / Türkiye
            </div>
          </div>

          <div className="btn-group">
            <a href="https://github.com/gunesbalci" target="_blank" rel="noreferrer" className="btn-github">
              <Icons.Github /> GitHub
            </a>
            <a href="http://www.linkedin.com/in/güneş-balcı/" target="_blank" rel="noreferrer" className="btn-linkedin">
              <Icons.Linkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* SAĞ PANEL - DİNAMİK İÇERİK SEKMELERİ */}
        <div>
          <div className="nav-bar">
            {[
              { id: 'giris', label: 'Vizyon' },
              { id: 'beceriler', label: 'Yetenekler' },
              { id: 'projeler', label: 'Projeler' },
              { id: 'deneyimler', label: 'Eğitim & Deneyim' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="content-card">
            
            {/* TAB 1: GİRİŞ */}
            {activeTab === 'giris' && (
              <div>
                <h2 className="section-title"><span className="dot-indicator"></span> Geliştirici Vizyonu</h2>
                <p className="desc-text" style={{ fontSize: '15px' }}>
                  Problem çözme, verimli algoritmalar tasarlama ve karmaşık mimarileri optimize etme konuları odak noktamı oluşturuyor. 
                  Hem masaüstü ve mobil oyun motorlarında (<span style={{ color: '#818cf8' }}>Unity</span>) hem de modern kurumsal backend sistemlerinde (<span style={{ color: '#818cf8' }}>Spring Boot, .NET</span>) aktif olarak çalışıyorum.
                </p>
              </div>
            )}

            {/* TAB 2: YETENEKLER */}
            {activeTab === 'beceriler' && (
              <div>
                <h2 className="section-title"><span className="dot-indicator"></span> Teknoloji Kümesi</h2>
                <div className="skill-grid">
                  {[
                    { cat: "Diller", items: ["C", "C#", "Python", "Java", "JavaScript", "HTML/CSS"] },
                    { cat: "Framework & Libs", items: [".NET", "Spring Boot", "Blazor", "Swing", "Allegro 5", "React", "ABP"] },
                    { cat: "Veri Tabanı & Versiyon", items: ["MySQL", "MsSQL", "PostgreSQL", "MongoDB", "Git / GitHub"] },
                    { cat: "Ortamlar & Proje", items: ["Unity", "Jira", "Trello", "VS Code", "VS", "IntelliJ"] }
                  ].map((skill, idx) => (
                    <div key={idx} className="skill-card">
                      <h3 className="skill-cat">{skill.cat}</h3>
                      <div className="tag-container">
                        {skill.items.map((item, i) => (
                          <span key={i} className="tag">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: PROJELER */}
            {activeTab === 'projeler' && (
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 className="section-title"><span className="dot-indicator"></span> Proje Vitrini</h2>
                    <span style={{ fontSize: '12px', color: '#818cf8', fontFamily: 'monospace' }}>{currentProject + 1} / {projects.length}</span>
                  </div>

                  <div className="project-card">
                    <div className="project-header">
                      <h4 className="project-title">{projects[currentProject].title}</h4>
                      <span className="project-badge">{projects[currentProject].badge}</span>
                    </div>
                    <span className="project-date">{projects[currentProject].date}</span>
                    <p className="desc-text" style={{ fontSize: '13px', margin: 0 }}>{projects[currentProject].desc}</p>
                    
                    {projects[currentProject].link && (
                      <a href={projects[currentProject].link} target="_blank" rel="noreferrer" className="project-link">
                        <Icons.Github /> Proje Linki &rarr;
                      </a>
                    )}
                  </div>
                </div>

                {/* SLIDER KONTROLLERİ */}
                <div className="slider-controls">
                  <button onClick={() => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)} className="slider-btn">
                    <Icons.ArrowLeft />
                  </button>
                  <button onClick={() => setCurrentProject((prev) => (prev + 1) % projects.length)} className="slider-btn">
                    <Icons.ArrowRight />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: DENEYİM & EĞİTİM */}
            {activeTab === 'deneyimler' && (
              <div>
                <h2 className="section-title"><span className="dot-indicator"></span> Geçmiş & Deneyim</h2>
                <div className="experience-grid">
                  <div>
                    <h4 className="timeline-section-title">EĞİTİM</h4>
                    <div className="timeline-list">
                      <div>
                        <div className="timeline-item-title">Kocaeli Üniversitesi</div>
                        <div className="timeline-item-subtitle">Yazılım Mühendisliği</div>
                        <div className="timeline-item-date">2022 - 2026</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="timeline-section-title">DENEYİM</h4>
                    <div className="timeline-list">
                      <div>
                        <div className="timeline-item-title">Muğla Büyükşehir Belediyesi</div>
                        <div className="timeline-item-subtitle">Stajyer</div>
                        <div className="timeline-item-date">2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}