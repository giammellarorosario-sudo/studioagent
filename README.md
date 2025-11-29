# StudioAgent

**AI Suite per Amministratori di Condominio - Italia**

## 🎯 Overview

Piattaforma B2B SaaS che rivoluziona la gestione delle comunicazioni per gli amministratori di condominio italiani, combinando automazione AI con integrazione WhatsApp ed email.

### Il Problema
Gli amministratori di condominio perdono 5+ ore al giorno rispondendo alle stesse domande dei condòmini. I software attuali (Danea, Sistemi, Buffetti) sono gestionali anni '90, non assistenti intelligenti.

### La Soluzione
- 🤖 **AI Engine** per risposte automatiche basate su normativa e regolamenti
- 💬 **WhatsApp + Email** centralizzati in unica dashboard
- 📚 **Knowledge Base** con normativa condominiale italiana
- ⚡ **Automazione** per risposte ripetitive

## 📊 Mercato

- **Target:** 35.000 studi di amministrazione condominio in Italia
- **TAM Potenziale:** €300M+
- **Segmento Iniziale:** Studi medio-piccoli (20-80 condomìni)

## 🏗️ Struttura Progetto

```
studioagent/
├── 01-strategy/          # Strategia business, brand, GTM
│   ├── brand/
│   ├── business/
│   ├── gtm/
│   └── pitch/
├── 02-product/           # Specifiche prodotto e architettura
│   ├── specs/
│   ├── ux/
│   └── technical/
├── 03-mvp/              # Codice applicativo
│   ├── backend/
│   ├── frontend/
│   ├── integrations/
│   └── knowledge-base/
└── 04-assets/           # Asset grafici e marketing
    ├── logos/
    ├── presentations/
    └── marketing/
```

## 🚀 Setup con Caching

Questo progetto è ottimizzato per Claude Code con caching abilitato.

### Benefici del Caching
- ⚡ Risposte 3-5x più veloci
- 💰 Riduzione costi API (60-80% meno token processati)
- 🔄 Context persistente tra sessioni

### Come Funziona
Il caching si basa su Git:
1. I file committati vengono indicizzati
2. Claude Code riutilizza context per file non modificati
3. Solo i cambiamenti vengono re-processati

## 📝 Stato Progetto

**Fase Corrente:** Setup iniziale e strategia

Vedi [PROGETTO AI Suite per Amministrat.txt](# PROGETTO AI Suite per Amministrat.txt) per il masterprompt completo.

## 🛠️ Tech Stack (Planned)

- **Frontend:** React/Next.js
- **Backend:** Node.js/Python
- **Database:** PostgreSQL
- **AI:** Claude (Anthropic)
- **Integrations:** WhatsApp Business API, Gmail/Outlook API
- **Infrastructure:** Cloud (da definire)

## 📄 License

Proprietario - Tutti i diritti riservati

---

**Ultima modifica:** 2025-11-29
