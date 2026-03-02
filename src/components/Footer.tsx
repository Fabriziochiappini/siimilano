import Link from "next/link";

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Chi Siamo', href: '/chi-siamo' },
    { label: 'Servizi', href: '/servizi' },
    { label: 'Progetti', href: '/progetti' },
    { label: 'Metodo', href: '/metodo' },
    { label: 'Contatti', href: '/contatti' },
];

export default function Footer() {
    return (
        <div className="relative mt-32">
            {/* Diagonale di stacco tra body e footer */}
            <div className="absolute top-0 left-0 w-full h-32 -translate-y-full overflow-hidden pointer-events-none">
                <svg 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    className="w-full h-full fill-petrol"
                >
                    <polygon points="0,100 100,100 100,0" />
                </svg>
            </div>

            <footer className="bg-petrol pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <img
                                    alt="S.I.I. MILANO S.R.L. Logo"
                                    className="h-20 w-auto brightness-0 invert"
                                    src="https://lh3.googleusercontent.com/d/11zhmHeiQhJ-2qzMV6Sd6tFzoBqH0J5RO"
                                />
                                <span className="text-xl font-bold tracking-tight uppercase text-white">S.I.I. MILANO S.R.L.</span>
                            </div>
                            <p className="text-slate-300 max-w-sm leading-relaxed">
                                Eccellenza tecnica nella riqualificazione immobiliare. Trasformiamo gli edifici di oggi negli spazi sicuri e sostenibili di domani.
                            </p>
                            <div className="flex gap-4">
                                <a href="mailto:siisrl.milano@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white">
                                    <span className="material-symbols-outlined text-sm">mail</span>
                                </a>
                                <a href="tel:0236742919" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white">
                                    <span className="material-symbols-outlined text-sm">phone</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Navigazione</h4>
                            <ul className="space-y-4">
                                {navLinks.map(item => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-slate-300 hover:text-primary text-sm transition-colors">{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Contatti</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Sede Legale</span>
                                        <span className="text-sm text-slate-300">Via L. Manara 15, Milano (MI)</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Sede Operativa</span>
                                        <span className="text-sm text-slate-300">Via Gadames 85, Milano (MI)</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">phone</span>
                                    <a href="tel:0236742919" className="text-sm text-slate-300 hover:text-primary transition-colors">02 36742919</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                    <a href="mailto:siisrl.milano@gmail.com" className="text-sm text-slate-300 hover:text-primary transition-colors">siisrl.milano@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-400">© 2025 S.I.I. MILANO S.R.L. Tutti i diritti riservati. P.IVA 12287510965</p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-xs text-slate-400 hover:text-primary">Privacy Policy</Link>
                            <Link href="#" className="text-xs text-slate-400 hover:text-primary">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
