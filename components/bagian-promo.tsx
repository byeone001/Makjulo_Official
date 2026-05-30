"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BagianPromo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="promo" className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden" ref={ref}>
      {/* Latar Belakang Dekoratif */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge Promo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Penawaran Spesial
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Harga Terjangkau untuk Semua,{" "}
            <span className="text-primary">Rp10.000/pack</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          >
            Nikmati camilan sehat berkualitas premium dengan harga yang sangat terjangkau. 
            Sempurna untuk diri sendiri atau dijadikan hadiah istimewa untuk orang terkasih.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/628194505565", "_blank")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Pesan Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#produk");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Lihat Semua Varian
            </Button>
          </motion.div>

          {/* Info Tambahan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-8 border-t border-primary/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">📦</div>
                <p className="text-sm text-muted-foreground">Kemasan Higienis</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">🚚</div>
                <p className="text-sm text-muted-foreground">Pengiriman Cepat</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-primary mb-1">✨</div>
                <p className="text-sm text-muted-foreground">100% Alami</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
