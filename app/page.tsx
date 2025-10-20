import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className="section">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Transform HR with Digital Excellence
            </h1>
            <p className="mt-5 text-slate-600 text-lg">
              CloutHR Solutions LLP provides complete HR Solutions, HRMS software, Payroll
              Outsourcing, and Statutory Compliance services. We help enterprises in India & abroad
              build compliant, efficient, and future-ready HR operations.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/services" className="btn-primary">Explore Services</Link>
              <Link href="/contact" className="underline hover:text-clouthr-purple">Talk to us</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-brand-gradient blur-2xl opacity-30" />
            <div className="card p-8 relative">
              <h3 className="font-semibold text-xl mb-4">Why CloutHR?</h3>
              <ul className="space-y-3 text-slate-700">
                <li>Commitment • Professionalism • Customer Satisfaction</li>
                <li>Accuracy, Timely Delivery and Consistency</li>
                <li>Pan-India Statutory Compliance bandwidth</li>
                <li>Alliances with labour law experts for latest updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div className="card p-6" key={s.title}>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card p-8 flex items-center justify-between flex-col md:flex-row gap-6">
          <div>
            <h3 className="font-semibold text-xl">Ready to modernize your HR?</h3>
            <p className="text-slate-600">Let our experts streamline and digitize your HR processes.</p>
          </div>
          <Link className="btn-primary" href="/contact">Get in touch</Link>
        </div>
      </section>
    </div>
  );
}

const services = [
  { title: 'HR Solutions', desc: 'Broad menu of Human Resource services tailored to your organization.' },
  { title: 'HRMS Software Services', desc: 'Implementation, configuration, and support for modern HRMS platforms.' },
  { title: 'ESS & MSS', desc: 'Employee and Manager Self-Service portals to empower your workforce.' },
  { title: 'Payroll Outsourcing', desc: 'Accurate, timely payroll processing with governance and audit trails.' },
  { title: 'Attendance & Leave Management', desc: 'Seamless policy enforcement, leave workflows, and biometric integrations.' },
  { title: 'Statutory Compliance & Retirals', desc: 'Pan-India compliance management, updates, and legal opinions.' },
];
