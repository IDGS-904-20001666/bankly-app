import React from 'react'

export const IndexPage = () => 
{
    return (
        <>
            <div className="flex max-w-[100vw] flex-col items-center justify-start">
                <div className="shrink xl:w-1/2">
                    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-2 py-10 text-center">
                        <div>
                            <div className="flex flex-col items-center gap-6 [text-shadow:hsl(var(--p)/.5)_0_0_2rem;]">
                                <div className="tooltip tooltip-accent">
                                    <button className="btn btn-sm cursor-copy rounded-full font-mono font-light normal-case" data-svelte-h="svelte-1x1iaes">
                                    <pre><code>Bankly App</code></pre>
                                    </button>
                                </div>
                            </div>
                            <div className="h-4"></div>
                            <h1 className="font-title text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1]"><span className="[&amp;::selection]:text-base-content brightness-150 contrast-150 [&amp;::selection]:bg-blue-700/20">Forjando tu</span> <br></br> <span className="inline-grid"><span className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text opacity-70 blur-3xl [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]" aria-hidden="true">tu éxito financiero</span> <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">éxito financiero</span></span> <br></br> <span className="[&amp;::selection]:text-base-content brightness-150 contrast-150 [&amp;::selection]:bg-blue-700/20">hoy y siempre</span></h1>
                            <div className="h-4"></div>
                            <p className="text-base-content/60 font-title py-4 font-light md:text-lg xl:text-2xl">En Bankly, estamos comprometidos a brindarte soluciones financieras innovadoras y confiables.</p>
                            <div className="h-5"></div>
                            <div>
                                <div className="inline-flex w-full flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:px-0">
                                    <a data-sveltekit-preload-data="hover" href="/docs/install/" className="btn btn-neutral md:btn-lg md:btn-wide group px-12 normal-case">
                                        Registrate aquí 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}
