export default function ServicesPage() {
  return (
    <section className="section">
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <a href="/brochure.pdf" download className="btn-primary">Download PDF</a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div className="card card-hover-glow p-6 glow-on-scroll" data-glow key={s.title}>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  { title: 'HR Solutions', desc: 'HR consultants provide a broad menu of Human Resource services.' },
  { title: 'HRMS Software Services', desc: 'Implementation, customization, and support for HRMS platforms.' },
  { title: 'ESS & MSS', desc: 'Self-service portals for employees and managers.' },
  { title: 'Payroll Outsourcing', desc: 'End-to-end payroll processing and governance.' },
  { title: 'Attendance & Leave Management', desc: 'Policy configuration, time tracking, and approvals.' },
  { title: 'HR Management', desc: 'Comprehensive HR operations support and analytics.' },
  { title: 'Statutory Compliance & Retirals Management', desc: 'Pan-India compliance handling and advisory.' },
];
