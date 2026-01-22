

export default function Home() {
    return (
        <div className="relative">
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="dynamic-grid absolute inset-0 w-full h-[200%] animate-grid-move opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-true-black via-transparent to-true-black"></div>
            </div>

            <div className="fixed top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-float pointer-events-none"></div>
            <div
                className="fixed bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-float pointer-events-none"
                style={{ animationDelay: '-5s' }}
            ></div>

            <nav className="fixed top-0 left-0 w-full z-50 nav-blur">
                <div className="max-w-7xl mx-auto px-8 md:px-12 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-8 h-8 flex items-center justify-center border border-white/20 rotate-45 group-hover:rotate-180 transition-transform duration-700">
                            <span className="material-symbols-outlined !text-lg -rotate-45">adjust</span>
                        </div>
                        <span className="text-white text-sm font-bold tracking-[0.4em] uppercase">Studio Dark</span>
                    </div>
                    <div className="hidden md:flex items-center gap-12">
                        <a className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors" href="#">Portfolio</a>
                        <a className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors" href="#">Services</a>
                        <a className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors" href="#">About</a>
                        <button className="pill-button">Inquiry</button>
                    </div>
                    <button className="md:hidden text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>

            <div className="relative z-10">
                <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center pt-20">
                    <div className="mb-8 overflow-hidden">
                        <span className="inline-block text-primary text-[10px] font-bold uppercase tracking-[0.6em] border-b border-primary/30 pb-2">Aesthetic Visualist & Creative Director</span>
                    </div>
                    <h1 className="text-white text-6xl md:text-[10rem] font-serif leading-[0.9] tracking-tight mb-12 max-w-6xl">
                        CREATIVE <br />
                        <span className="italic text-white/90">Director</span> <span className="font-sans font-black text-white/20">&</span> <span className="italic">Visualist</span>
                    </h1>
                    <p className="text-white/40 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-16 font-serif italic">
                        Crafting cinematic digital experiences for brands that demand distinction through minimalist systems and high-contrast visuals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 items-center">
                        <button className="pill-button bg-white text-black border-white px-12 py-4 text-xs">View Case Studies</button>
                        <button className="pill-button px-12 py-4 text-xs">The Studio</button>
                    </div>
                </section>

                <div className="w-full border-y border-white/5 py-12 overflow-hidden bg-white/[0.02] backdrop-blur-sm">
                    <div className="flex whitespace-nowrap animate-marquee">
                        <div className="flex gap-20 items-center px-10">
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Akmal</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Web gabut</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Cinematic Motion</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                        </div>
                        <div className="flex gap-20 items-center px-10">
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Akmal</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Web gabut</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Cinematic Motion</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                        </div>
                        <div className="flex gap-20 items-center px-10">
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Akmal</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Web gabut</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Cinematic Motion</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                        </div>
                        <div className="flex gap-20 items-center px-10">
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Akmal</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Web gabut</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                            <span className="text-white/10 text-6xl font-serif italic uppercase tracking-[0.2em]">Cinematic Motion</span>
                            <span className="w-3 h-3 rounded-full bg-primary/20"></span>
                        </div>
                    </div>
                </div>

                <section className="max-w-7xl mx-auto px-8 md:px-12 py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-serif italic mb-6">Expertise</h2>
                            <p className="text-white/40 max-w-md font-light">Leveraging a decade of experience in premium design to deliver unparalleled digital outcomes.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-card p-12 rounded-[2rem] flex flex-col gap-8">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined !text-3xl text-primary/80">architecture</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Brand Systems</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">Architecting visual languages that endure. From typography to tone of voice, we build identities that resonate at the highest level of luxury.</p>
                            </div>
                        </div>
                        <div className="glass-card p-12 rounded-[2rem] flex flex-col gap-8">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined !text-3xl text-primary/80">responsive_layout</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Digital UX</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">Interaction design as an art form. We create seamless, high-fidelity digital interfaces that prioritize performance and aesthetic sophistication.</p>
                            </div>
                        </div>
                        <div className="glass-card p-12 rounded-[2rem] flex flex-col gap-8">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined !text-3xl text-primary/80">play_circle</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Motion Design</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light">Bringing pixels to life through kinetic energy. We specialize in sophisticated motion that enhances storytelling and user engagement.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-8 md:px-12 pb-40">
                    <div className="flex items-end justify-between mb-24">
                        <h2 className="text-5xl md:text-7xl font-serif italic">Case Studies</h2>
                        <a className="group flex items-center gap-4 text-xs font-bold tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors" href="#">
                            Explore All Projects
                            <span className="material-symbols-outlined !text-sm group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
                        </a>
                    </div>
                    <div className="space-y-32">
                        <div className="group relative">
                            <div className="aspect-[16/8] md:aspect-[21/9] w-full overflow-hidden rounded-[3rem] bg-charcoal border border-white/5 relative">
                                <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out opacity-60 group-hover:opacity-100" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr-yF3XyAqS3HZ2ADnUMwhsMbAmjPdoE_osQt0-lPJk22Os-DsoLEUApor_Ae3wYd99uXkg0V0EV2Ho_edzYZDTaNREDDQOMZ_rbPsnNNvUy1PiLFM4FP9gj_KfMpXENZg_AgHBMejkx_WEMFNCcehEcBIn7pw8sOxvFN20M8SefeAfElI214bs-IB9EZ8vG6qRy-B1GKpWRIyhgUSzeic2Xuj4_ucdaZ_My5m3syfduos7v9cE8wXryk3qg2nMLluLdB4QvXcUVyx')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-true-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-4">Fintech Ecosystem</span>
                                    <h3 className="text-4xl md:text-7xl font-serif italic mb-6">Aether Digital</h3>
                                    <button className="pill-button w-fit px-12">View Project</button>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-between items-center group-hover:opacity-0 transition-opacity duration-500">
                                <h4 className="text-2xl font-serif italic">Aether Digital Ecosystem</h4>
                                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">2024 • Strategy / UIUX</span>
                            </div>
                        </div>
                        <div className="group relative">
                            <div className="aspect-[16/8] md:aspect-[21/9] w-full overflow-hidden rounded-[3rem] bg-charcoal border border-white/5 relative">
                                <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out opacity-60 group-hover:opacity-100" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq9wsikayfK_-geAMTmDVjuOY2DreReiNjR63Nlmok7i88JFKUdc1mVR60iLAi0PebqDW35f5OkNNzo5x6dsipVgXSZQKRz9Xib51TBMoeSsdTL140ZUc3d3KMBZVqo-dxzX5590ImT49578kUs12_8gQLshhV4v0UpbJ-P2_OBF5f30sCE6QIlYkPkWDiiTlh5WvBKNWuAkspWuQDdffHar_cecmMeCAqnlJlcrg3AlgCPr-X75iHuQev8rYlNFtaLL3NQ3UlOU3N')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-true-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-4">Architectural Brand</span>
                                    <h3 className="text-4xl md:text-7xl font-serif italic mb-6">Onyx Identity</h3>
                                    <button className="pill-button w-fit px-12">View Project</button>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-between items-center group-hover:opacity-0 transition-opacity duration-500">
                                <h4 className="text-2xl font-serif italic">Onyx Structural Identity</h4>
                                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">2023 • Identity Design</span>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-charcoal border-t border-white/5 pt-32 pb-16 px-8 md:px-12">
                    <div className="max-w-7xl mx-auto flex flex-col gap-24">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                            <div className="max-w-xl">
                                <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Let's create something timeless.</h2>
                                <button className="pill-button px-16 py-6 text-sm bg-white text-black border-white">Start a Project</button>
                            </div>
                            <div className="grid grid-cols-2 gap-20">
                                <div className="flex flex-col gap-6">
                                    <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">Connect</span>
                                    <a className="text-sm hover:text-primary transition-colors" href="#">Instagram</a>
                                    <a className="text-sm hover:text-primary transition-colors" href="#">LinkedIn</a>
                                    <a className="text-sm hover:text-primary transition-colors" href="#">Behance</a>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">Office</span>
                                    <p className="text-sm text-white/50 leading-relaxed">Studio Dark<br />88 Shoreditch High St<br />London, E1 6JQ</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold tracking-[0.4em] text-white/30 uppercase">
                            <span>© 2024 Studio Dark. All Rights Reserved.</span>
                            <div className="flex items-center gap-12">
                                <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                                <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                <span>Available for projects</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
