'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

// Frames ascending from 18 to 44 (reversed animation)
const frames = [
    "/hero-frames/ezgif-frame-018-removebg-preview.png",
    "/hero-frames/ezgif-frame-020-removebg-preview.png",
    "/hero-frames/ezgif-frame-022-removebg-preview.png",
    "/hero-frames/ezgif-frame-024-removebg-preview.png",
    "/hero-frames/ezgif-frame-028-removebg-preview.png",
    "/hero-frames/ezgif-frame-030-removebg-preview.png",
    "/hero-frames/ezgif-frame-034-removebg-preview.png",
    "/hero-frames/ezgif-frame-036-removebg-preview.png",
    "/hero-frames/ezgif-frame-038-removebg-preview.png",
    "/hero-frames/ezgif-frame-042-removebg-preview.png",
    "/hero-frames/ezgif-frame-044-removebg-preview.png"
];

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const processedFrames: HTMLCanvasElement[] = [];
        let imagesLoaded = 0;

        // Preload images
        frames.forEach((src, index) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                const offscreen = document.createElement('canvas');
                offscreen.width = img.width;
                offscreen.height = img.height;
                const ctx = offscreen.getContext('2d');
                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                    const imgData = ctx.getImageData(0, 0, img.width, img.height);
                    const data = imgData.data;

                    // La scritta si trova nella parte inferiore (ultimi 35% dell'immagine)
                    const startY = Math.floor(img.height * 0.65);
                    for (let y = startY; y < img.height; y++) {
                        for (let x = 0; x < img.width; x++) {
                            const i = (y * img.width + x) * 4;
                            const r = data[i];
                            const g = data[i + 1];
                            const b = data[i + 2];
                            const a = data[i + 3];

                            // Se il pixel è scuro e non completamente trasparente
                            if (a > 0 && r < 100 && g < 100 && b < 100) {
                                // Lo coloriamo di bianco
                                data[i] = 255;
                                data[i + 1] = 255;
                                data[i + 2] = 255;
                                // Aumentiamo un po' l'opacità dei bordi per non avere aloni grigi
                                if (a > 20 && a < 255) data[i + 3] = Math.min(255, a * 1.5);
                            }
                        }
                    }
                    ctx.putImageData(imgData, 0, 0);
                }

                processedFrames[index] = offscreen;

                imagesLoaded++;
                if (imagesLoaded === frames.length) {
                    resizeCanvas();
                }
            };
        });

        const resizeCanvas = () => {
            if (!canvas.parentElement) return;
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.parentElement.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            context.scale(dpr, dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            requestAnimationFrame(render);
        };

        window.addEventListener('resize', resizeCanvas);

        const render = () => {
            if (imagesLoaded < frames.length) return;

            // Scroll Logic
            const scrollY = window.scrollY;
            // Animazione più veloce: si completa al 40% dello scroll della finestra
            const maxScroll = window.innerHeight * 0.4;

            // Map scroll to progress 0..1
            let progress = scrollY / maxScroll;
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;

            // Map progress to absolute frame index (float for interpolation)
            const totalFrames = frames.length;
            const absoluteFrame = progress * (totalFrames - 1);
            const frameIndex = Math.floor(absoluteFrame);
            const nextFrameIndex = Math.min(frameIndex + 1, totalFrames - 1);
            const mix = absoluteFrame - frameIndex;

            const img = processedFrames[frameIndex];
            const nextImg = processedFrames[nextFrameIndex];

            if (img) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.imageSmoothingEnabled = true;
                context.imageSmoothingQuality = 'high';

                const drawFrame = (image: HTMLCanvasElement, opacity: number) => {
                    const hRatio = (canvas.width / window.devicePixelRatio) / image.width;
                    const vRatio = (canvas.height / window.devicePixelRatio) / image.height;
                    const baseRatio = Math.min(hRatio, vRatio);
                    const ratio = baseRatio * 1.4; // Ingrandiamo l'immagine del 40%

                    const w = image.width * ratio;
                    const h = image.height * ratio;
                    const x = ((canvas.width / window.devicePixelRatio) - w) / 2;
                    const y = ((canvas.height / window.devicePixelRatio) - h) / 2;

                    context.globalAlpha = opacity;
                    context.drawImage(image, x, y, w, h);
                };

                drawFrame(img, 1 - mix);
                if (mix > 0 && nextImg !== img) {
                    drawFrame(nextImg, mix);
                }
            }
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    render();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);

        // Initial render attempt in case images load very fast or are cached
        if (imagesLoaded === frames.length) {
            resizeCanvas();
        }

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black py-20 lg:py-0">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Testo a sinistra */}
                    <div className="w-full lg:w-1/2 max-w-3xl z-10 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tighter uppercase">
                            ESPERIENZA E INNOVAZIONE <br /><span className="text-primary">IN EDILIZIA</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 font-light mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Ristrutturazioni Edili e Consulenza Tecnica per la riqualificazione del patrimonio immobiliare. Un approccio moderno basato su solide competenze tecniche.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Link href="/servizi">
                                <button className="bg-primary text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
                                    Scopri i Servizi
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Canvas/Animazione a destra */}
                    <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[50vh] lg:h-[70vh]">
                        <canvas
                            ref={canvasRef}
                            id="hero-canvas"
                            className="w-full h-full object-contain opacity-90"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
