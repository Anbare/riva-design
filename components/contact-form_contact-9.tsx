'use client'

import React from "react"

import { useState } from 'react'
import Image from 'next/image'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        messaggio: '',
        privacy: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', formData)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    return (
        <section id="contattaci" className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Image Side */}
                    <div className="order-2 lg:order-1 relative w-full aspect-[4/5] overflow-hidden bg-[#F9F9F7] ring-1 ring-inset ring-[#E8E6E1] lg:justify-self-end lg:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[560px]">
                        <Image
                            src="/images/contact/Contatti_progetto.webp"
                            alt="Atelier Riva Design"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>

                    {/* Form Side */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <div className="mb-8">
                            <p className="text-[#3D4F48] text-sm font-medium mb-3 uppercase tracking-wide">
                                Contattaci
                            </p>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-6 leading-tight">
                                Il tuo progetto merita attenzione
                            </h2>
                            <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed">
                                Condividi i dettagli del tuo progetto e riceverai una risposta
                                entro due giorni lavorativi.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nome Field */}
                            <div>
                                <label
                                    htmlFor="nome"
                                    className="block text-[#1A2E26] text-sm font-medium mb-2"
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[#E8E6E1] bg-white text-[#1A2E26] placeholder:text-[#3D4F48]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all text-base"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-[#1A2E26] text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[#E8E6E1] bg-white text-[#1A2E26] placeholder:text-[#3D4F48]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all text-base"
                                    required
                                />
                            </div>

                            {/* Messaggio Field */}
                            <div>
                                <label
                                    htmlFor="messaggio"
                                    className="block text-[#1A2E26] text-sm font-medium mb-2"
                                >
                                    Messaggio
                                </label>
                                <textarea
                                    id="messaggio"
                                    name="messaggio"
                                    value={formData.messaggio}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Descrivi il tuo progetto"
                                    className="w-full px-4 py-3 border border-[#E8E6E1] bg-white text-[#1A2E26] placeholder:text-[#3D4F48]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all text-base resize-none"
                                    required
                                />
                            </div>

                            {/* Privacy Checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    name="privacy"
                                    checked={formData.privacy}
                                    onChange={handleChange}
                                    className="mt-1 w-4 h-4 border-[#E8E6E1] text-[#C5A059] focus:ring-[#C5A059] focus:ring-offset-0 cursor-pointer"
                                    required
                                />
                                <label
                                    htmlFor="privacy"
                                    className="text-[#3D4F48] text-sm leading-relaxed cursor-pointer"
                                >
                                    Accetto i termini di privacy
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={!formData.privacy}
                                    aria-disabled={!formData.privacy}
                                    className="w-full sm:w-fit sm:min-w-56 px-12 py-4 bg-[#1A2E26] text-[#F9F9F7] font-medium text-base border-2 border-[#1A2E26] hover:bg-[#2A3E36] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F9F7] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#1A2E26]"
                                >
                                    Invia
                                </button>
                                <p className="mt-3 text-sm text-[#3D4F48]">
                                    Risposta entro 2 giorni lavorativi.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
