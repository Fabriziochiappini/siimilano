'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

// Frames ascending from 18 to 44 (reversed animation)
export default function Hero() {
    return (
        <section className="relative min-h-[75vh] flex items-start pt-32 lg:pt-40 overflow-hidden">
            {/* Immagine di Sfondo ad Alta Definizione */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/hero-frames/siimilanohero.png" 
                    alt="S.I.I. SRL Milano Hero Background"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                    {/* Testo in alto a sinistra, solo titolo */}
                    <div className="w-full lg:w-2/3 max-w-3xl z-10 text-left animate-slide-in-delayed opacity-0">
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
                            .animate-slide-in-delayed {
                                animation: slideInLeft 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                                animation-delay: 0.5s;
                            }
                        `}</style>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-[1] mb-6 tracking-tight uppercase">
                            ESPERIENZA E <br />INNOVAZIONE <br /><span className="font-bold text-slate-900">IN EDILIZIA</span>
                        </h1>
                        
                        {/* Paragrafo e bottone nascosti o spostati se necessario, ma per ora rimuovo solo per pulizia come richiesto */}
                    </div>
                </div>
            </div>
        </section>
    );
}
