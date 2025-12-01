# Setup Excel Contabilità - Istruzioni Complete

**File da creare:**
1. `accounting-studioagent.xlsx` (questo repository)
2. `accounting-servizi-clienti.xlsx` (repository servizi-clienti)

**Tempo stimato:** 30 minuti totali (15 min per file)

---

## File 1: accounting-studioagent.xlsx

### Sheet 1: ENTRATE

**Struttura colonne:**

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Data | Importo (€) | Tipo | Note | Mese | Anno |

**Setup:**

1. Apri Excel, crea nuovo file
2. Rinomina Sheet1 → "Entrate"
3. Riga 1 (header): inserisci nomi colonne come sopra
4. Formatta riga 1: **Grassetto**, Sfondo grigio chiaro

**Formattazione colonne:**

- **Colonna A (Data):**
  - Seleziona A2:A1000
  - Formato celle → Data → YYYY-MM-DD (es. 2025-11-15)

- **Colonna B (Importo €):**
  - Seleziona B2:B1000
  - Formato celle → Valuta → Euro (€) con 2 decimali

- **Colonna C (Tipo):**
  - Seleziona C2:C1000
  - Dati → Convalida dati → Elenco
  - Origine: `saas,consulenze,altro`

- **Colonna D (Note):**
  - Testo normale, max 100 caratteri

- **Colonna E (Mese):**
  - Seleziona E2, inserisci formula: `=TEXT(A2,"MMM")`
  - Trascina formula fino a E1000

- **Colonna F (Anno):**
  - Seleziona F2, inserisci formula: `=YEAR(A2)`
  - Trascina formula fino a F1000

**Esempio dati (riga 2):**
```
2025-11-15 | 1200.00 | saas | Primo cliente beta | Nov | 2025
```

---

### Sheet 2: USCITE

**Struttura colonne:**

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Data | Importo (€) | Tipo | Note | Mese | Anno |

**Setup:**

1. Clicca su "+" per nuovo sheet
2. Rinomina Sheet2 → "Uscite"
3. Riga 1 (header): inserisci nomi colonne
4. Formatta riga 1: **Grassetto**, Sfondo grigio chiaro

**Formattazione colonne:**

- **Colonna A (Data):** Formato data YYYY-MM-DD (come Entrate)
- **Colonna B (Importo €):** Formato valuta Euro (come Entrate)
- **Colonna C (Tipo):**
  - Convalida dati → Elenco
  - Origine: `saas,marketing,corsi,consulenze`
- **Colonna D (Note):** Testo normale
- **Colonna E (Mese):** Formula `=TEXT(A2,"MMM")`
- **Colonna F (Anno):** Formula `=YEAR(A2)`

**Esempio dati (riga 2):**
```
2025-11-01 | 350.00 | marketing | Facebook Ads | Nov | 2025
2025-11-05 | 120.00 | saas | Vercel hosting | Nov | 2025
```

---

### Sheet 3: RIEPILOGO

**Struttura:**

1. Crea nuovo sheet → "Riepilogo"
2. Layout:

```
     A              B
1  MESE:          Nov        (dropdown)
2  ANNO:          2025       (dropdown)
3
4  === ENTRATE ===
5  Totali:        €0,00
6    - SaaS:      €0,00
7    - Cons:      €0,00
8    - Altro:     €0,00
9
10 === USCITE ===
11 Totali:        €0,00
12   - SaaS:      €0,00
13   - Marketing: €0,00
14   - Corsi:     €0,00
15   - Cons:      €0,00
16
17 SALDO MENSILE:     €0,00
18 SALDO CUMULATIVO:  €0,00
```

**Setup dropdown Mese (B1):**
- Convalida dati → Elenco
- Origine: `Gen,Feb,Mar,Apr,Mag,Giu,Lug,Ago,Set,Ott,Nov,Dic`
- Default: Mese corrente

**Setup dropdown Anno (B2):**
- Convalida dati → Elenco
- Origine: `2025,2026,2027,2028`
- Default: 2025

**Formule cella B5 (Totali Entrate):**
```excel
=SUMIFS(Entrate!B:B, Entrate!E:E, Riepilogo!B1, Entrate!F:F, Riepilogo!B2)
```

**Formule cella B6 (Entrate SaaS):**
```excel
=SUMIFS(Entrate!B:B, Entrate!E:E, Riepilogo!B1, Entrate!F:F, Riepilogo!B2, Entrate!C:C, "saas")
```

