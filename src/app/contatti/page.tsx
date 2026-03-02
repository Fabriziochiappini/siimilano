"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContattiPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false
    });

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: checked
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!formData.privacy) {
            setStatus({ submitting: false, success: false, error: "Devi accettare l'informativa sulla privacy per procedere." });
            return;
        }

        setStatus({ submitting: true, success: false, error: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ submitting: false, success: true, error: "" });
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    privacy: false
                });
            } else {
                setStatus({ submitting: false, success: false, error: data.error || "Si è verificato un errore." });
            }
        } catch (error) {
            setStatus({ submitting: false, success: false, error: "Si è verificato un errore di connessione." });
        }
    };

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
                                
                                {status.success ? (
                                    <div className="relative z-10 text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <span className="material-symbols-outlined text-4xl">check_circle</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Messaggio Inviato!</h3>
                                        <p className="text-slate-500 dark:text-slate-400 mb-8">Grazie per averci contattato. Abbiamo ricevuto la tua richiesta e ti risponderemo al più presto.</p>
                                        <button 
                                            onClick={() => setStatus({ submitting: false, success: false, error: "" })}
                                            className="px-8 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            Invia un altro messaggio
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                        {status.error && (
                                            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl flex items-center gap-3">
                                                <span className="material-symbols-outlined">error</span>
                                                <p>{status.error}</p>
                                            </div>
                                        )}
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="name">Nome</label>
                                                <input
                                                    className="rounded-lg border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-4 outline-none transition-all font-medium"
                                                    id="name"
                                                    placeholder="Inserisci il tuo nome"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="email">Email</label>
                                                <input
                                                    className="rounded-lg border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-4 outline-none transition-all font-medium"
                                                    id="email"
                                                    placeholder="latua@email.it"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
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
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400" htmlFor="message">Messaggio</label>
                                            <textarea
                                                className="rounded-lg border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:ring-primary focus:border-primary px-4 py-4 outline-none transition-all w-full resize-none font-medium text-lg"
                                                id="message"
                                                placeholder="Scrivi qui il tuo messaggio..."
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl">
                                            <input 
                                                className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" 
                                                id="privacy" 
                                                type="checkbox" 
                                                checked={formData.privacy}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label className="text-sm text-slate-500 dark:text-slate-400 leading-snug cursor-pointer" htmlFor="privacy">
                                                Ho letto l'informativa sulla privacy e acconsento al trattamento dei miei dati personali per le finalità indicate.
                                            </label>
                                        </div>
                                        <button 
                                            className="w-full md:w-auto bg-primary hover:brightness-110 text-slate-900 font-black py-5 px-12 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 uppercase tracking-tighter italic text-lg disabled:opacity-70 disabled:cursor-not-allowed" 
                                            type="submit"
                                            disabled={status.submitting}
                                        >
                                            {status.submitting ? (
                                                <>
                                                    <span className="material-symbols-outlined animate-spin">refresh</span>
                                                    Invio in corso...
                                                </>
                                            ) : (
                                                <>
                                                    <span className="material-symbols-outlined">send</span>
                                                    Invia Messaggio
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
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
                                                    <p className="text-xl font-medium tracking-tight">siisrl.milano@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300">
                                                    <span className="material-symbols-outlined">phone</span>
                                                </div>
                                                <div>
                                                    <p className="font-black text-slate-500 text-[10px] uppercase tracking-widest mb-1">Telefono</p>
                                                    <p className="text-xl font-medium tracking-tight">02 36742919</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">P.IVA: 12287510965</p>
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
                                        className="absolute inset-0 bg-cover bg-center group-hover:-0 transition-all duration-700"
                                        style={{ backgroundImage: "url('/images/cantiere-cemento-armato-grande.jpg')" }}
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
                                href="tel:0236742919"
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
