export const ServicesItem = () => {
    const serve = [
        {
            id: 'App-Dev',
            title: 'App Development',
            description: 'Design and develop powerful, user-friendly applications that solve real-world problems and deliver seamless digital experiences.',
            image: 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            imageAlt: 'App Development design materials'
        },
        {
            id: 'ui-ux-design',
            title: 'UI/UX Design',
            description: 'User-centered design solutions that create intuitive experiences and drive engagement through thoughtful interface design.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop&crop=center',
            imageAlt: 'UI/UX design wireframes and prototypes'
        },
        {
            id: 'digital-marketing',
            title: 'Digital Marketing',
            description: 'Strategic campaigns that amplify your brand reach, drive conversions, and build lasting connections with your audience.',
            image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=300&fit=crop&crop=center',
            imageAlt: 'Digital marketing analytics dashboard'
        },
        {
            id: 'web-design',
            title: 'Web Design',
            description: 'Custom websites designed to impress clients, convert, and scale—built with strategy, not just style.',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop&crop=center',
            imageAlt: 'Modern web design interface'
        }
    ];

    const ServiceCard = ({ service }) => {
        return (
            <div className="group relative bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-2xl p-8 flex items-center gap-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-600 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                <div className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden bg-gray-700">
                    <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                        {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                    {serve.map((serve) => (
                        <ServiceCard key={serve.id} service={serve} />
                    ))}
                </div>
            </div>
        </div>
    );
};