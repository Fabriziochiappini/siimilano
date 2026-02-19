import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 pt-20 pb-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <img
                                alt="SII Logo"
                                className="h-8 w-auto bw-filter"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh_jenW3GIEP-VQyu8DbXUxoX4L2LfMcY2aCW2FUb8Y4b0AElu8mxb2sgW-vJH1Rs-ISIguatM2jhIc7a6lfedjsS-NsgZ4JmqYJUUpZv-zOw6oDge5JE5V1YQ17eLWCv-I0xHH2DHiR_8sEt1246L81P58ODFaVfUCysgbOa31T2_PXsncfIzArXituC7AIZB-9YrarrO9xddHSLrGxOIzx1AL9XzBC158ln6ZOwTuTrC3pVnlHVRj0Z0KqWlrTRJUWjA5yaovlM"
                            />
                            <span className="text-xl font-bold tracking-tight uppercase text-slate-900 dark:text-white">S.I.I. SRL</span>
                        </div>
                        <p className="text-slate-500 max-w-sm leading-relaxed">
                            Eccellenza tecnica nella riqualificazione immobiliare. Trasformiamo gli edifici di oggi negli spazi sicuri e sostenibili di domani.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-sm">public</span>
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined text-sm">mail</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Navigazione</h4>
                        <ul className="space-y-4">
                            {['Home', 'Chi Siamo', 'Servizi', 'Progetti', 'Metodo'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Contatti</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400">Milano, Italia</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">phone</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400">+39 02 1234567</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400">info@siisrlmilano.it</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">© 2024 S.I.I. SRL Milano. Tutti i diritti riservati. P.IVA 12345678901</p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-slate-400 hover:text-primary">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-slate-400 hover:text-primary">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
