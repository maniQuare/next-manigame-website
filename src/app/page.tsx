
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DetailCast from "@/components/DetailCast";


export default function Home() {
  return (
    <div className="bg-gray-800">
      <div><Header/></div>
      <div><HeroSection/></div>
      <div className="mt-3"><DetailCast/></div>
    </div>
  );
}
