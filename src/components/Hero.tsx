'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Immagine di Sfondo ad Alta Definizione */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/hero-frames/hero.png" 
                    alt="S.I.I. SRL Milano Hero Background"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center', transform: 'scale(1.33)' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-start">
                <div className="w-full flex justify-between relative h-full">
                    {/* Testo in alto a sinistra: S.I.I. MILANO - Posizionato in alto in assoluto */}
                    <div className="absolute top-0 left-0 w-full lg:w-1/3 z-10 text-left animate-slide-in-left opacity-0 pl-8 pt-4">
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

                    {/* Testo in alto a destra - Più piccolo e posizionato normalmente (o con margin top se serve staccarlo) */}
                    <div className="w-full flex justify-end mt-32 md:mt-40">
                        <div className="w-full lg:w-2/3 max-w-3xl z-10 text-right animate-slide-in-right opacity-0 pr-8">
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
            </div>
        </section>
    );
}
