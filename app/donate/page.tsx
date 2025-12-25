import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Heart, ShieldCheck, Zap } from "lucide-react"

const DonatePage = async () => {
  const session = await auth()

  if (!session?.user) redirect("/")

  return (
    <div className="min-h-screen pb-32 px-4 relative overflow-hidden"
      style={{
        backgroundColor: "#eaddf2",
        backgroundImage: `radial-gradient(#d8b4fe 1px, transparent 0)`,
        backgroundSize: "4px 4px"
      }}>
      
      {/* 1. The Paper Texture Overlay (Consistent across all pages) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-50" />

      {/* 2. Editorial Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#fce7f3] blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-[#ede9fe] blur-[150px] opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto pt-24 relative z-10">
        
        {/* Header - Editorial Typography */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b36a7a] mb-4 block italic">Fuel the Mission</span>
          <h1 className="text-6xl md:text-8xl font-black text-[#3a223a] mb-6 tracking-tighter uppercase leading-[0.85]">
            MAKE A<span className="text-white italic drop-shadow-sm">CHANGE</span>
          </h1>
          <p className="text-[#3a223a] text-xl font-bold max-w-xl mx-auto italic">
            Your support brings handmade art and joy to communities across Georgia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Trust Badges */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-sm shadow-xl border border-purple-50 rotate-1">
              <Heart className="text-pink-500 mb-3" size={24} />
              <h4 className="text-sm font-black text-[#3a223a] uppercase tracking-tighter">100% Impact</h4>
              <p className="text-xs text-[#3a223a]/70 font-medium italic mt-1">Every cent goes directly toward art supplies and community events.</p>
            </div>
            
            <div className="bg-white p-6 rounded-sm shadow-xl border border-purple-50 -rotate-1">
              <ShieldCheck className="text-[#3a223a] mb-3" size={24} />
              <h4 className="text-sm font-black text-[#3a223a] uppercase tracking-tighter">Secure Giving</h4>
              <p className="text-xs text-[#3a223a]/70 font-medium italic mt-1">Your transactions are encrypted and processed securely via Givebutter.</p>
            </div>

            <div className="pt-4 px-2">
               <div className="h-[2px] w-full bg-[#3a223a]/10 mb-4" />
               <p className="text-[10px] font-black text-[#b36a7a] uppercase tracking-widest leading-relaxed">
                  Thank you for your generosity, <br/>
                  <span className="text-[#3a223a] text-lg italic">{session.user.name?.split(' ')[0]}!</span>
               </p>
            </div>
          </div>

          {/* Donation Widget Container */}
          <div className="md:col-span-2 bg-white p-2 shadow-2xl rounded-sm border border-purple-100">
            <div className="bg-[#f8f5ff] border border-purple-50 p-8 min-h-[500px] flex flex-col items-center justify-center text-center relative">
              
              {/* Decorative "Pin" for the widget area */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-pink-500 shadow-inner border border-black/5 z-20" />

              <div className="space-y-4">
                <Zap className="text-pink-500 mx-auto animate-pulse" size={40} />
                <h3 className="text-2xl font-black text-[#3a223a] uppercase tracking-tighter">Donation Portal</h3>
                <p className="text-sm text-[#3a223a]/60 max-w-xs font-bold uppercase tracking-tight">
                  The Givebutter widget is loading...
                </p>
              </div>
              
              {/* Givebutter Placeholder */}
              <div className="mt-8 w-full h-80 border-4 border-dashed border-purple-200 rounded-sm flex items-center justify-center bg-white/50">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-300">Widget Embed Area</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <p className="text-center mt-20 text-[10px] font-black text-[#3a223a]/40 uppercase tracking-[0.4em]">
          PaperHearts Student-Led Org • 501(c)(3) Pending Status
        </p>

      </div>
    </div>
  )
}

export default DonatePage