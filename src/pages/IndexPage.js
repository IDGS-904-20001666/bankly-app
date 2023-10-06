import React from 'react'

export const IndexPage = () => 
{
    return (
        <>
            <div className="flex max-w-[100vw] flex-col items-center justify-start mt-16">
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

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5554303/pexels-photo-5554303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Tu socio financiero</h1>
                        <p className="mb-5 text-xl font-light">Simplificamos tus finanzas estudiantiles para que puedas enfocarte en lo que realmente importa: tu educación</p>
                    </div>
                </div>
            </div>

            <div className='bg-base from-base to-base-focus text-base-content relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-hidden bg-gradient-to-br p-10 md:p-20'>
                <div>
                    <div className="w-full">
                        <div className='flex items-center justify-center w-full h-auto pb-4'>
                            <div className='max-w-md'>
                                <p className="text-base-content/60 font-title text-center font-light md:text-xl">Tenemos todo para ti</p>
                                <h1 className="text-5xl font-bold">¿Que ocupas?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pt-4">
                        <div className="p-2">
                            <div className='flex items-center justify-center w-full h-auto pb-4'>
                                <img
                                width={250}
                                height={250}
                                className="mask mask-circle object-cover"
                                src="https://images.pexels.com/photos/7621144/pexels-photo-7621144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Crédito"
                                />
                            </div>
                            <h1 className="text-3xl font-bold">Línea de crédito</h1>
                            <p className="py-4 font-title">Respuesta rápida sin tener que pagar una tarifa anual</p>
                        </div>

                        <div className="p-2">
                            <div className='flex items-center justify-center w-full h-auto pb-4'>
                                <img
                                width={250}
                                height={250}
                                className="mask mask-circle object-cover"
                                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
                                alt="Cuenta"
                                />
                            </div>
                            <h1 className="text-3xl font-bold">Cuenta</h1>
                            <p className="py-4">Tu dinero aumenta un 10% todos los días sin necesidad de bloquearlo, y siempre está protegido</p>
                        </div>

                        <div className="p-2">
                            <div className='flex items-center justify-center w-full h-auto pb-4'>
                                <img
                                width={250}
                                height={250}
                                className="mask mask-circle object-cover"
                                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Ahorro"
                                />
                            </div>
                            <h1 className="text-3xl font-bold">Inversi&oacute;n</h1>
                            <p className="py-4">Puedes obtener ganancias de hasta el 14% al año con inversiones que son tanto flexibles como seguras con GBM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full pt-4">
                <div className='flex items-center justify-center w-full h-auto pb-4'>
                    <div className='max-w-md'>
                        <p className="text-base-content/60 font-title text-center font-light md:text-xl">Nuestros clientes nos respaldan</p>
                        <h1 className="text-5xl font-bold">Datos y testimonios</h1>
                    </div>
                </div>
            </div>

            <div className="w-full px-2 lg:px-10 py-6">
                <div className="sticky top-0 text-center">
                    {/* <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-10 blur-3xl"></div> */}
                    <div className="grid gap-10 p-6 xl:grid-cols-3">
                        <div className="flex flex-col items-center gap-3" style={{ transform: 'translateY(0rem)', opacity: 1 }}>
                            <h3 className="font-title text-[clamp(2rem,6vw,5rem)] font-black tabular-nums"><span>24,828</span></h3>
                            <a href="#" rel="noopener noreferrer" className="text-base-content/60 hover:none" data-svelte-h="svelte-mgjng6">prestamos aprobados</a>
                        </div>
                        <div className="flex flex-col items-center gap-3" style={{ transform: 'translateY(0rem)', opacity: 1 }}>
                            <h3 className="font-title text-[clamp(2rem,6vw,5rem)] font-black tabular-nums"><span>98%</span></h3>
                            <a href="#" rel="noopener noreferrer" className="text-base-content/60 hover:none">de satisfacción de nuestros clientes</a>
                        </div>
                        <div className="flex flex-col items-center gap-3" style={{ transform: 'translateY(0.5492730210016148rem)', opacity: 1 }}>
                            <h3 className="font-title text-[clamp(2rem,6vw,5rem)] font-black tabular-nums"><span>117,496</span></h3>
                            <a href="#" rel="noopener noreferrer" className="text-base-content/60 hover:none">estudiantes confian en Bankly</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 pb-20">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-10 md:grid-cols-2 lg:grid-cols-3 lg:[&amp;>*:nth-child(3n-1)]:translate-y-16">
                    <div className="card border-base-content/5 card-compact border text-left">
                        <div className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="avatar" data-svelte-h="svelte-1cw9wf0">
                                    <a href="#"  rel="noopener, noreferrer" className="w-12">
                                        <img loading="lazy" src="https://static.cordonbleu.edu/Files/MediaFile/45897.jpg" alt="Alejandra Herrera" width="48" height="48" className="pointer-events-none mask mask-circle" />
                                    </a>
                                </div>
                                <div className="flex flex-col items-start text-xs">
                                    <div className="text-base-content font-bold">Alejandra Herrera</div>
                                    <div className="text-base-content/60">Tec de Monterrey</div>
                                </div>
                            </div>
                            <p className="text-base-content prose prose-sm py-4">
                                <blockquote>
                                    "Las alianzas con universidades son estratégicas y pueden facilitar el acceso a nuevos clientes"
                                </blockquote>
                            </p>
                        </div>
                    </div>
                    <div className="card border-base-content/5 card-compact border text-left">
                        <div className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="avatar" data-svelte-h="svelte-1cw9wf0">
                                    <a href="#"  rel="noopener, noreferrer" className="w-12">
                                        <img loading="lazy" src="https://static.cordonbleu.edu/Files/MediaFile/45889.jpg" alt="Esteban Chacón" width="48" height="48" className="pointer-events-none mask mask-circle" />
                                    </a>
                                </div>
                                <div className="flex flex-col items-start text-xs">
                                    <div className="text-base-content font-bold">Esteban Chacón</div>
                                    <div className="text-base-content/60">Universidad Anahuac</div>
                                </div>
                            </div>
                            <p className="text-base-content prose prose-sm py-4">
                                <blockquote>
                                    "Las tasas de interés en los préstamos estudiantiles son claras y competitivas"
                                </blockquote>
                            </p>
                        </div>
                    </div>
                    <div className="card border-base-content/5 card-compact border text-left">
                        <div className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="avatar" data-svelte-h="svelte-1cw9wf0">
                                    <a href="#"  rel="noopener, noreferrer" className="w-12">
                                        <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysHtwiVq6jFDBw9TSxIFLVar4cyjaru4x7w&usqp=CAU" alt="Nicole Cucco" width="48" height="48" className="pointer-events-none mask mask-circle" />
                                    </a>
                                </div>
                                <div className="flex flex-col items-start text-xs">
                                    <div className="text-base-content font-bold">Nicole Cucco</div>
                                    <div className="text-base-content/60">Universidad de Le&oacute;n</div>
                                </div>
                            </div>
                            <p className="text-base-content prose prose-sm py-4">
                                <blockquote>
                                    "Me gusta la idea de tarjetas sin comisiones para estudiantes,  es conveniente"
                                </blockquote>
                            </p>
                        </div>
                    </div>
                    <div className="card border-base-content/5 card-compact border text-left">
                        <div className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="avatar" data-svelte-h="svelte-1cw9wf0">
                                    <a href=""  rel="noopener, noreferrer" className="w-12">
                                        <img loading="lazy" src="https://static.cordonbleu.edu/Files/MediaFile/42854.jpg" alt="Carlos Guerrero" width="48" height="48" className="pointer-events-none mask mask-circle" />
                                    </a>
                                </div>
                                <div className="flex flex-col items-start text-xs">
                                    <div className="text-base-content font-bold">Carlos Guerrero</div>
                                    <div className="text-base-content/60">Universidad Tecnol&oacute;gica de Le&oacute;n</div>
                                </div>
                            </div>
                            <p className="text-base-content prose prose-sm py-4">
                                <blockquote>
                                    "Bankly se centra en satisfacer las necesidades financieras de los estudiantes, lo cual es prometedor"
                                </blockquote>
                            </p>
                        </div>
                    </div>
                    <div className="card border-base-content/5 card-compact border text-left">
                        <div className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="avatar" data-svelte-h="svelte-1cw9wf0">
                                    <a href="#"  rel="noopener, noreferrer" className="w-12">
                                        <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoHE1HngNl-RDYuG4Qvgnf4vnFIAGCLZ1OhurrlUYx7BcypzqPtkyNQbHMwfNZmZgflU&usqp=CAU" alt="María Becerra" width="48" height="48" className="pointer-events-none mask mask-circle" />
                                    </a>
                                </div>
                                <div className="flex flex-col items-start text-xs">
                                    <div className="text-base-content font-bold">María Becerra</div>
                                    <div className="text-base-content/60">Instituto Polit&eacute;cnico Nacional</div>
                                </div>
                            </div>
                            <p className="text-base-content prose prose-sm py-4">
                                <blockquote>
                                    "Los productos de Bankly podrían ser una solución perfecta para estudiantes que desean administrar sus finanzas de manera eficiente mientras se concentran en sus estudios"
                                </blockquote>
                            </p>
                        </div>
                    </div>
                    <div className="card border-base-content/5 card-compact border text-left">
                        <div className="card-body">
                            <div className="flex items-center gap-2">
                                <div className="avatar" data-svelte-h="svelte-1cw9wf0">
                                    <a href="#"  rel="noopener, noreferrer" className="w-12">
                                        <img loading="lazy" src="https://static.cordonbleu.edu/Files/MediaFile/34589.jpg" alt="Fernando Azcarraga" width="48" height="48" className="pointer-events-none mask mask-circle" />
                                    </a>
                                </div>
                                <div className="flex flex-col items-start text-xs">
                                    <div className="text-base-content font-bold">Fernando Azcarraga</div>
                                    <div className="text-base-content/60">Universidad de Guanajuato</div>
                                </div>
                            </div>
                            <p className="text-base-content prose prose-sm py-4">
                                <blockquote>
                                    "Bankly parece ser una excelente opción para estudiantes que buscan servicios financieros personalizados y amigables con su situación académica"
                                </blockquote>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
