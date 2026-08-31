import { ArrowRight, BarChart3, Database, Globe2, Layers3, Mail, Network, ShieldCheck } from 'lucide-react';

const services = [
  { icon: Network, number: '01', title: 'Information Systems Integration', text: 'Connect applications, databases, and workflows into a unified information environment with reliable data flow.' },
  { icon: Database, number: '02', title: 'Integrated Database Management', text: 'Strengthen data architecture, quality, governance, migration, and performance across the enterprise.' },
  { icon: Layers3, number: '03', title: 'ERP & SAP Consulting', text: 'Align ERP and SAP environments with real operational processes, reporting needs, and management priorities.' },
  { icon: BarChart3, number: '04', title: 'Data Analytics & BI', text: 'Turn operational data into decision-ready dashboards, KPIs, and actionable business intelligence.' },
];

const outcomes = ['Connect fragmented systems', 'Resolve reporting discrepancies', 'Improve ERP/SAP processes', 'Build trusted management visibility'];

export default function Home() {
  const emailLink = 'mailto:chris.ever.knowledge@gmail.com?subject=Consulting%20Inquiry%20-%20EverKnowledge%20Consulting&body=Hello%20Dr.%20Bang%2C%0D%0A%0D%0AI%20would%20like%20to%20discuss%20the%20following%20consulting%20needs%3A%0D%0A%0D%0ACompany%3A%0D%0AArea%20of%20Interest%3A%0D%0AProject%20Description%3A%0D%0APreferred%20Contact%20Time%3A%0D%0A%0D%0AThank%20you.';

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EverKnowledge Consulting home"><span className="brand-mark">EK</span><span>EverKnowledge<small>CONSULTING</small></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#expertise">Expertise</a><a href="#leadership">Leadership</a></nav>
        <a className="button button-small" href={emailLink}><Mail size={15}/> Email Dr. Bang</a>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><Globe2 size={15}/> United States · South Korea</p><h1>Connecting systems,<br/><em>clarifying data,</em><br/>improving decisions.</h1><p className="hero-lead">Enterprise technology consulting grounded in international private-sector experience and 12 years of university teaching and research.</p><div className="actions"><a className="button" href={emailLink}>Schedule a consultation <ArrowRight size={18}/></a><a className="text-link" href="#services">Explore our services ↓</a></div></div>
        <div className="hero-panel" aria-label="Core consulting areas"><div className="signal"><span/><span/><span/><span/><span/></div><p>GLOBAL EXPERIENCE<br/><strong>ACADEMIC INSIGHT</strong><br/>PRACTICAL SOLUTIONS</p><div className="panel-grid"><span>IS<br/><b>Integration</b></span><span>ERP<br/><b>SAP</b></span><span>Data<br/><b>Analytics</b></span></div></div>
      </section>
      <div className="expertise-strip"><span>IS INTEGRATION</span><i>✦</i><span>DATABASE MANAGEMENT</span><i>✦</i><span>ERP / SAP</span><i>✦</i><span>DATA ANALYTICS</span></div>
      <section className="section services" id="services">
        <div className="section-heading"><p className="kicker">WHAT WE DO</p><h2>Enterprise expertise.<br/><em>Business-focused execution.</em></h2><p>We help organizations build connected, reliable information environments that support operations and leadership decisions.</p></div>
        <div className="service-grid">{services.map(({icon: Icon, number, title, text}) => <article key={number}><div><span>{number}</span><Icon size={26}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="section cross-border" id="expertise">
        <div><p className="kicker light">CROSS-BORDER PERSPECTIVE</p><h2>Systems and data<br/>working as one—<br/><em>across borders.</em></h2></div>
        <div className="cross-copy"><p>EverKnowledge Consulting helps Korean companies operating in the United States—and U.S. organizations working with Korean partners—bridge differences in systems, data standards, business processes, and communication.</p><ul>{outcomes.map((item, i) => <li key={item}><b>0{i + 1}</b><span>{item}</span><ShieldCheck size={19}/></li>)}</ul></div>
      </section>
      <section className="section leadership" id="leadership">
        <div className="portrait-mark"><span>CB</span><small>FOUNDER & PRINCIPAL CONSULTANT</small></div>
        <div className="bio"><p className="kicker">LEADERSHIP</p><h2>Dr. Chris Bang</h2><h3>Technology depth. Academic rigor. Practical perspective.</h3><p>Dr. Chris Bang is an information systems and data expert specializing in integrated database management, ERP/SAP, systems integration, and data analytics.</p><p>His background combines diverse private-sector experience across the United States and South Korea—including engagements with organizations in New Jersey and Alabama—with 12 years of university teaching and research.</p><div className="credentials"><span><b>12</b> Years in<br/>Higher Education</span><span><b>2</b> Countries<br/>Industry Experience</span><span><b>4</b> Core Areas<br/>of Expertise</span></div></div>
      </section>
      <section className="contact"><p className="kicker light">START A CONVERSATION</p><h2>Let’s make your systems<br/>and data work together.</h2><p>Discuss your information systems, database, ERP/SAP, or analytics priorities directly with Dr. Chris Bang.</p><a className="button button-light" href={emailLink}><Mail size={18}/> Email Dr. Chris Bang <ArrowRight size={18}/></a><small>chris.ever.knowledge@gmail.com · Serving clients across the United States and South Korea</small></section>
      <footer><div className="brand"><span className="brand-mark">EK</span><span>EverKnowledge<small>CONSULTING</small></span></div><p>© {new Date().getFullYear()} EverKnowledge Consulting. All rights reserved.</p></footer>
    </main>
  );
}
