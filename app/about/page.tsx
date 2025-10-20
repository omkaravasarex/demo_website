export default function AboutPage() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-4">About CloutHR Solutions LLP</h1>
      <p className="text-slate-700 max-w-3xl">
        CloutHR Solutions LLP is a fully dedicated organization for providing complete HR Solutions,
        HRMS Software and Payroll Management. Our primary objective is to provide outsourcing
        services for HR Operations, Payroll Processing and Statutory Compliances to support
        Management objectives and to enhance efficiency of HR Process through digitalisation.
        We provide services across India and abroad.
      </p>
      <p className="text-slate-700 max-w-3xl mt-4">
        Team of experienced and professional HR, Payroll & Labour Law experts drives CloutHR. Our
        focus is to ensure constant Innovations, maintain Accuracy, Timely Delivery and Consistency
        in our services. We have a team of qualified and innovative individuals having necessary
        expertise and long experience to cater today's challenging needs of HR functions. We have
        extensive bandwidth to handle Statutory Compliance across India. Our strategic Alliances
        with various labour law experts will help you to keep updated with latest updates and
        amendments in the labour laws. We can also provide legal opinions on your compliance issues.
      </p>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Founders</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card p-6 text-center">
            <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-clouthr-indigo via-clouthr-purple to-clouthr-orange" aria-label="Founder photo placeholder" />
            <h3 className="mt-4 font-semibold">Founder Name 1</h3>
            <p className="mt-2 text-sm text-slate-600">
              Short description about Founder 1. Replace the above placeholder with a real photo
              located under <code>/public/images/founders/founder1.jpg</code>.
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-clouthr-indigo via-clouthr-purple to-clouthr-orange" aria-label="Founder photo placeholder" />
            <h3 className="mt-4 font-semibold">Founder Name 2</h3>
            <p className="mt-2 text-sm text-slate-600">
              Short description about Founder 2. Replace the above placeholder with a real photo
              located under <code>/public/images/founders/founder2.jpg</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
