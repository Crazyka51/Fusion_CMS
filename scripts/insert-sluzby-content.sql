-- Vložení obsahu služeb do databáze

-- Hero sekce
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_hero_nadpis', 'NAŠE SLUŽBY', 'nadpis', 'sluzby', 'Nadpis hero sekce na stránce služeb', NOW(), NOW()),
('sluzby_hero_popis', 'V našem salonu nabízíme profesionální kadeřnické služby pro ženy, muže i děti. Pracujeme s kvalitními produkty značek Framesi a LABEL.M, abychom vašim vlasům dopřáli tu nejlepší péči.', 'popis', 'sluzby', 'Popis v hero sekci služeb', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();

-- Střih
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_strih_nadpis', 'Střih', 'nadpis', 'sluzby', 'Nadpis sekce Střih', NOW(), NOW()),
('sluzby_strih_popis', 'Krátké vlasy – Precizní střih a styling pro svěží a moderní vzhled.
Polodlouhé vlasy – Profesionální úprava, která podtrhne přirozenou krásu.
Dlouhé vlasy – Perfektní tvar a péče pro zdravé a upravené vlasy.
Extra dlouhé vlasy – Individuální střih a styling pro maximální efekt.
Pánské střihy – Klasické i moderní účesy pro každého muže.
Dětské střihy – Šetrný přístup a trendy účesy pro nejmenší.', 'text', 'sluzby', 'Popis služeb Střih', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();

-- Barvení vlasů
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_barveni_nadpis', 'Barvení vlasů', 'nadpis', 'sluzby', 'Nadpis sekce Barvení vlasů', NOW(), NOW()),
('sluzby_barveni_popis', 'Krátké vlasy a odrost – Dokonalé sjednocení barvy pro přirozený vzhled.
Polodlouhé vlasy – Profesionální barvení pro hloubku a lesk.
Dlouhé vlasy – Intenzivní a dlouhotrvající barva pro krásné vlasy.
Přeliv – Jemné tónování pro osvěžení a sjednocení barvy.', 'text', 'sluzby', 'Popis služeb Barvení vlasů', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();

-- Melír
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_melir_nadpis', 'Melír', 'nadpis', 'sluzby', 'Nadpis sekce Melír', NOW(), NOW()),
('sluzby_melir_popis', 'Klasický melír – Přirozené prosvětlení vlasů pro svěží vzhled.
1 ks fólie do účesu (krátká) – Jemný melír pro decentní zvýraznění.
1 ks fólie do účesu (dlouhá) – Efektní melír pro větší kontrast a hloubku.', 'text', 'sluzby', 'Popis služeb Melír', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();

-- Svatební a společenské účesy
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_svatebni_nadpis', 'Svatební a společenské účesy', 'nadpis', 'sluzby', 'Nadpis sekce Svatební účesy', NOW(), NOW()),
('sluzby_svatebni_popis', 'Připravujeme dokonalé svatební a společenské účesy, které podtrhnou vaši krásu a vydrží celý den. Od romantických vln přes elegantní drdoly až po složité copánkové kreace – pomůžeme vám vytvořit účes, který se perfektně hodí k vašemu stylu a šatům. Rezervujte si svou konzultaci a nechte si vytvořit účes na míru!', 'text', 'sluzby', 'Popis služeb Svatební účesy', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();

-- Regenerace a ošetření vlasů
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_regenerace_nadpis', 'Regenerace a ošetření vlasů', 'nadpis', 'sluzby', 'Nadpis sekce Regenerace', NOW(), NOW()),
('sluzby_regenerace_popis', 'Dopřejte svým vlasům hloubkovou regeneraci s profesionální péčí Framesi a LABEL.M. Naše ošetření obnovují poškozené vlasy, posilují jejich strukturu a dodávají jim intenzivní hydrataci. Vyzkoušejte Smoothing systém pro dokonale hladké a zdravé vlasy bez krepatění. Rezervujte si svůj termín a nechte své vlasy rozmazlovat!', 'text', 'sluzby', 'Popis služeb Regenerace', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();

-- Zesvětlování a speciální techniky
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_zesvetlen_nadpis', 'Zesvětlování a speciální techniky', 'nadpis', 'sluzby', 'Nadpis sekce Zesvětlování', NOW(), NOW()),
('sluzby_zesvetlen_popis', 'Oživte své vlasy profesionálním zesvětlením nebo moderními technikami, jako je Ombré, AirTouch nebo Micromelír. Dosáhněte přirozeného přechodu barev, jemného prosvětlení nebo odvážnějšího efektu blond tónů. Naše zesvětlovací metody jsou šetrné k vlasům a zajišťují dlouhotrvající a zdravý vzhled.', 'text', 'sluzby', 'Popis služeb Zesvětlování', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();

-- Nadstandardní péče
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_plex_nadpis', 'Nadstandardní péče PLEX, PRO-FORCE', 'nadpis', 'sluzby', 'Nadpis sekce PLEX péče', NOW(), NOW()),
('sluzby_plex_popis', 'Chcete svým vlasům dopřát luxusní péči? Naše nadstandardní ošetření PLEX a PRO-FORCE posilují vlasy, chrání je před poškozením a zajišťují jejich zdravý vzhled. Ideální pro regeneraci po barvení nebo jako prevence před lámáním a třepením konečků. Objednejte si VIP péči pro vaše vlasy ještě dnes!', 'text', 'sluzby', 'Popis služeb PLEX péče', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();

-- CTA sekce
INSERT INTO "ObsahStranky" (klic, hodnota, typ, stranka, popis, "createdAt", "updatedAt")
VALUES 
('sluzby_cta_nadpis', 'Zaujala vás některá služba?', 'nadpis', 'sluzby', 'Nadpis CTA sekce na stránce služeb', NOW(), NOW()),
('sluzby_cta_popis', 'Rezervujte si termín online nebo nás kontaktujte pro více informací', 'text', 'sluzby', 'Popis CTA sekce na stránce služeb', NOW(), NOW())

ON CONFLICT (klic) DO UPDATE SET
  hodnota = EXCLUDED.hodnota,
  "updatedAt" = NOW();
