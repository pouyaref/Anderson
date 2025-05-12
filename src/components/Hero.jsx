export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      
        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900 shadow-lg">
          <img 
            src="/prof.jpg" 
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>
        
       
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Anderson</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Web Developer & Designer
          </h2>
          <p className="max-w-2xl mx-auto md:mx-0 text-gray-500 dark:text-gray-400">
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </p>
        </div>
      </div>
    </section>
  );
}