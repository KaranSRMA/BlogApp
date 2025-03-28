import React from 'react'

const Aboutpage = () => {
    return (
        <div className="bg-[#141414] text-white py-10 px-5 md:px-20">
            {/* Hero Section */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-gray-300">About Us</h1>
                <p className="text-gray-400 mt-3 text-lg">Learn more about our mission and what we do.</p>
            </div>

            {/* Mission Section */}
            <div className="bg-[#191919] p-8 rounded-lg shadow-lg border border-gray-700 mb-10">
                <h2 className="text-3xl font-semibold text-gray-300">Our Mission</h2>
                <p className="text-gray-400 mt-3 text-lg">Our goal is to provide high-quality tech content, tutorials, and resources to help developers, hackers, and tech enthusiasts stay ahead in the industry.</p>
            </div>

            {/* What We Offer */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-[#191919] p-6 rounded-lg border border-gray-700 shadow-md hover:scale-105 transition-transform">
                    <h3 className="text-xl font-semibold text-gray-300">Tech Tutorials</h3>
                    <p className="text-gray-400 mt-2">Step-by-step guides on development, cybersecurity, and more.</p>
                </div>
                <div className="bg-[#191919] p-6 rounded-lg border border-gray-700 shadow-md hover:scale-105 transition-transform">
                    <h3 className="text-xl font-semibold text-gray-300">Resources & Tools</h3>
                    <p className="text-gray-400 mt-2">Curated tools, eBooks, whitepapers, and links for developers.</p>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-gray-300">Pricing Plans</h2>
                <p className="text-gray-400 mt-3 text-lg">Choose the right plan for you.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    {/* Free Plan */}
                    <div className="bg-[#191919] p-8 rounded-lg border border-gray-700 text-center shadow-lg hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold text-gray-300">Free</h3>
                        <p className="text-gray-400 mt-2">Basic access to tech articles and resources.</p>
                        <p className="text-3xl font-bold mt-3">$0/month</p>
                        <a href="#" className="inline-block bg-gray-600 text-white px-6 py-3 mt-4 rounded-lg hover:bg-gray-700">Get Started</a>
                    </div>

                    {/* Premium Plan - Recommended */}
                    <div className="bg-[#242424] p-8 rounded-lg border border-[#ffcc00] text-center shadow-lg hover:scale-105 transition-transform relative">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffcc00] text-black px-4 py-1 text-sm font-bold rounded-full">Recommended</span>
                        <h3 className="text-xl font-semibold text-white">Premium</h3>
                        <p className="text-gray-300 mt-2">Exclusive content, tools, and tutorials.</p>
                        <p className="text-3xl font-bold mt-3">$9.99/month</p>
                        <a href="#" className="inline-block bg-[#ffcc00] text-black px-6 py-3 mt-4 rounded-lg hover:bg-[#e6b800]">Subscribe</a>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#191919] p-8 rounded-lg border border-gray-700 text-center shadow-lg hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold text-gray-300">Pro</h3>
                        <p className="text-gray-400 mt-2">Advanced features and direct support.</p>
                        <p className="text-3xl font-bold mt-3">$19.99/month</p>
                        <a href="#" className="inline-block bg-gray-600 text-white px-6 py-3 mt-4 rounded-lg hover:bg-gray-700">Go Pro</a>
                    </div>
                </div>
            </div>

            {/* Contact / CTA */}
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-gray-300">Get in Touch</h2>
                <p className="text-gray-400 mt-3 text-lg">Have questions or suggestions? Contact us anytime!</p>
                <a href="/contact" className="inline-block bg-gray-600 text-white px-6 py-3 mt-4 rounded-lg hover:bg-gray-700">Contact Us</a>
            </div>
        </div>
    )
}

export default Aboutpage
