import Link from 'next/link';

export default function ContactCTA() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-primary rounded-2xl p-12 md:p-20 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Hai un progetto? <br />Parliamone.</h2>
                        <p className="text-white/80 text-lg max-w-md">Contattaci oggi per una consulenza tecnica gratuita sul tuo immobile.</p>
                    </div>
                    <Link href="/contatti">
                        <button className="bg-slate-900 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl whitespace-nowrap">
                            Contattaci Ora
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
