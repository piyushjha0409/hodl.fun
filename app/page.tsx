import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Zap, MessageCircle, Trophy, BarChart3, Rocket } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/hodl-logo.png" alt="HODL.fun Logo" width={120} height={60} className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-yellow-300 hover:text-yellow-200 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-yellow-300 hover:text-yellow-200 transition-colors">
              How It Works
            </a>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold">Launch App</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-pink-500 text-white mb-6 px-4 py-2 text-lg">
            🚀 Bringing pump.fun vibes to prediction markets
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Social Prediction Markets
          </h1>

          <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
            Trade your beliefs, not just your coins. Every outcome is a token, every prediction is social, and every
            market is <span className="text-pink-400 font-bold">fun</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold text-lg px-8 py-4">
              Start Predicting <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          <a href="https://www.loom.com/share/e35ca963a0b74a1c9e30b50f5729a9a1?sid=5480c914-a063-483f-8fe7-a6f66f3201dc">
            <Button
              size="lg"
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white text-lg px-8 py-4"
            >
              Watch Demo
            </Button>
          </a>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-purple-800/50 border-pink-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-yellow-300 mb-2">Tokenized Outcomes</h3>
                <p className="text-purple-200">Every prediction becomes a tradable token with real-time price charts</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-pink-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-yellow-300 mb-2">Chat-Native Markets</h3>
                <p className="text-purple-200">XMTP-powered chats with AI agents moderating every market</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-pink-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-yellow-300 mb-2">Built for Farcaster</h3>
                <p className="text-purple-200">Native social integration with the onchain social layer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Why HODL.fun?</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We're solving the boring, static nature of traditional prediction markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Social & Fun</h3>
              <p className="text-purple-200">
                No more spreadsheet-like interfaces. Prediction markets with personality and community.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Bonding Curves</h3>
              <p className="text-purple-200">
                Early believers buy cheap, exit profitably as hype grows. Pure market dynamics.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Culture-Driven</h3>
              <p className="text-purple-200">
                Bet on internet culture, memes, and viral moments - not just boring finance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Fully Onchain</h3>
              <p className="text-purple-200">
                Transparent, auditable, and real-time. Built on Base with full decentralization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">How It Works</h2>
            <p className="text-xl text-purple-200">Simple, social, and profitable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-800/80 to-pink-800/80 border-yellow-400/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-400 text-purple-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">Find a Market</h3>
                <p className="text-purple-200 text-lg">
                  Browse viral predictions on culture, crypto, and internet moments. Each market has its own chat room
                  and AI agent.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-800/80 to-purple-800/80 border-pink-400/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">Buy Your Belief</h3>
                <p className="text-purple-200 text-lg">
                  Purchase outcome tokens early when they're cheap. Watch the price chart as sentiment shifts in
                  real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-600/80 to-pink-600/80 border-yellow-400/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-yellow-400 text-purple-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">Trade & Win</h3>
                <p className="text-purple-200 text-lg">
                  Sell when you're up, double down when you're confident, or hold until resolution. Pure social trading.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Markets */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Live Markets</h2>
            <p className="text-xl text-purple-200">Real predictions happening right now</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-purple-800/50 border-pink-500/30 backdrop-blur-sm hover:border-yellow-400/50 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-green-500 text-white">Live</Badge>
                  <span className="text-yellow-400 font-bold">$12.4K Volume</span>
                </div>
                <h3 className="text-lg font-bold text-yellow-300 mb-2">Will Solana flip ETH this year?</h3>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">YES: $0.34</span>
                  <span className="text-pink-400">+12% today</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-pink-500/30 backdrop-blur-sm hover:border-yellow-400/50 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-green-500 text-white">Live</Badge>
                  <span className="text-yellow-400 font-bold">$8.7K Volume</span>
                </div>
                <h3 className="text-lg font-bold text-yellow-300 mb-2">Will Drake drop an album in July?</h3>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">YES: $0.67</span>
                  <span className="text-pink-400">+5% today</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800/50 border-pink-500/30 backdrop-blur-sm hover:border-yellow-400/50 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-green-500 text-white">Live</Badge>
                  <span className="text-yellow-400 font-bold">$23.1K Volume</span>
                </div>
                <h3 className="text-lg font-bold text-yellow-300 mb-2">New meme coin hits $100M in 48hrs?</h3>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">YES: $0.23</span>
                  <span className="text-pink-400">+28% today</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Ready to HODL Your Beliefs?
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Join the social prediction revolution. Trade what you believe, win when you're right.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-purple-900 font-bold text-xl px-12 py-6"
            >
              Launch HODL.fun <Rocket className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/hodl-logo.png" alt="HODL.fun Logo" width={100} height={50} className="h-10 w-auto" />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors">
                Discord
              </a>
              <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors">
                Farcaster
              </a>
              <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors">
                Docs
              </a>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center">
            <p className="text-purple-400">© 2024 HODL.fun. Built for the onchain social generation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
