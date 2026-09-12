"use client";

import { useForm, ValidationError } from "@formspree/react";
import { WHATSAPP_URL } from "@/lib/data";

const CTASection = () => {
  const [state, handleSubmit] = useForm("xvgzqalp");

  return (
    <section
      id="contato"
      className="border-y border-gold/15 bg-[linear-gradient(135deg,#1a1500,#0d0d0d)] py-16 md:py-20"
    >
      <div className="container-page text-center">
        <h2 className="text-[clamp(22px,3.4vw,30px)] font-bold leading-tight text-white">
          Pronto para se destacar?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-white/50">
          Deixe seu e-mail e nossa equipe entra em contato com uma proposta
          personalizada.
        </p>

        {state.succeeded ? (
          <p className="mx-auto mt-6 max-w-[340px] rounded-lg border border-gold/25 bg-gold/[0.12] px-4 py-3 text-[13px] text-gold">
            Recebemos seu contato! Em breve falamos com você.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex w-full max-w-[340px] flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="email" className="sr-only">
              Seu e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full flex-1 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-[13px] text-white placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-gold/50"
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-lg bg-gold px-4 py-2 text-[13px] font-bold text-black transition-colors duration-200 hover:bg-[#d8b95c] disabled:opacity-60 sm:w-auto"
            >
              {state.submitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        )}

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-[11px] text-red-400"
        />

        <p className="mt-4 text-[11px] text-white/35">
          Prefere falar agora?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold hover:underline"
          >
            Chame no WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
