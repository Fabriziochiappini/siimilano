'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-white pt-20">
            {/* Immagine di Sfondo ad Alta Definizione */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/hero-frames/hero.png" 
                    alt="S.I.I. SRL Milano Hero Background"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center', transform: 'scale(1.33)' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between md:justify-start py-12">
                {/* Testo in alto a sinistra: S.I.I. MILANO */}
                <div className="w-full lg:w-1/3 text-left animate-slide-in-left opacity-0 pl-4 md:pl-8">
                    <style jsx>{`
                        @keyframes slideInLeft {
                            from {
                                opacity: 0;
                                transform: translateX(-50px);
                            }
                            to {
                                opacity: 1;
                                transform: translateX(0);
                            }
                        }
                        .animate-slide-in-left {
                            animation: slideInLeft 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                            animation-delay: 0.5s;
                        }
                    `}</style>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                        S.I.I. MILANO
                    </h2>
                </div>

                {/* Testo in basso a destra */}
                <div className="w-full flex justify-end pb-20 md:pb-0 md:mt-40">
                    <div className="w-full lg:w-2/3 max-w-3xl text-right animate-slide-in-right opacity-0 pr-4 md:pr-8">
                        <style jsx>{`
                            @keyframes slideInRight {
                                from {
                                    opacity: 0;
                                    transform: translateX(50px);
                                }
                                to {
                                    opacity: 1;
                                    transform: translateX(0);
                                }
                            }
                            .animate-slide-in-right {
                                animation: slideInRight 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                                animation-delay: 0.5s;
                            }
                        `}</style>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.1] mb-6 tracking-tight uppercase">
                            ESPERIENZA E <br />INNOVAZIONE <br /><span className="font-bold text-slate-900">IN EDILIZIA</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
