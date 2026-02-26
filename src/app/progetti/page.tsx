import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProgettiPage() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 dark:border-slate-800 pb-12">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">Progetti</h1>
                            <h2 className="text-xl text-slate-500 dark:text-slate-400 font-medium">La nostra esperienza sul campo: eccellenza ingegneristica e visione architettonica.</h2>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-all"></div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Valore degli Interventi</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-primary italic uppercase">Oltre</span>
                                    <span className="text-5xl font-black uppercase">&euro;10M</span>
                                </div>
                                <p className="text-emerald-500 font-bold mt-2 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">trending_up</span> Interventi Realizzati
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            I Nostri Cantieri
                        </h3>
                    </div>

                    <div className="space-y-24">

                        {/* === CARONNO PERTUSELLA === */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                <span className="inline-block px-4 py-1.5 bg-primary text-slate-900 text-xs font-black uppercase rounded-lg tracking-wider">
                                    Efficientamento
                                </span>
                                <h4 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                                    Caronno Pertusella
                                </h4>
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-3xl leading-relaxed">
                                Intervento di riqualificazione energetica profonda con installazione di pannelli fotovoltaici integrati.
                            </p>
                            {/* 3 foto verticali: 1 grande a sinistra + 2 impilate a destra */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
                                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 h-[400px] md:h-full">
                                    <img
                                        alt="Cantiere Caronno Pertusella - Vista principale"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        src="/images/cantieri/caronno-pertusella-1.jpg"
                                    />
                                </div>
                                <div className="grid grid-rows-2 gap-4 h-[500px] md:h-full">
                                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                                        <img
                                            alt="Cantiere Caronno Pertusella - Dettaglio 1"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            src="/images/cantieri/caronno-pertusella-2.jpg"
                                        />
                                    </div>
                                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                                        <img
                                            alt="Cantiere Caronno Pertusella - Dettaglio 2"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            src="/images/cantieri/caronno-pertusella-3.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-slate-200 dark:border-slate-800"></div>

                        {/* === SOLARO === */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                <span className="inline-block px-4 py-1.5 bg-primary text-slate-900 text-xs font-black uppercase rounded-lg tracking-wider">
                                    Cappotti
                                </span>
                                <h4 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                                    Solaro
                                </h4>
                            </div>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-3xl leading-relaxed">
                                Applicazione di cappotto termico ad alte prestazioni su facciata condominiale con ponteggi e isolamento a regola d&apos;arte.
                            </p>
                            {/* 4 foto orizzontali: 2 grandi sopra + 2 grandi sotto */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[3/2]">
                                    <img
                                        alt="Cantiere Solaro - Vista 1"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        src="/images/cantieri/solaro-1.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[3/2]">
                                    <img
                                        alt="Cantiere Solaro - Vista 2"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        src="/images/cantieri/solaro-2.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[3/2]">
                                    <img
                                        alt="Cantiere Solaro - Dettaglio isolamento"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        src="/images/cantieri/solaro-3.jpg"
                                    />
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[3/2]">
                                    <img
                                        alt="Cantiere Solaro - Dettaglio ponteggi"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        src="/images/cantieri/solaro-4.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-slate-200 dark:border-slate-800"></div>

                        {/* === OLGIATE MOLGORA + IMBERSAGO (affiancati) === */}
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Olgiate Molgora */}
                                <div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <span className="inline-block px-4 py-1.5 bg-primary text-slate-900 text-xs font-black uppercase rounded-lg tracking-wider w-fit">
                                            Cappotti
                                        </span>
                                        <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                                            Olgiate Molgora
                                        </h4>
                                    </div>
                                    <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                        Applicazione di cappotto termico ad alte prestazioni su facciata residenziale multipiano.
                                    </p>
                                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[3/4]">
                                        <img
                                            alt="Cantiere Olgiate Molgora"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            src="/images/cantieri/olgiate-molgora-1.jpg"
                                        />
                                    </div>
                                </div>

                                {/* Imbersago */}
                                <div>
                                    <div className="flex flex-col gap-3 mb-4">
                                        <span className="inline-block px-4 py-1.5 bg-primary text-slate-900 text-xs font-black uppercase rounded-lg tracking-wider w-fit">
                                            Ristrutturazioni
                                        </span>
                                        <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                                            Imbersago
                                        </h4>
                                    </div>
                                    <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                        Ristrutturazione completa di edificio residenziale con intervento strutturale e rifacimento facciate.
                                    </p>
                                    <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[3/4]">
                                        <img
                                            alt="Cantiere Imbersago"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            src="/images/cantieri/imbersago-1.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
