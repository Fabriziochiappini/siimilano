import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContattiPage() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased selection:bg-primary selection:text-white">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative py-16 bg-white dark:bg-background-dark overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-3xl border-l-4 border-primary pl-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tighter uppercase italic">Contatti</h1>
                            <h2 className="text-2xl font-medium text-slate-500 dark:text-slate-400">Siamo qui per ascoltare il tuo progetto.</h2>
                        </div>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left: Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-all"></div>
                                <form action="#" className="space-y-6 relative z-10" method="POST">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="name">Nome</label>
                                            <input
                                                className="rounded-lg border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-4 outline-none transition-all font-medium"
                                                id="name"
                                                placeholder="Inserisci il tuo nome"
                                                type="text"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="email">Email</label>
                                            <input
                                                className="rounded-lg border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-4 outline-none transition-all font-medium"
                                                id="email"
                                                placeholder="latua@email.it"
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="subject">Oggetto</label>
                                        <input
                                            className="rounded-lg border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-4 outline-none transition-all w-full font-medium"
                                            id="subject"
                                            placeholder="Di cosa hai bisogno?"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="message">Messaggio</label>
                                        <textarea
                                            className="rounded-lg border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-4 outline-none transition-all w-full resize-none font-medium text-lg"
                                            id="message"
                                            placeholder="Scrivi qui il tuo messaggio..."
                                            rows={5}
                                        ></textarea>
                                    </div>
                                    <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl">
                                        <input className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" id="privacy" type="checkbox" />
                                        <label className="text-sm text-slate-500 dark:text-slate-400 leading-snug cursor-pointer" htmlFor="privacy">
                                            Ho letto l'informativa sulla privacy e acconsento al trattamento dei miei dati personali per le finalità indicate.
                                        </label>
                                    </div>
                                    <button className="w-full md:w-auto bg-primary hover:brightness-110 text-slate-900 font-black py-5 px-12 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 uppercase tracking-tighter italic text-lg" type="submit">
                                        <span className="material-symbols-outlined">send</span>
                                        Invia Messaggio
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right: Company Info */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Info Card */}
                            <div className="bg-slate-900 text-white rounded-2xl p-10 shadow-2xl relative overflow-hidden group border border-slate-800">
                                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                    <span className="material-symbols-outlined text-[200px]">business</span>
                                </div>
                                <div className="relative z-10 space-y-8">
                                    <div>
                                        <h3 className="text-3xl font-black mb-8 flex items-center gap-3 italic uppercase tracking-tighter">
                                            <span className="w-10 h-[2px] bg-primary inline-block"></span>
                                            S.I.I. SRL
                                        </h3>
                                        <div className="space-y-8">
                                            <div className="flex gap-5">
                                                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300">
                                                    <span className="material-symbols-outlined">location_on</span>
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-500 text-[10px] uppercase tracking-widest mb-1">Sede Legale</p>
                                                    <p className="text-xl font-medium tracking-tight">Via L. Manara 15, Milano (MI)</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300">
                                                    <span className="material-symbols-outlined">engineering</span>
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-500 text-[10px] uppercase tracking-widest mb-1">Sede Operativa</p>
                                                    <p className="text-xl font-medium tracking-tight">Via Gadames 85, Milano (MI)</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300">
                                                    <span className="material-symbols-outlined">mail</span>
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-500 text-[10px] uppercase tracking-widest mb-1">Email</p>
                                                    <p className="text-xl font-medium tracking-tight">info@siisrlmilano.it</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300">
                                                    <span className="material-symbols-outlined">phone</span>
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-500 text-[10px] uppercase tracking-widest mb-1">Telefono</p>
                                                    <p className="text-xl font-medium tracking-tight">+39 02 1234567</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">P.IVA: 01234567890</p>
                                        <div className="flex gap-3">
                                            <div className="size-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all cursor-pointer">
                                                <span className="material-symbols-outlined text-xs italic">share</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Small Map/Location UI */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl group">
                                <div className="h-64 w-full bg-slate-200 dark:bg-slate-800 relative cursor-pointer">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8eL-LveLsLQrWpS0vBT-EYLjmSIerKZZklMOfvC9OkNTPodo7QodqUv3wjDw9SSg4Dqt6sAoVR5-FmG42e7FlG4bCBXFL3j7YNyZRvt4srfFDP4ZBWFlTPaWS6wNSc15vHfyZsM7ptr4ycmbBu9ZJPrrhf4plu76iwkfUor5kVbAlRFOV5yniXy35g9iBf3UiYdt8ZxbcrCFZnhudb7byyMS34isFyq-vPJ7SkVneF99H6ax6pz6ywrI-ZVG6VB5s-xCFWYxmbQI')" }}
                                    ></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-primary p-5 rounded-full shadow-2xl animate-bounce">
                                            <span className="material-symbols-outlined text-slate-900 text-3xl">location_on</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black uppercase tracking-widest text-primary mb-1">Visita il nostro ufficio</span>
                                        <span className="text-lg font-bold tracking-tight">Via Gadames 85, Milano</span>
                                    </div>
                                    <a className="bg-slate-900 text-white dark:bg-slate-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary hover:text-slate-900 transition-all group/maps" href="https://maps.google.com" target="_blank">
                                        Apri Maps
                                        <span className="material-symbols-outlined text-sm group-hover/maps:translate-x-1 transition-transform">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-slate-50 dark:bg-slate-900/40 py-20 mt-12 border-y border-slate-100 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 mb-6 uppercase italic tracking-tighter">Pronto a iniziare?</h3>
                        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-medium">Siamo specializzati in soluzioni integrate per l'ingegneria e l'architettura. Contattaci per una consulenza personalizzata.</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                className="px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-xl hover:brightness-125 transition-all uppercase tracking-tighter italic text-lg shadow-2xl"
                                href="tel:+39021234567"
                            >
                                Chiamaci ora
                            </a>
                            <Link href="/">
                                <button
                                    className="px-12 py-5 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all uppercase tracking-tighter italic text-lg w-full sm:w-auto"
                                >
                                    Torna in Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
