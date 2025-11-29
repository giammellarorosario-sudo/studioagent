# Strategia di Caching per CondoAI

## Overview
Ottimizzazione context caching per sviluppo efficiente con Claude Code e agenti AI.

## Implementazione

### 1. Git-Based Caching
- **Trigger:** Ogni commit
- **Scope:** File tracciati da Git
- **Invalidazione:** Modifiche file specifici

### 2. File Patterns

**Alta priorità cache (documentazione):**
- `01-strategy/**/*.md` - Strategia business
- `02-product/**/*.md` - Specifiche prodotto
- `README.md`, `docs/**` - Documentazione
- `# PROGETTO AI Suite per Amministrat.txt` - Masterprompt

**Media priorità (codice):**
- `03-mvp/**/*.{js,ts,py}` - Codice applicativo
- `package.json`, `requirements.txt` - Dipendenze

**Esclusi da cache:**
- `node_modules/`, `.venv/` - Dipendenze
- `*.log`, `.env` - File temporanei/sensibili
- `dist/`, `build/` - Artefatti build

### 3. Best Practices

1. **Commit frequenti** - Granularità fine per cache
2. **File markdown** - Ottimi per caching semantico
3. **Struttura modulare** - Modifiche localizzate = cache hit rate alto
4. **Documentazione inline** - Context sempre disponibile

### 4. Metriche di Successo

- Token cache hit rate > 70%
- Tempo risposta < 2s (vs 5-10s senza cache)
- Costo per sessione ridotto 60-80%

## Configurazione

Vedi `.claude/agent-config.json` per configurazione caching.

## Manutenzione

- Review `.gitignore` ogni milestone
- Monitor cache effectiveness
- Cleanup commit history se repository diventa troppo grande (Git GC)
