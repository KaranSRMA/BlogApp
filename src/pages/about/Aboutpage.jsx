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
                <p className="text-gray-400 mt-3 text-lg">Our goal is to provide high-quality tech content, tutorials, and resources that inspire innovation and growth. With a focus on clarity, depth, and real-world application, we strive to keep you ahead in the ever-evolving industry. Explore, learn, and stay ahead!</p>
            </div>

            {/* What We Offer */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-[#191919] p-6 rounded-lg border border-gray-700 shadow-md hover:scale-105 transition-transform">
                    <h3 className="text-xl font-semibold text-gray-300">Tech Tutorials</h3>
                    <p className="text-gray-400 mt-2">Step-by-step guides on development, cybersecurity, and more, designed to simplify learning and enhance practical skills. From foundational concepts to advanced techniques, our tutorials ensure clarity and real-world application. Beyond just providing information, we aim to inspire curiosity, creativity, and problem-solving. Every article, guide, and resource is designed to encourage exploration and hands-on learning. We believe that knowledge is most powerful when applied, and our content is structured to help transform learning into action. The tech industry moves fast, and adapting to new developments is essential. We stay up-to-date with the latest advancements to bring timely and relevant insights. By bridging the gap between theory and practice, we help individuals build confidence and expertise in their journey. Join us in exploring the future of technology—stay curious, keep learning, and always stay ahead! </p>
                </div>
                <div className="bg-[#191919] p-6 rounded-lg border border-gray-700 shadow-md hover:scale-105 transition-transform">
                    <h3 className="text-xl font-semibold text-gray-300">Resources & Tools</h3>
                    <p className="text-gray-400 mt-2">A carefully curated selection of utilities, eBooks, research papers, and references designed to enhance learning and productivity. Covering various aspects of technology, these materials provide essential insights, streamline workflows, and support continuous improvement. From comprehensive documentation to specialized frameworks, each resource is chosen for its reliability and relevance. Whether exploring new methodologies or refining existing skills, these tools offer a structured path for advancement. Regular updates ensure access to the latest innovations, keeping knowledge fresh and applicable. With well-organized content, finding the right information becomes effortless, making technical growth more efficient and effective.</p>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-gray-300">Support & Grow</h2>
                <p className="text-gray-400 mt-3 text-lg">Contribute any amount to directly support innovation, fuel high-quality content, and ensure continuous growth for the community.</p>
                <div className="flex justify-center mx-48 mt-7">

                    {/* Premium Plan - Recommended */}
                    <div className="bg-[#242424] p-8 rounded-lg border border-[#ffcc00] text-center shadow-lg hover:scale-105 transition-transform relative">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffcc00] text-black px-4 py-1 text-sm font-bold rounded-full">Appreciation</span>
                        <h3 className="text-xl font-semibold text-white">Grateful for Your Support!</h3>
                        <p className="text-gray-300 mt-2">Your generosity drives innovation, sustains quality content, and strengthens this community. Every contribution makes a difference—thank you for being a part of this journey!</p>
                        <a href="#" className="inline-block bg-[#ffcc00] text-black px-6 py-3 mt-4 rounded-lg hover:bg-[#e6b800]">Support Now</a>
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
