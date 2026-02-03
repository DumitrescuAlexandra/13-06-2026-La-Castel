import { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    participants: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="rsvp"
      className="relative min-h-screen flex items-center justify-center paper-background-rotated -mb-2 px-4 py-16"
    >
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <h2
          className="text-5xl md:text-6xl font-serif mb-6 text-center"
          style={{ color: "#D4AF37" }}
        >
          Confirmare Participare
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Va rugam sa ne comunicati daca veti participa la eveniment{" "}
        </p>

        {submitted ? (
          <div className="bg-white p-12 rounded-2xl shadow-2xl text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3
              className="text-2xl font-serif mb-4"
              style={{ color: "#D4AF37" }}
            >
              Multumim pentru raspuns!
            </h3>
            <p className="text-gray-600 text-lg">
              Am primit confirmarea dvs. si abia asteptam sa sarbatorim
              impreuna!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <div className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 text-base">
                  Nume si prenume*
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 text-base border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  placeholder="Introdu numele complet"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="participants"
                  className="text-gray-700 text-base"
                >
                  Numarul de participanti*
                </Label>
                <Input
                  id="participants"
                  name="participants"
                  type="number"
                  min="1"
                  required
                  value={formData.participants}
                  onChange={handleChange}
                  className="h-12 text-base border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  placeholder="Cate persoane veti fi?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 text-base">
                  Numar de telefon*
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 text-base border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  placeholder="Numar de telefon pentru contact"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 text-base">
                  Adresa e-mail*
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-base border-gray-300 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  placeholder="Adresa e-mail pentru contact"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-base font-medium transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: "#D4AF37", color: "white" }}
              >
                Trimite confirmarea
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
