export default function About() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all"></div>
                        <img
                            alt="Architectural details"
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
                                S.I.I. SRL nasce nel 2022 a Milano dalla volontà di integrare l'esperienza ultraventennale dei propri fondatori con le più moderne tecnologie costruttive. La nostra missione è guidare la trasformazione del patrimonio immobiliare attraverso interventi mirati di riqualificazione energetica e strutturale.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pb-4">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm text-slate-700 dark:text-slate-300">Qualità Certificata</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-sm text-slate-700 dark:text-slate-300">Milano e Provincia</span>
                            </div>
                        </div>
                        <button className="group inline-flex items-center gap-3 text-slate-900 dark:text-white font-bold text-lg hover:text-primary transition-colors">
                            La Nostra Storia
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}
