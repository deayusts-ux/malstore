
export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col w-full overflow-x-hidden">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-[#283639] bg-[#111718]/90 backdrop-blur-md px-6 py-3 lg:px-10">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-white">
                        <div className="size-8 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">token</span>
                        </div>
                        <h2 className="text-white text-xl font-display font-bold leading-tight tracking-[-0.015em]">CyberStore</h2>
                    </div>
                    <div className="hidden lg:flex items-center gap-9">
                        <a className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal font-display" href="#">Store</a>
                        <a className="text-[#9db5b9] hover:text-white transition-colors text-sm font-medium leading-normal font-display" href="#">Community</a>
                        <a className="text-[#9db5b9] hover:text-white transition-colors text-sm font-medium leading-normal font-display" href="#">Support</a>
                        <a className="text-[#9db5b9] hover:text-white transition-colors text-sm font-medium leading-normal font-display" href="#">My Library</a>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-4 lg:gap-8">
                    <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64 group">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-transparent group-focus-within:border-primary/50 transition-colors">
                            <div className="text-[#9db5b9] flex bg-[#283639] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 bg-[#283639] h-full placeholder:text-[#9db5b9] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal font-display" placeholder="Search games..." defaultValue="" />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center rounded-lg size-10 bg-[#283639] hover:bg-[#34464a] text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                        </button>
                        <button className="flex items-center justify-center rounded-lg size-10 bg-[#283639] hover:bg-[#34464a] text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                        </button>
                        <button className="hidden sm:flex items-center justify-center rounded-lg size-10 bg-[#283639] hover:bg-[#34464a] text-white transition-colors">
                            <span className="material-symbols-outlined text-[20px]">person</span>
                        </button>
                    </div>
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-[#283639]" data-alt="User profile avatar placeholder" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGAx29xt5puY2gLL_CDI_g-9LYogLs8ZQpNAta22Flwk73p1QIIqVmJOJxMvAMCKrSBneJB9Cjr7pkC69wch4PvKrE5kgSuiQ3nq-Zs3YovJfl3xIS9piBkfj4DnjDhB1Yl_DvR-NwZuWL8UbO-HRj52mDglkcISPxib3y67M2fPN06L4Ef6OeCVQxxTVzrDqMEpzC_WObc95XOQggwBjQMTX6NmNsRohGHO52LueTabnsgqdFwYHdGZtHIN8fiMiwPMkNAdkd4J0")' }}></div>
                </div>
            </header>
            {/* Hero Background Image */}
            <div className="absolute top-0 left-0 w-full h-[80vh] z-0 pointer-events-none">
                <div className="w-full h-full bg-cover bg-center" data-alt="Futuristic cyberpunk city skyline at night with neon lights" style={{ backgroundImage: 'url("/images/product.png")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#101113]/30 via-[#101113]/80 to-[#101113]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#101113]/90 via-transparent to-[#101113]/40"></div>
            </div>
            {/* Main Content Layout */}
            <main className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-8">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 py-4 mb-4">
                    <a className="text-[#9db5b9] text-sm font-medium hover:text-primary transition-colors font-display" href="#">Store</a>
                    <span className="text-[#586466] text-sm font-medium">/</span>
                    <a className="text-[#9db5b9] text-sm font-medium hover:text-primary transition-colors font-display" href="#">Action RPG</a>
                    <span className="text-[#586466] text-sm font-medium">/</span>
                    <span className="text-white text-sm font-medium font-display">Cyber Odyssey 2077</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Media & Details (8 cols) */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Media Gallery */}
                        <div className="space-y-4">
                            {/* Main Viewport */}
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-[#283639] shadow-2xl group cursor-pointer">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all z-20">
                                    <div className="size-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-[0_0_30px_rgba(17,183,212,0.4)] group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-black text-3xl ml-1">play_arrow</span>
                                    </div>
                                </div>
                                <div className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105" data-alt="Action packed game scene with characters fighting robots" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSedr03qUdstJyDf-Z_YMfgi6WFPOoFq3quprwjLVCuIF3cujfOQm0a5LMaVgst4rAb61Ps_1Z-4Ssao-F9AEAtZq6c-qPipbFIKibiXHxje0qjhGv_Xs1U_g2pV7ePNpf8DCT6gI9FH7-m4VPfQ62cRgZN4n1mUXAV78a1wozBEHeDnLwkdW7U7NuK89Jyogy2K5uVg8qk1cvfVv8R87g3D-djV7LX5qr9UVBjxcvbXIdlaVtkgSEj5vlKI0gnlxY4h7C2gBnr2s")' }}></div>
                                <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur rounded text-xs font-bold font-display uppercase tracking-wider text-white">Trailer 1</div>
                            </div>
                            {/* Thumbnails Carousel */}
                            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 mask-linear">
                                <button className="flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border-2 border-primary relative">
                                    <div className="w-full h-full bg-cover bg-center" data-alt="Thumbnail of game trailer" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYFHJV8ZfYrpGU4q1P2fyAsag4f7UL2jH8cUD-exShcnIJshwKSLcB4bEvQv-wlwhyL3FL9dBHUhSO9-ZzonLAXRR0GmOpaTHAOMJDuQz_qkTX91sm_3dVJ_11P6XnFeQUuCzB1Nbn70pdq8EjuFKCs-JaL2DJcNa4Zt8C13VKIdY9p9AuT9AH7Nz1MZ-ZFu8ONp-FAUt6hIPQDUG8fJC1pRTjWZlxgT6C00mPd1SBxOjBnIQvehgXY1fa3DtEOWQmnQ3VY3p3OL4")' }}></div>
                                    <div className="absolute inset-0 bg-primary/20"></div>
                                </button>
                                <button className="flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border border-[#283639] opacity-70 hover:opacity-100 hover:border-primary/50 transition-all">
                                    <div className="w-full h-full bg-cover bg-center" data-alt="Thumbnail of game gameplay combat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtljr36w6dZzo6gyEIBHL71wBHMZmfNZB5u5IEmNs0gbRV7HdKwwn8NezWM-8_pkUhAdTazSAT-9Tw4GXYkHeEy5AXrGqKZG6Mglb7_N5Yudn_FWBcitoxLgBrEA3m5a5esCUc6ai_Knt2yJ_Yvb9QEcITqilD4HMUUMq3qLN3Xiv0ubnjqdHGyImv9yYx-SA1CCfDWw6joav9CiCRYsWkQIbiAOo2eOXDUxogOx7-XCQXkBP4iTvPe5BfU2YcGKCwLuiEL-ytmqI")' }}></div>
                                </button>
                                <button className="flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border border-[#283639] opacity-70 hover:opacity-100 hover:border-primary/50 transition-all">
                                    <div className="w-full h-full bg-cover bg-center" data-alt="Thumbnail of cinematic cutscene" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-EHx519VxVvPjhnUpCuQXuFb5VKD3ZATN096vEdEMkmJSoZbqmk9fYhgBljpJFc6dQmYCHbM0tJm8shB-OiCneCgSDQCcNubc9mMkx2qjIlpqcg1Lotczwg4LXMuEBSnV2SI3ay4phu4hzaUInlBHtGtFj6_oGnXRXSr53ukVIo-oOqldiM82B3fjxvBl6haEh3w-uN0OFqV1Vj7t_1quZUC_rlwhCSgtQnDDF3QRSeabO1F21rTab9l2_jEM2RWeC_xtiuTt3tI")' }}></div>
                                </button>
                                <button className="flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border border-[#283639] opacity-70 hover:opacity-100 hover:border-primary/50 transition-all">
                                    <div className="w-full h-full bg-cover bg-center" data-alt="Thumbnail of character customization screen" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAw8pZLQyn67wy8H8zUqb6eMkX9M_b1ep0wxY23Su__OUjgmJ3b7U1dT6p4vZF3eFlhQBLJDLuIxyiEv0sJspicq3IX5CgOytqgg0I1YJwGpwvOr4bC-kbxxgB-JE8hw3r8w_9bTvCdAk3udIow9R18H1qwgPM27G7FOkBbH9E7td_Jhnif6ydUmfsKXl7Cs6ThIoMuyZK1JyfPzHg_OMT0WfXnlKSHrKAEz79x_dVlySgkSFfxwvYvcJOVkfm7PMJouJeo4sebH8")' }}></div>
                                </button>
                                <button className="flex-shrink-0 w-32 aspect-video rounded-lg overflow-hidden border border-[#283639] opacity-70 hover:opacity-100 hover:border-primary/50 transition-all">
                                    <div className="w-full h-full bg-cover bg-center" data-alt="Thumbnail of open world map view" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD008-VBqMk3cCsosMb3OlMqGvQi9U5i7p-myfLiDGA2vTDvgH7hEVtAF3DjIP4D2cRMsTIFnIShPHIJmQn83ZHCkP69XgoE3cO9Jy8Y9sMeXYou9TML_deHgje4WjaVYGd6KjOjXgr1H8LAW7B46pnTh8chSlacEQEoCVFokYxOCC1MG3AgRNu9gwsIEHj2MWX4EKsMgM4rJI2rVxsR4twDYUmgfj0A3x0Hc44DGVhzDaO_c7ur8AlND0y0XvnsmMQYkw3tzHmfdI")' }}></div>
                                </button>
                            </div>
                        </div>
                        {/* About Section */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-4 border-b border-[#283639] pb-4">
                                <h2 className="text-2xl font-display font-bold text-white">About the Game</h2>
                            </div>
                            <div className="prose prose-invert max-w-none text-[#d1d5db] font-body leading-relaxed">
                                <p>
                                    Dive into the neon-soaked abyss of New Elysium in <strong>Cyber Odyssey 2077</strong>. As a rogue operative caught in a corporate war, you must navigate a sprawling metropolis where high-tech weaponry meets ancient martial arts. Every choice you make ripples through the narrative, forging alliances or sparking vendettas that will shape the fate of the city.
                                </p>
                                <p className="mt-4">
                                    Experience a revolutionary combat system that seamlessly blends melee, gunplay, and cybernetic hacking. Upgrade your body with military-grade augmentations, hack into enemy networks to turn their defenses against them, and drive through the rain-slicked streets in fully customizable vehicles.
                                </p>
                            </div>
                            {/* Game Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div className="flex gap-4 p-4 rounded-lg bg-surface-dark border border-[#283639]">
                                    <span className="material-symbols-outlined text-primary text-3xl">public</span>
                                    <div>
                                        <h4 className="font-display font-bold text-white mb-1">Living Open World</h4>
                                        <p className="text-sm text-[#9db5b9]">Dynamic weather and day/night cycles affecting NPC behavior.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-lg bg-surface-dark border border-[#283639]">
                                    <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                                    <div>
                                        <h4 className="font-display font-bold text-white mb-1">Deep Narrative</h4>
                                        <p className="text-sm text-[#9db5b9]">Branching storylines with 5 distinct endings based on choices.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-lg bg-surface-dark border border-[#283639]">
                                    <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
                                    <div>
                                        <h4 className="font-display font-bold text-white mb-1">Cybernetic Upgrades</h4>
                                        <p className="text-sm text-[#9db5b9]">Over 200 unique augmentations to customize your playstyle.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-lg bg-surface-dark border border-[#283639]">
                                    <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                                    <div>
                                        <h4 className="font-display font-bold text-white mb-1">Co-op Multiplayer</h4>
                                        <p className="text-sm text-[#9db5b9]">Team up with friends for high-stakes tactical heist missions.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* System Requirements */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between border-b border-[#283639] pb-4">
                                <h2 className="text-2xl font-display font-bold text-white">System Requirements</h2>
                                <div className="flex bg-surface-dark rounded-lg p-1">
                                    <button className="px-4 py-1.5 rounded-md bg-[#283639] text-white text-xs font-bold font-display shadow-sm">WINDOWS</button>
                                    <button className="px-4 py-1.5 rounded-md text-[#9db5b9] hover:text-white text-xs font-bold font-display transition-colors">MACOS</button>
                                    <button className="px-4 py-1.5 rounded-md text-[#9db5b9] hover:text-white text-xs font-bold font-display transition-colors">STEAM OS</button>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-xl border border-[#283639] bg-surface-dark">
                                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#283639]">
                                    {/* Minimum */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-lg font-display font-bold text-primary">Minimum</h3>
                                        <div className="space-y-3">
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">OS</span>
                                                <span className="block text-sm text-white font-medium">Windows 10 64-bit</span>
                                            </div>
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">Processor</span>
                                                <span className="block text-sm text-white font-medium">Intel Core i5-4460 or AMD FX-6300</span>
                                            </div>
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">Memory</span>
                                                <span className="block text-sm text-white font-medium">8 GB RAM</span>
                                            </div>
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">Graphics</span>
                                                <span className="block text-sm text-white font-medium">NVIDIA GeForce GTX 960 4GB</span>
                                            </div>
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">Storage</span>
                                                <span className="block text-sm text-white font-medium">70 GB available space (SSD recommended)</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Recommended */}
                                    <div className="p-6 space-y-4 bg-surface-darker/50">
                                        <h3 className="text-lg font-display font-bold text-primary">Recommended</h3>
                                        <div className="space-y-3">
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">OS</span>
                                                <span className="block text-sm text-white font-medium">Windows 11 64-bit</span>
                                            </div>
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">Processor</span>
                                                <span className="block text-sm text-white font-medium">Intel Core i7-8700K or AMD Ryzen 5 3600X</span>
                                            </div>
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">Memory</span>
                                                <span className="block text-sm text-white font-medium">16 GB RAM</span>
                                            </div>
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">Graphics</span>
                                                <span className="block text-sm text-white font-medium">NVIDIA GeForce RTX 2070 Super 8GB</span>
                                            </div>
                                            <div className="group">
                                                <span className="block text-xs uppercase tracking-wider text-[#6b7b7d] mb-1">Storage</span>
                                                <span className="block text-sm text-white font-medium">70 GB SSD</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Reviews */}
                        <section className="space-y-6 pb-12">
                            <div className="flex items-center justify-between border-b border-[#283639] pb-4">
                                <div className="flex items-baseline gap-4">
                                    <h2 className="text-2xl font-display font-bold text-white">User Reviews</h2>
                                    <span className="text-sm text-[#9db5b9]">(2,458 Reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl font-bold font-display text-accent-rating">4.8</span>
                                    <div className="flex text-accent-rating">
                                        <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[20px] fill-current">star_half</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Review Card 1 */}
                                <div className="bg-surface-dark border border-[#283639] rounded-xl p-5 flex flex-col gap-3 hover:border-[#3a4e52] transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-full bg-cover bg-center" data-alt="Avatar of user CyberNinja" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKh2_V5JT1we2hUuANXAuua9TugKeqhTuiDW2jKoHMVCgVhsEuaRBiUd81ML3bagMSVBPaEvkbDThVA0-uKwoeZR3ipLX62UR7HFjE3uGH7VBCjm7qi0G_koa_dsnXUl1PsRNpf5MeA9_3Kt7DnXV8Q-hhPxTMQ2kI6UD_aUMD-zM92G1GB6uSuQLTlVJvujvq7Dkw6ynfNstZSvvBQ2pOqt6fgdi4q-fxC-0BSoVfejT9kP3Y_EXU5yUI-kSgfqHzE107aSb9QIk")' }}></div>
                                            <div>
                                                <p className="text-white text-sm font-bold">CyberNinja</p>
                                                <p className="text-[#6b7b7d] text-xs">2 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="flex text-accent-rating">
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#d1d5db] leading-relaxed">
                                        "The atmosphere is absolutely unmatched. Just walking around the city feels like being in a movie. Combat is crunchy and satisfying."
                                    </p>
                                    <div className="flex gap-2 mt-2">
                                        <span className="px-2 py-1 bg-[#283639] rounded text-[10px] uppercase font-bold text-[#9db5b9]">Recommended</span>
                                    </div>
                                </div>
                                {/* Review Card 2 */}
                                <div className="bg-surface-dark border border-[#283639] rounded-xl p-5 flex flex-col gap-3 hover:border-[#3a4e52] transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-full bg-cover bg-center" data-alt="Avatar of user GlitchGamer" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-T_IFbwXfAPikcHly0JHSjcqin3Pg5XXgmt9ecIHFeAaOfvVmhpsiLjteS76yQxoYpp-fX6NTisj7d-PUVnZaBNXS2PB8hKhuIlmLa0x7wNx23h_-pK4dpx7Yg7eFhQjyLEGAcDvLdM2WO4EM0nSDkqh-mZtA6VHTY8jFhKz3ZjHOZ8_wf9-QrGVm3V4_c2yUvuUlcWnYAasOMANhSyYtwK39xGfxsJFZxjqnBW7z6yqu2wJJdhTvSG3xCinPm0OQhBD-tIstaVE")' }}></div>
                                            <div>
                                                <p className="text-white text-sm font-bold">GlitchGamer</p>
                                                <p className="text-[#6b7b7d] text-xs">Yesterday</p>
                                            </div>
                                        </div>
                                        <div className="flex text-accent-rating">
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[16px]">star</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#d1d5db] leading-relaxed">
                                        "Optimisation is a bit rough on older cards, but if you have the rig for it, it's a visual masterpiece. Story had me hooked."
                                    </p>
                                    <div className="flex gap-2 mt-2">
                                        <span className="px-2 py-1 bg-[#283639] rounded text-[10px] uppercase font-bold text-[#9db5b9]">Recommended</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Right Column: Sticky Purchase Card (4 cols) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-24 space-y-6">
                            {/* Main Product Card */}
                            <div className="bg-surface-dark border border-[#283639] rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
                                {/* Decorative glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/30 transition-all duration-500"></div>
                                {/* Header */}
                                <div className="relative z-10 mb-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="px-2 py-0.5 rounded bg-accent-sale text-black text-xs font-bold uppercase tracking-wider animate-pulse">Sale</span>
                                        <div className="flex gap-2 text-[#9db5b9]">
                                            <span className="material-symbols-outlined text-[20px]" title="Windows">desktop_windows</span>
                                            <span className="material-symbols-outlined text-[20px]" title="Xbox">stadia_controller</span>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight mb-1">Cyber Odyssey 2077</h1>
                                    <p className="text-[#9db5b9] text-sm">Standard Edition</p>
                                </div>
                                {/* Pricing */}
                                <div className="relative z-10 flex items-end gap-3 mb-8">
                                    <span className="text-4xl font-display font-bold text-primary">$59.99</span>
                                    <span className="text-lg text-[#6b7b7d] line-through mb-1.5 font-medium">$74.99</span>
                                    <span className="text-sm text-accent-sale font-bold mb-2">-20%</span>
                                </div>
                                {/* Actions */}
                                <div className="relative z-10 flex flex-col gap-3">
                                    <button className="w-full h-12 bg-primary hover:bg-primary-hover text-[#111718] rounded-lg font-bold font-display text-lg tracking-wide shadow-[0_0_15px_rgba(17,183,212,0.3)] hover:shadow-[0_0_25px_rgba(17,183,212,0.5)] transition-all flex items-center justify-center gap-2">
                                        <span>Buy Now</span>
                                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                                    </button>
                                    <button className="w-full h-12 bg-transparent border-2 border-[#283639] hover:border-white text-white rounded-lg font-bold font-display text-lg tracking-wide transition-all flex items-center justify-center gap-2">
                                        <span>Add to Cart</span>
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                    <button className="w-full py-2 flex items-center justify-center gap-2 text-sm text-[#9db5b9] hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                                        <span>Add to Wishlist</span>
                                    </button>
                                </div>
                                {/* Guarantee / Info */}
                                <div className="relative z-10 mt-6 pt-6 border-t border-[#283639] grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#9db5b9] text-[18px]">verified_user</span>
                                        <span className="text-xs text-[#9db5b9]">Secure Payment</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#9db5b9] text-[18px]">cloud_download</span>
                                        <span className="text-xs text-[#9db5b9]">Instant Access</span>
                                    </div>
                                </div>
                            </div>
                            {/* DLC Upsell (Small) */}
                            <div className="bg-surface-dark border border-[#283639] rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer group">
                                <div className="size-16 rounded-lg bg-cover bg-center flex-shrink-0" data-alt="Expansion pack cover art featuring a cyborg samurai" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWFxX0hEG92E84HDWUWvP8-byy40Zorgh3Mp_uJGwUmcNHEWH_m-3Bv3sbk2Yg-dtC6Q4xIGyeSl7FeJqvO-ENDLsQWTtOirTmR8nBrEqmyO466F9BLnpFz40PPvBvQ1E2Gfmlsrw-1Su_OoslMc68VIfYRJ6XCVNcFkLtbfS22t2bONFzpSjXypMDj1foQ_QcvSLYvq0tiaesc8t0e9scnj81LhH6yndIrvADTAqsQmmBrszx0KXsDSlp9ugpZeUPL1l1BGFE-1I")' }}></div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold font-display truncate group-hover:text-primary transition-colors">Neon Nights Expansion</h4>
                                    <p className="text-xs text-[#9db5b9]">New missions &amp; weapons</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-white font-bold font-display">$19.99</span>
                                    <div className="size-6 rounded-full bg-[#283639] flex items-center justify-center ml-auto mt-1 group-hover:bg-primary group-hover:text-black transition-colors">
                                        <span className="material-symbols-outlined text-[16px]">add</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Simple Footer */}
            <footer className="mt-auto border-t border-[#283639] bg-[#111718] py-10">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 text-white">
                        <div className="size-6 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-2xl">token</span>
                        </div>
                        <h2 className="text-[#9db5b9] text-sm font-display font-medium tracking-wide">© 2024 CYBERSTORE INC.</h2>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-[#6b7b7d] hover:text-primary text-sm transition-colors" href="#">Privacy Policy</a>
                        <a className="text-[#6b7b7d] hover:text-primary text-sm transition-colors" href="#">Terms of Service</a>
                        <a className="text-[#6b7b7d] hover:text-primary text-sm transition-colors" href="#">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
