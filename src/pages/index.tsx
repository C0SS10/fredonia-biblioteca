import localFont from "next/font/local";
import BooksReferences from "@/components/organisms/borrow";

const geistSans = localFont({
  src: "../lib/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../lib/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <div
        // className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
        className="text-center pb-6"      
      >
        <h1 className="text-5xl text-primary">Biblioteca fredonia</h1>
      </div>
      <div>
        <BooksReferences />
      </div>
        
    </div>
    
    
  );
}