**Formule cella B7 (Entrate Consulenze):**
```excel
=SUMIFS(Entrate!B:B, Entrate!E:E, Riepilogo!B1, Entrate!F:F, Riepilogo!B2, Entrate!C:C, "consulenze")
```

**Formule cella B8 (Entrate Altro):**
```excel
=SUMIFS(Entrate!B:B, Entrate!E:E, Riepilogo!B1, Entrate!F:F, Riepilogo!B2, Entrate!C:C, "altro")
```

**Formule cella B11 (Totali Uscite):**
```excel
=SUMIFS(Uscite!B:B, Uscite!E:E, Riepilogo!B1, Uscite!F:F, Riepilogo!B2)
```

**Formule cella B12 (Uscite SaaS):**
```excel
=SUMIFS(Uscite!B:B, Uscite!E:E, Riepilogo!B1, Uscite!F:F, Riepilogo!B2, Uscite!C:C, "saas")
```

**Formule cella B13 (Uscite Marketing):**
```excel
=SUMIFS(Uscite!B:B, Uscite!E:E, Riepilogo!B1, Uscite!F:F, Riepilogo!B2, Uscite!C:C, "marketing")
```

**Formule cella B14 (Uscite Corsi):**
```excel
=SUMIFS(Uscite!B:B, Uscite!E:E, Riepilogo!B1, Uscite!F:F, Riepilogo!B2, Uscite!C:C, "corsi")
```

**Formule cella B15 (Uscite Consulenze):**
```excel
=SUMIFS(Uscite!B:B, Uscite!E:E, Riepilogo!B1, Uscite!F:F, Riepilogo!B2, Uscite!C:C, "consulenze")
```

**Formula cella B17 (Saldo Mensile):**
```excel
=B5-B11
```

**Formula cella B18 (Saldo Cumulativo):**
```excel
=SUMIF(Entrate!A:A, "<="&EOMONTH(DATE(Riepilogo!B2,MATCH(Riepilogo!B1,"Gen,Feb,Mar,Apr,Mag,Giu,Lug,Ago,Set,Ott,Nov,Dic",0),1),0), Entrate!B:B) - SUMIF(Uscite!A:A, "<="&EOMONTH(DATE(Riepilogo!B2,MATCH(Riepilogo!B1,"Gen,Feb,Mar,Apr,Mag,Giu,Lug,Ago,Set,Ott,Nov,Dic",0),1),0), Uscite!B:B)
```

**Formattazione condizionale (Riepilogo):**

- Seleziona B17 (Saldo Mensile):
  - Formattazione condizionale → Nuova regola
  - Formula: `=B17<0` → Formato: Rosso, grassetto
  - Formula: `=B17>=0` → Formato: Verde, grassetto

- Seleziona B11 (Totali Uscite):
  - Formattazione condizionale → Nuova regola
  - Formula: `=B11>1000` → Formato: Sfondo giallo (warning)

**Salva file come:** `accounting-studioagent.xlsx` nella root di studioagent

**Aggiungi a .gitignore** (vedi sezione finale)

---

## File 2: accounting-servizi-clienti.xlsx

### Sheet 1: ENTRATE

**Struttura colonne (DIVERSA da studioagent):**

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Data | Importo (€) | Tipo | Cliente | Servizio | Note | Mese | Anno |

**Setup:**

1. Nuovo file Excel
2. Rinomina Sheet1 → "Entrate"
3. Header riga 1

**Formattazione:**

- **Colonna A (Data):** Formato YYYY-MM-DD
- **Colonna B (Importo €):** Valuta Euro
- **Colonna C (Tipo):** Dropdown: `consulenze,saas,altro`
- **Colonna D (Cliente):** Testo (nome cliente)
- **Colonna E (Servizio):** Testo (descrizione servizio)
- **Colonna F (Note):** Testo
- **Colonna G (Mese):** Formula `=TEXT(A2,"MMM")`
- **Colonna H (Anno):** Formula `=YEAR(A2)`

**Esempio dati:**
```
2025-11-20 | 350.00 | consulenze | Parrucchiere Rosa | Setup n8n booking | One-time | Nov | 2025
2025-12-01 | 89.00 | consulenze | Meccanico Auto+ | Monthly maintain | Recurring | Dec | 2025
```

---

### Sheet 2: USCITE

Identica a accounting-studioagent.xlsx (stessa struttura, stesse formule)

---

### Sheet 3: RIEPILOGO

Identico a accounting-studioagent.xlsx (stessa struttura, stesse formule)

---

### Sheet 4: RIEPILOGO CLIENTI

