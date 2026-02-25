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
                            <h2 className="text-xl text-slate-500 dark:text-slate-400 font-medium">La nostra esperienza sul campo: eccellenza ingegneristica e visione architettonica a Milano.</h2>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-all"></div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Valore degli Interventi</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-primary italic uppercase">Oltre</span>
                                    <span className="text-5xl font-black uppercase">€10M</span>
                                </div>
                                <p className="text-emerald-500 font-bold mt-2 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">trending_up</span> Interventi Realizzati
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter Gallery Section */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            I Nostri Cantieri
                        </h3>
                        <div className="flex flex-wrap gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                            {['Tutti', 'Efficientamento', 'Antisismico', 'Ristrutturazioni', 'Cappotti'].map((filter, i) => (
                                <button
                                    key={filter}
                                    className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${i === 0 ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'font-medium hover:bg-white/50 dark:hover:bg-slate-700/50'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Residenza San Babila',
                                tag: 'Efficientamento',
                                desc: 'Intervento di riqualificazione energetica profonda con installazione di pannelli fotovoltaici integrati.',
                                img: '/images/hero-ponteggi-facciata.jpg'
                            },
                            {
                                title: 'Complex Navigli B4',
                                tag: 'Antisismico',
                                desc: 'Messa in sicurezza sismica di un edificio storico degli anni \'30 mediante esoscheletro metallico.',
                                img: '/images/cantiere-cemento-armato-grande.jpg'
                            },
                            {
                                title: 'Green Towers Porta Nuova',
                                tag: 'Cappotti',
                                desc: 'Applicazione di cappotto termico ad alte prestazioni su facciata continua di 12 piani.',
                                img: '/images/operaio-struttura-cemento.jpg'
                            },
                            {
                                title: 'Loft Isola Project',
                                tag: 'Ristrutturazioni',
                                desc: 'Conversione di ex area industriale in loft residenziali di lusso con finiture premium.',
                                img: '/images/operaio-ferri-armatura.jpg'
                            },
                            {
                                title: 'CityLife Smart Living',
                                tag: 'Efficientamento',
                                desc: 'Integrazione di sistemi domotici avanzati per il controllo energetico centralizzato.',
                                img: '/images/team-cantiere-sopralluogo.jpg'
                            },
                            {
                                title: 'Headquarter Brera',
                                tag: 'Ristrutturazioni',
                                desc: 'Risanamento conservativo di palazzo d\'epoca con rifacimento completo degli impianti.',
                                img: '/images/edificio-costruzione-ponteggi.jpg'
                            }
                        ].map((project) => (
                            <div key={project.title} className="project-card group cursor-pointer relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-[4/5]">
                                <img
                                    alt={project.title}
                                    className=" w-full h-full object-cover group-hover:-0 group-hover:scale-105 transition-all duration-500"
                                    src={project.img}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="inline-block px-3 py-1 bg-primary text-slate-900 text-xs font-black uppercase mb-3 rounded">
                                        {project.tag}
                                    </span>
                                    <h4 className="text-white text-2xl font-bold mb-2 uppercase">{project.title}</h4>
                                    <p className="text-slate-300 text-sm line-clamp-2 mb-4">{project.desc}</p>
                                    <div className="flex items-center text-primary font-bold text-sm group/btn uppercase tracking-tighter">
                                        Scopri il progetto
                                        <span className="material-symbols-outlined ml-2 group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-16 flex justify-center">
                        <button className="px-10 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all uppercase tracking-tight">
                            Carica altri progetti
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
