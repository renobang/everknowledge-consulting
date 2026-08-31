'use client';

import { useState } from 'react';
import { ArrowRight, BarChart3, Database, Globe2, Languages, Layers3, Mail, Network, ShieldCheck } from 'lucide-react';

const services = [
  { icon: Network, number: '01', title: 'Information Systems Integration', text: 'Connect applications, databases, and workflows into a unified information environment with reliable data flow.' },
  { icon: Database, number: '02', title: 'Integrated Database Management', text: 'Strengthen data architecture, quality, governance, migration, and performance across the enterprise.' },
  { icon: Layers3, number: '03', title: 'ERP & SAP Consulting', text: 'Align ERP and SAP environments with real operational processes, reporting needs, and management priorities.' },
  { icon: BarChart3, number: '04', title: 'Data Analytics & BI', text: 'Turn operational data into decision-ready dashboards, KPIs, and actionable business intelligence.' },
];

const outcomes = ['Connect fragmented systems', 'Resolve reporting discrepancies', 'Improve ERP/SAP processes', 'Build trusted management visibility'];

export default function Home() {
  const [ko, setKo] = useState(false);
  const t = (en: string, kr: string) => ko ? kr : en;
  const emailLink = 'mailto:chris.ever.knowledge@gmail.com?subject=Consulting%20Inquiry%20-%20EverKnowledge%20Consulting&body=Hello%20Dr.%20Bang%2C%0D%0A%0D%0AI%20would%20like%20to%20discuss%20the%20following%20consulting%20needs%3A%0D%0A%0D%0ACompany%3A%0D%0AArea%20of%20Interest%3A%0D%0AProject%20Description%3A%0D%0APreferred%20Contact%20Time%3A%0D%0A%0D%0AThank%20you.';

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EverKnowledge Consulting home"><span className="brand-mark">EK</span><span>EverKnowledge<small>CONSULTING</small></span></a>
        <nav aria-label="Main navigation"><a href="#services">{t('Services','서비스')}</a><a href="#expertise">{t('Expertise','전문분야')}</a><a href="#leadership">{t('Leadership','대표자')}</a></nav>
        <div className="header-actions"><button className="lang-button" onClick={() => setKo(!ko)} aria-label={t('Switch to Korean','영어로 전환')}><Languages size={15}/>{ko ? 'EN' : '한국어'}</button><a className="button button-small" href={emailLink}><Mail size={15}/> {t('Email Dr. Bang','이메일 문의')}</a></div>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><Globe2 size={15}/> {t('United States · South Korea','미국 · 대한민국')}</p><h1>{t('Connecting systems,','시스템을 연결하고,')}<br/><em>{t('clarifying data,','데이터를 명확히 하여,')}</em><br/>{t('improving decisions.','더 나은 의사결정을 만듭니다.')}</h1><p className="hero-lead">{t('Enterprise technology consulting grounded in international private-sector experience and 12 years of university teaching and research.','한국과 미국의 다양한 민간기업 경험, 그리고 12년간의 대학 교육·연구 경험을 기반으로 한 기업 기술 컨설팅.')}</p><div className="actions"><a className="button" href={emailLink}>{t('Schedule a consultation','상담 문의하기')} <ArrowRight size={18}/></a><a className="text-link" href="#services">{t('Explore our services','서비스 살펴보기')} ↓</a></div></div>
        <div className="hero-panel" aria-label="Core consulting areas"><div className="signal"><span/><span/><span/><span/><span/></div><p>GLOBAL EXPERIENCE<br/><strong>ACADEMIC INSIGHT</strong><br/>PRACTICAL SOLUTIONS</p><div className="panel-grid"><span>IS<br/><b>Integration</b></span><span>ERP<br/><b>SAP</b></span><span>Data<br/><b>Analytics</b></span></div></div>
      </section>
      <div className="expertise-strip"><span>IS INTEGRATION</span><i>✦</i><span>DATABASE MANAGEMENT</span><i>✦</i><span>ERP / SAP</span><i>✦</i><span>DATA ANALYTICS</span></div>
      <section className="section services" id="services">
        <div className="section-heading"><p className="kicker">{t('WHAT WE DO','주요 서비스')}</p><h2>{t('Enterprise expertise.','기업 시스템 전문성.')}<br/><em>{t('Business-focused execution.','비즈니스 중심의 실행력.')}</em></h2><p>{t('We help organizations build connected, reliable information environments that support operations and leadership decisions.','기업의 운영과 경영진 의사결정을 지원하는 연결되고 신뢰할 수 있는 정보 환경을 구축합니다.')}</p></div>
        <div className="service-grid">{services.map(({icon: Icon, number, title, text}) => { const kr = number === '01' ? ['정보시스템 통합','애플리케이션, 데이터베이스, 업무 프로세스를 연결해 신뢰할 수 있는 통합 정보 환경을 구축합니다.'] : number === '02' ? ['통합 데이터베이스 관리','기업 데이터의 구조, 품질, 거버넌스, 마이그레이션과 성능을 체계적으로 개선합니다.'] : number === '03' ? ['ERP & SAP 컨설팅','ERP와 SAP를 실제 업무 프로세스, 보고 요구사항, 경영 목표에 맞게 최적화합니다.'] : ['데이터 분석 & BI','운영 데이터를 대시보드, KPI와 실행 가능한 비즈니스 인사이트로 전환합니다.']; return <article key={number}><div><span>{number}</span><Icon size={26}/></div><h3>{t(title,kr[0])}</h3><p>{t(text,kr[1])}</p></article>})}</div>
      </section>
      <section className="section cross-border" id="expertise">
        <div><p className="kicker light">{t('CROSS-BORDER PERSPECTIVE','한·미 크로스보더 전문성')}</p><h2>{t('Systems and data','시스템과 데이터를')}<br/>{t('working as one—','하나로 연결합니다—')}<br/><em>{t('across borders.','국경을 넘어.')}</em></h2></div>
        <div className="cross-copy"><p>{t('EverKnowledge Consulting helps Korean companies operating in the United States—and U.S. organizations working with Korean partners—bridge differences in systems, data standards, business processes, and communication.','EverKnowledge Consulting은 미국에서 사업하는 한국 기업과 한국 파트너와 협력하는 미국 기업이 시스템, 데이터 표준, 업무 프로세스와 커뮤니케이션의 차이를 해소하도록 돕습니다.')}</p><ul>{outcomes.map((item, i) => { const kr=['분산된 시스템 연결','보고 데이터 불일치 해결','ERP/SAP 프로세스 개선','신뢰할 수 있는 경영 가시성 확보']; return <li key={item}><b>0{i + 1}</b><span>{t(item,kr[i])}</span><ShieldCheck size={19}/></li>})}</ul></div>
      </section>
      <section className="section leadership" id="leadership">
        <div className="portrait-mark"><span>CB</span><small>FOUNDER & PRINCIPAL CONSULTANT</small></div>
        <div className="bio"><p className="kicker">{t('LEADERSHIP','대표자 소개')}</p><h2>Dr. Chris Bang</h2><h3>{t('Technology depth. Academic rigor. Practical perspective.','기술적 깊이. 학문적 엄밀함. 실무적 관점.')}</h3><p>{t('Dr. Chris Bang is an information systems and data expert specializing in integrated database management, ERP/SAP, systems integration, and data analytics.','Dr. Chris Bang은 통합 데이터베이스 관리, ERP/SAP, 시스템 통합과 데이터 분석을 전문으로 하는 정보시스템 및 데이터 전문가입니다.')}</p><p>{t('His background combines diverse private-sector experience across the United States and South Korea—including engagements with organizations in New Jersey and Alabama—with 12 years of university teaching and research.','한국과 미국의 다양한 민간기업 경험—뉴저지와 앨라배마 소재 기업과의 프로젝트를 포함하여—과 12년간의 대학 교육 및 연구 경험을 겸비하고 있습니다.')}</p><div className="credentials"><span><b>12</b> {t('Years in','년간의')}<br/>{t('Higher Education','대학교육·연구')}</span><span><b>2</b> {t('Countries','개 국가')}<br/>{t('Industry Experience','산업 경험')}</span><span><b>4</b> {t('Core Areas','개 핵심')}<br/>{t('of Expertise','전문분야')}</span></div></div>
      </section>
      <section className="contact"><p className="kicker light">{t('START A CONVERSATION','상담을 시작하세요')}</p><h2>{t('Let’s make your systems','시스템과 데이터가')}<br/>{t('and data work together.','함께 작동하게 하세요.')}</h2><p>{t('Discuss your information systems, database, ERP/SAP, or analytics priorities directly with Dr. Chris Bang.','정보시스템, 데이터베이스, ERP/SAP 또는 데이터 분석 과제를 Dr. Chris Bang과 직접 상담하세요.')}</p><a className="button button-light" href={emailLink}><Mail size={18}/> {t('Email Dr. Chris Bang','Dr. Chris Bang에게 이메일 보내기')} <ArrowRight size={18}/></a><small>chris.ever.knowledge@gmail.com · {t('Serving clients across the United States and South Korea','미국과 한국 전역의 고객 지원')}</small></section>
      <footer><div className="brand"><span className="brand-mark">EK</span><span>EverKnowledge<small>CONSULTING</small></span></div><p>© {new Date().getFullYear()} EverKnowledge Consulting. All rights reserved.</p></footer>
    </main>
  );
}
