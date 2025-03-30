import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#1a1f2b]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link 
                href="/" 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"
              >
                Yurio.dev
              </Link>
              <p className="text-sm text-gray-400 max-w-xs">
                Building innovative solutions at the intersection of engineering excellence and strategic vision.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  // resume
                </Link>
              </nav>
            </div>

            {/* Social Links */}
            <div id="connect" className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Connect</h3>
              <nav className="flex flex-col space-y-2">
                <a 
                  href="https://github.com/Yuriowindiatmoko2401" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  // github
                </a>
                <a 
                  href="https://www.linkedin.com/in/yurio-windiatmoko-347142156" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  // linkedin
                </a>
                <a 
                  href="mailto:yuriowindiatmoko@gmail.com" 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  // email
                </a>
              </nav>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">&copy; 2025 Yurio Windiatmoko. All rights reserved.</p>
              <div className="mt-6 md:mt-0 md:px-6 py-2 max-w-md w-full md:w-auto flex flex-col items-center border border-gray-800/50 rounded-lg bg-gray-900/30">
                <p className="text-orange-400 font-medium">This portfolio made by 🫶</p>
                <p className="text-orange-500 font-bold text-xl">NextPPT</p>
                <p className="text-gray-400 text-xs">bukan para pencari Tuhan</p>
                <p className="text-gray-300 text-sm mt-1 text-center">
                  NextJS PostgreSQL PayloadCMS<br/>
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
