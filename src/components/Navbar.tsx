'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-3">
                        {/* Using standard img tag as per design request for specific external URL, or could use next/image with domains config */}
                        <img
                            alt="S.I.I. SRL Logo"
                            className="h-10 w-auto"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtyq18FxBb77e-WfZIJoKMxU4tse8WaRNl-CZxp3dXKsNVY2zwOPbKcpkWtY2eSgMDwO82SzfXjt7IXq-4ga-j6-Q5qAgU8KeapG_IOj3-Vll4vVpU3_juasD6OsoRC-kMy87tJd97YmnAhCBMicuur1qOY5C9bQsXkV5P8uZWsihe14zYoDYJLOYRsoAEeuPpG4NdHfJSeMVMK2k8mXQOhHds1HlgJWTJqTavvq3lsLOqy71JsgbzdyBDse1ujXZUXiENJs3y9JE"
                        />
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase hidden sm:block">S.I.I. SRL</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Chi Siamo', href: '/chi-siamo' },
                            { name: 'Servizi', href: '/servizi' },
                            { name: 'Progetti', href: '/progetti' },
                            { name: 'Metodo', href: '/metodo' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <img
                            alt="Logo S.I.I. SRL"
                            className="h-14 w-auto rounded-lg shadow-sm"
                            src="https://lh3.googleusercontent.com/d/11zhmHeiQhJ-2qzMV6Sd6tFzoBqH0J5RO"
                        />
                        <Link href="/contatti">
                            <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-sm">
                                Contatti
                            </button>
                        </Link>
                        <button
                            className="md:hidden text-slate-900 dark:text-white p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Chi Siamo', href: '/chi-siamo' },
                            { name: 'Servizi', href: '/servizi' },
                            { name: 'Progetti', href: '/progetti' },
                            { name: 'Metodo', href: '/metodo' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
