export default function ServicesPage() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div className="card p-6" key={s.title}>
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
