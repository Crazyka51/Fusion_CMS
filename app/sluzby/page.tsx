// Stránka služeb s dynamickým obsahem z databáze
'use client'

import { Navbar } from '@/components/salon/Navbar'
import { Footer } from '@/components/salon/Footer'
import { DatabaseText } from '@/components/DatabaseText'
import Link from 'next/link'

export default function SluzbyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero sekce pro služby */}
      <section className="bg-gradient-to-br from-[#B8A876] to-[#A39566] text-white py-24 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <DatabaseText
            klic="sluzby_hero_nadpis"
            typ="nadpis"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-wide"
            placeholder="NAŠE SLUŽBY"
          />
          <DatabaseText
            klic="sluzby_hero_popis"
            typ="popis"
            as="p"
            className="text-xl font-light opacity-90 leading-relaxed"
            placeholder="V našem salonu nabízíme profesionální kadeřnické služby"
          />
        </div>
      </section>

      {/* Kategorie služeb */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Střih */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">✂️</div>
              <DatabaseText
                klic="sluzby_strih_nadpis"
                typ="nadpis"
                as="h3"
                className="text-2xl font-bold text-[#333333] mb-4 text-center"
                placeholder="Střih"
              />
              <DatabaseText
                klic="sluzby_strih_popis"
                typ="text"
                as="div"
                className="space-y-2 text-[#555555] whitespace-pre-line"
                placeholder="Krátké, polodlouhé, dlouhé vlasy..."
              />
            </div>

            {/* Barvení vlasů */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">🎨</div>
              <DatabaseText
                klic="sluzby_barveni_nadpis"
                typ="nadpis"
                as="h3"
                className="text-2xl font-bold text-[#333333] mb-4 text-center"
                placeholder="Barvení vlasů"
              />
              <DatabaseText
                klic="sluzby_barveni_popis"
                typ="text"
                as="div"
                className="space-y-2 text-[#555555] whitespace-pre-line"
                placeholder="Profesionální barvení..."
              />
            </div>

            {/* Melír */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">✨</div>
              <DatabaseText
                klic="sluzby_melir_nadpis"
                typ="nadpis"
                as="h3"
                className="text-2xl font-bold text-[#333333] mb-4 text-center"
                placeholder="Melír"
              />
              <DatabaseText
                klic="sluzby_melir_popis"
                typ="text"
                as="div"
                className="space-y-2 text-[#555555] whitespace-pre-line"
                placeholder="Klasický melír..."
              />
            </div>

            {/* Svatební účesy */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">💍</div>
              <DatabaseText
                klic="sluzby_svatebni_nadpis"
                typ="nadpis"
                as="h3"
                className="text-2xl font-bold text-[#333333] mb-4 text-center"
                placeholder="Svatební a společenské účesy"
              />
              <DatabaseText
                klic="sluzby_svatebni_popis"
                typ="text"
                as="div"
                className="space-y-2 text-[#555555]"
                placeholder="Dokonalé svatební účesy..."
              />
            </div>

            {/* Regenerace */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">💆</div>
              <DatabaseText
                klic="sluzby_regenerace_nadpis"
                typ="nadpis"
                as="h3"
                className="text-2xl font-bold text-[#333333] mb-4 text-center"
                placeholder="Regenerace a ošetření vlasů"
              />
              <DatabaseText
                klic="sluzby_regenerace_popis"
                typ="text"
                as="div"
                className="space-y-2 text-[#555555]"
                placeholder="Hloubková regenerace..."
              />
            </div>

            {/* Zesvětlování */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">🌟</div>
              <DatabaseText
                klic="sluzby_zesvetlen_nadpis"
                typ="nadpis"
                as="h3"
                className="text-2xl font-bold text-[#333333] mb-4 text-center"
                placeholder="Zesvětlování a speciální techniky"
              />
              <DatabaseText
                klic="sluzby_zesvetlen_popis"
                typ="text"
                as="div"
                className="space-y-2 text-[#555555]"
                placeholder="Ombré, AirTouch, Micromelír..."
              />
            </div>

            {/* PLEX péče */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">💎</div>
              <DatabaseText
                klic="sluzby_plex_nadpis"
                typ="nadpis"
                as="h3"
                className="text-2xl font-bold text-[#333333] mb-4 text-center"
                placeholder="Nadstandardní péče PLEX"
              />
              <DatabaseText
                klic="sluzby_plex_popis"
                typ="text"
                as="div"
                className="space-y-2 text-[#555555]"
                placeholder="PLEX a PRO-FORCE ošetření..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA sekce */}
      <section className="bg-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <DatabaseText
            klic="sluzby_cta_nadpis"
            typ="nadpis"
            as="h2"
            className="text-3xl font-bold text-[#333333] mb-6"
            placeholder="Zaujala vás některá služba?"
          />
          <DatabaseText
            klic="sluzby_cta_popis"
            typ="text"
            as="p"
            className="text-lg text-[#555555] mb-8"
            placeholder="Rezervujte si termín online"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/online-rezervace"
              className="bg-[#B8A876] hover:bg-[#A39566] text-white font-bold py-3 px-8 transition-colors"
            >
              ONLINE REZERVACE
            </Link>
            <Link
              href="/cenik"
              className="border-2 border-[#B8A876] text-[#B8A876] hover:bg-[#B8A876] hover:text-white font-bold py-3 px-8 transition-colors"
            >
              ZOBRAZIT CENÍK
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}