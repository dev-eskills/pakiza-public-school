import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { privacySections } from '../constants/privacyData';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#fcfcfc] min-h-screen font-sans text-gray-800 scroll-smooth">
            {/* --- Modern Hero Header --- */}
            <div className="relative bg-[#000e51] py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#f7ce83] rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Privacy <span className="text-[#f7ce83]">Policy</span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                            At Pakiza Public School, we value your trust. This document outlines how we handle and protect your data.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* --- Main Content Layout --- */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">

                {/* Left: Quick Navigation */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-[#000e51] mb-4 uppercase tracking-wider text-xs">Contents</h4>
                        <nav className="flex flex-col space-y-4">
                            {privacySections.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="text-sm text-gray-500 hover:text-[#000e51] hover:font-semibold transition-all duration-300 border-l-2 border-transparent hover:border-[#f7ce83] pl-3"
                                >
                                    {s.title.split('. ')[1]}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Right: Content Cards */}
                <main className="lg:col-span-9 space-y-12">
                    {privacySections.map((section, idx) => {
                        const Icon = section.icon; // Get icon reference
                        return (
                            <motion.section
                                id={section.id}
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                /* scroll-mt-32 prevents the sticky header from covering the title */
                                className="scroll-mt-32 bg-white p-8 md:p-10 rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="p-4 bg-[#000e51] rounded-2xl shrink-0 shadow-lg shadow-[#000e51]/20">
                                        <Icon className="text-[#f7ce83]" size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#000e51] mb-5 tracking-tight">
                                            {section.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                            {section.content}
                                        </p>

                                        {section.subContent && (
                                            <div className="grid md:grid-cols-2 gap-5 mt-6">
                                                {section.subContent.map((sub, i) => (
                                                    <div key={i} className="bg-[#f8f9ff] p-6 rounded-2xl border border-blue-50">
                                                        <span className="block font-bold text-[#000e51] mb-3 uppercase tracking-wide text-xs">{sub.label}</span>
                                                        <span className="text-sm text-gray-600 leading-relaxed">{sub.detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.list && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                {section.list.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-4 text-sm text-gray-600 bg-white p-3 rounded-xl border border-gray-50">
                                                        <div className="w-2 h-2 bg-[#f7ce83] rounded-full shrink-0"></div>
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.section>
                        );
                    })}

                    {/* Contact Notice */}
                    <div className="bg-[#000e51] p-10 rounded-[2.5rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7ce83]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <h3 className="font-bold text-white mb-3 text-2xl">Have Questions?</h3>
                        <p className="text-blue-100/70 text-sm mb-8 max-w-md mx-auto">
                            Our administration is happy to clarify any privacy concerns. Feel free to reach out.
                        </p>
                        <Link
                            to='/contact'
                            className="inline-block bg-[#f7ce83] text-[#000e51] px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-[#f7ce83]/20"
                        >
                            Contact Us
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PrivacyPolicy;