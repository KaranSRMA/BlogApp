import React from 'react'

const Contactpage = () => {
    return (
        <div className="bg-[#141414] text-white py-10 px-5 md:px-20">
            {/* Contact Info Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-[#191919] p-6 rounded-lg border border-gray-700 text-center">
                    <p className="text-gray-400">General Inquiries</p>
                    <p className="text-gray-300">contact@techsite.com</p>
                    <p className="text-yellow-500">+1 (123) 456-7890</p>
                </div>
                <div className="bg-[#191919] p-6 rounded-lg border border-gray-700 text-center">
                    <p className="text-gray-400">Technical Support</p>
                    <p className="text-gray-300">support@techsite.com</p>
                    <p className="text-yellow-500">+1 (123) 456-7890</p>
                </div>
                <div className="bg-[#191919] p-6 rounded-lg border border-gray-700 text-center">
                    <p className="text-gray-400">Our Office</p>
                    <p className="text-gray-300">123 AI Tech Avenue, Techville</p>
                    <button className="text-yellow-500 hover:underline">Get Directions</button>
                </div>
                <div className="bg-[#191919] p-6 rounded-lg border border-gray-700 text-center">
                    <p className="text-gray-400">Connect with Us</p>
                    <div className="flex justify-center gap-3 mt-2">
                        <button className="text-gray-300">🐦</button>
                        <button className="text-gray-300">📘</button>
                        <button className="text-gray-300">🔗</button>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#191919] p-8 rounded-lg shadow-lg border border-gray-700 mb-10">
                <h2 className="text-3xl font-semibold text-gray-300 mb-6">Get in Touch</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" className="p-3 bg-[#242424] text-white border border-gray-600 rounded w-full" />
                    <input type="text" placeholder="Last Name" className="p-3 bg-[#242424] text-white border border-gray-600 rounded w-full" />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <input type="email" placeholder="Email" className="p-3 bg-[#242424] text-white border border-gray-600 rounded w-full" />
                    <div className="flex gap-1 items-center bg-[#242424] border border-gray-600 rounded w-full">
                        <select className="bg-[#242424] text-white p-3 border-r border-gray-600">
                            <option>+1</option>
                            <option>+91</option>
                            <option>+44</option>
                            <option>+81</option>
                        </select>
                        <input type="text" placeholder="Phone Number" className="p-3 bg-[#242424] text-white w-full" />
                    </div>
                </div>
                <textarea placeholder="Message" className="p-3 bg-[#242424] text-white border border-gray-600 rounded w-full mt-4 h-32"></textarea>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-gray-400 text-sm">I agree with Terms of Use and Privacy Policy</label>
                    </div>
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600">Send</button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-[#191919] p-8 rounded-lg border border-gray-700">
                <h2 className="text-3xl font-semibold text-gray-300 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="bg-gray-800 p-4 rounded-lg">
                        <summary className="cursor-pointer text-lg font-semibold">What is AI?</summary>
                        <p className="text-gray-400 mt-2">AI stands for Artificial Intelligence, which enables machines to learn and make decisions.</p>
                    </details>
                    <details className="bg-gray-800 p-4 rounded-lg">
                        <summary className="cursor-pointer text-lg font-semibold">How can I contact support?</summary>
                        <p className="text-gray-400 mt-2">You can contact us via email at support@yourdomain.com.</p>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default Contactpage
