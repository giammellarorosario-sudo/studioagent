# StudioAgent - Decisions Log

**Purpose:** Track major strategic and tactical decisions to maintain alignment between CMO and CTO.

---

## 2025-11-29 | Phase 1: Brand & Naming

**Decision:** Nome finale = **StudioAgent**

**Context:**
- Analizzati 65+ nomi potenziali
- Criteri: pronunciabilità italiana, modernità, professionalità
- Evitato: troppo tech/startup-y che spaventa target 40-60 anni

**Approved by:** Entrambi founder

**Impact:**
- ✅ Logo design in corso
- ✅ Domain registrazione pending
- ✅ Brand guidelines create

---

## 2025-11-29 | Phase 1: Logo Concepts

**Decision:** 5 concept logo generati (SA Shield + varianti)

**Context:**
- Logo deve funzionare su WhatsApp profile (piccolo) e carta intestata (grande)
- Palette: Navy + Teal per professionalità + modernità
- Evitato: palazzi/edifici stilizzati (troppo ovvio)

**Approved by:** Entrambi founder

**Status:** Logo finale in selezione → sarà caricato in `/marketing/brand/`

---

## 2025-12-01 | Restructure: CMO/CTO Separation

**Decision:** Split repository in `/marketing` (CMO) + `/product` (CTO) + `/sales` (50/50) + `/shared`

**Context:**
- 2 founder part-time, necessità lavoro parallelo
- 2 istanze Claude separate
- Evitare conflitti Git

**Rationale:**
- CMO: esclusiva su marketing, GTM, content
- CTO: esclusiva su product, tech, MVP
- Sales: condivisa 50/50 (entrambi sales di professione)
- Shared: business plan, financial model, decisioni strategiche

**Approved by:** Entrambi founder

**Implementation:** Fase 1 - Settimana 1 (in corso)

---

## 2025-12-01 | Separate Repository for Services

**Decision:** Creare repo `servizi-clienti` separato da `studioagent`

**Context:**
- Servizi PMI (n8n/GHL) ≠ Prodotto SaaS
- Clienti diversi, deployment diverso, contabilità separata
- Evitare confusione e mantenere focus

**Rationale:**
- Generare revenue immediato (€3K-5K in 90 giorni)
- Finanziare sviluppo MVP StudioAgent
- Contabilità pulita e separata

**Approved by:** Entrambi founder

---

## 2025-12-01 | AI Model Selection

**Decision:**
- **Sonnet 4.5:** Default per tutto (backend, dashboard, integrations)
- **Opus 4.5 Desktop:** Solo landing page + mockup (output umani, aggressivi)

**Context:**
- Budget bootstrap <€5K
- Opus = 5x più costoso, 3x più lento
- Landing = 80% del marketing funnel iniziale → serve qualità top

**Rationale:**
- Sonnet: 95% qualità uguale per task standard, 5x più economico
- Opus per landing: output non AI-like, come team web designer + marketer
- Risparmio: €90-120 in 6 mesi vs Opus per tutto

**Approved by:** Entrambi founder

**Budget impact:** Landing €20 + Strategy €10 = €30 totale Opus in 6 mesi

---

## Template per Nuove Decisioni

```markdown
## YYYY-MM-DD | Titolo Decisione

**Decision:** [Cosa è stato deciso]

**Context:** [Situazione che ha richiesto la decisione]

**Rationale:** [Perché questa scelta vs alternative]

**Approved by:** CMO | CTO | Entrambi

**Impact/Next Steps:** [Cosa cambia, cosa fare dopo]
```

---

**Note:** Aggiornare questo file dopo ogni decisione strategica maggiore. Review settimanale durante sync call.
