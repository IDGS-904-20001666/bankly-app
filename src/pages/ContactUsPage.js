import React, { useState, useEffect } from 'react';
import { sendPostRequest } from '../services/ApiService';

export const ContactUsPage = () => 
{
    const [formData, setFormData] = useState
    ({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleInputChange = (e) => 
    {
        const { name, value } = e.target;
        setFormData((prevData) => 
        ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        sendPostRequest(formData, 'contacts')
          .then(response => 
          {
            if (response.status >= 200 && response.status < 300) 
            {
                alert('¡Listo!, tu petición ha sido guardada, pronto te contactaremos :)');
                window.location.reload();   
            } 
            else 
            {
                alert('¡Ups! Lo sentimos, hubo un error inesperado, intente de nuevo después')
            }
          })
          .catch(error => alert('¡Ups! Lo sentimos, hubo un error inesperado, intente de nuevo después'));
    };

    return (
        <>
            <section className="from-base-100 to-base-300 py-8">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-10 blur-3xl"></div>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contáctanos
                    </h2>
                    <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        ¿Tienes algún problema técnico? ¿Deseas enviar tus comentarios sobre nuestros productos?
                    </p>
                    <form onSubmit={handleSubmit} action="#" className="space-y-8">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                required={true}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                            >
                                Tu email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                required={true}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phoneNumber"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                required={true}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-left"
                            >
                                Tu mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                required={true}
                                onChange={handleInputChange}
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 btn btn-primary text-white"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
