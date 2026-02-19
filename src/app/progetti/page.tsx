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
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC95B2KgTSq-Z-go2ftBfavFUbKo-Ezey-UWbVvcPh7jW3lZKEJE7I86aVSv5-N7sxz9q_Wbmpts0ebULNpx8BhFGzMS9mDRtVqipI5NqfKS2VxGfPUo65CEarhazQXEzw6gkEL0C4zV3_0kYWHns8ii3R-0Mv91iMHsd5JKkelzCGG0Ujjgw5jFrUwhrLpHXoiGbz-qOnJcJhIW5N9hutCpopIsgP39iv9_4zfkpPfsOETfQkqOv61LMqs1GEqcgWa8YFWqcHJ3B0'
                            },
                            {
                                title: 'Complex Navigli B4',
                                tag: 'Antisismico',
                                desc: 'Messa in sicurezza sismica di un edificio storico degli anni \'30 mediante esoscheletro metallico.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9IFJwcMKSwDzDBQ8Oe6_GQEKguDC9SyX0P-Sh6wPNSRUo0m3LksxnmGp1Ah06i7lTsRdGbRuymWG8kJuvCkmHv9YD1og081hnaxOe9jM3FZaj-l_ySV_uBuJw0BGyuPAH4auBE_YwuRfdkNyA5eI1pHGa6muu8ldNpwCEZ3ZvRg_k1DRygrBySjxBgzxEf2xIwds1jriBIVSqrIweiCapWnGyCdXeiTp0cDnkxUALytJqhU_1Ru-V6cCdRP3Ax7pPNu3Icwx7NoA'
                            },
                            {
                                title: 'Green Towers Porta Nuova',
                                tag: 'Cappotti',
                                desc: 'Applicazione di cappotto termico ad alte prestazioni su facciata continua di 12 piani.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNmsV9_Om5UGZfT1_aEb5h3finBU3uFuD6AjKDjHKd5GqbpeSl4Fn0xqTLrWMaYImunajqZOwzetagpaeQNWEfXO9uc8U3H6RKkbO87EUwveC0L099NhbuQwIES6qVdV5NSjySh3PQmvz-uNXlDrZgZ-BuYDbeEJaz2Rsc5Soq9MRDkcbuCJ-hWsAnCoJwg8hh7o1zRGAxOq4Qql2noLIQcSW9qMfAzMM0XLD8GlWNCu-FyxyuafeMfTjXflW8yE-ic80WCnRMFxI'
                            },
                            {
                                title: 'Loft Isola Project',
                                tag: 'Ristrutturazioni',
                                desc: 'Conversione di ex area industriale in loft residenziali di lusso con finiture premium.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2GdkNTnzvewTTjqtZkP9wxHliDqjTcYAVCDG8DCtZHxYYj-urGaQwUMuZ4v_56fAQ5bZa9BUwItIAt8wdqGJxtRgdaPhFA-X0qzsuzLikdZO5bYlGEvc6Nqmqw5Cl3HgeKgXOr5l8fGRwc1AyGCg0eqYqXlS2ndpNMyCrAT2UV9TCs2sRAUcn0uR2o2cCvxeb14ZdGqMhXn0K7w2HAV6EWXruq5A60ApNQBlaJbGNPCLedABkpAu2m6ea3qJd8tNtCtMaSyzGk7A'
                            },
                            {
                                title: 'CityLife Smart Living',
                                tag: 'Efficientamento',
                                desc: 'Integrazione di sistemi domotici avanzati per il controllo energetico centralizzato.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzNQPRb1OjK2syUdABaO7bKhY5lw8v9WHKXXxt5bM2ZdS0gjNyxNjxjSXMdzdjAbJLik475fMpOHkvMlmpz24yOF3zOP9bf8irAwa7GgfGc5wPQCnNQUVUXkPEbf53lh85mE7q4u2U_cnL0vgyKlicmlvEaW3pMRI4nJEhp2Ao5eoP11zN70xsIdcR-w2knsBHU9uKeTdy9KULL93zHhpwiV4ozbkfJ9a3iDBuwUaPJf9OT5K6ew6CgO9Wzq6PEdVjlfEvlEIATZc'
                            },
                            {
                                title: 'Headquarter Brera',
                                tag: 'Ristrutturazioni',
                                desc: 'Risanamento conservativo di palazzo d\'epoca con rifacimento completo degli impianti.',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOkY_ev9nPBDhy7Z6dcLLUMZl4z7fw4hMl9WVNg5TIgxmusFxUqe2nD_93vlDDDHtdKKXtrbG36k8r-BJ8qf4P9H_nbF5B9pNuv-Gk8SJnLZ_5qkqMEuYnn5-UnUvV9cJHMYh3K1DVne2o1qtwg6O89YLd2zmpOix8mRR26wDxMBGsLCgyIj9AdwWqxnXFhszqccDQjZyJEcGkk6wAmAb0aDbgjqUn3ZGCDapfSDncim1oxd7dgOFfMW6RbxjJEddkJlKFkD5925s'
                            }
                        ].map((project) => (
                            <div key={project.title} className="project-card group cursor-pointer relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-[4/5]">
                                <img
                                    alt={project.title}
                                    className="bw-grid-image w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-500"
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
