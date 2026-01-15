import React, { useState, useEffect } from 'react';
import { Play, Clock, BookOpen, Users, Mail, Youtube, Twitter, ExternalLink } from 'lucide-react';

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const quotes = [
    "Time is a present. Don't forget that in the present, you have the time.",
    "Because at the end of the day, we are all just tiny traces left behind.",
    "Memory is the only true immortality we possess."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mock podcast episodes
  const episodes = [
    { id: 1, title: "At Least You Have a Job", date: "Jan 10, 2026" },
    { id: 2, title: "The Weight of Empty Chairs", date: "Dec 28, 2025" },
    { id: 3, title: "Letters Never Sent", date: "Dec 15, 2025" },
    { id: 4, title: "Midnight Conversations with Ghosts", date: "Nov 30, 2025" },
    { id: 5, title: "The Art of Disappearing", date: "Nov 18, 2025" },
    { id: 6, title: "Fragments of Home", date: "Nov 5, 2025" }
  ];

  // Mock manuscript excerpts
  const letters = [
    { id: 1, title: "Letter I: The Departure", excerpt: "Every goodbye begins with a suitcase that never quite closes..." },
    { id: 2, title: "Letter II: Temporary Addresses", excerpt: "Home became a series of coordinates, each more temporary than the last..." },
    { id: 3, title: "Letter III: Echoes in Empty Rooms", excerpt: "The silence after they leave is the loudest sound I know..." }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-mono">
      {/* Header/Navigation */}
      <header className="border-b border-stone-300 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-stone-800">A Scattered Recollection</div>
            <div className="hidden md:flex space-x-8 text-stone-700">
              <a href="#archive" className="hover:text-stone-900 transition-colors">The Archive</a>
              <a href="#manuscript" className="hover:text-stone-900 transition-colors">The Manuscript</a>
              <a href="#community" className="hover:text-stone-900 transition-colors">The Community</a>
              <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50 to-stone-100"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6 tracking-tight">
              A Scattered Recollection
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 italic mb-12 leading-relaxed">
              "Because at the end of the day, we are all just tiny traces left behind."
            </p>
          </div>
          
          {/* Typewriter animation effect */}
          <div className="mb-12">
            <div className="inline-block bg-stone-800 text-stone-100 px-8 py-4 rounded-lg animate-pulse">
              <Clock className="inline mr-2" size={20} />
              <span>Listening...</span>
            </div>
          </div>
          
          <button className="bg-stone-800 hover:bg-stone-900 text-stone-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center mx-auto">
            <Play className="mr-2" size={20} />
            Listen to the Latest Thought
          </button>
        </div>
      </section>

      {/* The Archive - Podcast */}
      <section id="archive" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">The Archive</h2>
            <p className="text-stone-600 text-lg">Episodes from the scattered mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {episodes.map((episode) => (
              <div key={episode.id} className="bg-yellow-50 border-2 border-dashed border-yellow-300 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{episode.title}</h3>
                <p className="text-stone-600 text-sm">{episode.date}</p>
              </div>
            ))}
          </div>
          
          {/* Podcast Embed */}
          <div className="bg-stone-100 p-8 rounded-lg border border-stone-200">
            <h3 className="text-2xl font-bold text-stone-800 mb-4 text-center">Latest Episode</h3>
            <div className="aspect-video bg-stone-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="mx-auto mb-4 text-stone-500" size={48} />
                <p className="text-stone-600">Spotify/YouTube Player Placeholder</p>
                <p className="text-stone-500 text-sm mt-2">Embedded podcast player would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Manuscript */}
      <section id="manuscript" className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">The Manuscript</h2>
            <p className="text-stone-600 text-lg">In progress: A novel about memory, displacement, and belonging</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-stone-200 mb-12">
            <div className="text-center mb-8">
              <BookOpen className="mx-auto mb-4 text-stone-600" size={48} />
              <h3 className="text-2xl font-bold text-stone-800">Progress: 42,891 words</h3>
              <div className="w-full bg-stone-200 rounded-full h-2 mt-4">
                <div className="bg-stone-600 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
            
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed">
                The manuscript grows slowly, like ivy on an old wall. Each word is a brick laid in the foundation 
                of a story that has been waiting decades to be told. This is not just fiction—it's excavation.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-stone-800 mb-8">Letters from a Ghost</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {letters.map((letter) => (
              <div key={letter.id} className="bg-white p-6 border border-stone-200 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-stone-800 mb-3">{letter.title}</h4>
                <p className="text-stone-600 italic">{letter.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Community */}
      <section id="community" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">The Community</h2>
          <p className="text-stone-600 text-lg mb-12">Join those who keep the thoughts alive</p>
          
          <div className="bg-stone-50 p-12 rounded-lg border-2 border-dashed border-stone-300 mb-12">
            <Users className="mx-auto mb-6 text-stone-600" size={48} />
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Feed the Brain</h3>
            <p className="text-stone-600 mb-6">
              Support this scattered recollection through Substack or Patreon. 
              Every contribution helps keep the candle burning.
            </p>
            <button className="bg-stone-800 hover:bg-stone-900 text-stone-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center mx-auto">
              <ExternalLink className="mr-2" size={16} />
              Support the Dream
            </button>
          </div>
          
          <div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
            <Mail className="mx-auto mb-4 text-stone-600" size={32} />
            <h3 className="text-xl font-bold text-stone-800 mb-4">Don't let your thoughts turn to dust.</h3>
            <p className="text-stone-600 mb-6">Join the newsletter for weekly reflections and updates.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
              />
              <button className="bg-stone-800 hover:bg-stone-900 text-stone-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">About</h2>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-stone-200 prose prose-stone max-w-none">
            <p className="text-stone-700 leading-relaxed mb-6">
              This space belongs to a ghost—an Army brat who learned early that home is not a place, 
              but a collection of moments strung together like beads on a frayed thread. 
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              Growing up between military bases across three continents taught me that identity is fluid, 
              that belonging is earned through shared experience rather than geography, and that the most 
              profound connections often happen in temporary spaces.
            </p>
            <p className="text-stone-700 leading-relaxed">
              The "ghost" is not about anonymity, but about universality. These scattered recollections 
              could belong to anyone who has ever felt caught between worlds, who carries memories like 
              precious cargo, and who believes that even the smallest trace can echo through time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-300 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="text-stone-600 italic mb-4 min-h-12 flex items-center justify-center md:justify-start">
                "{quotes[currentQuote]}"
              </div>
              <p className="text-stone-500 text-sm">© 2026 A Scattered Recollection</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
