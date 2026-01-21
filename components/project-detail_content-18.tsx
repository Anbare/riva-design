import Image from 'next/image'

interface ProjectDetailProps {
    title?: string
    content?: string[]
    imageSrc?: string
    imageAlt?: string
}

export default function ProjectDetail({
    title = "La visione del cliente realizzata",
    content = [
        "Un approccio integrato che unisce il dialogo architettonico allo studio delle necessità. In questo appartamento di lusso situato nel cuore di Milano, abbiamo progettato ogni ambiente per riflettere l'eleganza contemporanea e il comfort della famiglia. Abbiamo progettato ogni ambiente con attenzione ai dettagli e alle esigenze specifiche di ciascuna zona.",
        "Gli spazi abitativi sono stati concepiti in stretta integrazione con l'architettura esistente, ottimizzando il flusso naturale della luce e creando una perfetta armonia tra funzionalità ed estetica. I materiali selezionati, dal legno massello per i pavimenti alle finiture in noce canaletto, conferiscono carattere e raffinatezza ad ogni ambiente.",
        "L'imponente cucina in noce canaletto rappresenta il cuore pulsante di questo progetto. Abbiamo lavorato ogni dettaglio della struttura per creare un ambiente che unisce la tradizione artigianale italiana con le esigenze della vita contemporanea. Ogni elemento è stato realizzato su misura, dalle ante alle maniglie, fino ai sistemi di apertura.",
        "Il risultato è uno spazio dove la tradizione artigianale incontra l'architettura contemporanea. Abbiamo progettato soluzioni integrate che massimizzano lo spazio disponibile senza compromettere l'estetica. Mensole fluttuanti, nicchie illuminate e ante a scomparsa creano un equilibrio perfetto tra forma e funzione.",
        "Le camere private riflettono un'estetica sofisticata ma accogliente. La cabina armadio su misura, realizzata interamente in legno massello, offre uno spazio organizzato ed elegante. Abbiamo studiato ogni dettaglio, dal sistema di illuminazione LED integrato alle cassettiere con chiusura soft-close.",
        "Gli interni sono stati progettati per durare nel tempo. Abbiamo utilizzato legni pregiati e tecniche artigianali tramandate da generazioni. Ogni giunzione è stata realizzata a incastro, senza l'utilizzo di elementi metallici a vista, garantendo longevità e bellezza estetica.",
        "L'imponente arredamento nel living crea un'area conversazione che invita al relax e all'incontro. Abbiamo lavorato sulle proporzioni per creare un equilibrio visivo tra gli spazi aperti e le zone più raccolte. Il legno, trattato con finiture naturali, conferisce calore e autenticità all'ambiente.",
        "Il risultato finale è uno spazio abitativo che rispecchia perfettamente la visione del cliente: eleganza senza tempo, funzionalità contemporanea e la qualità artigianale che contraddistingue il made in Italy. Ogni elemento racconta la storia di dedizione e maestria nel legno italiano.",
    ],
    imageSrc = "/placeholder.svg?height=800&width=600",
    imageAlt = "Dettaglio progetto realizzato"
}: ProjectDetailProps) {
    return (
        <section className="py-16 md:py-24 px-6 lg:px-8 bg-[#F9F9F7]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2E26] leading-tight">
                            {title}
                        </h2>

                        <div className="space-y-6">
                            {content.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-[#3D4F48] text-sm md:text-base leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative w-full">
                        <div className="lg:sticky lg:top-8">
                            <div className="relative aspect-[3/4] bg-[#E8E6E1] overflow-hidden">
                                <Image
                                    src={imageSrc || "/placeholder.svg"}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
