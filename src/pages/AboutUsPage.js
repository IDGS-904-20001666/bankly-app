import React from 'react'

export const AboutUsPage = () => 
{
    return (
        <>
            <section className="flex items-center xl:h-screen from-base-100 to-base-300">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative lg:max-w-md">
                                <img
                                    src="https://images.pexels.com/photos/8293637/pexels-photo-8293637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="aboutimage"
                                    className="relative z-10 object-cover w-full rounded h-96"
                                />
                            </div>
                        </div>
                        <div class="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-10 blur-3xl"></div>
                        <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 text-left">
                            <div className="pl-4 mb-6 border-l-4 border-primary-500">
                                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                                    ¿Quienes somos?
                                </span>
                                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                    Sobre Nosotros
                                </h1>
                            </div>
                            <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Bankly, nacida en el corazón de León, Guanajuato en 2015, surgió con
                                la visión de democratizar el acceso a servicios financieros y llevar
                                la transparencia a cada rincón de México. Desde entonces, hemos
                                apoyado a miles de personas a alcanzar sus metas financieras y a tomar
                                decisiones informadas sobre su dinero. Hoy, somos líderes en servicios
                                financieros en línea, y seguimos comprometidos en ser tu aliado
                                confiable en el camino hacia un futuro financiero sólido y próspero,
                                en el auténtico estilo de León.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
