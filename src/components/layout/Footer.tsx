import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative py-16 bg-gradient-to-br from-black via-gray-900 to-black border-t border-primary/30 glass overflow-hidden" style={{ fontFamily: 'Sansation, sans-serif' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3 mb-6 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: 'Pixelify Sans, monospace' }}>
                PixelWings
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              © 2025. Your design partner
            </p>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-text-muted hover:text-primary transition-all duration-300 text-sm relative group">
                Home
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link></li>
              <li><Link to="/services" className="text-text-muted hover:text-primary transition-all duration-300 text-sm relative group">
                Services
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-primary transition-all duration-300 text-sm relative group">
                About Us
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Legal
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-muted hover:text-primary transition-all duration-300 text-sm relative group">
                Privacy Policy
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a></li>
              <li><a href="#" className="text-text-muted hover:text-primary transition-all duration-300 text-sm relative group">
                Cookie Policy
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a></li>
              <li><a href="#" className="text-text-muted hover:text-primary transition-all duration-300 text-sm relative group">
                Terms of Service
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 border border-gray-700/50">
              <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 border border-gray-700/50">
              <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 border border-gray-700/50">
              <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-text-muted text-sm flex items-center space-x-2">
              <span>© 2025 PixelWings Solutions. All rights reserved.</span>
              <span className="hidden md:inline text-gray-600">|</span>
              <span className="hidden md:inline">Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};