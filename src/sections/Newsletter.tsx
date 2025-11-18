
const Newsletter = () => {
  return (
    <section className="relative overflow-hidden w-full px-16 py-24 border-t border-b border-gray-300/20">
      <div className="max-w-[2000px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-24">
        <div className="flex flex-col items-center lg:items-start gap-8 z-999!">
          <h2 className="text-center lg:text-left text-3xl lg:text-5xl font-bold">
            Subscribe to our newsletter
          </h2>
          <p className="text-center lg:text-left text-lg lg:text-2xl">
            Stay up to date and get informed on the latest games and the <span className="text-amber-500 font-bold">HOTTEST</span> deals.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 rounded-lg border-none px-6 py-3 ring-2 ring-gray-300 hover:ring-purple-500
              transition-all duration-300 focus:ring-offset-0 focus:ring-purple-500 outline-none"
          />
          <div className="w-80 bg-white px-6 py-3 rounded-lg hover:bg-purple-900 hover:text-white
            transition-all duration-200 cursor-pointer text-black text-lg font-bold flex items-center
            justify-center">
            Subscribe
          </div>
        </div>

        <img 
          src="/images/ghost.png"
          alt="Ghost" 
          className="w-auto h-100 lg:h-140 z-999!"
        />
      </div>

      <div className="absolute -top-10 translate-x-1/2 w-400 h-400 bg-purple-500/20 rounded-full z-1!"/>
    </section>
  );
};

export default Newsletter;