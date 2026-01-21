export default function FAQSimple() {
    const faqs = [
        {
            question: "Quanto tempo richiede un progetto?",
            answer:
                "Ogni commissione è unica. I tempi variano da tre a sei mesi a seconda della complessità e dei dettagli richiesti. Discutiamo sempre le scadenze durante la consultazione iniziale.",
        },
        {
            question: "Potete spedire internazionalmente?",
            answer:
                "Sì, spediamo in tutta Europa e oltre. Gestiamo personalmente l'imballaggio e la logistica per garantire che ogni pezzo arrivi intatto e perfetto.",
        },
        {
            question: "È possibile visitare l'atelier?",
            answer:
                "Accogliamo volentieri i nostri clienti in atelier su appuntamento. È un'occasione per vedere il nostro lavoro e discutere il vostro progetto direttamente con i nostri artigiani.",
        },
        {
            question: "Quali materiali utilizzate?",
            answer:
                "Lavoriamo con legni nobili selezionati, marmi pregiati e finiture di lusso. Ogni materiale è scelto per la qualità e la durabilità nel tempo.",
        },
        {
            question: "Come funziona il processo?",
            answer:
                "Iniziamo con una consultazione per comprendere la vostra visione. Seguono i disegni, l'approvazione, la lavorazione e infine l'installazione con cura artigianale.",
        },
    ]

    return (
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#FFFFFF]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-4">
                        Domande
                    </h2>
                    <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed">
                        Le risposte che cerchi sulla nostra lavorazione e i nostri servizi.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-8 md:space-y-10 mb-16 md:mb-20">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <h3 className="text-[#1A2E26] text-lg md:text-xl font-semibold mb-3">
                                {faq.question}
                            </h3>
                            <p className="text-[#3D4F48] text-base leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1A2E26] mb-4">
                        Altre domande?
                    </h3>
                    <p className="text-[#3D4F48] text-base md:text-lg mb-6">
                        Contattaci direttamente per una conversazione personalizzata.
                    </p>
                    <a
                        href="/contatti"
                        className="inline-block px-8 py-3 md:px-10 md:py-4 text-[#1A2E26] text-base font-medium bg-transparent border-2 border-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200"
                    >
                        Scrivi
                    </a>
                </div>
            </div>
        </section>
    )
}
