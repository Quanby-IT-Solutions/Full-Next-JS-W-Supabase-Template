"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import company from "/public/img/company.png";

const About: React.FC = () => {
    return (
        <section className="p-8 lg:p-16 max-w-7xl mx-auto space-y-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-4xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                    About This Template
                </h1>
                <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
                    Created by Joemar in 2024, this template is built with Next.js and Supabase as a foundation for modern web development at <b>Company</b>.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-8 rounded-lg "
            >
                <h2 className="text-2xl font-medium mb-4 text-blue-600 dark:text-blue-400">
                    Our Mission
                </h2>
                <p className="text-base text-neutral-500 dark:text-neutral-400">
                    Our mission is to provide a simple, scalable template powered by Next.js and Supabase, focusing on performance, flexibility, and seamless developer experience.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
            >
                <h2 className="text-2xl font-medium mb-4 text-blue-600 dark:text-blue-400">
                    Why Next.js and Supabase?
                </h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-600">
                        <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">
                            Cutting-Edge Technology
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Next.js ensures fast page loads and optimized performance with server-side rendering and static generation.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-600">
                        <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">
                            Realtime Database
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            With Supabase, get realtime data synchronization, authentication, and PostgreSQL-powered databases out of the box.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-600">
                        <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">
                            Future-Proof
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            This template is designed to evolve with modern standards, ensuring that your projects scale easily with new technology.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <h2 className="text-2xl font-medium mb-4 text-blue-600 dark:text-blue-400">
                    About the Creator
                </h2>
                <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg text-center border border-neutral-300 dark:border-neutral-600">
                    <Image
                        src={company}
                        alt="Joemar"
                        width={120}
                        height={120}
                        className="rounded-full mx-auto"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                    <h3 className="text-lg font-semibold mt-4 text-neutral-900 dark:text-neutral-100">
                        Joemar
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400">Template Creator</p>
                    <p className="text-neutral-500 dark:text-neutral-400 mt-2">
                        Joemar created this template to streamline development and ensure consistency. His expertise in Next.js and Supabase is reflected in this solution for modern web development.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="p-8 rounded-lg"
            >
                <h2 className="text-2xl font-medium mb-4 text-blue-600 dark:text-blue-400">
                    The Foundation
                </h2>
                <p className="text-base text-neutral-500 dark:text-neutral-400">
                    Established in 2024, this template combines Next.js' flexibility with Supabase's realtime capabilities and PostgreSQL-powered backend, making it the perfect foundation for any web development project.
                </p>
            </motion.div>
        </section>

    );
};

export default About;
