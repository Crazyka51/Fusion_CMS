import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Spouštím migraci dat pro nové schéma služeb...')

  try {
    // Nejprve vytvoříme kategorie
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

    // Přemigrujeme služby s novými daty
    console.log('📋 Migrace služeb na nové schéma...')

    // Mapování kategorií
    const kategorieMap: Record<string, number> = {
      'damske': kategorieDamske.id,
      'panske': kategoriePanske.id,
      'barveni': kategorieBarveni.id,
      'kosmetika': kategorieKosmetika.id,
      'general': kategorieDamske.id // default
    }

    // Získat všechny existující služby
    const stareSluzby = await prisma.$queryRaw<any[]>`
      SELECT * FROM sluzby
    `

    console.log(`   Nalezeno ${stareSluzby.length} služeb k migraci`)

    // Pro každou službu vytvoříme novou verzi
    for (const stara of stareSluzby) {
      const kategorieId = kategorieMap[stara.kategorie] || kategorieDamske.id
      
      // Přibližné ceny podle úrovně (top stylist +30%, junior -20%)
      const cenaStylist = stara.cena || 1000
      const cenaTop = Math.round(cenaStylist * 1.3)
      const cenaJunior = Math.round(cenaStylist * 0.8)

      await prisma.$executeRaw`
        UPDATE sluzby 
        SET 
          kategorie_id = ${kategorieId},
          doba_trvani_minuty = ${stara.doba || 60},
          cena_top_stylist = ${cenaTop},
          cena_stylist = ${cenaStylist},
          cena_junior_stylist = ${cenaJunior}
        WHERE id = ${stara.id}
      `
      
      console.log(`   ✓ Služba "${stara.nazev}" migrována`)
    }

    // Odstraníme staré sloupce pomocí raw SQL
    console.log('🗑️  Odstraňuji staré sloupce...')
    await prisma.$executeRaw`ALTER TABLE sluzby DROP COLUMN IF EXISTS cena`
    await prisma.$executeRaw`ALTER TABLE sluzby DROP COLUMN IF EXISTS doba`
    await prisma.$executeRaw`ALTER TABLE sluzby DROP COLUMN IF EXISTS kategorie`

    console.log('✅ Migrace úspěšně dokončena!')
    console.log(`   - ${Object.keys(kategorieMap).length} kategorií`)
    console.log(`   - ${stareSluzby.length} služeb`)

  } catch (error) {
    console.error('❌ Chyba při migraci:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error('❌ Migrace selhala:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })