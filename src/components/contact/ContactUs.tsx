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
        <section className="min-h-screen py-8 sm:py-12 bg-black flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-lg sm:max-w-xl lg:max-w-2xl">
                <div className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-700 shadow-2xl">
                    <div className="space-y-6">

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-base sm:text-lg font-medium mb-2 sm:mb-3 text-gray-200">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 text-white rounded-lg border border-gray-600 
                                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                         placeholder-gray-400 transition-colors text-sm sm:text-base"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-base sm:text-lg font-medium mb-2 sm:mb-3 text-gray-200">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email address"
                                required
                                className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 text-white rounded-lg border border-gray-600 
                                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                         placeholder-gray-400 transition-colors text-sm sm:text-base"
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phone" className="block text-base sm:text-lg font-medium mb-2 sm:mb-3 text-gray-200">
                                Phone Number
                            </label>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <select
                                    value={formData.countryCode}
                                    onChange={handleCountryCodeChange}
                                    className="px-3 py-3 sm:py-4 bg-gray-800 text-white rounded-lg border border-gray-600 
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                             min-w-[120px] sm:min-w-[140px] text-sm sm:text-base"
                                >
                                    {countryCodes.map((country) => (
                                        <option key={country.code} value={country.code} className="bg-gray-800">
                                            {country.flag} {country.code} {country.country}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="123 456 7890"
                                    className="flex-1 px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 text-white rounded-lg border border-gray-600 
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                             placeholder-gray-400 transition-colors text-sm sm:text-base"
                                />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
                                Optional - We'll use this for urgent project updates
                            </p>
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-base sm:text-lg font-medium mb-2 sm:mb-3 text-gray-200">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tell us about your project, questions, or how we can help you..."
                                rows={4}
                                required
                                className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 text-white rounded-lg border border-gray-600 
                                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                                         placeholder-gray-400 transition-colors resize-y text-sm sm:text-base"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold 
                                     py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 
                                     hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 
                                     focus:ring-blue-500/50 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
