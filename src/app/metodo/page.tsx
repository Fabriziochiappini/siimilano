import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export default function MetodoPage() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Architectural background"
                            className="w-full h-full object-cover bw-filter opacity-40"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_tDfgTfHxxHM6k7M1i-0YB8-21R98Uc4r-VMjSghXTcxQ47imZpJKzZN_x9uxRUBr4OBVOawZIQ5j7RgzSYrqO7VTgc1G9elrc98LWUQ7Wl4s3CMYpu_j9eReY27mzkUojwjmmtr05bc503Vac6fgVFQBPx7XU40YN8pZluTCJHQumcu1UU8YC4WlLn0FzMIJXgML3HJzBobmArnJFa-R9QJ3y_6LdDQUNV4mfo_arboVADv2Y7A_ul9gJBHGPGcEaa19r5lK2TI"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background-light/20 to-background-light dark:from-background-dark/20 dark:to-background-dark"></div>
                    </div>
                    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">Eccellenza Operativa</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">Il Nostro Metodo</h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
                            Precisione, rigore e innovazione al servizio delle grandi opere. Un approccio integrato che trasforma la complessità in eccellenza costruttiva.
                        </p>
                    </div>
                </section>

                {/* Process Infographic Section */}
                <section className="py-24 bg-white dark:bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
                            {/* Progress Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 z-0"></div>

                            {/* Step 1 */}
                            <div className="flex-1 relative z-10 group">
                                <div className="size-16 rounded-full bg-primary text-slate-900 flex items-center justify-center font-bold text-2xl mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform text-black uppercase">1</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Studio Preliminare</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Analisi dettagliata del sito e studi di fattibilità tecnico-economica per gettare basi solide.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter">
                                    <span className="material-symbols-outlined text-sm">analytics</span>
                                    Fase Analitica
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex-1 relative z-10 group">
                                <div className="size-16 rounded-full bg-primary text-slate-900 flex items-center justify-center font-bold text-2xl mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform text-black uppercase">2</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Progettazione Integrata</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Sviluppo di design tecnico integrato utilizzando le tecnologie BIM più avanzate del settore.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter">
                                    <span className="material-symbols-outlined text-sm">architecture</span>
                                    Design Tecnico
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex-1 relative z-10 group">
                                <div className="size-16 rounded-full bg-primary text-slate-900 flex items-center justify-center font-bold text-2xl mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform text-black uppercase">3</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Esecuzione</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Messa in opera del cantiere con personale altamente qualificato e macchinari di ultima generazione.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter">
                                    <span className="material-symbols-outlined text-sm">construction</span>
                                    Fase Costruttiva
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex-1 relative z-10 group">
                                <div className="size-16 rounded-full bg-primary text-slate-900 flex items-center justify-center font-bold text-2xl mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform text-black uppercase">4</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Controllo</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Gestione della qualità continua e monitoraggio rigoroso di ogni singola componente strutturale.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    Qualità Totale
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="flex-1 relative z-10 group">
                                <div className="size-16 rounded-full bg-primary text-slate-900 flex items-center justify-center font-bold text-2xl mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform text-black uppercase">5</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Collaudo</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Test finale, verifica delle prestazioni e approvazione definitiva per la consegna chiavi in mano.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter">
                                    <span className="material-symbols-outlined text-sm">task_alt</span>
                                    Approvazione
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                            <img
                                alt="Technical detail"
                                className="rounded-xl bw-filter shadow-2xl relative z-10 aspect-square object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVbcNR_TtW6WH451wmqCIFOV5Ogrma225hQRpjB4ICEvlKQeq63JNfLEkK-h5J-MW9YKy_GJlvo2tYVcqbGJWWNgVpszDx-6eUQKgxD_YRWMSPAwWtuVHvH63G1nSndcwhvfiYDpSSSaV3DIsbE3h4aDuta0N70flHoLmyLenVADTb0IL-Qk_dlJ-SuZws8lPnCefilSPBxz8-O6Km7URcbnyrNK5BNYW6Z95NsVLiapzhgrV8NbMFBbjpI1VxzdB1nLydbVQ5HiQ"
                            />
                            <div className="absolute bottom-6 right-6 z-20 bg-primary p-6 rounded-lg text-slate-900 border-black border-2">
                                <span className="block text-4xl font-bold text-black">25+</span>
                                <span className="text-xs uppercase font-bold tracking-widest text-black">Anni di Esperienza</span>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 leading-tight">
                                I Pilastri della Nostra <br /><span className="text-primary uppercase">Professionalità</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Competenza', desc: 'Team multidisciplinare certificato con visione globale.' },
                                    { title: 'Tecniche Innovative', desc: 'Utilizzo di materiali e processi costruttivi d\'avanguardia.' },
                                    { title: 'Materiali Certificati', desc: 'Solo forniture garantite dai massimi standard europei.' },
                                    { title: 'Controllo Accurato', desc: 'Supervisione costante in ogni fase del ciclo di vita.' },
                                    { title: 'Rispetto Normative', desc: 'Conformità totale alle leggi su sicurezza e ambiente.' }
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 transition-all hover:border-primary/50">
                                        <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use existing ContactCTA component */}
                <ContactCTA />
            </main>

            <Footer />
        </div>
    );
}
