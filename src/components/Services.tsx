export default function Services() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Cosa Facciamo</span>
                        <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Soluzioni Edili Certificate</h2>
                    </div>
                    <p className="max-w-md text-slate-500 dark:text-slate-400">Offriamo un ventaglio completo di servizi per la valorizzazione e la sicurezza dei vostri immobili.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        { icon: 'bolt', title: 'Efficientamento Energetico', desc: 'Riduzione dei consumi e ottimizzazione delle risorse energetiche.' },
                        { icon: 'shield', title: 'Adeguamento Antisismico', desc: 'Sicurezza strutturale per la protezione del vostro patrimonio.' },
                        { icon: 'apartment', title: 'Ristrutturazioni Edili', desc: 'Interventi di restyling e consolidamento professionale.' },
                        { icon: 'layers', title: 'Cappotti Termici', desc: 'Isolamento termico di alta qualità per il massimo comfort.' },
                        { icon: 'engineering', title: 'Consulenza Tecnica', desc: 'Supporto professionale per ogni fase del progetto.' },
                    ].map((service, index) => (
                        <div key={index} className="group p-8 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-primary transition-all duration-300 bg-slate-50 dark:bg-slate-900/50">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">{service.icon}</span>
                            <h3 className="text-lg font-bold mb-3 leading-tight text-slate-900 dark:text-white">{service.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
