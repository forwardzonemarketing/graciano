/**
 * Sentença em Âmbar — confirmação de contato com sobriedade, segurança e
 * contraste cinematográfico. Esta página reduz ansiedade sem prometer resultado.
 */
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";

const portraitUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663111971865/UVxaAmDKsVucQCuf.jpeg";

export default function ThankYou() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const initialTitle = document.title;
    document.title = "Obrigado pelo contato | Dr. Lucas Graciano";
    const existingRobots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const robots = existingRobots ?? document.createElement("meta");
    const initialContent = robots.getAttribute("content");

    if (!existingRobots) {
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, nofollow");

    return () => {
      document.title = initialTitle;
      if (!existingRobots) {
        robots.remove();
      } else if (initialContent) {
        robots.setAttribute("content", initialContent);
      } else {
        robots.removeAttribute("content");
      }
    };
  }, []);

  const transition = { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const };

  return (
    <main className="thank-you-page">
      <img className="thank-you-portrait" src={portraitUrl} alt="" aria-hidden="true" />
      <div className="thank-you-wash" aria-hidden="true" />
      <div className="thank-you-noise" aria-hidden="true" />
      <div className="thank-you-rule thank-you-rule-left" aria-hidden="true" />
      <div className="thank-you-rule thank-you-rule-right" aria-hidden="true" />

      <motion.a
        className="thank-you-brand"
        href="/"
        aria-label="Voltar à página inicial do Dr. Lucas Graciano"
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, duration: 0.5 }}
      >
        <span className="thank-you-brand-mark" aria-hidden="true">LG</span>
        <span><strong>Lucas Graciano</strong><small>Advocacia Criminal</small></span>
      </motion.a>

      <section className="thank-you-shell" aria-labelledby="thank-you-title">
        <motion.div
          className="thank-you-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <div className="thank-you-eyebrow"><span /> Obrigado pelo contato</div>
          <div className="thank-you-confirmation"><Check size={18} strokeWidth={1.6} /></div>
          <h1 id="thank-you-title">Obrigado. <em>Seu contato foi registrado com discrição.</em></h1>
          <p>
            Recebemos sua solicitação. Ela será analisada de forma inicial e entraremos em contato
            assim que possível, pelo canal informado.
          </p>
          <div className="thank-you-next-step">
            <ShieldCheck size={20} strokeWidth={1.45} />
            <span><strong>Próximo passo</strong>Evite enviar documentos ou informações excessivamente sensíveis antes de receber orientação individualizada.</span>
          </div>
        </motion.div>

        <motion.aside
          className="thank-you-card"
          initial={reduceMotion ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.13 }}
          aria-label="Orientações após o envio do formulário"
          >
            <span className="thank-you-card-number">01</span>
            <div className="thank-you-card-content">
            <span className="thank-you-card-kicker">Registro de contato • 01</span>
            <h2>Sequência do contato.</h2>
            <div className="thank-you-list">
              <div><i /><p>A solicitação é considerada conforme o escopo de atuação e a disponibilidade profissional.</p></div>
              <div><i /><p>O retorno, quando cabível, será realizado pelo canal que você informou.</p></div>
              <div><i /><p>O envio do formulário não estabelece relação advogado-cliente nem representa contratação.</p></div>
            </div>
            <a className="thank-you-return" href="/"><ArrowLeft size={16} /> Voltar para o site <ArrowRight size={16} /></a>
          </div>
        </motion.aside>
      </section>

      <motion.footer
        className="thank-you-footer"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.35 }}
      >
        <span>Conteúdo informativo • Sem promessa de resultado</span>
        <span>Dr. Lucas Graciano • Advocacia Criminal</span>
      </motion.footer>
    </main>
  );
}
