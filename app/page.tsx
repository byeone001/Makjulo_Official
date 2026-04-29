import { Navigasi } from "@/components/navigasi";
import { BagianBeranda } from "@/components/bagian-beranda";
import { BagianBanner } from "@/components/bagian-banner";
import { BagianTentang } from "@/components/bagian-tentang";
import { BagianProduk } from "@/components/bagian-produk";
import { BagianKeunggulan } from "@/components/bagian-keunggulan";
import { BagianTestimoni } from "@/components/bagian-testimoni";
import { BagianKontak } from "@/components/bagian-kontak";
import { BagianFooter } from "@/components/bagian-footer";

export default function HalamanUtama() {
  return (
    <main className="min-h-screen">
      <Navigasi />
      <BagianBeranda />
      <BagianBanner />
      <BagianTentang />
      <BagianProduk />
      <BagianKeunggulan />
      <BagianTestimoni />
      <BagianKontak />
      <BagianFooter />
    </main>
  );
}
