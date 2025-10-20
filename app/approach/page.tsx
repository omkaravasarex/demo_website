export default function ApproachPage() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-6">Our Approach for New Age HR Process</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="card p-6 glow-on-scroll" data-glow>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { title: 'Simplify', desc: 'Simplifying your HR & Payroll process' },
  { title: 'Configure', desc: 'Configuration through functional technical experts' },
  { title: 'Integrate', desc: 'Seamless integration with your existing systems' },
  { title: 'Streamline', desc: 'Streamlining the overall process' },
];
