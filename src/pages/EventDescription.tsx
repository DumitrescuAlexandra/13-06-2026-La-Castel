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
          About Our Special Day
        </h2>
        <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
          <p>
            We are thrilled to invite you to celebrate our wedding day with us.
            Join us as we begin our journey together as husband and wife.
          </p>
          <p>
            The ceremony will take place in the heart of nature, surrounded by
            the beauty of the forest, where our love story began.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3
                className="text-2xl font-serif mb-4"
                style={{ color: "#D4AF37" }}
              >
                Ceremony
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Time:</strong> 3:00 PM
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Location:</strong> Woodland Chapel
              </p>
              <p className="text-gray-600">
                <strong>Dress Code:</strong> Formal Attire
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3
                className="text-2xl font-serif mb-4"
                style={{ color: "#D4AF37" }}
              >
                Reception
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Time:</strong> 5:30 PM
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Location:</strong> The Grand Ballroom
              </p>
              <p className="text-gray-600">
                <strong>Dinner & Dancing</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
