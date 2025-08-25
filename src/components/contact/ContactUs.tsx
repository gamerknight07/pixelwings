import { useState } from 'react';

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        message: ''
    });

    const countryCodes = [
        { code: '+1', country: 'US/CA', flag: '🇺🇸' },
        { code: '+44', country: 'UK', flag: '🇬🇧' },
        { code: '+91', country: 'India', flag: '🇮🇳' },
        { code: '+86', country: 'China', flag: '🇨🇳' },
        { code: '+81', country: 'Japan', flag: '🇯🇵' },
        { code: '+49', country: 'Germany', flag: '🇩🇪' },
        { code: '+33', country: 'France', flag: '🇫🇷' },
        { code: '+39', country: 'Italy', flag: '🇮🇹' },
        { code: '+34', country: 'Spain', flag: '🇪🇸' },
        { code: '+61', country: 'Australia', flag: '🇦🇺' },
        { code: '+55', country: 'Brazil', flag: '🇧🇷' },
        { code: '+52', country: 'Mexico', flag: '🇲🇽' },
        { code: '+7', country: 'Russia', flag: '🇷🇺' },
        { code: '+82', country: 'S. Korea', flag: '🇰🇷' },
        { code: '+65', country: 'Singapore', flag: '🇸🇬' },
        { code: '+971', country: 'UAE', flag: '🇦🇪' },
        { code: '+966', country: 'Saudi', flag: '🇸🇦' },
        { code: '+27', country: 'S. Africa', flag: '🇿🇦' },
        { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
        { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
        { code: '+66', country: 'Thailand', flag: '🇹🇭' },
        { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
        { code: '+63', country: 'Philippines', flag: '🇵🇭' },
        { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
        { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
        { code: '+20', country: 'Egypt', flag: '🇪🇬' },
        { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
        { code: '+54', country: 'Argentina', flag: '🇦🇷' },
        { code: '+56', country: 'Chile', flag: '🇨🇱' },
        { code: '+57', country: 'Colombia', flag: '🇨🇴' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCountryCodeChange = (e) => {
        setFormData(prev => ({
            ...prev,
            countryCode: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Form submitted! Check the console for form data.');
    };

    return (
        <section className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black overflow-hidden relative" style={{ fontFamily: 'Sansation, sans-serif' }}>
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-transparent to-gray-800/30"></div>

            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                        {/* Header with animated gradient text */}
                        <div className="text-center max-w-5xl px-2 sm:px-4">
                            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 leading-tight">
                                Contact Us
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
                                We'd love to hear from you! Reach out for any questions, inquiries, or to start working together on your next project.
                            </p>
                        </div>

                        {/* Form Container with 3D styling */}
                        <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl">
                            {/* Background layers for depth - hidden on mobile for performance */}
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-white/5 to-gray-100/5 rounded-xl sm:rounded-2xl lg:rounded-3xl transform rotate-1 lg:rotate-2 transition-transform duration-500 group-hover:rotate-2 lg:group-hover:rotate-3"></div>
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-tl from-gray-100/5 to-white/5 rounded-xl sm:rounded-2xl lg:rounded-3xl transform -rotate-1 transition-transform duration-500 group-hover:-rotate-1 lg:group-hover:-rotate-2"></div>

                            {/* Main form container with 3D effects */}
                            <div className="relative w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transform transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
                                {/* Glassmorphism overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/15 sm:from-white/20 to-white/8 sm:to-white/10 backdrop-blur-sm sm:backdrop-blur-md z-10"></div>

                                <div className="w-full bg-black backdrop-blur-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative z-20 border border-white/20 sm:border-white/30">
                                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                                        {/* Name Field */}
                                        <div className="group">
                                            <label htmlFor="name" className="block text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3 text-gray-200 transition-colors duration-300 group-focus-within:text-blue-400">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                className="w-full px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 bg-gray-800/60 text-white text-sm sm:text-base md:text-lg rounded-md sm:rounded-lg border border-gray-600/50 
                                                         focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 
                                                         placeholder-gray-400 transition-all duration-300 backdrop-blur-sm
                                                         hover:border-blue-500/40 hover:bg-gray-800/80"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div className="group">
                                            <label htmlFor="email" className="block text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3 text-gray-200 transition-colors duration-300 group-focus-within:text-blue-400">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email address"
                                                className="w-full px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 bg-gray-800/60 text-white text-sm sm:text-base md:text-lg rounded-md sm:rounded-lg border border-gray-600/50 
                                                         focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 
                                                         placeholder-gray-400 transition-all duration-300 backdrop-blur-sm
                                                         hover:border-blue-500/40 hover:bg-gray-800/80"
                                            />
                                        </div>

                                        {/* Phone Number Field with Country Code */}
                                        <div className="group">
                                            <label htmlFor="phone" className="block text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3 text-gray-200 transition-colors duration-300 group-focus-within:text-blue-400">
                                                Phone Number
                                            </label>
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                                {/* Country Code Dropdown */}
                                                <select
                                                    value={formData.countryCode}
                                                    onChange={handleCountryCodeChange}
                                                    className="w-full sm:w-auto sm:flex-shrink-0 px-2 py-3 sm:px-3 sm:py-4 md:py-5 bg-gray-800/60 text-white text-sm sm:text-base md:text-lg rounded-md sm:rounded-lg border border-gray-600/50 
                                                             focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 
                                                             transition-all duration-300 backdrop-blur-sm hover:border-blue-500/40 hover:bg-gray-800/80
                                                             sm:min-w-[120px] md:min-w-[140px] cursor-pointer"
                                                >
                                                    {countryCodes.map((country) => (
                                                        <option key={country.code} value={country.code} className="bg-gray-800 text-white">
                                                            <span className="hidden sm:inline">{country.flag} </span>
                                                            {country.code}
                                                            <span className="hidden sm:inline"> {country.country}</span>
                                                        </option>
                                                    ))}
                                                </select>

                                                {/* Phone Number Input */}
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="123 456 7890"
                                                    className="flex-1 px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 bg-gray-800/60 text-white text-sm sm:text-base md:text-lg rounded-md sm:rounded-lg border border-gray-600/50 
                                                             focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 
                                                             placeholder-gray-400 transition-all duration-300 backdrop-blur-sm
                                                             hover:border-blue-500/40 hover:bg-gray-800/80"
                                                />
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Optional - We'll use this for urgent project updates</p>
                                        </div>

                                        {/* Message Field */}
                                        <div className="group">
                                            <label htmlFor="message" className="block text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3 text-gray-200 transition-colors duration-300 group-focus-within:text-blue-400">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about your project, questions, or how we can help you..."
                                                rows={4}
                                                className="w-full px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 bg-gray-800/60 text-white text-sm sm:text-base md:text-lg rounded-md sm:rounded-lg border border-gray-600/50 
                                                         focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 
                                                         placeholder-gray-400 transition-all duration-300 backdrop-blur-sm
                                                         hover:border-blue-500/40 hover:bg-gray-800/80 resize-vertical min-h-[100px] sm:min-h-[120px] md:min-h-[150px]"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="button"
                                            onClick={handleSubmit}
                                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-5 px-6 sm:px-8 
                                                     rounded-md sm:rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 
                                                     focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900
                                                     shadow-lg hover:shadow-2xl relative overflow-hidden group active:scale-95"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <span className="relative z-10">Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements - hidden on mobile for cleaner look */}
                            <div className="hidden sm:block absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-white to-gray-400 rounded-full opacity-70 animate-bounce delay-300"></div>
                            <div className="hidden sm:block absolute -bottom-6 -left-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-gray-400 to-white rounded-full opacity-50 animate-pulse delay-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;