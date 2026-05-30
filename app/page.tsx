import { Navigasi } from "@/components/navigasi";
import { BagianBeranda } from "@/components/bagian-beranda";
import { BagianKisahKami } from "@/components/bagian-kisah-kami";
import { BagianTentang } from "@/components/bagian-tentang";
import { BagianKeunggulan } from "@/components/bagian-keunggulan";
import { BagianProduk } from "@/components/bagian-produk";
import { BagianPromo } from "@/components/bagian-promo";
import { BagianTestimoni } from "@/components/bagian-testimoni";
import { BagianKontak } from "@/components/bagian-kontak";
import { BagianDeveloper } from "@/components/bagian-developer";
import { BagianFooter } from "@/components/bagian-footer";

export default function HalamanUtama() {
  return (
    <main className="min-h-screen">
      <Navigasi />
      <BagianBeranda />
      <BagianKisahKami />
      <BagianTentang />
      <BagianKeunggulan />
      <BagianProduk />
      <BagianPromo />
      <BagianTestimoni />
      <BagianKontak />
      <BagianDeveloper />
      <BagianFooter />
    </main>
  );
}
