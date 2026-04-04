import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl w-full text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-purple-600 tracking-wider uppercase text-sm font-medium">
              Portfolio 2026
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Uwami Mgxekwa
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Creative Developer & Designer crafting digital experiences that inspire and innovate
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            className="border-2 border-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
