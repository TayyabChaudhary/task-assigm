import React from 'react';
import { Facebook, Twitter, Instagram, Dribbble, Send } from 'lucide-react';
import Logo from '../shared/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1a1a1a] text-gray-400">
            {/* Main Footer Content */}
            <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Logo />
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Nam libero tempore cum soluta nobis est eligendi optio cumque nihilc impedit quo minus maxima placeat facere.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {[
                                { Icon: Facebook, href: '#' },
                                { Icon: Twitter, href: '#' },
                                { Icon: Instagram, href: '#' },
                                { Icon: Dribbble, href: '#' }
                            ].map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="w-10 h-10 rounded bg-[#2a2a2a] flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                                >
                                    <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div className="space-y-6">
                        <h3 className="text-white text-lg font-semibold">EXPLORE</h3>
                        <ul className="space-y-3">
                            {['About Hotel', 'Pricing', 'Hotel Staff', 'Latest News', 'Contact Us'].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-white text-lg font-semibold">CONTACT</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    7631 Sabina Park, IIS Devon Isle,
                                    <br />
                                    Louisiana, USA
                                </p>
                            </div>
                            <div className="space-y-2">
                                <a
                                    href="tel:+19876543210"
                                    className="text-white hover:text-primary transition-colors duration-300 text-lg font-semibold block"
                                >
                                    (+1) 987 654 3210
                                </a>
                                <a
                                    href="mailto:info@domain.com"
                                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm block"
                                >
                                    info@domain.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-white text-lg font-semibold">NEWSLETTER</h3>
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Ex. info@domain.com"
                                    className="w-full bg-transparent border-b border-gray-600 py-3 pr-12 text-gray-300 placeholder-gray-500 focus:border-primary focus:outline-none transition-colors duration-300 text-sm"
                                />
                                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-300">
                                    <Send size={20} />
                                </button>
                            </div>
                            <label className="flex items-start gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="mt-1 w-4 h-4 rounded border-gray-600 bg-transparent checked:bg-primary focus:ring-primary"
                                />
                                <span className="text-gray-400 text-xs leading-relaxed">
                                    I agree to all terms and policies
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-gray-500">
                            © Copyright 2025 Fixyland. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary transition-colors duration-300"
                            >
                                Terms and Conditions
                            </a>
                            <span className="text-gray-700">|</span>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
