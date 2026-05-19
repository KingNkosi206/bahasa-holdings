import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FormState {
  fullName: string;
  companyName: string;
  contactNumber: string;
  emailAddress: string;
  projectDescription: string;
}

const emptyForm: FormState = {
  fullName: "",
  companyName: "",
  contactNumber: "",
  emailAddress: "",
  projectDescription: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
  }

  const inputClass =
    "w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder-[#4A4A4A] rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-[#DC143C] transition-smooth";

  return (
    <section id="contact" className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="text-[#DC143C] text-xs font-semibold uppercase tracking-[0.2em] font-display block mb-3"
            style={{
              textShadow:
                "0 0 8px rgba(220,20,60,0.7), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Get in Touch
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            Request a Site Assessment
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-start gap-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-8"
              >
                <CheckCircle
                  className="text-[#DC143C]"
                  size={40}
                  strokeWidth={1.5}
                />
                <p className="font-display font-bold text-white text-xl">
                  Thank you. We will be in touch within one business day.
                </p>
                <button
                  type="button"
                  data-ocid="contact.submit_again_button"
                  onClick={() => setSubmitted(false)}
                  className="text-[#DC143C] text-sm font-body underline underline-offset-4 hover:text-white transition-smooth"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-ocid="contact.form"
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="fullName"
                    className="text-white/70 text-xs font-semibold uppercase tracking-widest font-display"
                  >
                    Full Name <span className="text-[#DC143C]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    data-ocid="contact.fullname_input"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="companyName"
                    className="text-white/70 text-xs font-semibold uppercase tracking-widest font-display"
                  >
                    Company Name <span className="text-[#DC143C]">*</span>
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    autoComplete="organization"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Your organisation"
                    data-ocid="contact.company_input"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contactNumber"
                    className="text-white/70 text-xs font-semibold uppercase tracking-widest font-display"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    autoComplete="tel"
                    value={form.contactNumber}
                    onChange={handleChange}
                    placeholder="+27 00 000 0000"
                    data-ocid="contact.phone_input"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="emailAddress"
                    className="text-white/70 text-xs font-semibold uppercase tracking-widest font-display"
                  >
                    Email Address <span className="text-[#DC143C]">*</span>
                  </label>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.emailAddress}
                    onChange={handleChange}
                    placeholder="you@company.co.za"
                    data-ocid="contact.email_input"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="projectDescription"
                    className="text-white/70 text-xs font-semibold uppercase tracking-widest font-display"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={form.projectDescription}
                    onChange={handleChange}
                    placeholder="Brief description of scope, site, or timeline..."
                    data-ocid="contact.description_textarea"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  className="w-full sm:w-auto bg-[#DC143C] hover:bg-[#A50E2D] text-white font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded transition-smooth cta-btn"
                  style={{ boxShadow: "0 4px 15px rgba(220,20,60,0.4)" }}
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact details column */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div
              data-ocid="contact.details_card"
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 flex flex-col gap-5"
            >
              <a
                href="tel:+27799957170"
                data-ocid="contact.phone_link"
                className="flex items-start gap-4 group"
              >
                <Phone
                  size={20}
                  className="text-[#DC143C] mt-0.5 shrink-0 group-hover:scale-110 transition-smooth"
                  strokeWidth={1.8}
                />
                <div>
                  <span className="block text-white/50 text-xs uppercase tracking-widest font-display mb-0.5">
                    Phone
                  </span>
                  <span className="text-white font-body text-sm group-hover:text-[#DC143C] transition-smooth">
                    +27 79 995 717
                  </span>
                </div>
              </a>

              <div className="h-px bg-[#2A2A2A]" />

              <a
                href="mailto:NathiSibiya62@icloud.com"
                data-ocid="contact.email_link"
                className="flex items-start gap-4 group"
              >
                <Mail
                  size={20}
                  className="text-[#DC143C] mt-0.5 shrink-0 group-hover:scale-110 transition-smooth"
                  strokeWidth={1.8}
                />
                <div>
                  <span className="block text-white/50 text-xs uppercase tracking-widest font-display mb-0.5">
                    Email
                  </span>
                  <span className="text-white font-body text-sm break-all group-hover:text-[#DC143C] transition-smooth">
                    NathiSibiya62@icloud.com
                  </span>
                </div>
              </a>

              <div className="h-px bg-[#2A2A2A]" />

              <div
                data-ocid="contact.address"
                className="flex items-start gap-4"
              >
                <MapPin
                  size={20}
                  className="text-[#DC143C] mt-0.5 shrink-0"
                  strokeWidth={1.8}
                />
                <div>
                  <span className="block text-white/50 text-xs uppercase tracking-widest font-display mb-0.5">
                    Address
                  </span>
                  <address className="text-white font-body text-sm not-italic leading-relaxed">
                    5 Conradie Street
                    <br />
                    Klipfontein Ext 16
                    <br />
                    eMalahleni, 1035
                    <br />
                    Mpumalanga, South Africa
                  </address>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div
              data-ocid="contact.map"
              className="border border-[#2A2A2A] rounded-lg overflow-hidden w-full h-64"
            >
              <iframe
                title="Bahasa Holdings location — eMalahleni, Mpumalanga"
                src="https://maps.google.com/maps?q=eMalahleni+Mpumalanga+South+Africa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
