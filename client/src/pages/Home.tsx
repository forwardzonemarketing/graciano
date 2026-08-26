/**
 * Sentença em Âmbar — página editorial assimétrica, autoridade silenciosa,
 * latão pontual, fotografia low-key e movimento preciso orientado à leitura.
 */
import { ReactNode, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  FileSearch,
  Fingerprint,
  Landmark,
  LockKeyhole,
  Mail,
  Menu,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";
import { toast } from "sonner";

const ASSETS = {
  portrait: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663111971865/UVxaAmDKsVucQCuf.jpeg",
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663111971865/czrIQMDbpsLtlgaI.png",
  scales: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663111971865/iogxXYbdvytaIgJS.png",
  texture: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663111971865/XFnonbtKMZaWNJLM.png",
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663111971865/mBRpiGBVkpkjoYXI.png",
};

const navItems = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Orientação", href: "#orientacao" },
  { label: "Adequação", href: "#adequacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const practiceAreas = [
  {
    number: "01",
    title: "Crimes contra o sistema financeiro",
    text: "Defesa técnica em investigações e inquéritos relacionados a operações e movimentações financeiras.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Lavagem de dinheiro",
    text: "Análise estratégica do caso, da origem das apurações às medidas defensivas cabíveis.",
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Estelionato",
    text: "Atuação em investigações e processos que envolvam fraudes patrimoniais e relações econômicas complexas.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Medidas patrimoniais",
    text: "Atuação diante de bloqueio judicial de bens, valores e contas, inclusive em sistemas como Sisbajud.",
    icon: Landmark,
  },
  {
    number: "05",
    title: "Habeas Corpus e recursos",
    text: "Elaboração e acompanhamento de medidas perante Tribunais Superiores e instâncias do Judiciário.",
    icon: Scale,
  },
  {
    number: "06",
    title: "Prevenção e compliance criminal",
    text: "Avaliação de risco jurídico-penal em contratos, publicidade, parcerias e operações de maior complexidade.",
    icon: LockKeyhole,
  },
];

const moments = [
  "Recebimento de intimação, notificação ou mandado de busca e apreensão.",
  "Bloqueio judicial de contas, bens ou valores por ordem judicial.",
  "Investigação relacionada a movimentações financeiras ou operações empresariais.",
  "Dúvida sobre risco penal em contratos de publicidade ou parcerias comerciais.",
  "Necessidade de orientação preventiva antes de uma operação de maior complexidade.",
];

const fitItems = [
  "Pessoas físicas ou empresas envolvidas em investigação, inquérito ou processo relacionado a fatos econômicos ou financeiros.",
  "Quem recebeu intimação, notificação, ordem de busca e apreensão ou enfrenta bloqueio judicial de bens e contas.",
  "Quem precisa avaliar riscos jurídico-penais antes de contratos, publicidade, parcerias ou operações de maior complexidade.",
  "Quem necessita analisar a viabilidade de Habeas Corpus ou recurso nas matérias abrangidas pela atuação do escritório.",
];

const nonFitItems = [
  "Quem procura garantia de resultado, promessa de êxito ou solução previamente assegurada para o caso.",
  "Demandas de Direito Penal comum, Tribunal do Júri, Violência Doméstica ou crimes de trânsito.",
  "Questões exclusivamente cíveis, trabalhistas, tributárias ou de família, que exigem profissional da área correspondente.",
  "Consultas genéricas destinadas a substituir análise jurídica individual, responsável e formalizada.",
];

const faqItems = [
  {
    question: "Em quais áreas o Dr. Lucas Graciano atua?",
    answer: "A atuação é concentrada em Direito Penal Econômico e Financeiro, incluindo investigações por crimes contra o sistema financeiro, lavagem de dinheiro, estelionato, medidas cautelares patrimoniais, Habeas Corpus, recursos e prevenção de riscos jurídico-penais.",
  },
  {
    question: "Quando é recomendável buscar orientação jurídica?",
    answer: "A consulta costuma ser relevante diante de intimação, busca e apreensão, bloqueio de bens ou contas, investigação sobre movimentações financeiras e antes de contratos ou operações que possam envolver risco penal.",
  },
  {
    question: "O contato inicial é protegido por sigilo?",
    answer: "A atuação profissional do advogado é regida pelo dever de sigilo previsto no Estatuto da Advocacia e no Código de Ética e Disciplina da OAB. Ainda assim, recomenda-se evitar o envio de documentos ou dados excessivamente sensíveis no primeiro contato.",
  },
  {
    question: "O envio do formulário já estabelece uma relação advogado-cliente?",
    answer: "Não. O acesso ou preenchimento do formulário de contato não estabelece relação advogado-cliente. A relação profissional somente se formaliza mediante análise do caso e contrato de honorários.",
  },
  {
    question: "O que é útil informar no primeiro contato?",
    answer: "É suficiente apresentar, de maneira objetiva, o motivo do contato e indicar se há intimação, prazo, medida judicial, investigação ou bloqueio em curso. Evite encaminhar documentos e dados excessivamente sensíveis antes de uma orientação individualizada.",
  },
  {
    question: "O que acontece depois da solicitação inicial?",
    answer: "A solicitação pode ser avaliada quanto à aderência ao escopo de atuação, disponibilidade e eventual conflito de interesses. Somente depois dessa análise poderá ser definido se haverá próximo contato e, se for o caso, formalização profissional.",
  },
];

function SeoRuntime() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    const currentOrigin = window.location.origin;
    const canonicalUrl = `${currentOrigin}${window.location.pathname}`;
    const assetUrl = (asset: string) => asset.startsWith("http") ? asset : `${currentOrigin}${asset}`;
    const portraitUrl = assetUrl(ASSETS.portrait);
    setOrigin(currentOrigin);

    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.setAttribute("content", portraitUrl);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:image"]')?.setAttribute("content", portraitUrl);
  }, []);

  if (!origin) return null;

  const pageUrl = `${origin}${window.location.pathname}`;
  const assetUrl = (asset: string) => asset.startsWith("http") ? asset : `${origin}${asset}`;
  const portraitUrl = assetUrl(ASSETS.portrait);
  const logoUrl = assetUrl(ASSETS.logo);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: "Dr. Lucas Graciano | Advocacia Criminal",
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Dr. Lucas Graciano | Advogado Criminalista",
        description: "Advocacia Criminal com atuação em Direito Penal Econômico e Financeiro, lavagem de dinheiro, estelionato, medidas patrimoniais, Habeas Corpus e recursos.",
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${origin}/#website` },
        about: [{ "@id": `${origin}/#advogado` }, { "@id": `${origin}/#escritorio` }],
        primaryImageOfPage: { "@type": "ImageObject", url: portraitUrl },
      },
      {
        "@type": "LegalService",
        "@id": `${origin}/#escritorio`,
        name: "Dr. Lucas Graciano | Advocacia Criminal",
        url: origin,
        logo: logoUrl,
        image: portraitUrl,
        description: "Escritório de advocacia criminal com atuação concentrada em Direito Penal Econômico e Financeiro.",
        areaServed: { "@type": "Country", name: "Brasil" },
        founder: { "@id": `${origin}/#advogado` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Áreas de atuação jurídica",
          itemListElement: practiceAreas.map((area) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: area.title, description: area.text },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${origin}/#advogado`,
        name: "Dr. Lucas Graciano",
        jobTitle: "Advogado Criminalista",
        image: portraitUrl,
        worksFor: { "@id": `${origin}/#escritorio` },
        knowsAbout: practiceAreas.map((area) => area.title),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#perguntas-frequentes`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.72, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#top" aria-label="Ir para o início">
      <span className="brand-mark-wrap">
        <img className="brand-mark" src={ASSETS.logo} alt="Símbolo LG" />
      </span>
      <span className={compact ? "brand-copy compact" : "brand-copy"}>
        <strong>Lucas Graciano</strong>
        <small>Advocacia Criminal</small>
      </span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Brand compact />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contato">
          Entrar em contato <ArrowRight size={16} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Navegação móvel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <span>0{index + 1}</span> {item.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function CursorHalo() {
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const springX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.5 });

  useEffect(() => {
    const update = (event: MouseEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    };
    window.addEventListener("mousemove", update, { passive: true });
    return () => window.removeEventListener("mousemove", update);
  }, [x, y]);

  return <motion.div aria-hidden="true" className="cursor-halo" style={{ x: springX, y: springY }} />;
}

function IntroOverlay() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.sessionStorage.getItem("lucas-graciano-intro-seen") !== "true";
  });
  const reduceMotion = useReducedMotion();

  const dismiss = () => {
    window.sessionStorage.setItem("lucas-graciano-intro-seen", "true");
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      dismiss();
    }, reduceMotion ? 150 : 1750);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: reduceMotion ? 0.15 : 0.7, ease: [0.77, 0, 0.175, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Apresentação do escritório"
        >
          <div className="intro-ambient" />
          <motion.img
            className="intro-mark"
            src={ASSETS.logo}
            alt=""
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          />
          <motion.span
            className="intro-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
          >
            Advocacia Criminal
          </motion.span>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.52, ease: [0.23, 1, 0.32, 1] }}
          >
            <span>Dr.</span> Lucas Graciano
          </motion.h2>
          <motion.div
            className="intro-line"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.05, delay: 0.76, ease: [0.77, 0, 0.175, 1] }}
          />
          <motion.small
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.15 }}
          >
            Estratégia • Técnica • Discrição
          </motion.small>
          <button className="intro-skip" type="button" onClick={dismiss} autoFocus>
            Pular apresentação <ArrowRight size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 0.24], ["0%", "10%"]);
  const copyY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-8%"]);

  return (
    <section className="hero" id="top">
      <img className="hero-library-background" src={ASSETS.hero} alt="" aria-hidden="true" loading="eager" />
      <motion.img
        className="hero-portrait-background"
        src={ASSETS.portrait}
        alt="Dr. Lucas Graciano, advogado criminalista"
        width="1086"
        height="1448"
        loading="eager"
        fetchPriority="high"
        style={reduceMotion ? undefined : { y: portraitY }}
      />
      <div className="hero-image-wash" />
      <div className="hero-noise" />
      <div className="hero-rule hero-rule-a" />
      <div className="hero-rule hero-rule-b" />
      <motion.div className="hero-inner" style={reduceMotion ? undefined : { y: copyY }}>
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <span className="eyebrow-line" /> Direito Penal Econômico e Financeiro
          </motion.div>
          <h1>
            <span className="sr-only">Dr. Lucas Graciano, advogado criminalista: </span>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              Defesa criminal
            </motion.span>
            <motion.span
              className="hero-italic led-text"
              initial={reduceMotion ? false : { opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              com estratégia
            </motion.span>
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease: [0.23, 1, 0.32, 1] }}
            >
              e precisão.
            </motion.span>
          </h1>
          <motion.p
            className="hero-lead"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            Atuação técnica em investigações e processos de natureza econômico-financeira,
            com análise individualizada de riscos, medidas patrimoniais, Habeas Corpus e recursos.
          </motion.p>
          <motion.a
            className="hero-scope-link"
            href="#adequacao"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <ShieldCheck size={15} /> Verifique se este escopo atende à sua situação <ArrowRight size={14} />
          </motion.a>
          <motion.div
            className="hero-nameplate"
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.54 }}
          >
            <span>Dr.</span>
            <strong>Lucas Graciano</strong>
            <small>Advogado Criminalista</small>
          </motion.div>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.58 }}
          >
            <a className="button-primary" href="#contato">
              Entender o próximo passo <ArrowRight size={18} />
            </a>
            <a className="button-quiet" href="#adequacao">
              Verificar adequação <ArrowDown size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-monogram-orbit"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          aria-hidden="true"
        >
          <motion.span animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
            LUCAS GRACIANO • ADVOCACIA CRIMINAL • 
          </motion.span>
          <b>LG</b>
        </motion.div>
      </motion.div>

      <div className="hero-foot">
        <span>Atuação técnica</span>
        <span>Sigilo profissional</span>
        <span>Estratégia individualizada</span>
        <div className="scroll-indicator"><i /> Role para explorar</div>
      </div>
    </section>
  );
}

