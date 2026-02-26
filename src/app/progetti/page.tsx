import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProgettiPage() {
    const projects = [
        {
            title: 'Caronno Pertusella',
            tag: 'Efficientamento',
            desc: 'Intervento di riqualificazione energetica profonda con installazione di pannelli fotovoltaici integrati.',
            images: [
                '/images/cantieri/caronno-pertusella-1.jpg',
                '/images/cantieri/caronno-pertusella-2.jpg',
                '/images/cantieri/caronno-pertusella-3.jpg',
            ],
        },
        {
            title: 'Solaro',
            tag: 'Cappotti',
            desc: 'Applicazione di cappotto termico ad alte prestazioni su facciata condominiale con ponteggi e isolamento a regola d&apos;arte.',
            images: [
                '/images/cantieri/solaro-1.jpg',
                '/images/cantieri/solaro-2.jpg',
                '/images/cantieri/solaro-3.jpg',
                '/images/cantieri/solaro-4.jpg',
            ],
        },
        {
            title: 'Olgiate Molgora',
            tag: 'Cappotti',
            desc: 'Applicazione di cappotto termico ad alte prestazioni su facciata residenziale multipiano.',
            images: [
                '/images/cantieri/olgiate-molgora-1.jpg',
            ],
        },
        {
            title: 'Imbersago',
            tag: 'Ristrutturazioni',
            desc: 'Ristrutturazione completa di edificio residenziale con intervento strutturale e rifacimento facciate.',
            images: [
                '/images/cantieri/imbersago-1.jpg',
            ],
        },
    ];

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
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            I Nostri Cantieri
                        </h3>
                    </div>

                    <div className="space-y-20">
                        {projects.map((project) => (
                            <div key={project.title} className="group">
                                {/* Project Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                    <span className="inline-block px-4 py-1.5 bg-primary text-slate-900 text-xs font-black uppercase rounded-lg tracking-wider">
                                        {project.tag}
                                    </span>
                                    <h4 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                                        {project.title}
                                    </h4>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-3xl leading-relaxed">
                                    {project.desc}
                                </p>

                                {/* Photo Gallery */}
                                {project.images.length === 1 ? (
                                    <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                                        <div className="aspect-[16/9] md:aspect-[21/9]">
                                            <img
                                                alt={`Cantiere ${project.title}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                                src={project.images[0]}
                                            />
                                        </div>
                                    </div>
                                ) : project.images.length <= 3 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {project.images.map((img, i) => (
                                            <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[3/4]">
                                                <img
                                                    alt={`Cantiere ${project.title} - Foto ${i + 1}`}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                                    src={img}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {project.images.map((img, i) => (
                                            <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[4/3]">
                                                <img
                                                    alt={`Cantiere ${project.title} - Foto ${i + 1}`}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                                    src={img}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Divider */}
                                <div className="mt-16 border-b border-slate-200 dark:border-slate-800 last:border-0"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
