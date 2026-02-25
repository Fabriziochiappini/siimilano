import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServiziPage() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded mb-6">Eccellenza Tecnica</span>
                                <h1 className="text-6xl md:text-7xl font-bold leading-[0.9] mb-8">Servizi</h1>
                                <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 leading-snug">
                                    Soluzioni ingegneristiche avanzate per la <span className="text-slate-900 dark:text-slate-100 font-bold underline decoration-primary/40">riqualificazione</span> e la <span className="text-slate-900 dark:text-slate-100 font-bold underline decoration-primary/40">sicurezza</span>.
                                </h2>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                                    <img
                                        alt="Grattacielo moderno a Milano in bianco e nero"
                                        className="w-full h-full object-cover contrast-[1.1]"
                                        src="/images/hero-ponteggi-facciata.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-24 bg-white dark:bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="lg:w-1/3">
                                <h2 className="text-3xl font-bold leading-tight border-l-4 border-primary pl-6">
                                    Il Nostro Approccio Tecnico
                                </h2>
                            </div>
                            <div className="lg:w-2/3">
                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    La nostra filosofia di <strong className="text-slate-900 dark:text-slate-100 font-semibold">'Rigenerazione'</strong> va oltre la semplice riparazione. Integriamo analisi ingegneristiche avanzate con soluzioni tecniche d'avanguardia per trasformare il patrimonio edilizio esistente in strutture sicure, efficienti e sostenibili.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800">
                                        <span className="material-symbols-outlined text-primary mb-4 text-3xl">analytics</span>
                                        <h4 className="font-bold mb-2">Analisi Predittiva</h4>
                                        <p className="text-sm text-slate-500">Utilizziamo software di modellazione avanzata per prevedere il comportamento strutturale ed energetico.</p>
                                    </div>
                                    <div className="p-6 bg-background-light dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800">
                                        <span className="material-symbols-outlined text-primary mb-4 text-3xl">verified</span>
                                        <h4 className="font-bold mb-2">Qualità Certificata</h4>
                                        <p className="text-sm text-slate-500">Ogni intervento segue protocolli rigorosi di controllo qualità e conformità normativa europea.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-24 bg-background-light dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-4">Competenze Core</p>
                            <h2 className="text-4xl font-bold">Interventi Specializzati</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Efficientamento Energetico',
                                    icon: 'bolt',
                                    img: '/images/cantiere-cemento-armato-grande.jpg',
                                    desc: 'Diagnosi energetiche complete per la riduzione dei consumi. Ci occupiamo della redazione di APE (Attestato di Prestazione Energetica) e della progettazione di impianti ad alta efficienza per condomini e complessi industriali.',
                                    reverse: false,
                                    bullets: [
                                        'Riduzione costi energetici fino al 40%',
                                        'Incremento valore immobiliare',
                                        'Sistemi di monitoraggio Smart',
                                        'Abbattimento emissioni CO2'
                                    ]
                                },
                                {
                                    title: 'Adeguamento Antisismico',
                                    icon: 'domain_verification',
                                    img: '/images/operaio-struttura-cemento.jpg',
                                    desc: 'Analisi di vulnerabilità sismica per edifici civili e industriali. Implementiamo tecnologie all\'avanguardia come rinforzi in CFRP (fibra di carbonio) e isolatori sismici per garantire la massima sicurezza strutturale.',
                                    reverse: true,
                                    bullets: [
                                        'Sicurezza vita garantita NTC2018',
                                        'Accesso al Sismabonus',
                                        'Rinforzi strutturali non invasivi',
                                        'Certificazione di idoneità statica'
                                    ]
                                },
                                {
                                    title: 'Ristrutturazioni Edili',
                                    icon: 'construction',
                                    img: '/images/operaio-ferri-armatura.jpg',
                                    desc: 'Gestione completa di progetti "Chiavi in Mano". Dalla progettazione architettonica alla direzione lavori, coordiniamo ogni fase del cantiere per assicurare il rispetto di tempi, costi e standard qualitativi.',
                                    reverse: false,
                                    bullets: [
                                        'Unico interlocutore tecnico',
                                        'Rispetto rigoroso del budget',
                                        'Soluzioni di design su misura',
                                        'Pratiche edilizie incluse'
                                    ]
                                },
                                {
                                    title: 'Cappotti Termici (ETICS)',
                                    icon: 'home_repair_service',
                                    img: '/images/edificio-costruzione-ponteggi.jpg',
                                    desc: 'Installazione di sistemi di isolamento termico a cappotto certificati ETICS. Progettiamo l\'involucro edilizio per eliminare i ponti termici e migliorare radicalmente il comfort igrometrico interno.',
                                    reverse: true,
                                    bullets: [
                                        'Eliminazione muffe e condense',
                                        'Comfort termico estate/inverno',
                                        'Materiali isolanti ecosostenibili',
                                        'Detrazioni fiscali immediate'
                                    ]
                                },
                                {
                                    title: 'Consulenza Tecnica Strategica',
                                    icon: 'psychology',
                                    img: '/images/team-cantiere-sopralluogo.jpg',
                                    desc: 'Supporto specialistico per studi di fattibilità tecnico-economica. Esperti nella gestione di incentivi fiscali come il Superbonus, forniamo asseverazioni e due diligence per compravendite immobiliari.',
                                    reverse: false,
                                    bullets: [
                                        'Analisi di fattibilità accurata',
                                        'Ottimizzazione incentivi fiscali',
                                        'Mitigazione rischi normativi',
                                        'Pianificazione finanziaria lavori'
                                    ]
                                }
                            ].map((service) => (
                                <div key={service.title} className="group service-card bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300">
                                    <div className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                                            <img
                                                alt={service.title}
                                                className="w-full h-full object-cover contrast-[1.1] group-hover:scale-110 transition-transform duration-700"
                                                src={service.img}
                                            />
                                        </div>
                                        <div className="md:w-2/3 p-8 md:p-12">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary service-icon transition-transform">
                                                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                                {service.desc}
                                            </p>
                                            <div className="bg-background-light dark:bg-slate-800/50 rounded-lg p-6">
                                                <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Benefici Tecnici</h4>
                                                <ul className="grid sm:grid-cols-2 gap-3">
                                                    {service.bullets.map((bullet) => (
                                                        <li key={bullet} className="flex items-center gap-2 text-sm">
                                                            <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-primary text-slate-900">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic">Pronto a trasformare il tuo edificio?</h2>
                        <p className="text-xl opacity-90 mb-10 font-medium">
                            S.I.I. SRL Milano mette a disposizione i suoi ingegneri per una consulenza tecnica preliminare gratuita.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contatti">
                                <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 uppercase tracking-tight w-full sm:w-auto">
                                    Richiedi un Sopralluogo
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </Link>
                            <button className="bg-white/20 backdrop-blur-sm border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-white/30 transition-all uppercase tracking-tight">
                                Scarica Brochure PDF
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