function CredentialRail() {
  return (
    <div className="credential-rail" aria-label="Diferenciais da atuação">
      <div className="rail-track">
        {[0, 1].map((copy) => (
          <div className="rail-group" key={copy} aria-hidden={copy === 1}>
            <span>Direito Penal Econômico</span><i />
            <span>Tribunais Superiores</span><i />
            <span>Prevenção & Compliance</span><i />
            <span>Sigilo Profissional</span><i />
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeSection() {
  return (
    <section className="section section-practice" id="atuacao">
      <img className="section-background practice-background" src={ASSETS.texture} alt="" aria-hidden="true" loading="lazy" />
      <div className="section-index" aria-hidden="true">01</div>
      <div className="page-shell">
        <Reveal className="section-heading-row">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Áreas de atuação</div>
            <h2>Profundidade técnica onde <em>cada detalhe importa.</em></h2>
          </div>
          <p>
            O escritório atua de forma concentrada em Direito Penal Econômico e
            Financeiro, com análise cuidadosa do contexto probatório, patrimonial e processual.
          </p>
        </Reveal>

        <div className="practice-grid">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                className="practice-card"
                key={area.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.62, delay: (index % 3) * 0.08, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, rotateX: 1.2, rotateY: -0.8 }}
              >
                <div className="card-top">
                  <span>{area.number}</span>
                  <Icon size={22} strokeWidth={1.4} />
                </div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
                <div className="card-rule" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OrientationSection() {
  return (
    <section className="section section-orientation" id="orientacao">
      <img className="orientation-texture" src={ASSETS.texture} alt="" aria-hidden="true" loading="lazy" />
      <div className="page-shell orientation-layout">
        <div className="orientation-sticky">
          <div className="eyebrow"><span className="eyebrow-line" /> Orientação jurídica</div>
          <h2>Há momentos em que esperar também é uma decisão.</h2>
          <p>
            Quando há uma intimação, medida em curso ou possível impacto patrimonial,
            compreender o cenário e os próximos passos sem postergar a avaliação pode ser relevante.
          </p>
          <a className="text-link" href="#primeiro-contato">Entender o primeiro contato <ArrowRight size={17} /></a>
        </div>
        <div className="timeline">
          {moments.map((moment, index) => (
            <motion.article
              className="timeline-item"
              key={moment}
              initial={{ opacity: 0.28, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-35% 0px -35% 0px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker"><span>0{index + 1}</span></div>
              <p>{moment}</p>
              <ChevronRight size={20} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitSection() {
  return (
    <section className="section section-fit" id="adequacao" aria-labelledby="fit-title">
      <div className="fit-background-mark" aria-hidden="true">LG</div>
      <div className="page-shell">
        <Reveal className="fit-intro">
          <div className="eyebrow"><span className="eyebrow-line" /> Escopo e adequação</div>
          <h2 id="fit-title">Para quem é. <em>Para quem não é.</em></h2>
          <p>
            Esta orientação é exclusivamente informativa. A aceitação de qualquer demanda depende
            de análise individual, ausência de conflito de interesses e formalização contratual.
          </p>
        </Reveal>

        <div className="fit-grid">
          <Reveal className="fit-panel fit-panel-positive">
            <div className="fit-panel-head">
              <span>01</span>
              <Check size={22} strokeWidth={1.5} />
            </div>
            <h3>Para quem a atuação pode ser adequada</h3>
            <div className="fit-list">
              {fitItems.map((item) => (
                <div key={item}><i /><p>{item}</p></div>
              ))}
            </div>
          </Reveal>

          <Reveal className="fit-panel fit-panel-negative" delay={0.08}>
            <div className="fit-panel-head">
              <span>02</span>
              <X size={22} strokeWidth={1.5} />
            </div>
            <h3>Para quem este escopo não é indicado</h3>
            <div className="fit-list">
              {nonFitItems.map((item) => (
                <div key={item}><i /><p>{item}</p></div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="fit-ethics-note">
          <ShieldCheck size={20} strokeWidth={1.4} />
          <p>
            Em conformidade com as diretrizes da OAB, esta página apresenta informações gerais,
            sem promessa de resultado, comparação profissional ou indução à contratação.
          </p>
          <a href="https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021" target="_blank" rel="noreferrer">
            Provimento 205/2021 <ExternalLink size={13} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section section-about" id="sobre">
      <img
        className="about-background"
        src={ASSETS.scales}
        alt="Balança da justiça em acabamento de latão"
        width="1536"
        height="1152"
        loading="lazy"
      />
      <div className="about-background-wash" />
      <div className="page-shell about-layout">
        <Reveal className="about-visual about-visual-background">
          <div className="about-quote">
            <Scale size={24} strokeWidth={1.35} />
            <p>“Rigor técnico, leitura estratégica e discrição em cada etapa.”</p>
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={0.1}>
          <div className="eyebrow"><span className="eyebrow-line" /> Sobre a atuação</div>
          <h2>Presença técnica. Postura estratégica.</h2>
          <p className="about-lead">
            Dr. Lucas Graciano atua em processos de Direito Penal Econômico, incluindo
            casos que envolvem recursos e Habeas Corpus perante instâncias superiores do Judiciário.
          </p>
          <p>
            O atendimento é conduzido com análise individualizada e resguardado pelo sigilo
            profissional inerente à advocacia, nos termos do Estatuto da Advocacia e do Código
            de Ética e Disciplina da OAB.
          </p>
          <div className="institutional-sources" aria-label="Fontes institucionais">
            <a href="https://www.planalto.gov.br/ccivil_03/leis/l8906.htm" target="_blank" rel="noreferrer">
              Estatuto da Advocacia <ExternalLink size={13} />
            </a>
            <a href="https://www.oab.org.br/publicacoes/AbrirPDF?LivroId=0000004085" target="_blank" rel="noreferrer">
              Código de Ética da OAB <ExternalLink size={13} />
            </a>
          </div>
          <div className="principles">
            <div><span>01</span><strong>Escuta responsável</strong></div>
            <div><span>02</span><strong>Análise do cenário</strong></div>
            <div><span>03</span><strong>Estratégia processual</strong></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ScopeNotice() {
  return (
    <section className="scope-notice">
      <div className="page-shell scope-inner">
        <div className="scope-icon"><ShieldCheck size={30} strokeWidth={1.35} /></div>
        <div>
          <span>Transparência na atuação</span>
          <h2>Atuação concentrada em Direito Penal Econômico e Financeiro.</h2>
        </div>
        <p>
          O escritório não atua em Direito Penal comum, Tribunal do Júri, Violência Doméstica,
          crimes de trânsito ou demandas cíveis, trabalhistas e de família. Para essas matérias,
          recomenda-se buscar profissional especializado na área correspondente.
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section section-faq" id="perguntas-frequentes" aria-labelledby="faq-title">
      <div className="page-shell faq-layout">
        <Reveal className="faq-heading">
          <div className="eyebrow"><span className="eyebrow-line" /> Respostas objetivas</div>
          <h2 id="faq-title">Perguntas frequentes sobre a atuação criminal.</h2>
          <p>
            Informações gerais para compreender o escopo do trabalho e a finalidade do contato inicial.
            Cada situação, porém, exige análise jurídica individualizada.
          </p>
        </Reveal>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <details className="faq-item">
                <summary><span>0{index + 1}</span>{item.question}<ChevronRight size={18} /></summary>
                <p>{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPathSection() {
  const steps = [
    {
      number: "01",
      title: "Situe o momento",
      text: "Indique de forma objetiva se há intimação, prazo, investigação, medida judicial ou bloqueio em curso.",
    },
    {
      number: "02",
      title: "Preserve o essencial",
      text: "Mantenha documentos e informações organizados, mas evite enviá-los no primeiro contato sem orientação individualizada.",
    },
    {
      number: "03",
      title: "Aguarde a análise inicial",
      text: "O escritório verifica a aderência ao escopo, disponibilidade e eventual conflito de interesses antes de definir um próximo contato.",
    },
  ];

  return (
    <section className="section section-contact-path" id="primeiro-contato" aria-labelledby="contact-path-title">
      <div className="page-shell contact-path-layout">
        <Reveal className="contact-path-intro">
          <div className="eyebrow"><span className="eyebrow-line" /> Antes do contato</div>
          <h2 id="contact-path-title">O primeiro passo não exige expor <em>todo o caso.</em></h2>
          <p>
            Uma apresentação breve e organizada ajuda a identificar se a situação está dentro do
            escopo de atuação. A análise jurídica aprofundada depende de contato profissional posterior.
          </p>
        </Reveal>
        <div className="contact-path-steps">
          {steps.map((step, index) => (
            <Reveal className="contact-path-step" delay={index * 0.06} key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const openExternalForm = () => {
    toast.info("Canal de contato em atualização", {
      description: "O link do formulário oficial será incluído aqui assim que for disponibilizado pelo escritório.",
    });
  };

  return (
    <section className="section section-contact" id="contato">
      <div className="contact-glow" />
      <div className="page-shell contact-layout">
        <Reveal className="contact-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Contato inicial</div>
          <h2>Quando o canal estiver disponível, avance com <em>clareza e discrição.</em></h2>
          <p>
            O formulário oficial será o canal destinado ao pedido de contato inicial. Evite compartilhar
            documentos ou informações excessivamente sensíveis antes de receber orientação individualizada.
          </p>
          <div className="contact-assurances">
            <div><Check size={15} /> Contato inicial informativo</div>
            <div><Check size={15} /> Triagem inicial organizada</div>
            <div><Check size={15} /> Relação profissional apenas mediante contrato</div>
          </div>
          <div className="contact-status">
            <Mail size={18} />
            <span><strong>Canal em preparação</strong>O endereço do formulário oficial será incluído neste botão assim que for disponibilizado pelo escritório.</span>
          </div>
        </Reveal>

        <Reveal className="external-form-panel" delay={0.1}>
          <div className="external-form-number">01</div>
          <div className="external-form-content">
            <span>Formulário próprio</span>
            <h3>Canal oficial de contato em preparação.</h3>
            <p>
              Assim que o formulário for publicado, este será o ponto de acesso para uma solicitação inicial.
              O preenchimento não estabelece relação advogado-cliente.
            </p>
            <button className="button-primary external-form-button" type="button" onClick={openExternalForm}>
              Ver status do formulário <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <Brand />
        <p>
          Conteúdo exclusivamente informativo. Cada caso demanda análise individualizada,
          sem garantia de resultado.
        </p>
        <nav aria-label="Navegação do rodapé">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Lucas Graciano Advocacia Criminal</span>
        <a href="#top">Voltar ao início <ExternalLink size={14} /></a>
      </div>
    </footer>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, restDelta: 0.001 });

  return (
    <div className="site-page">
      <SeoRuntime />
      <IntroOverlay />
      <motion.div className="reading-progress" style={{ scaleX: progress }} />
      <CursorHalo />
      <Header />
      <main>
        <Hero />
        <CredentialRail />
        <PracticeSection />
        <OrientationSection />
        <FitSection />
        <AboutSection />
        <ScopeNotice />
        <FaqSection />
        <ContactPathSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
