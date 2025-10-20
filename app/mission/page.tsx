import SimpleCarousel from "../../components/SimpleCarousel";

export default function MissionPage() {
  return (
    <section className="section">
      <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
      <p className="text-slate-700 max-w-3xl">
        With main drive to serve all range of companies in India & abroad, the mission is to
        enhance client’s HR processes through digitalisation and develop culture of compliant
        practices in Human Resource domain.
      </p>

      {/* Horizontal image carousel */}
      <div className="mt-8">
        <SimpleCarousel
          images={[
            { src: "/images/mission/slide1.jpg", alt: "Team collaboration" },
            { src: "/images/mission/slide2.jpg", alt: "Digital HR transformation" },
            { src: "/images/mission/slide3.jpg", alt: "Compliance and governance" },
            { src: "/images/mission/slide4.jpg", alt: "Analytics and insights" },
          ]}
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-10">
        {['Commitment', 'Professionalism', 'Customer Satisfaction'].map((v) => (
          <div key={v} className="card card-hover-glow p-6 text-center glow-on-scroll" data-glow>
            <div className="h-2 w-12 mx-auto bg-gradient-to-r from-clouthr-indigo to-clouthr-orange rounded" />
            <h3 className="mt-3 font-semibold">{v}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
