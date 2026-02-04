import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Zahajuji inicializaci dat s novým schématem...')

  // 1. Vytvoření kategorií služeb
  console.log('📁 Vytvářím kategorie služeb...')
  
  const kategorieDamske = await prisma.kategorieSluzeb.create({
    data: {
      nazev: 'Dámské služby',
      popis: 'Profesionální péče o vlasy pro dámy',
      poradi: 1,
      jeAktivni: true
    }
  })

  const kategoriePanske = await prisma.kategorieSluzeb.create({
    data: {
      nazev: 'Pánské služby',
      popis: 'Střihy a styling pro muže',
      poradi: 2,
      jeAktivni: true
    }
  })

  const kategorieBarveni = await prisma.kategorieSluzeb.create({
    data: {
      nazev: 'Barvení a melír',
      popis: 'Profesionální barvení a melíry',
      poradi: 3,
      jeAktivni: true
    }
  })

  const kategorieKosmetika = await prisma.kategorieSluzeb.create({
    data: {
      nazev: 'Kosmetika',
      popis: 'Ošetření pleti a kosmetické služby',
      poradi: 4,
      jeAktivni: true
    }
  })

  console.log('✅ Kategorie vytvořeny')

  // 2. Vytvoření služeb
  console.log('📋 Vytvářím služby...')
  
  const sluzby = [
    // Dámské služby
    {
      nazev: 'Dámský střih',
      popis: 'Profesionální střih na míru podle přání klientky s konzultací a poradenstvím',
      kategorieId: kategorieDamske.id,
      dobaTrvaniMinuty: 60,
      cenaTopStylist: 1800,
      cenaStylist: 1400,
      cenaJuniorStylist: 1000
    },
    {
      nazev: 'Dámský střih + foukaná',
      popis: 'Střih včetně profesionálního vyfenování a stylingu',
      kategorieId: kategorieDamske.id,
      dobaTrvaniMinuty: 90,
      cenaTopStylist: 2200,
      cenaStylist: 1800,
      cenaJuniorStylist: 1400
    },
    {
      nazev: 'Foukaná',
      popis: 'Profesionální vyfenování a styling vlasů',
      kategorieId: kategorieDamske.id,
      dobaTrvaniMinuty: 45,
      cenaTopStylist: 900,
      cenaStylist: 700,
      cenaJuniorStylist: 500
    },
    {
      nazev: 'Hloubková regenerační kúra',
      popis: 'Intenzivní regenerace vlasů s profesionálními produkty',
      kategorieId: kategorieDamske.id,
      dobaTrvaniMinuty: 60,
      cenaTopStylist: 1200,
      cenaStylist: 1000,
      cenaJuniorStylist: 800
    },

    // Pánské služby
    {
      nazev: 'Pánský střih',
      popis: 'Klasický nebo moderní pánský střih včetně stylingu',
      kategorieId: kategoriePanske.id,
      dobaTrvaniMinuty: 45,
      cenaTopStylist: 1100,
      cenaStylist: 900,
      cenaJuniorStylist: 700
    },
    {
      nazev: 'Holení břitvou',
      popis: 'Tradiční holení s horkými ručníky a aftershave',
      kategorieId: kategoriePanske.id,
      dobaTrvaniMinuty: 30,
      cenaTopStylist: 700,
      cenaStylist: 600,
      cenaJuniorStylist: 450
    },
    {
      nazev: 'Úprava vousů',
      popis: 'Profesionální tvarování a úprava vousů',
      kategorieId: kategoriePanske.id,
      dobaTrvaniMinuty: 30,
      cenaTopStylist: 600,
      cenaStylist: 500,
      cenaJuniorStylist: 400
    },

    // Barvení
    {
      nazev: 'Barvení vlasů - krátké',
      popis: 'Profesionální barvení krátkých vlasů',
      kategorieId: kategorieBarveni.id,
      dobaTrvaniMinuty: 120,
      cenaTopStylist: 2400,
      cenaStylist: 2000,
      cenaJuniorStylist: 1600
    },
    {
      nazev: 'Barvení vlasů - dlouhé',
      popis: 'Profesionální barvení dlouhých vlasů',
      kategorieId: kategorieBarveni.id,
      dobaTrvaniMinuty: 150,
      cenaTopStylist: 3200,
      cenaStylist: 2800,
      cenaJuniorStylist: 2400
    },
    {
      nazev: 'Melír',
      popis: 'Částečné zesvětlení vlasů pro přirozený efekt',
      kategorieId: kategorieBarveni.id,
      dobaTrvaniMinuty: 150,
      cenaTopStylist: 3500,
      cenaStylist: 3000,
      cenaJuniorStylist: 2500
    },
    {
      nazev: 'Odbarvení',
      popis: 'Zesvětlení vlasů před barvením na světlejší odstín',
      kategorieId: kategorieBarveni.id,
      dobaTrvaniMinuty: 180,
      cenaTopStylist: 2800,
      cenaStylist: 2400,
      cenaJuniorStylist: 2000
    },

    // Kosmetika
    {
      nazev: 'Základní ošetření pleti',
      popis: 'Kompletní čištění a ošetření obličeje',
      kategorieId: kategorieKosmetika.id,
      dobaTrvaniMinuty: 90,
      cenaTopStylist: 1500,
      cenaStylist: 1200,
      cenaJuniorStylist: 1000
    },
    {
      nazev: 'Hloubkové čištění pleti',
      popis: 'Intenzivní ošetření s extrakcí a maskou',
      kategorieId: kategorieKosmetika.id,
      dobaTrvaniMinuty: 120,
      cenaTopStylist: 1900,
      cenaStylist: 1600,
      cenaJuniorStylist: 1300
    },
    {
      nazev: 'Anti-aging ošetření',
      popis: 'Specializované ošetření proti stárnutí pleti',
      kategorieId: kategorieKosmetika.id,
      dobaTrvaniMinuty: 120,
      cenaTopStylist: 2200,
      cenaStylist: 1900,
      cenaJuniorStylist: 1600
    }
  ]

  for (const sluzba of sluzby) {
    await prisma.sluzba.create({ data: sluzba })
  }

  console.log('✅ Služby vytvořeny')

  // 3. Vytvoření obsahu stránek
  console.log('📄 Vytvářím obsah stránek...')
  
  const obsahStranky = [
    // Hero sekce
    { klicObsahu: 'hero_nadpis', obsah: 'SALON ZUZA', kategorie: 'hero', nazev: 'Hlavní nadpis' },
    { klicObsahu: 'hero_podnadpis', obsah: 'PROFESIONÁLNÍ KADEŘNICTVÍ & KOSMETIKA', kategorie: 'hero', nazev: 'Podnadpis' },
    { klicObsahu: 'hero_popis', obsah: 'Moderní salon krásy v srdci města s tradicí kvality a individuálního přístupu k péči o vlasy a pleť.', kategorie: 'hero', nazev: 'Popis' },
    
    // Sekce Kvalita
    { klicObsahu: 'kvalita_nadpis', obsah: 'KVALITA', kategorie: 'kvalita', nazev: 'Nadpis sekce Kvalita' },
    { klicObsahu: 'kvalita_podnadpis', obsah: 'PRVOTŘÍDNÍ PÉČE O VAŠE VLASY', kategorie: 'kvalita', nazev: 'Podnadpis sekce Kvalita' },
    { klicObsahu: 'kvalita_text1', obsah: 'Vlasová péče je více než jen střih nebo barva – je to umění. Sledujeme nejnovější trendy a využíváme kvalitní přípravky, které chrání a vyživují vaše vlasy.', kategorie: 'kvalita', nazev: 'Text 1 Kvalita' },
    { klicObsahu: 'kvalita_text2', obsah: 'Přesný střih, profesionální barvení a precizní styling – to je standard v našem salonu. Dopřejte svým vlasům péči, kterou si zaslouží.', kategorie: 'kvalita', nazev: 'Text 2 Kvalita' },
    { klicObsahu: 'kvalita_tlacitko', obsah: 'Rezervovat termín', kategorie: 'kvalita', nazev: 'Tlačítko Kvalita' },
    
    // Sekce Péče
    { klicObsahu: 'pece_nadpis', obsah: 'PÉČE', kategorie: 'pece', nazev: 'Nadpis sekce Péče' },
    { klicObsahu: 'pece_podnadpis', obsah: 'INDIVIDUÁLNÍ PŘÍSTUP KE KAŽDÉMU KLIENTOVI', kategorie: 'pece', nazev: 'Podnadpis sekce Péče' },
    { klicObsahu: 'pece_text1', obsah: 'Každý klient je pro nás jedinečný. Proto vám věnujeme maximální pozornost a čas na konzultaci, abychom pochopili vaše přání a potřeby.', kategorie: 'pece', nazev: 'Text 1 Péče' },
    { klicObsahu: 'pece_text2', obsah: 'Náš tým zkušených stylistů a kosmetiček se postará o to, abyste odcházeli spokojení s výsledkem a těšili se na další návštěvu.', kategorie: 'pece', nazev: 'Text 2 Péče' },
    { klicObsahu: 'pece_tlacitko', obsah: 'Prohlédnout služby', kategorie: 'pece', nazev: 'Tlačítko Péče' },
    
    // CTA sekce
    { klicObsahu: 'cta_nadpis', obsah: 'PŘIPRAVENI NA ZMĚNU?', kategorie: 'cta', nazev: 'Nadpis CTA' },
    { klicObsahu: 'cta_podnadpis', obsah: 'Rezervujte si termín ještě dnes a objevte svou novou krásu', kategorie: 'cta', nazev: 'Podnadpis CTA' },
    { klicObsahu: 'cta_tlacitko', obsah: 'Online rezervace', kategorie: 'cta', nazev: 'Tlačítko CTA' },
    
    // O nás
    { klicObsahu: 'o_nas_nadpis', obsah: 'O NAŠEM SALONU', kategorie: 'o_nas', nazev: 'Nadpis O nás' },
    { klicObsahu: 'o_nas_popis', obsah: 'Salon Zuza je místo, kde se tradice setkává s moderními trendy. Naši zkušení kadeřníci a kosmetičky vám poskytnou služby nejvyšší kvality v příjemném prostředí.', kategorie: 'o_nas', nazev: 'Popis O nás' },
    
    // Kontakt
    { klicObsahu: 'kontakt_adresa', obsah: 'Hlavní třída 123\\nBrno 602 00', kategorie: 'kontakt', nazev: 'Adresa' },
    { klicObsahu: 'kontakt_telefon', obsah: '+420 777 888 999', kategorie: 'kontakt', nazev: 'Telefon' },
    { klicObsahu: 'kontakt_email', obsah: 'info@salon-zuza.cz', kategorie: 'kontakt', nazev: 'Email' }
  ]

  for (const obsah of obsahStranky) {
    await prisma.obsahStranky.create({ data: obsah })
  }

  console.log('✅ Obsah stránek vytvořen')

  // 4. Galerie obrázků
  console.log('🖼️ Vytvářím galerii...')
  
  const galerie = [
    { nazev: 'Interiér salonu 1', url: '/imgssalon/interior-1.jpg', alt: 'Moderní interiér Salon Zuza', kategorie: 'interiér', poradi: 1 },
    { nazev: 'Pracovní místo', url: '/imgssalon/workspace-1.jpg', alt: 'Profesionální pracovní místo', kategorie: 'interiér', poradi: 2 },
    { nazev: 'Dámský střih', url: '/imgssalon/damsky-1.jpg', alt: 'Ukázka dámského střihu', kategorie: 'prace', poradi: 3 },
    { nazev: 'Barvení vlasů', url: '/imgssalon/barveni-1.jpg', alt: 'Profesionální barvení', kategorie: 'prace', poradi: 4 },
    { nazev: 'Kosmetika', url: '/imgssalon/kosmetika-1.jpg', alt: 'Kosmetické ošetření', kategorie: 'prace', poradi: 5 }
  ]

  for (const img of galerie) {
    await prisma.galerieObrazek.create({ data: img })
  }

  console.log('✅ Galerie vytvořena')

  // 5. Recenze
  console.log('⭐ Vytvářím recenze...')
  
  const recenze = [
    { jmeno: 'Anna K.', hodnoceni: 5, text: 'Úžasný salon! Kadeřnice věděla přesně, co s mými vlasy. Rezultát předčil má očekávání.', datum: new Date('2024-01-15') },
    { jmeno: 'Petr M.', hodnoceni: 5, text: 'Konečně salon, kde rozumí i pánským střihům. Rychle, kvalitně a za rozumnou cenu.', datum: new Date('2024-01-10') },
    { jmeno: 'Marie S.', hodnoceni: 5, text: 'Kosmetické ošetření bylo fantastické. Pleť měkká a zářivá. Určitě se vrátím!', datum: new Date('2024-01-08') }
  ]

  for (const r of recenze) {
    await prisma.recenze.create({ data: r })
  }

  console.log('✅ Recenze vytvořeny')

  console.log('\n✨ Inicializace úspěšně dokončena!')
  console.log(`   - ${sluzby.length} služeb ve 4 kategoriích`)
  console.log(`   - ${obsahStranky.length} obsahových prvků`)
  console.log(`   - ${galerie.length} obrázků do galerie`)
  console.log(`   - ${recenze.length} recenzí`)
}

main()
  .catch((e) => {
    console.error('❌ Chyba při inicializaci:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })