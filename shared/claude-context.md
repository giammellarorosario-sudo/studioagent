# StudioAgent Context

**Ultima modifica:** 2025-12-01
**Versione:** 1.0

---

## Progetto

- **Nome:** StudioAgent
- **Settore:** B2B SaaS per amministratori di condominio in Italia
- **Target Market:** 35.000 studi di amministrazione condominiale in Italia
- **Unità gestite:** ~1.2M edifici condominiali
- **TAM potenziale:** €300M+

**Problema risolto:**
Gli amministratori condominiali perdono 5+ ore/giorno rispondendo alle stesse domande dei condòmini. I software attuali (Danea, Sistemi, Buffetti) sono gestionali anni '90, non assistenti intelligenti.

**Soluzione:**
Piattaforma AI che gestisce comunicazione condòmini via email + WhatsApp, fornisce knowledge base interna per operatori studio, automatizza risposte su normativa + regolamenti condominiali.

---

## Brand

- **Nome:** StudioAgent
- **Logo:** In fase di creazione → sarà caricato in `/marketing/brand/` a breve
- **Tagline:** *AI Suite per Amministratori di Condominio*
- **Tone of Voice:** Professionale, accessibile, moderno ma rassicurante
- **Target Persona:** Amministratore 40-60 anni, mediamente conservatore, aperto a soluzioni che risparmiano tempo

---

## Ruoli Team

**CMO (Chief Marketing Officer):**
- Marketing strategy & content
- GTM (Go-to-Market) execution
- Brand development
- **Sales 50%** (condivisa con CTO)

**CTO (Chief Technology Officer):**
- Product development & architecture
- Technical specifications
- MVP development
- **Sales 50%** (condivisa con CMO)

**Note:** Entrambi i founder hanno background sales professionale → competenza condivisa al 50/50.

---

## Fase Attuale

**Phase 2:** Business Strategy (targeting, pricing, GTM)

**Completato:**
- ✅ Phase 1: Brand & Naming (StudioAgent scelto, 5 loghi generati)

**In corso:**
- 🔄 Restructure repository (CMO/CTO separation)
- 🔄 Business plan development
- 🔄 Pricing strategy definition
- 🔄 Services business setup (n8n/GHL automations for SMBs)

**Prossimi step:**
- Phase 3: Pitch deck
- Phase 4: Product specifications (PRD, UX, tech architecture)
- Phase 5: MVP development

---

## Tech Stack (Pianificato)

**Frontend:** React/Next.js
**Backend:** Node.js or Python (TBD)
**Database:** PostgreSQL
**AI/LLM:** Claude (Anthropic)
**Integrations:** WhatsApp Business API, Gmail/Outlook API
**Infrastructure:** Cloud (AWS/GCP/Vercel - TBD)

**AI Model Usage:**
- **Sonnet 4.5:** Backend, dashboard, API, integrations, CRUD (default per tutto)
- **Opus 4.5 Desktop:** Landing page + mockup (output aggressivi, umani, non AI-like)

---

## Repository Structure

```
studioagent/
├── /marketing/          (CMO domain)
├── /product/            (CTO domain)
├── /sales/              (50/50 entrambi)
├── /shared/             (read-mostly, entrambi)
├── /docs/
├── accounting-studioagent.xlsx
└── README.md
```

**Repo separato:** `servizi-clienti` (automazioni n8n/GHL per PMI)

---

## Budget & Timeline

**Budget totale:** <€5.000 (bootstrap mode)
**Timeline MVP:** 6 mesi
**Revenue target primi 90 giorni:** €3.000-5.000 (da servizi SMB)

**Allocazione budget:**
- Development (Sonnet): €200 (4%)
- Landing (Opus): €20 (0.4%)
- Marketing: €1.500 (30%)
- Infrastructure: €1.000 (20%)
- Service Tools: €500 (10%)
- Buffer: €1.770 (35.4%)

---

## Note Importanti

1. **Startup Part-Time:** Entrambi founder lavorano full-time altrove → ottimizzare tempo e costi
2. **Services-First:** Revenue da servizi PMI (automazioni) finanzia sviluppo prodotto
3. **Git Workflow:** Branch `[CMO]` e `[CTO]`, ownership chiara per cartella
4. **Context Sharing:** Caricare questo file all'inizio di ogni sessione Claude

---

**Per domande o modifiche:** Aggiornare `/shared/decisions-log.md`
