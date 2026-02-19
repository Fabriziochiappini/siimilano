'use client';

import { useEffect, useRef } from 'react';

// Frames descending from 44 to 18
const frames = [
    "/hero-frames/ezgif-frame-044-removebg-preview.png",
    "/hero-frames/ezgif-frame-042-removebg-preview.png",
    "/hero-frames/ezgif-frame-038-removebg-preview.png",
    "/hero-frames/ezgif-frame-036-removebg-preview.png",
    "/hero-frames/ezgif-frame-034-removebg-preview.png",
    "/hero-frames/ezgif-frame-030-removebg-preview.png",
    "/hero-frames/ezgif-frame-028-removebg-preview.png",
    "/hero-frames/ezgif-frame-024-removebg-preview.png",
    "/hero-frames/ezgif-frame-022-removebg-preview.png",
    "/hero-frames/ezgif-frame-020-removebg-preview.png",
    "/hero-frames/ezgif-frame-018-removebg-preview.png"
];

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const images: HTMLImageElement[] = [];
        let imagesLoaded = 0;

        // Preload images
        frames.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === frames.length) {
                    resizeCanvas();
                }
            };
            images.push(img);
        });

        const resizeCanvas = () => {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            requestAnimationFrame(render);
        };

        window.addEventListener('resize', resizeCanvas);

        const render = () => {
            if (imagesLoaded < frames.length) return;

            // Scroll Logic
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight * 1.0;

            // Map scroll to progress 0..1
            let progress = scrollY / maxScroll;
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;

            // Map progress to frame index
            const totalFrames = frames.length;
            const frameIndex = Math.min(
                totalFrames - 1,
                Math.floor(progress * totalFrames)
            );

            const img = images[frameIndex];

            if (img) {
                // Draw image 'cover' style
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
                );
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
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <canvas
                    ref={canvasRef}
                    id="hero-canvas"
                    className="w-full h-full object-cover bw-filter opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tighter uppercase">
                        ESPERIENZA E INNOVAZIONE <br /><span className="text-primary">IN EDILIZIA</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 font-light mb-10 max-w-2xl leading-relaxed">
                        Ristrutturazioni Edili e Consulenza Tecnica per la riqualificazione del patrimonio immobiliare. Un approccio moderno basato su solide competenze tecniche.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
                            Scopri i Servizi
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}
