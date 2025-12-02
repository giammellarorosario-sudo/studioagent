"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Bot,
  MessageSquare,
  Mail,
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Phone
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Floating icons animation variants
  const floatingIconVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#FFC93C] selection:text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Bot size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">StudioAgent</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Funzionalità
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Vantaggi
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Prezzi
            </Link>
            <Button size="sm" className="bg-[#FFC93C] text-slate-900 hover:bg-[#ffd666] font-semibold shadow-md hover:shadow-lg transition-all">
              Richiedi Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-sm font-medium text-slate-600" onClick={toggleMenu}>
                Funzionalità
              </Link>
              <Link href="#benefits" className="text-sm font-medium text-slate-600" onClick={toggleMenu}>
                Vantaggi
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-slate-600" onClick={toggleMenu}>
                Prezzi
              </Link>
              <Button className="w-full bg-[#FFC93C] text-slate-900 font-bold">Richiedi Demo</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-24 lg:pt-32 pb-20 overflow-hidden">
        {/* Background Animated Icons */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* WhatsApp Icon */}
          <motion.div
            custom={1}
            variants={floatingIconVariants}
            animate="animate"
            className="absolute top-20 left-[10%] text-green-500 opacity-20"
          >
            <MessageSquare size={64} />
          </motion.div>
          {/* Mail Icon */}
          <motion.div
            custom={2}
            variants={floatingIconVariants}
            animate="animate"
            className="absolute top-40 right-[15%] text-blue-500 opacity-20"
          >
            <Mail size={80} />
          </motion.div>
          {/* Phone Icon */}
          <motion.div
            custom={3}
            variants={floatingIconVariants}
            animate="animate"
            className="absolute bottom-20 left-[20%] text-purple-500 opacity-20"
          >
            <Phone size={56} />
          </motion.div>
          {/* Bot Icon */}
          <motion.div
            custom={4}
            variants={floatingIconVariants}
            animate="animate"
            className="absolute bottom-40 right-[10%] text-slate-400 opacity-20"
          >
            <Bot size={72} />
          </motion.div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800"
                >
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                  La prima AI Suite per Amministratori
                </motion.div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl/none">
                  Il tuo Studio, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Autopilotato.
                  </span>
                </h1>
                <p className="max-w-[600px] text-lg text-slate-600 md:text-xl leading-relaxed">
                  Libera il 70% del tuo tempo. StudioAgent gestisce email, WhatsApp e domande ripetitive con un'Intelligenza Artificiale addestrata sulla normativa condominiale italiana.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-[#FFC93C] text-slate-900 hover:bg-[#ffd666] font-bold px-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  Inizia la Prova Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-slate-300 hover:bg-slate-50">
                  Vedi come funziona
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Setup in 5 minuti</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Nessuna carta richiesta</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[500px] lg:max-w-none flex justify-center"
            >
              {/* Robot Container */}
              <div className="relative w-[400px] h-[400px]">
                {/* Main Robot Image */}
                <Image
                  src="/robot-hero.png"
                  alt="Robot AI Assistant"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl z-20 relative"
                />

                {/* Animated Message Bubbles around Robot */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl rounded-bl-none shadow-lg border border-green-100 z-30 max-w-[150px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare size={14} className="text-green-500" />
                    <span className="text-xs font-bold text-slate-700">WhatsApp</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight">Risposta inviata al Sig. Rossi</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-10 -left-8 bg-white p-3 rounded-2xl rounded-tr-none shadow-lg border border-blue-100 z-30 max-w-[160px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Mail size={14} className="text-blue-500" />
                    <span className="text-xs font-bold text-slate-700">Email</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight">Convocazione assemblea inviata</p>
                </motion.div>

                {/* Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-[80px] -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm text-blue-600 font-semibold">
              Funzionalità Chiave
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tutto ciò che serve al tuo studio
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-lg/relaxed">
              Una suite completa progettata specificamente per le esigenze degli amministratori italiani.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center space-y-4 rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 mb-2">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">WhatsApp Business</h3>
              <p className="text-center text-slate-600 leading-relaxed">
                Centralizza tutti i messaggi WhatsApp in un'unica dashboard. Rispondi dal PC senza usare il telefono personale.
              </p>
            </motion.div>
            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center space-y-4 rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-2">
                <Bot size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">AI Response Engine</h3>
              <p className="text-center text-slate-600 leading-relaxed">
                L'AI legge le comunicazioni e suggerisce risposte basate sulla normativa e sul regolamento del condominio specifico.
              </p>
            </motion.div>
            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center space-y-4 rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-2">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Knowledge Base</h3>
              <p className="text-center text-slate-600 leading-relaxed">
                Un assistente legale sempre disponibile. Chiedi all'AI chiarimenti su articoli del Codice Civile o ripartizione spese.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Recupera il controllo del tuo tempo
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Risparmia 5 ore al giorno</h3>
                    <p className="text-slate-600">
                      Automatizza le risposte alle domande frequenti (orari riscaldamento, IBAN, segnalazione guasti).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Zero Email Perse</h3>
                    <p className="text-slate-600">
                      Ogni comunicazione viene tracciata, categorizzata e assegnata automaticamente all'operatore giusto.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Setup Immediato</h3>
                    <p className="text-slate-600">
                      Collega il tuo account WhatsApp Business e la tua email in pochi click. Nessuna installazione complessa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-xl opacity-70" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <h4 className="font-bold text-slate-900 text-lg">Statistiche Settimanali</h4>
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">+24% Efficienza</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-slate-50 p-5 hover:bg-slate-100 transition-colors">
                        <div className="text-3xl font-bold text-slate-900">1,240</div>
                        <div className="text-sm text-slate-500 font-medium mt-1">Messaggi Gestiti</div>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-5 hover:bg-slate-100 transition-colors">
                        <div className="text-3xl font-bold text-blue-600">85%</div>
                        <div className="text-sm text-slate-500 font-medium mt-1">Automazione AI</div>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-5 hover:bg-slate-100 transition-colors">
                        <div className="text-3xl font-bold text-slate-900">12h</div>
                        <div className="text-sm text-slate-500 font-medium mt-1">Tempo Risparmiato</div>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-5 hover:bg-slate-100 transition-colors">
                        <div className="text-3xl font-bold text-slate-900">4.9</div>
                        <div className="text-sm text-slate-500 font-medium mt-1">Soddisfazione</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <Bot size={400} className="absolute -right-20 -top-20 rotate-12" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Pronto a rivoluzionare il tuo studio?
          </h2>
          <p className="max-w-[600px] mx-auto text-blue-100 text-xl mb-10 leading-relaxed">
            Unisciti agli amministratori che stanno già risparmiando tempo e migliorando la vita dei loro condòmini.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[#FFC93C] text-slate-900 hover:bg-[#ffd666] font-bold text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Inizia Ora
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-white hover:bg-blue-700 hover:text-white text-lg px-10 py-6 h-auto">
              Contatta il Commerciale
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Bot size={24} />
                <span className="text-xl font-bold">StudioAgent</span>
              </div>
              <p className="text-sm leading-relaxed">
                La piattaforma AI definitiva per l'amministrazione condominiale moderna.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Prodotto</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Funzionalità</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Prezzi</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Sicurezza</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Azienda</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Chi Siamo</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contatti</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Lavora con noi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Legale</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Termini di Servizio</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} StudioAgent. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}
