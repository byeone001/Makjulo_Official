"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Data produk
const daftarProduk = [
  {
    id: 1,
    nama: "Makjulo Original",
    deskripsi: "Rasa klasik dengan manis alami kulit jeruk pamelo yang gurih dan renyah.",
    harga: "Rp 25.000",
    rating: 4.9,
    ulasan: 128,
    label: "Terlaris",
    warna: "from-amber-100 to-orange-100",
  },
  {
    id: 2,
    nama: "Makjulo Pedas",
    deskripsi: "Sensasi pedas yang menggugah selera dengan balutan rempah pilihan.",
    harga: "Rp 28.000",
    rating: 4.8,
    ulasan: 95,
    label: "Favorit",
    warna: "from-red-100 to-orange-100",
  },
  {
    id: 3,
    nama: "Makjulo Cokelat",
    deskripsi: "Perpaduan manis cokelat premium dengan tekstur unik kulit pamelo.",
    harga: "Rp 32.000",
    rating: 4.9,
    ulasan: 87,
    label: "Baru",
    warna: "from-amber-100 to-yellow-100",
  },
  {
    id: 4,
    nama: "Makjulo Keju",
    deskripsi: "Taburan keju gurih yang menyatu sempurna dengan kulit jeruk pamelo.",
    harga: "Rp 30.000",
    rating: 4.7,
    ulasan: 76,
    label: null,
    warna: "from-yellow-100 to-amber-100",
  },
  {
    id: 5,
    nama: "Makjulo Madu",
    deskripsi: "Manisnya madu asli hutan yang melapisi setiap potongan pamelo.",
    harga: "Rp 35.000",
    rating: 4.8,
    ulasan: 64,
    label: "Premium",
    warna: "from-amber-100 to-yellow-50",
  },
];

// Komponen kartu produk
function KartuProduk({ produk, index }: { produk: typeof daftarProduk[0]; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Label */}
      {produk.label && (
        <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
          {produk.label}
        </Badge>
      )}

      {/* Gambar Produk */}
      <div className={`relative aspect-square bg-gradient-to-br ${produk.warna} p-8`}>
        <motion.div
          animate={{ scale: hover ? 1.1 : 1, rotate: hover ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="text-center">
            <span className="text-7xl block mb-2">🍊</span>
            <span className="text-sm font-medium text-foreground/60">
              {produk.nama.split(" ")[1]}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Info Produk */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-foreground">{produk.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({produk.ulasan} ulasan)</span>
        </div>

        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
          {produk.nama}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {produk.deskripsi}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-bold text-primary">
            {produk.harga}
          </span>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Beli
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function BagianProduk() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produk" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Produk Kami
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Varian Rasa <span className="text-primary">Maklojo</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Temukan berbagai varian rasa Maklojo yang dibuat dengan resep rahasia 
            dan bahan-bahan berkualitas tinggi.
          </p>
        </motion.div>

        {/* Grid Produk */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {daftarProduk.map((produk, index) => (
            <KartuProduk key={produk.id} produk={produk} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ingin memesan dalam jumlah besar?
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Hubungi Kami untuk Pemesanan Grosir
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
