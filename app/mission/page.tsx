// Removed carousel from inside Mission page per requirement

export default function MissionPage() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
      <p className="text-slate-700 max-w-3xl">
        With main drive to serve all range of companies in India & abroad, the mission is to
        enhance client’s HR processes through digitalisation and develop culture of compliant
        practices in Human Resource domain.
      </p>

      {/* Horizontal image section */}
      <div className="mt-8">
        <div
          className="h-48 md:h-60 w-full rounded-xl bg-slate-200 border border-slate-200 overflow-hidden"
          role="img"
          aria-label="Mission page horizontal image placeholder"
        />
        <p className="text-xs text-slate-500 mt-2">Replace with a single horizontal image under <code>/public/images/mission/banner.jpg</code>.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-10">
        {['Commitment', 'Professionalism', 'Customer Satisfaction'].map((v) => (
          <div key={v} className="card p-6 text-center">
            <div className="h-2 w-12 mx-auto bg-gradient-to-r from-clouthr-indigo to-clouthr-orange rounded" />
            <h3 className="mt-3 font-semibold">{v}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
