import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export default function ChiSiamoPage() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased selection:bg-primary selection:text-white">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-black/50 z-10"></div>
                        <img
                            alt="Architettura Moderna"
                            className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWYWZ2Zyd4cH7QnQeb5Gb9bv5P_5pkRhSNLNQjaJhhoL1v_HvxsE_-O-Xfy9yAcZO29ilfTku29Z1Ug6PaWe5jYdyGbNgiF_WRmBHgSAPtnV6fgykROsMKf7KdNcWF3KPSUjDxGe_QOdBSoShkSlQbBzHh_hXjsaOMqnyO7vYvMcPANQODoqjMpxISFNXnxeN-aDnaOOwqSp1YY6s5A0e4Mq7O97HhzcJdH6mAMa_DdpulbF9K9WGhxUPiALun-_aIIZHStUp7Zsc"
                        />
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 uppercase tracking-tighter italic">Chi Siamo</h1>
                        <div className="h-1 w-24 bg-primary mb-8"></div>
                        <h2 className="text-2xl md:text-4xl font-light text-slate-200 max-w-2xl leading-tight">
                            Una storia di competenza, visione e impegno per il futuro delle costruzioni.
                        </h2>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Le Nostre Origini</span>
                                <h2 className="text-4xl font-bold mt-4 mb-8 text-slate-900 dark:text-white uppercase">Radici Solide, Visione Futura</h2>
                                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                    <p>
                                        Fondata nel 2022, <strong className="text-slate-900 dark:text-white font-medium">S.I.I. SRL Milano</strong> nasce con una missione precisa: portare eccellenza tecnica e innovazione nel settore delle costruzioni.
                                    </p>
                                    <p>
                                        La nostra specializzazione nella <span className="text-primary font-medium">ricostruzione post-sismica</span> rappresenta il cuore della nostra competenza, unendo la sicurezza strutturale a una visione architettonica d'avanguardia che rispetti l'identità del territorio.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                                <img
                                    alt="Cantiere Edile"
                                    className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHMthOw-1qIsRKgTE5P0ZNWmjYkbJNOWwl2VPlOP7lBRRLJc5IIPd8aYBiJrI6Qi6mWR6Iod8VOPyaH0wFRx0FLDaR7Emn8CU4ddo40jZWKa5sNeircBU8AupOklEmz2DYL4mMGobKM4KMyhCfIgtngdOkKzepet5NGASMlRiky7HVys3VQOCH6oc3A1InZ3xBDLCBesAgqPUwbI3qLX4Z4kwZvW_3v7OQG4r43evSm4Ypn0tsuJO2o2zyMM13F216FX1TSVP6QEs"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-24 bg-background-light dark:bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                                    <img
                                        alt="Ovidio Borin"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZfwuWCFMwW4uex2D1kWW5igp0UGOtUElNvNmyGfbg-oJDrnLmM5iCL5EkhmOAT7KszM9_9YDaedH9tqtpKXWRhUcoHCTcsRzPp2rzc70tNwDncJTRSwvmhXG23hYU9tMFiVAwtgJYvMlOlMP3woUMG_ZJfMLc_i5mGx1NZ8cMN0YyYDI0tYsVWOG154bD8KlttE5lq6JMPf9hYew226ZybyzrS0o-K4jF-RSowHdaGFv5hSKd6YCKydy5mgJpeyW0kj-Pjsgy_5E"
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Leadership</span>
                                <h2 className="text-4xl font-bold mt-4 mb-2 text-slate-900 dark:text-white uppercase italic tracking-tighter">Il Fondatore: Ovidio Borin</h2>
                                <p className="text-primary text-xl mb-8 font-bold italic uppercase">Visionario e Guida Tecnica</p>
                                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                    <p>
                                        Con oltre 20 anni di esperienza maturata nel panorama edilizio nazionale ed internazionale, Ovidio Borin è la mente dietro la filosofia di S.I.I. SRL Milano.
                                    </p>
                                    <p>
                                        La sua esperienza consolidata con <strong className="text-slate-900 dark:text-white font-medium">Milano Global</strong> ha permesso di creare un ponte tra l'edilizia tradizionale e le nuove frontiere della sostenibilità urbana, focalizzandosi sempre sulla qualità senza compromessi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Persone</span>
                        <h2 className="text-4xl font-bold mt-4 mb-4 text-slate-900 dark:text-white uppercase">Un Mosaico di Competenze</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Il nostro team è composto da professionisti multidisciplinari che collaborano in sinergia per trasformare sfide complesse in soluzioni tangibili.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Area Ingegneria',
                                desc: 'Specialisti in calcoli strutturali e sicurezza sismica.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn-6po9UTcQ-S2pzj695BcRG9AS0XEIoFq0KWimM-948h7eBTC1slK-9P09aPCSHw3KfPlO0ZPRLkwwrFVw-O0H8KGlZ9_zBkSBZSuGBApUAsQOBlenjxPzgQ7uk9LNMnR4Twjt99C8ZBjc2aMFIYmI4KbabAcBzw8DS0_CkmBNb4F7QosBnsbwDctXqHo-50jYp94ZZJ1ifg_EtRoC8rX-aVknch-XLUqduuLL4SbQwj2d1LvSq4ecbdlOMgGHGBu7FRC7CRQ6RE'
                            },
                            {
                                title: 'Design & Architettura',
                                desc: 'Creativi focalizzati sulla sostenibilità e sull\'estetica moderna.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaUJOoV6-eY0c5j8w0FHn7OJ-823rLXK7IbVEaF1CO43t-cZEbYJBAgGpOBlobcSmcVIZBRCp0ZseIvUPOF_PPFHhBIPNzRVFU8WzpwikQOToJxri8q_6YLQNwEQapj2uhfcmLCZsi-h1KyCSnGVdjuJVo1KoFWlsrYLMvPB8z4WmEErXvSsaE7etAqZfml8bP7v_kD1SkzlkIS9iFres8TWoW1MUvE7B_wlaCfqqOJYUMFGzCmCDEUSygWbGRKP7Nby6-TPRlDXs'
                            },
                            {
                                title: 'Project Management',
                                desc: 'Esperti nella gestione dei tempi e ottimizzazione delle risorse.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5m6eq26wBFAEXSzFsh9MiTwZXtOz7hvud7PXzTr4dsCpbVNZ-m6H1V5in_smUciR4-gQ1pXz9Grfs2ADB6Om-1TjO-wtylULR2eU2C-_4hpv13QhOGsGIjegCTnrYh-glET9xPcXIw06chiqXt_C-e4ZCtVkXodxi7i2vfftALVna-M37qIhFHB8eMkOt-fhJf9_S0s2YWN0jhFzNtwb4RL_Wu7tyjjM2yBtyB1yto_hCOFOYF2HTnu5LLYZ_SGe1Tzbfpp9Ze-s'
                            }
                        ].map((team) => (
                            <div key={team.title} className="group">
                                <div className="h-80 mb-6 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                                    <img
                                        alt={team.title}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                        src={team.img}
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-2 uppercase">{team.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 font-light">{team.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Social Responsibility Section */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="max-w-2xl">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Etica & Comunità</span>
                                <h2 className="text-4xl font-bold mt-4 uppercase italic tracking-tighter">Un Impegno che va Oltre l'Edilizia</h2>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="border-l-2 border-primary/30 pl-8 py-4">
                                <h3 className="text-2xl font-bold mb-4 text-primary uppercase">Milano Zoofila</h3>
                                <p className="text-slate-400 font-light">Sosteniamo attivamente la tutela degli animali e la sensibilizzazione al rispetto delle creature più vulnerabili del nostro territorio urbano.</p>
                            </div>
                            <div className="border-l-2 border-primary/30 pl-8 py-4">
                                <h3 className="text-2xl font-bold mb-4 text-primary uppercase">Cooperativa Il Sorriso</h3>
                                <p className="text-slate-400 font-light">Collaboriamo per promuovere l'inclusione sociale e il benessere delle persone in difficoltà, credendo fermamente che ogni individuo meriti dignità.</p>
                            </div>
                            <div className="border-l-2 border-primary/30 pl-8 py-4">
                                <h3 className="text-2xl font-bold mb-4 text-primary uppercase">Earth Pieces Milano 2026</h3>
                                <p className="text-slate-400 font-light">Partner attivi nel progetto verso le Olimpiadi 2026, puntando sulla rigenerazione urbana sostenibile e l'eredità ambientale per le future generazioni.</p>
                            </div>
                        </div>

                        <div className="mt-20 pt-12 border-t border-slate-800 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                            {/* Using CSS-only placeholders as per design but refined */}
                            <div className="h-12 w-32 border border-slate-700 rounded flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-slate-500">Partner I</div>
                            <div className="h-12 w-32 border border-slate-700 rounded flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-slate-500">Partner II</div>
                            <div className="h-12 w-32 border border-slate-700 rounded flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-slate-500">Partner III</div>
                        </div>
                    </div>
                </section>
                <ContactCTA />
            </main>

            <Footer />
        </div>
    );
}