**Nuova!** Sheet extra per tracciare clienti servizi.

**Struttura:**

| A | B | C | D | E |
|---|---|---|---|---|
| Cliente | Entrate Totali | Servizi Attivi | Ultimo Pagamento | Status |

**Setup:**

1. Nuovo sheet → "Riepilogo Clienti"
2. Header riga 1
3. Inserisci manualmente i clienti (oppure usa formule avanzate)

**Formule esempio (riga 2 per cliente "Parrucchiere Rosa"):**

- **B2 (Entrate Totali):**
```excel
=SUMIF(Entrate!D:D, A2, Entrate!B:B)
```

- **C2 (Servizi Attivi):**
```excel
=COUNTIF(Entrate!D:D, A2)
```

- **D2 (Ultimo Pagamento):**
```excel
=MAXIFS(Entrate!A:A, Entrate!D:D, A2)
```
Formatta come data

- **E2 (Status):**
Dropdown manuale: `Attivo,Pausa,Chiuso`

**Esempio dati:**
```
Parrucchiere Rosa | €350.00 | 1 | 2025-11-20 | Attivo
Meccanico Auto+   | €89.00  | 1 | 2025-12-01 | Attivo
```

**Salva file come:** `accounting-servizi-clienti.xlsx`

---

## Formattazione Finale (Entrambi i File)

### Colori e Stili

**Entrate sheet:**
- Header: Sfondo verde chiaro #E2EFDA
- Bordi griglia sottili

**Uscite sheet:**
- Header: Sfondo rosso chiaro #FCE4D6
- Bordi griglia sottili

**Riepilogo sheet:**
- Titoli (A4, A10): Grassetto, font 12pt
- Valori (colonna B): Grassetto dove necessario
- Saldo positivo: Verde
- Saldo negativo: Rosso

### Protezione (Opzionale)

Per evitare modifiche accidentali formule:

1. Seleziona celle con formule (E2:F1000, tutto Riepilogo)
2. Formato celle → Protezione → Bloccata ✓
3. Revisione → Proteggi foglio → Password (opzionale)

---

## Aggiungere a .gitignore

**IMPORTANTE:** I file Excel NON vanno committati su Git (contengono dati finanziari sensibili).

Apri `.gitignore` nella root di studioagent e aggiungi:

```
# Excel Contabilità (dati sensibili)
accounting-*.xlsx
accounting-*.xls
~$*.xlsx
```

Per servizi-clienti repository, stessa cosa nel suo `.gitignore`.

---

## Test Finale

**Checklist per accounting-studioagent.xlsx:**

- [ ] Sheet "Entrate" con 6 colonne (A-F)
- [ ] Sheet "Uscite" con 6 colonne (A-F)
- [ ] Sheet "Riepilogo" con dropdown Mese/Anno funzionanti
- [ ] Formule Riepilogo calcolano correttamente (test con 1-2 righe dati)
- [ ] Formattazione condizionale funziona (saldo rosso/verde)
- [ ] Dropdown Tipo funzionano (Entrate: saas/consulenze/altro, Uscite: +marketing/corsi)

**Checklist per accounting-servizi-clienti.xlsx:**

- [ ] Sheet "Entrate" con 8 colonne (A-H, include Cliente + Servizio)
- [ ] Sheet "Uscite" con 6 colonne
- [ ] Sheet "Riepilogo" funzionante
- [ ] Sheet "Riepilogo Clienti" con formule
- [ ] Test: inserisci 1 cliente, verifica calcoli automatici

**Test inserimento dati:**

1. Vai a Entrate, inserisci transazione fake:
   - Data: oggi
   - Importo: €100
   - Tipo: saas
   - Note: "Test"

2. Vai a Riepilogo
3. Seleziona mese/anno corrente
4. Verifica: Totali Entrate = €100, SaaS = €100

5. Vai a Uscite, inserisci:
   - Data: oggi
   - Importo: €50
   - Tipo: marketing
   - Note: "Test"

6. Verifica Riepilogo: Saldo Mensile = €50 (verde)

7. Elimina righe test

**File pronti!** 🎉

---

## Backup

**Setup backup automatico:**

1. Copia file Excel in cloud (Google Drive, OneDrive, Dropbox)
2. Abilita versioning automatico
3. Backup manuale settimanale (venerdì sera)

**Naming backup:** `accounting-studioagent-YYYY-MM-DD.xlsx`

---

**Domande?** Vedi `/shared/decisions-log.md` o chiedi a CTO/CMO.
