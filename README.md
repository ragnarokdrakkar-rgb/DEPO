# Depo Injekcije — Ordinacija

Aplikacija za vodenje pacientov, terminov in zalog depo injekcij.
Deluje v brskalniku, podatki se hranijo **lokalno na vsakem računalniku**.

---

## 1. Prva objava na GitHub (narediš enkrat)

1. Ustvari račun na **github.com** (če ga še nimaš).
2. Klikni **+** (desno zgoraj) → **New repository**.
   - Repository name: `depo-injekcije`
   - Izberi **Public** (zasebni repo za Pages zahteva plačljiv račun — koda ne vsebuje podatkov pacientov, zato je javni varen).
   - Klikni **Create repository**.
3. Na strani repozitorija klikni **uploading an existing file**.
4. Povleci v okno **vse datoteke in mapo iz tega paketa**:
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - mapo `icons` (z vsemi 3 slikami)
5. Spodaj klikni **Commit changes**.
6. Pojdi v **Settings** (zavihek repozitorija) → **Pages** (levi meni).
   - Pod "Branch" izberi **main** in mapo **/ (root)** → **Save**.
7. Počakaj ~1 minuto. Na vrhu strani Pages se prikaže naslov, npr.:
   `https://TVOJE-IME.github.io/depo-injekcije/`

To je naslov tvoje aplikacije. Deluje od koderkoli.

---

## 2. Namestitev v ambulanti (na vsakem računalniku)

1. Odpri naslov aplikacije v **Chrome** ali **Edge**.
2. V naslovni vrstici (desno) klikni ikono **"Namesti"** / **"Install app"**
   (ali meni ⋮ → *Cast, save and share* → *Install page as app*).
3. Aplikacija dobi **ikono na namizju** in se odpira v svojem oknu, brez brskalniške vrstice.
4. V aplikaciji: **Nastavitve → Uvozi** in izberi svoj zadnji JSON backup.
5. V **Nastavitve → Avtomatski backup** izberi mapo za dnevne backupe
   (priporočilo: mapa znotraj OneDrive/Google Drive — glej spodaj).

---

## 3. Posodobitve (ko ti pripravim novo verzijo)

1. Odpri svoj repozitorij na GitHub.
2. Klikni na datoteko `index.html` → ikona **svinčnika ne** — raje:
   **Add file → Upload files** in povleci novo `index.html` (in `sw.js`, če je priložen).
3. **Commit changes**.
4. V ambulanti: aplikacija ob naslednjem zagonu sama prenese novo verzijo.
   Če je odprta, se pojavi gumb **"Posodobi"** na dnu zaslona.
5. Katero verzijo imaš, vidiš v **Nastavitve → O aplikaciji**.

---

## 4. POMEMBNO: podatki v dveh ambulantah

GitHub gosti samo **aplikacijo (kodo)** — podatki pacientov so shranjeni
**lokalno v brskalniku vsakega računalnika** in se NE prenašajo prek GitHuba.
To je dobro za zasebnost, pomeni pa:

> **Ambulanta A in ambulanta B imata vsaka SVOJO bazo podatkov.**

### Možnosti:

**A) Vsaka ambulanta ima svoje paciente** → ni problema, vsaka vodi svoje.

**B) Isti pacienti v obeh ambulantah** → potrebuješ prenos podatkov:
   1. V obeh ambulantah nastavi **avtomatski backup v mapo, ki se sinhronizira**
      (OneDrive, Google Drive ali Dropbox mapa).
   2. Ko prideš v drugo ambulanto: **Nastavitve → Uvozi** → izberi
      najnovejši backup iz sinhronizirane mape.
   3. ⚠️ Pravilo: **vedno delaj samo v eni ambulanti naenkrat** in pred
      menjavo lokacije naredi backup (gumb "Backup zdaj"). Če vnašaš
      podatke na obeh hkrati, se spremembe NE združijo — velja zadnji uvoz.

---

## Datoteke v paketu

| Datoteka | Namen |
|---|---|
| `index.html` | Celotna aplikacija |
| `manifest.webmanifest` | Omogoča namestitev z ikono |
| `sw.js` | Offline delovanje + samodejne posodobitve |
| `icons/` | Ikone aplikacije |
