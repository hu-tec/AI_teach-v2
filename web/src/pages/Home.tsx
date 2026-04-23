import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="hero-section center">
        {/* Decorative elements */}
        <div className="hero-grid-bg"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>

        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <span className="hero-tag">TIMES MEDIA AI INSTRUCTOR ACADEMY</span>
          <div className="hero-accent-line"></div>
          <h1 className="hero-title">
            AI시대,<br />
            <span className="highlight">사람을 가르치는 강사</span>를<br />
            키웁니다
          </h1>
          <p className="hero-subtitle" style={{ marginTop: '24px' }}>
            타임스미디어의 23년 교육 운영 경험과 3만 명 이상의 졸업생,<br/>
            국내외 교육 네트워크를 바탕으로<br/>
            AI툴활용과 AI윤리를 중심으로 한 실전형 AI강사 양성과정을 운영합니다.
          </p>
          <div className="hero-buttons flex center justify-center gap-4" style={{ marginTop: '40px' }}>
            <Link to="/courses" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem', borderRadius: '8px' }}>교육과정 보기</Link>
            <Link to="/registration" className="btn-white" style={{ padding: '16px 36px', fontSize: '1.05rem', borderRadius: '8px' }}>수강 신청하기</Link>
            <Link to="/contact" className="btn-outline" style={{ padding: '14px 36px', fontSize: '1.05rem', borderRadius: '8px' }}>1:1 문의하기</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-num">23년+</div>
              <div className="hero-stat-label">교육 운영</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-num">30,000+</div>
              <div className="hero-stat-label">TESOL 졸업생</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-num">12개국+</div>
              <div className="hero-stat-label">글로벌 네트워크</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-num">6개 분야</div>
              <div className="hero-stat-label">전문과정</div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section container py-16">
         <div className="center mb-8">
            <h2 className="section-title center-inline">타임스미디어 AI강사 양성과정</h2>
            <p className="text-muted mt-4 text-lg">
              타임스미디어는 오랜 기간 TESOL과 언어교육을 운영하며 실제 교육과정 설계, 수업 운영, 강사 양성 경험을 축적해왔습니다.<br/>
              이제 그 기반 위에 AI툴활용과 AI윤리를 결합하여 교육현장에서 바로 적용 가능한 AI강사 양성과정을 운영합니다.
            </p>
         </div>
      </section>

       <section className="bg-secondary py-16">
         <div className="container">
           <div className="center mb-12">
             <h2 className="section-title center-inline">왜 타임스미디어인가</h2>
             <p className="text-muted mt-4">오랜 교육 운영 경험이 AI강사양성의 신뢰가 됩니다.</p>
           </div>
           <div className="grid col-4 gap-4">
              <div className="card center outline-card border-none shadow-sm">
                 <h3 className="text-primary font-bold text-3xl">23년+</h3>
                 <p className="mt-4 font-bold">교육 운영 경험</p>
              </div>
              <div className="card center outline-card border-none shadow-sm">
                 <h3 className="text-primary font-bold text-3xl">3만 명+</h3>
                 <p className="mt-4 font-bold">TESOL 졸업생</p>
              </div>
              <div className="card center outline-card border-none shadow-sm">
                 <h3 className="text-primary font-bold text-3xl">Global</h3>
                 <p className="mt-4 font-bold">국내외 교육 네트워크</p>
              </div>
              <div className="card center outline-card border-none shadow-sm">
                 <h3 className="text-primary font-bold text-3xl">실전</h3>
                 <p className="mt-4 font-bold">AI툴 + AI윤리 중심 커리큘럼</p>
              </div>
           </div>
         </div>
       </section>

       <section className="container py-16 center">
          <h2 className="section-title center-inline mb-8">모든 AI강사의 출발점은 두 가지입니다</h2>
          <div className="grid col-2 gap-8">
             <div className="card">
                 <h3 className="font-bold text-xl mb-2">AI툴활용 강사과정</h3>
                 <p className="text-muted">AI 결과물을 생성하고 수정하여 실제 수업자료와 교육콘텐츠로 연결하는 공통 기초과정</p>
             </div>
             <div className="card">
                 <h3 className="font-bold text-xl mb-2">AI윤리 강사과정</h3>
                 <p className="text-muted">저작권, 개인정보, 편향성, 교육현장 안전기준까지 책임 있는 AI 활용을 배우는 필수 공통과정</p>
             </div>
             <div className="card">
                 <h3 className="font-bold text-xl mb-2">AI 교수법 강사과정</h3>
                 <p className="text-muted">AI를 활용한 효과적인 수업 설계와 학습자 맞춤형 상호작용 기법을 통해 수업의 질을 높이는 실전 역량 과정</p>
             </div>
             <div className="card">
                 <h3 className="font-bold text-xl mb-2">AI 콘텐츠 강사과정</h3>
                 <p className="text-muted">다양한 AI 도구를 활용해 창의적인 멀티미디어 교육 콘텐츠를 기획하고 고품질 자료로 직접 제작하는 전문 심화 과정</p>
             </div>

          </div>
       </section>

       <section className="bg-secondary py-16">
         <div className="container center relative" style={{ zIndex: 1 }}>
           <h2 className="section-title center-inline mb-4 text-3xl">AI시대, 새로운 강의 경쟁력을 시작하세요</h2>
           <p className="text-muted mb-8">타임스미디어와 함께 전문적인 교육 가이드를 만나보세요.</p>
           <div className="flex center justify-center gap-4 mt-8">
            <Link to="/registration" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>수강 신청하기</Link>
            <Link to="/contact" className="btn-outline" style={{ padding: '13px 40px', fontSize: '1.1rem' }}>1:1 문의하기</Link>
           </div>
         </div>
       </section>
    </div>
  );
}
