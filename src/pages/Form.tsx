import { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    participants: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // For phone, allow only digits
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // remove non-digits
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // First and last name
    if (!formData.firstName.trim()) newErrors.firstName = "Camp obligatoriu";
    if (!formData.lastName.trim()) newErrors.lastName = "Camp obligatoriu";

    // Participants
    if (!formData.participants || Number(formData.participants) < 1)
      newErrors.participants = "Introdu un numar valid de participanti";

    // Phone number: exactly 10 digits
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone =
        "Numar de telefon trebuie sa aiba exact 10 cifre, fara spatii sau alte caractere";

    // Email
    if (
      !formData.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Introdu o adresa de email valida";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await addDoc(collection(db, "rsvp"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        participants: Number(formData.participants),
        phone: formData.phone,
        email: formData.email,
        submittedAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Eroare la trimiterea formularului:", error);
      alert("Ne pare rau, a aparut o eroare. Va rugam incercati din nou.");
    }
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
          Va rugam sa ne comunicati daca veti participa la eveniment
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
            noValidate
            className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <div className="space-y-6">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700 text-base">
                  Prenume*
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`h-12 text-base border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:border-[#D4AF37] focus:ring-[#D4AF37]`}
                  placeholder="Prenume"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700 text-base">
                  Nume*
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`h-12 text-base border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } focus:border-[#D4AF37] focus:ring-[#D4AF37]`}
                  placeholder="Nume de familie"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>

              {/* Participants */}
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
                  className={`h-12 text-base border ${
                    errors.participants ? "border-red-500" : "border-gray-300"
                  } focus:border-[#D4AF37] focus:ring-[#D4AF37]`}
                  placeholder="Cate persoane veti fi?"
                />
                {errors.participants && (
                  <p className="text-red-500 text-sm">{errors.participants}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 text-base">
                  Numar de telefon*
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  className={`h-12 text-base border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:border-[#D4AF37] focus:ring-[#D4AF37]`}
                  placeholder="Numar de telefon (10 cifre)"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
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
                  className={`h-12 text-base border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-[#D4AF37] focus:ring-[#D4AF37]`}
                  placeholder="Adresa e-mail pentru contact"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
