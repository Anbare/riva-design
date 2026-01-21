export default function FAQ() {
    const faqs = [
        {
            question: "Quanto tempo richiede un progetto?",
            answer: "I tempi variano in base alla complessità e alle dimensioni dell'opera. Un mobile su misura richiede generalmente da otto a dodici settimane, dalla consulenza iniziale alla consegna finale. Progetti architettonici più ampi possono estendersi oltre questo periodo."
        },
        {
            question: "Posso visitare l'atelier?",
            answer: "Sì, accogliamo volentieri progettisti e clienti nel nostro laboratorio. Le visite sono su appuntamento per garantire un'esperienza personalizzata e permettervi di toccare i materiali direttamente."
        },
        {
            question: "Quali legni utilizzate?",
            answer: "Lavoriamo con legni nobili selezionati come noce canaletto, rovere, ciliegio e mogano. Ogni essenza è scelta per le sue caratteristiche estetiche e la sua durabilità nel tempo."
        },
        {
            question: "Offrite servizi di consulenza progettuale?",
            answer: "Assolutamente. Il nostro team collabora strettamente con architetti e designer per sviluppare soluzioni che rispecchiano la vostra visione. Forniamo consulenze tecniche e suggerimenti sulla fattibilità di ogni progetto."
        },
        {
            question: "Come funziona il processo di personalizzazione?",
            answer: "Iniziamo con una discussione approfondita dei vostri desideri e delle vostre esigenze. Successivamente realizziamo bozzetti e modelli, affinando ogni dettaglio fino al vostro totale soddisfacimento prima della produzione."
        }
    ]

    return (
        <section id="domande" className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E26] mb-4">
                        Domande
                    </h2>
                    <p className="text-[#3D4F48] text-base md:text-lg leading-relaxed">
                        Tutto ciò che serve sapere sul nostro processo creativo e i nostri servizi
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-8 md:space-y-10 mb-16 md:mb-20">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-[#E8E6E1] pb-8 md:pb-10">
                            <h3 className="text-[#1A2E26] text-lg md:text-xl font-semibold mb-3 md:mb-4">
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
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A2E26] mb-3">
                        Altre domande?
                    </h3>
                    <p className="text-[#3D4F48] text-base mb-6">
                        Il nostro team è a vostra disposizione per chiarimenti
                    </p>
                    <a
                        href="/contatti"
                        className="inline-block px-8 py-3 md:px-10 md:py-4 bg-transparent border-2 border-[#1A2E26] text-[#1A2E26] hover:bg-[#1A2E26] hover:text-[#F9F9F7] transition-colors duration-200 text-base font-medium"
                    >
                        Contattaci
                    </a>
                </div>
            </div>
        </section>
    )
}
