import React from 'react'
import DebitCardImg from '../assets/img/resources/debit-card.png';
import CreditCardImg from '../assets/img/resources/credit-card.png';


export const ServicesPage = () => 
{
    return (
        <>
            <div className="min-h-[100vh] overflow-hidden pb-40 pt-32">
                <div className="relative">
                    <div className="relative flex flex-col items-center justify-center gap-10 px-4 md:px-10 xl:flex-row-reverse xl:gap-20">
                        <div>
                            <div className="bg-primary pointer-events-none absolute left-20 aspect-square w-96 rounded-full opacity-20 blur-3xl" />
                            <div className="bg-success pointer-events-none absolute aspect-square w-full rounded-full opacity-10 blur-3xl" />
                            <h2 className="font-title text-center text-[clamp(2rem,8vw,4rem)] font-black leading-none xl:text-left">
                                <span className="motion-reduce:!opacity-100" style={{ opacity: 1 }}>
                                    Sin contacto,
                                </span>
                                <br />
                                <span className="motion-reduce:!opacity-100" style={{ opacity: 1 }}>
                                    seguro y rápido
                                </span>
                            </h2>
                            <div className="h-10" />
                            <p className="text-base-content/60 font-title text-center font-light md:text-3xl xl:text-left">
                                Compra hoy con tu Tarjeta Bankly (Crédito/Débito) en segundos y realiza compras de forma rápida, segura y sin contacto
                            </p>
                        </div>
                        <div className="grid shrink-0 gap-6 xl:grid-cols-5">
                            <div
                                className="card border-base-content/10 col-span-3 col-start-1 row-start-1 flex flex-col border border-dashed will-change-auto motion-reduce:!transform-none"
                                style={{ transform: "translateX(1.0924781798568226%)" }}
                            >
                                <div className="card-body">
                                    <img src={ DebitCardImg } width={ 250} alt="Bankly Tarjeta de Débito"></img>
                                </div>
                            </div>
                            <div
                                className="card border-base-content/10 col-span-3 row-start-2 flex flex-col border border-dashed will-change-auto motion-reduce:!transform-none xl:col-start-3"
                                style={{ transform: "translateX(-1.0924781798568226%)" }}
                            >
                                <div className="card-body">
                                    <img src={ CreditCardImg } width={ 250} alt="Bankly Tarjeta de Crédito"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral from-neutral to-neutral-focus text-neutral-content relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-hidden bg-gradient-to-br p-10 md:p-20">
                <div className="relative flex max-w-[100rem] flex-col items-center justify-center xl:flex-row xl:gap-20">
                    <div className="flex flex-col items-center justify-center">
                        <img src={DebitCardImg} width={'650'} alt="Bankly Tarjeta de Débito"></img>
                    </div>
                    <div className="relative z-[1] w-full py-10">
                        <h2 className="font-title font-black leading-none text-center xl:text-left text-4xl">
                            <span
                                className="inline-block font-black will-change-auto motion-reduce:!transform-none max-[1280px]:!transform-none"
                                style={{ transform: "translateX(4.436141304347825rem)" }}
                            >
                                La tarjeta de débito es Mastercard para pagar donde sea
                            </span>
                        </h2>
                        <div
                            className="text-neutral-content/60 font-title inline-block w-full font-light will-change-auto motion-reduce:!transform-none max-[1280px]:!transform-none md:text-2xl text-left pt-4"
                            style={{ transform: "translateX(5.548913043478261rem)" }}
                        >
                            <ul className="list-disc pl-8">
                                <li className='py-2'>Realiza compras en cualquier tienda o en línea, ya sea con tu tarjeta física o virtual.</li>
                                <li className='py-2'>Retira efectivo en cajeros de la red Mastercard o en tiendas de autoservicio.</li>
                                <li className='py-2'>Haz pagos sin necesidad de contacto utilizando tu celular. Agrega Bankly a Apple Pay o Samsung Pay.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="from-base-100 to-base-300 relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-hidden bg-gradient-to-br p-10 md:p-20">
                <div className="relative flex max-w-[100rem] flex-col items-center justify-center xl:flex-row xl:gap-20">
                    <div className="flex flex-col items-center justify-center">
                        <img src={ CreditCardImg } width={'650'} alt="Bankly Tarjeta de Crédito"></img>
                    </div>
                    <div className="relative z-[1] w-full py-10">
                        <h2 className="font-title font-black leading-none text-center xl:text-left text-4xl">
                            <span
                                className="inline-block font-black will-change-auto motion-reduce:!transform-none max-[1280px]:!transform-none"
                                style={{ transform: "translateX(4.436141304347825rem)" }}
                            >
                                ¡No esperes más por tu tarjeta de crédito Bankly!
                            </span>
                        </h2>
                        <div
                            className="text-neutral-content/60 font-title inline-block w-full font-light will-change-auto motion-reduce:!transform-none max-[1280px]:!transform-none md:text-2xl text-left pt-4"
                            style={{ transform: "translateX(5.548913043478261rem)" }}
                        >
                            <ul className="list-disc pl-8">
                                <li className='py-2'>Recibe cashback por tus compras</li>
                                <li className='py-2'>No pagas anualidad</li>
                                <li className='py-2'>Usar tu tarjeta en cualquier parte del mundo gracias a Mastercard</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-base from-base to-base-focus text-base-content relative flex min-h-[100vh] max-w-[100vw] items-center justify-center overflow-hidden bg-gradient-to-br p-10 md:p-20">
                <div className='w-full'>
                    <div className="w-full pb-4">
                        <div className="flex items-center justify-center w-full h-auto pb-4">
                            <div className="max-w-lg">
                                <p className="text-base-content/60 font-title text-center font-light md:text-xl">
                                    Estamos para ayudarte
                                </p>
                                <h1 className="text-5xl font-bold">Preguntas Frecuentes</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 px-4 pt-4">
                        <div class="collapse collapse-arrow bg-base-200 text-left">
                            <input type="radio" name="my-accordion-2" />
                            <div class="collapse-title text-xl font-medium px-4">
                                ¿Cómo solicitar tus Tarjetas Bankly?
                            </div>
                            <div class="collapse-content">
                                <p>
                                Todo el proceso se puede completar en menos de 5 minutos a través de nuestra aplicación. Simplemente descarga la aplicación Bankly, sigue las instrucciones proporcionadas y en cuestión de minutos, tu cuenta estará activa y lista para que comiences a utilizarla.
                                </p>
                            </div>
                        </div>
                        <div class="collapse collapse-arrow bg-base-200 text-left">
                            <input type="radio" name="my-accordion-2" />
                            <div class="collapse-title text-xl font-medium px-4">
                                ¿Qué necesitas para aplicar a la Tarjeta de Crédito?
                            </div>
                            <div class="collapse-content">
                                <ul class="list-disc pl-8">
                                    <li>Ser mayor de edad</li>
                                    <li>Tener domicilio en México</li>
                                    <li>Tener identificación oficial vigente con foto y firma (si eres persona extranjera residente en México, aceptamos tarjeta de residencia temporal o de residencia permanente)</li>
                                    <li>Descargar e instalar la versión más reciente de la aplicación Bankly</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse collapse-arrow bg-base-200 text-left">
                            <input type="radio" name="my-accordion-2" />
                            <div class="collapse-title text-xl font-medium px-4">
                                ¿Por qué mi línea de crédito es tan baja?
                            </div>
                            <div class="collapse-content">
                                <p>
                                    Mientras más uses los productos de la familia Bankly, tu Tarjeta Bankly y te mantengas al corriente de tus pagos, más fácil podrás ir aumentando tu línea de crédito.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
