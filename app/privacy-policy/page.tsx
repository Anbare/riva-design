export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-6 font-sans text-stone-800">
      <h1 className="text-4xl font-serif font-bold mb-8 text-[#1A2E26]">Privacy Policy & Note Legali</h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <p className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm">
          <strong>ATTENZIONE:</strong> Questo sito è un <strong>progetto dimostrativo per portfolio</strong> (Case Study). 
          L&apos;azienda &quot;Ebanisteria Riva & Figli&quot; è fittizia. Nessun servizio reale viene offerto.
        </p>

        <h2 className="text-2xl font-bold mt-8 text-[#1A2E26]">1. Finalità del sito</h2>
        <p>
          Questo sito web è stato realizzato esclusivamente a scopo didattico e di presentazione professionale. 
          Non rappresenta un&apos;attività commerciale reale. I moduli di contatto presenti potrebbero non essere attivi 
          o inviare email esclusivamente a scopo di test al proprietario del portfolio.
        </p>

        <h2 className="text-2xl font-bold mt-8 text-[#1A2E26]">2. Raccolta Dati (Cookie e Form)</h2>
        <p>
          Questo sito utilizza cookie tecnici essenziali per salvare le preferenze di navigazione 
          (es. la scelta sul banner dei cookie). 
          Non vengono utilizzati cookie di profilazione commerciale di terze parti per scopi di marketing reale.
        </p>
        <p>
          I dati inseriti nel modulo contatti (Nome, Email) non vengono salvati in database persistenti né ceduti a terzi, 
          ma vengono trasmessi via email temporanea solo per simulare il funzionamento del servizio.
        </p>

        <h2 className="text-2xl font-bold mt-8 text-[#1A2E26]">3. Diritti d&apos;autore</h2>
        <p>
          Il design, il codice e la struttura del sito sono proprietà intellettuale dello sviluppatore. 
          Le immagini utilizzate sono tratte da archivi royalty-free (Unsplash/Pexels) a scopo dimostrativo.
        </p>
      </div>
    </main>
  );
} 