import { SluzbaModel, KategorieSluzebModel } from '../models/SluzbaModel'

async function test() {
  console.log('🧪 Testování SluzbaModel...\n')

  try {
    // Test 1: Získat všechny kategorie
    console.log('1️⃣ Test: Získání všech kategorií')
    const kategorie = await KategorieSluzebModel.ziskatVsechny()
    console.log(`   ✅ Nalezeno ${kategorie.length} kategorií`)
    kategorie.forEach(k => console.log(`      - ${k.nazev} (ID: ${k._id})`))

    // Test 2: Získat všechny služby
    console.log('\n2️⃣ Test: Získání všech služeb')
    const sluzby = await SluzbaModel.ziskatVsechny()
    console.log(`   ✅ Nalezeno ${sluzby.length} služeb`)
    sluzby.slice(0, 3).forEach(s => {
      console.log(`      - ${s.nazev} (${s.kategorie})`)
      console.log(`        Cena: Top: ${s.cena.top_stylist} Kč, Stylist: ${s.cena.stylist} Kč`)
    })

    // Test 3: Získat služby podle kategorie
    if (kategorie.length > 0) {
      console.log('\n3️⃣ Test: Získání služeb podle kategorie')
      const kategorieId = parseInt(kategorie[0]._id)
      const sluzbyKategorie = await SluzbaModel.ziskatPodleKategorie(kategorieId)
      console.log(`   ✅ Nalezeno ${sluzbyKategorie.length} služeb v kategorii "${kategorie[0].nazev}"`)
    }

    // Test 4: Získat konkrétní službu
    if (sluzby.length > 0) {
      console.log('\n4️⃣ Test: Získání konkrétní služby')
      const sluzbaId = parseInt(sluzby[0]._id)
      const sluzba = await SluzbaModel.ziskatPodleId(sluzbaId)
      if (sluzba) {
        console.log(`   ✅ Služba nalezena: ${sluzba.nazev}`)
        console.log(`      Kategorie: ${sluzba.kategorie}`)
        console.log(`      Doba: ${sluzba.dobaTrvaniMinuty} min`)
        console.log(`      Ceny:`)
        console.log(`        - Top stylist: ${sluzba.cena.top_stylist} Kč`)
        console.log(`        - Stylist: ${sluzba.cena.stylist} Kč`)
        console.log(`        - Junior: ${sluzba.cena.junior_stylist} Kč`)
      }
    }

    console.log('\n✅ Všechny testy prošly úspěšně!')

  } catch (error) {
    console.error('❌ Test selhal:', error)
    process.exit(1)
  }
}

test()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })