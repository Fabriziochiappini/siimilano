import Link from "next/link";

export default function About() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all"></div>
                        <img
                            alt="Cantiere S.I.I. SRL Milano"
                            className="relative rounded-xl bw-filter shadow-2xl w-full aspect-square object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgsixixzeDFedd7Isa16QDANvQ79Cp35BrSwgaIBA76VdqIL4TYIOGel7sA-Ef8i6Qp37sT-ypBpxxS9F5D9oCLX9H4_QaMBwUZH7GgIRv7X-A282xhajLrpOq84lzeevLI71NOvD0ixj3ZlCMOU7MBrRmXq1DcXDAi3585Gbd7XP8nH89_wH5pCHV8hkrLf0H6f2tRSAazHFOdsW4d9zyJbmm04JlcZhv0W6AHsnA5If8bVOLU_v1PKwK1vlQnUqAzj300aov19o"
                        />
                        <div className="absolute bottom-6 right-6 bg-primary p-6 rounded-lg text-white max-w-[200px] shadow-xl">
                            <span className="text-4xl font-bold block mb-1">2022</span>
                            <span className="text-xs uppercase font-bold tracking-widest leading-tight block">Anno di Fondazione</span>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Chi Siamo</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white leading-tight">Solidità tecnica, visione contemporanea.</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                S.I.I. SRL nasce nel 2022 dall&apos;unione di esperienze consolidate nel settore edilizio e dalla visione di Ovidio Borin, imprenditore con oltre 20 anni di attività nel comparto. La società si propone come partner tecnico di riferimento per la riqualificazione energetica e strutturale del patrimonio immobiliare milanese, integrando competenze ingegneristiche avanzate con un approccio orientato alla sostenibilità e all&apos;innovazione.
                            </p>
                        </div>
                        <Link href="/chi-siamo" className="group inline-flex items-center gap-3 text-slate-900 dark:text-white font-bold text-lg hover:text-primary transition-colors">
                            La Nostra Storia
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}
