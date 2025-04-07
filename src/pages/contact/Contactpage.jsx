import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contactpage = () => {
    const [check, setCheck] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!check) return;

        try {
            await axios.post('https://blogmazebackend.onrender.com/api/contacts', {
                data: formData
            });

            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            setSubmitted(true);
        } catch (error) {
            alert("Error submitting form: " + error.message);
        }
    };

    if (submitted) {
        return (
            <div className="bg-[#141414] text-white py-20 px-5 md:px-20 text-center">
                <div className="bg-[#191919] p-8 rounded-lg shadow-lg border border-gray-700">
                    <h2 className="text-3xl font-semibold text-green-400 mb-4">Thank you!</h2>
                    <p className="text-gray-300 mb-6">Your message has been submitted successfully.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg"
                    >
                        Return to Main Menu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#141414] text-white py-10 px-5 md:px-20">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-[#191919] p-8 rounded-lg shadow-lg border border-gray-700 mb-10">
                <h2 className="text-3xl font-semibold text-gray-300 mb-6">Get in Touch</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="p-3 bg-[#242424] text-white border border-gray-600 rounded w-full" required />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="p-3 bg-[#242424] text-white border border-gray-600 rounded w-full" required />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 bg-[#242424] text-white border border-gray-600 rounded w-full" required />
                    <div className="flex gap-1 items-center bg-[#242424] border border-gray-600 rounded w-full">
                        <select className="bg-[#242424] text-white p-3 border-r border-gray-600">
                            <option>+91</option>
                        </select>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="p-3 bg-[#242424] text-white w-full" required />
                    </div>
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="p-3 bg-[#242424] text-white border border-gray-600 rounded w-full mt-4 h-32" required></textarea>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mr-2"
                            checked={check}
                            onChange={(e) => setCheck(e.target.checked)}
                        />
                        <label htmlFor="terms" className="text-gray-400 text-sm">
                            I agree with Terms of Use and Privacy Policy
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={!check}
                        className={`px-6 py-3 rounded-lg transition-colors duration-300 ${check ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'bg-gray-600 cursor-not-allowed text-gray-400'}`}
                    >
                        Send
                    </button>
                </div>
                {!check && (
                    <p className="text-red-500 text-sm mt-2">Please agree to the terms and conditions to continue.</p>
                )}
            </form>
        </div>
    );
};

export default Contactpage;
