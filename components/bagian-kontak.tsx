"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel } from "@/components/ui/field";

// Data informasi kontak
const infoKontak = [
  {
    ikon: MapPin,
    judul: "Alamat",
    detail: "Jl. Barat No.358-360, Kleco, Maospati, Kec. Maospati, Kabupaten Magetan, Jawa Timur 63392",
  },
  {
    ikon: Phone,
    judul: "Telepon",
    detail: "+62 819 4505 5565",
  },
  {
    ikon: Mail,
    judul: "Email",
    detail: "makjuloofficial@gmail.com",
  },
  {
    ikon: Clock,
    judul: "Jam Operasional",
    detail: "Senin - Sabtu, 08:00 - 17:00 WIB",
  },
];

export function BagianKontak() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [terkirim, setTerkirim] = useState(false);
  const [sedangKirim, setSedangKirim] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSedangKirim(true);
    
    // Simulasi pengiriman
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSedangKirim(false);
    setTerkirim(true);
    
    // Reset setelah 3 detik
    setTimeout(() => setTerkirim(false), 3000);
  };

  return (
    <section id="kontak" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Hubungi Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ada Pertanyaan? <span className="text-primary">Kami Siap Membantu</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Jangan ragu untuk menghubungi kami. Tim kami akan dengan senang hati 
            menjawab pertanyaan Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informasi Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6">
              {infoKontak.map((item, index) => (
                <motion.div
                  key={item.judul}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-4 bg-card rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.ikon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {item.judul}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Media Sosial */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">
                Hubungi Kami Langsung
              </h4>
              <div className="flex flex-col gap-3">
                <motion.a
                  href="https://wa.me/628194505565"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-semibold"
                >
                  💬 Chat via WhatsApp
                </motion.a>
              </div>

              {/* Social Links */}
              <h4 className="font-semibold text-foreground mt-8 mb-4">
                Ikuti Kami
              </h4>
              <div className="flex gap-3">
                {[
                  { name: "Instagram", link: "https://instagram.com/mak.julo", emoji: "📷" },
                  { name: "TikTok", link: "https://tiktok.com/@makjulo", emoji: "🎵" },
                ].map((sosmed) => (
                  <motion.a
                    key={sosmed.name}
                    href={sosmed.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-lg"
                    title={sosmed.name}
                  >
                    {sosmed.emoji}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Kirim Pesan
              </h3>

              {terkirim ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                    Pesan Terkirim!
                  </h4>
                  <p className="text-muted-foreground">
                    Terima kasih! Kami akan segera menghubungi Anda.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field>
                      <FieldLabel htmlFor="nama">Nama Lengkap</FieldLabel>
                      <Input
                        id="nama"
                        name="nama"
                        placeholder="Masukkan nama Anda"
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="nama@email.com"
                        required
                      />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="telepon">Nomor Telepon</FieldLabel>
                    <Input
                      id="telepon"
                      name="telepon"
                      type="tel"
                      placeholder="+62 812 xxxx xxxx"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="subjek">Subjek</FieldLabel>
                    <Input
                      id="subjek"
                      name="subjek"
                      placeholder="Tentang apa pesan Anda?"
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="pesan">Pesan</FieldLabel>
                    <Textarea
                      id="pesan"
                      name="pesan"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={4}
                      required
                    />
                  </Field>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={sedangKirim}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {sedangKirim ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                        Mengirim...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
