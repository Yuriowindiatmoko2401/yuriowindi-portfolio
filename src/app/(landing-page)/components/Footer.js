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
                  // expertise
                </Link>
                <Link href="/work" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  // work
                </Link>
                <Link href="/experience" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  // experience
                </Link>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  // contact
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
                  href="https://www.linkedin.com/in/yuriowindiatmoko-347142156" 
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

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">&copy; 2025 Yurio Windiatmoko. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
