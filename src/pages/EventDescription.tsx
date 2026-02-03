export function AboutEvent() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center paper-background -mb-2 px-4 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-5xl md:text-6xl font-serif mb-8"
          style={{ color: "#D4AF37" }}
        >
          Detaliile evenimentului
        </h2>
        <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
          <p>
            Suntem incantati sa va invitam sa sarbatoriti alaturi de noi
            inceputul unui nou capitol in viata noastra - ca sot si sotie.
          </p>
          <p>
            Petrecerea se va desfasura la "La Castel", o locatie eleganta din
            Timisu de Jos, aproape de Brasov, inconjurata de natura, unde vom
            sarbatori impreuna aceasta zi memorabila.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            {/* Petrecerea Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3
                className="text-2xl font-serif mb-4"
                style={{ color: "#D4AF37" }}
              >
                Petrecerea
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Primirea invitatilor:</strong> 19:00
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Locatia:</strong> "La Castel"
              </p>
              <p className="text-gray-600">
                <strong>Activitate:</strong> Distractie si voie buna
              </p>
            </div>

            {/* Map Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3
                className="text-2xl font-serif mb-4"
                style={{ color: "#D4AF37" }}
              >
                Locatia
              </h3>

              {/* Google Maps Embed */}
              <div className="w-full h-64 mb-4">
                <iframe
                  title="La Castel Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=45.6014274,25.6472041&hl=ro&z=17&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
