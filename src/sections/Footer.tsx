
const Footer = () => {
  const footerNote = "All trademarks are property of their respective owners in the US and other countries. This is a demo website for a game store. You probably aren't even reading this anyway.";
  
  const footerLinks = [
    "About",
    "Privacy Policy",
    "Legal",
    "Accessibility",
    "Subscriber Agreement",
    "Refunds",
    "Cookies",
  ];

  return (
    <footer className="w-full bg-white/7">
      <div className="mx-auto flex flex-col items-center justify-center gap-10 px-40 py-14
        max-w-[2000px] text-white/80">
        <div className="w-full px-28 flex items-center justify-center gap-8">
          <p className="text-2xl font-bold">
            Game Store
          </p>

          {/* Footer Note */}
          <p className="italic text-white/40">
            {footerNote}
          </p>
        </div>

        {/* Footer Links */}
        <div id="footer-sections" className="w-full flex items-center justify-evenly">
          {
            footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-lg hover:text-purple-500 transition-colors duration-300">
                {link}
              </a>
            ))
          }
        </div>

        <p className="text-sm text-white/50">
          &copy; 2025 Game Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;