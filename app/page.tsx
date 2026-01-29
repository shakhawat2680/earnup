import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b101f] via-[#020617] to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 py-20 text-center">
        {/* Brand Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center border border-cyan-500/30">
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">E$</span>
          </div>
        </div>

        {/* Hero Section */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Earn Real Money with
          <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Earnup
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Complete simple tasks, earn cryptocurrency rewards, withdraw instantly via PayPal, gift cards, or crypto.
        </p>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">10K+</div>
            <div className="text-sm text-gray-400">Active Earners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">$500K+</div>
            <div className="text-sm text-gray-400">Paid Out</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400">4.8★</div>
            <div className="text-sm text-gray-400">User Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">Instant</div>
            <div className="text-sm text-gray-400">Withdrawals</div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">Surveys</h3>
            <p className="text-gray-400">Share your opinion → Get paid instantly</p>
            <div className="mt-4 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Earn up to $50/hour →
            </div>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">Play Games</h3>
            <p className="text-gray-400">Entertain yourself → Earn rewards</p>
            <div className="mt-4 text-sm text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Play & earn simultaneously →
            </div>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-teal-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📺</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">Watch Videos</h3>
            <p className="text-gray-400">View content → Receive payment</p>
            <div className="mt-4 text-sm text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Passive income streams →
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Link 
            href="/how-it-works"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>See How It Works</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link 
            href="/start-earning"
            className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Start Earning Now</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4">TRUSTED & SECURE PLATFORM</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-sm">256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-sm">Instant Withdrawals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-sm">24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm">Global Availability</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
