export function About() {
  return (
    <section className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-purple-600 tracking-wider uppercase text-sm font-medium">
                About Me
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Building the future, one pixel at a time
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a passionate creative developer who loves bringing ideas to life through code and design.
                With a keen eye for detail and a commitment to excellence, I create digital experiences that
                are both beautiful and functional.
              </p>
              <p>
                My work spans across web development, UI/UX design, and brand identity, always with a focus
                on creating meaningful connections between brands and their audiences.
              </p>
            </div>
            <div className="pt-4">
              <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-yellow-400"></div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-600 to-purple-900 p-1 shadow-2xl">
              <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center overflow-hidden">
                <div className="text-center p-8 space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-yellow-400 flex items-center justify-center text-white text-5xl font-bold">
                    UM
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-semibold">Uwami Mgxekwa</p>
                    <p className="text-gray-600">Creative Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
