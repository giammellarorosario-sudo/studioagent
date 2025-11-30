# 🔧 Istruzioni Tecniche - Rename Repository

**Stato attuale:** ✅ Rename completato

---

## ⚠️ IMPORTANTE - Stato Aggiornamento

La repository GitHub è stata rinominata in "studioagent" e tutti i file interni sono già aggiornati a "StudioAgent".

**Devi eseguire queste operazioni NELL'ORDINE ESATTO:**

---

## Step 1: Push dei Commit Locali

**Stato attuale:**
```
Branch: master
Ahead of origin/master by 7 commits
Remote URL: https://github.com/giammellarorosario-sudo/studioagent.git
```

**Azione:**
1. Chiudi Claude Code (questa sessione)
2. Apri un terminale nella directory "condo ai"
3. Esegui push:

```bash
cd "C:\Users\giamm\condo ai"
git push origin master
```

**Verifica successo:**
```bash
git status
# Deve dire: "Your branch is up to date with 'origin/master'"
```

---

## Step 2: Rinomina Repository su GitHub

**Opzione A - Via Web (Più Semplice):**

1. Vai su: https://github.com/giammellarorosario-sudo/studioagent
2. Click tab **"Settings"** (in alto a destra)
3. Scroll fino a sezione **"Repository name"**
4. Campo attuale: `condoai`
5. Cambia in: **`studioagent`** (tutto minuscolo)
6. Click **"Rename"**
7. GitHub mostrerà warning che vecchi link non funzioneranno più → Conferma

**Opzione B - Via GitHub Desktop:**

1. Apri GitHub Desktop
2. Seleziona repository "studioagent" dalla lista
3. Menu → Repository → Repository Settings... (o Ctrl+Shift+,)
4. Campo "Name": `condoai` → cambia in **`studioagent`**
5. Click "Rename"

---

## Step 3: Aggiorna Remote URL Locale

Dopo rename su GitHub, il remote URL locale è ancora vecchio.

**Verifica URL attuale:**
```bash
git remote -v
# Mostra: origin  https://github.com/giammellarorosario-sudo/studioagent.git
```

**Aggiorna con nuovo URL:**
```bash
git remote set-url origin https://github.com/giammellarorosario-sudo/studioagent.git
```

**Verifica cambio:**
```bash
git remote -v
# Deve mostrare: origin  https://github.com/giammellarorosario-sudo/studioagent.git
```

**Test connessione:**
```bash
git fetch
# Se non ci sono errori, tutto OK
```

---

## Step 4: Rinomina Directory Locale

**Ultimo passaggio:**

1. **Chiudi TUTTI i programmi** che usano la directory (Claude Code, terminali, editor)
2. Apri Esplora File Windows
3. Naviga a `C:\Users\giamm\`
4. Trova cartella **"condo ai"**
5. Click destro → **Rinomina**
6. Nome nuovo: **`studioagent`** (tutto minuscolo, no spazi)
7. Premi Invio

**Risultato finale:**
- Directory locale: `C:\Users\giamm\studioagent\`
- Repository GitHub: `https://github.com/giammellarorosario-sudo/studioagent`
- Contenuti: Tutti già aggiornati con "StudioAgent"

---

## Step 5: Verifica Finale

Riapri un terminale nella nuova directory:

```bash
cd C:\Users\giamm\studioagent
```

**Verifica Git:**
```bash
git status
# Deve funzionare senza errori

git remote -v
# Deve mostrare studioagent

git log --oneline -n 3
# Deve mostrare gli ultimi 3 commit
```

**Verifica Contenuti:**
```bash
cat README.md | head -n 1
# Deve mostrare: # StudioAgent

cat .claude/agent-config.json | grep "project"
# Deve mostrare: "project": "studioagent",
```

Se tutti i comandi sopra funzionano → ✅ **RENAME COMPLETATO**

---

## 🚀 Riaprire Claude Code

Dopo verifica finale:

1. Apri Claude Code
2. Cambia directory a: `C:\Users\giamm\studioagent`
3. Verifica caching: chiedi "Qual è il nome del progetto?"
   - Risposta attesa: "StudioAgent"
4. Procedi con: **"Esegui FASE 2 del masterprompt"**

---

## 🔄 Redirect Automatico GitHub

**Nota:** GitHub crea redirect automatico da vecchio URL a nuovo per 60 giorni.

Quindi per 60 giorni:
- `condoai.git` → redirect automatico a → `studioagent.git`
- Dopo 60 giorni: solo `studioagent.git` funzionerà

Ecco perché è importante aggiornare remote URL locale (Step 3).

---

## ⚠️ Troubleshooting

### Problema: "git push" fallisce

**Errore:** `fatal: could not read Username`

**Soluzione:**
```bash
# Autentica con GitHub CLI
gh auth login
# Oppure usa GitHub Desktop per il push
```

### Problema: Directory non si rinomina

**Errore:** "Azione non completata - file in uso"

**Soluzione:**
1. Chiudi Claude Code
2. Chiudi tutti i terminali/PowerShell
3. Chiudi Visual Studio Code (se aperto)
4. Riprova rename

### Problema: Remote URL non si aggiorna

**Errore:** `fatal: No such remote 'origin'`

**Soluzione:**
```bash
# Verifica remote esistente
git remote

# Se non c'è origin, aggiungilo
git remote add origin https://github.com/giammellarorosario-sudo/studioagent.git

# Verifica
git remote -v
```

### Problema: Caching non funziona dopo rename

**Soluzione:**
```bash
# Forza refresh cache
git gc --aggressive

# Verifica .git integro
ls -la .git
```

---

## 📋 Checklist Completa

Prima di considerare il rename completato, verifica:

- [ ] Push di 7 commit su GitHub completato
- [ ] Repository GitHub rinominato in "studioagent"
- [ ] Remote URL locale aggiornato a studioagent.git
- [ ] Directory locale rinominata in "studioagent"
- [ ] `git status` funziona senza errori
- [ ] `git remote -v` mostra studioagent
- [ ] README.md mostra "# StudioAgent"
- [ ] .claude/agent-config.json mostra "project": "studioagent"
- [ ] Caching funziona (test con Claude Code)

---

## 🎯 Riepilogo Cambiamenti

**STATO ATTUALE:**
- Directory: `C:\Users\giamm\studioagent`
- GitHub: `https://github.com/giammellarorosario-sudo/studioagent`
- Contenuti: "StudioAgent"
- Remote URL: Aggiornato ✅

**Stato commit:** Tutti i rebrand già committati e pronti per push.

---

**Data creazione:** 2025-11-29
**Tempo stimato:** 5-10 minuti totali
**Difficoltà:** ⭐⭐ (Facile, ma seguire ordine esatto)

✅ Dopo aver completato questi step, sei pronto per FASE 2!
