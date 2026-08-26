# Direção criativa — Dr. Lucas Graciano

## Exploração inicial

### 1. Sentença em Âmbar
**Tema:** Luxo editorial jurídico, noturno e cinematográfico, com preto mineral, latão envelhecido e movimento preciso. Transmite autoridade sem recorrer ao excesso ornamental.

**Probabilidade:** 0,047

### 2. Arquivo Confidencial
**Tema:** Brutalismo editorial inspirado em autos processuais, tarjas, carimbos e tipografia documental. Mais tenso, seco e investigativo.

**Probabilidade:** 0,019

### 3. Tribunal Contemporâneo
**Tema:** Arquitetura clara, pedra calcária, vinho profundo e serifas monumentais. Mais institucional, luminoso e contemplativo.

**Probabilidade:** 0,083

---

## Direção escolhida: Sentença em Âmbar

### Movimento de design
Luxury editorial noir com influência de capas jurídicas suíças, fotografia cinematográfica low-key e acabamentos de impressão em hot stamping.

### Princípios centrais
1. **Autoridade silenciosa:** a composição deve parecer segura e precisa, nunca agressiva ou promocional.
2. **Contraste controlado:** carvão profundo, tipografia marfim e brilho metálico pontual criam hierarquia sem ostentação.
3. **Assimetria editorial:** textos e imagens ocupam planos deslocados, com linhas-guia, margens generosas e respiros intencionais.
4. **Movimento com propósito:** animações revelam camadas, conduzem a leitura e sugerem estratégia; não competem com o conteúdo jurídico.

### Filosofia de cores
O preto mineral representa discrição, confidencialidade e gravidade. O marfim evita o branco digital excessivo e humaniza a leitura. O latão envelhecido funciona como selo de precisão e tradição. O vinho profundo é um acento raro, ligado a urgência, consequência e decisão — nunca um gradiente decorativo.

### Paradigma de layout
A página funciona como um dossiê cinematográfico vertical: abertura imersiva em dois planos, seções editoriais assimétricas, navegação por índice lateral no desktop e cortes horizontais finos que lembram margens processuais. O retrato real do advogado é a âncora humana; objetos jurídicos e texturas funcionam como camadas de atmosfera.

### Elementos de assinatura
- Filetes metálicos animados que “desenham” margens e divisões conforme a rolagem.
- Números editoriais enormes e vazados para organizar as áreas de atuação.
- Selo LG geométrico, combinando iniciais e equilíbrio, usado como marca de navegação e favicon.

### Filosofia de interação
Toda interação deve comunicar prontidão e controle. Links reagem com deslocamento curto e linha metálica; cartões mudam de profundidade em vez de saltar. A navegação mantém orientação constante e a chamada de contato permanece acessível sem pressionar o visitante.

### Animação
Abertura com sequência escalonada: marca, kicker, título, parágrafo e CTA em intervalos de 60 ms. Retrato com leve parallax vertical e máscara de revelação. Linhas douradas se estendem por `scaleX`; textos entram por opacidade e translação de 24–36 px. Elementos de fundo usam movimento lento limitado a `transform` e `opacity`. Hover entre 160–220 ms; transições de seção entre 500–800 ms. Respeitar integralmente `prefers-reduced-motion`.

### Sistema tipográfico
- **Display:** Cormorant Garamond, com contraste alto, itálico apenas em palavras-chave e títulos entre 56–112 px no desktop.
- **Texto e interface:** Manrope, com peso 400 para leitura, 500 para navegação e 600 para CTAs; corpo entre 16–19 px.
- **Microtipografia:** versaletes, tracking de 0,18–0,28 em marcadores e índices. Números editoriais em Cormorant Garamond Light.

### Essência da marca
**Posicionamento:** defesa criminal estratégica em matérias econômicas e financeiras, para quem precisa de orientação técnica, discrição e atuação precisa. **Personalidade:** sóbria, vigilante, estratégica.

### Voz da marca
Headlines curtas, firmes e tecnicamente responsáveis. CTAs são diretos, mas nunca alarmistas. Microcopy explica limites e sigilo com clareza.

Exemplos:
- “Estratégia jurídica para momentos que exigem precisão.”
- “Entenda o cenário. Preserve seus direitos. Defina o próximo passo.”

### Wordmark e logo
Símbolo monolinear próprio que une L e G à geometria abstrata da balança, sem escudo, coluna ou martelo. O nome aparece em composição tipográfica customizada: “LUCAS GRACIANO” em Manrope expandida, com “ADVOCACIA CRIMINAL” em versalete menor e espaçado.

### Cor proprietária
**Latão Sentença — `#B98A48`**: quente o suficiente para sinalizar tradição, fosco o suficiente para manter sobriedade.

### Conteúdo e limitações atuais
O documento informa áreas de atuação, situações de consulta, compromisso com sigilo e textos de contato. Os campos de OAB, telefone e e-mail não foram preenchidos; portanto, a primeira versão não inventará dados profissionais. A experiência destacará contato e triagem sem publicar números ou endereços inexistentes.

## Arquitetura da experiência

1. **Navegação flutuante:** marca, atalhos para Atuação, Orientação, Sobre e Contato; CTA persistente “Entrar em contato”.
2. **Hero em tela cheia:** headline de posicionamento, descrição técnica, CTA principal e retrato real do Dr. Lucas em composição editorial de dois planos.
3. **Faixa de credenciais:** foco em Direito Penal Econômico, sigilo profissional e atuação em Tribunais Superiores, sem números ou promessas fabricadas.
4. **Áreas de atuação:** seis frentes apresentadas como capítulos numerados, com hierarquia editorial e interação de profundidade.
5. **Quando buscar orientação:** cinco situações críticas em linha do tempo vertical, com progressão visual guiada pela rolagem.
6. **Manifesto de atuação:** texto sobre abordagem técnica e sigilo, apoiado por imagem atmosférica da balança.
7. **Limites de atuação:** aviso transparente sobre matérias não atendidas, tratado como informação ética e não como rodapé oculto.
8. **Contato e triagem:** formulário local para organizar a solicitação; enquanto telefone e e-mail oficiais não forem fornecidos, o envio copia um resumo seguro para o visitante e orienta a utilização do canal oficial.
9. **Rodapé:** marca, navegação e aviso de que o conteúdo é informativo e não constitui relação advogado-cliente.

## Sistema de movimento

O cursor usa halo discreto somente em desktop. O progresso de leitura aparece como filete de latão no topo. O hero combina parallax do retrato, revelação por máscara e tipografia escalonada. Cada seção possui um motivo próprio — linha, índice, recorte ou deslocamento — mas todos usam a mesma curva de aceleração. Cartões de atuação respondem ao ponteiro com inclinação máxima de 1,5 grau e sombra direcional muito contida. Em dispositivos móveis, parallax e cursor especial são removidos para preservar desempenho e ergonomia.

## Style Decisions — reformulação solicitada

As imagens deixam de se comportar como cartões independentes e passam a compor o espaço arquitetônico da página. O retrato do Dr. Lucas ocupará o plano de fundo principal do hero, com recorte editorial, gradientes de contraste e leitura preservada; a balança e a biblioteca serão camadas atmosféricas de fundo nas demais seções.

A entrada será uma sobreposição cinematográfica curta: símbolo, o nome completo **Dr. Lucas Graciano** e a especialidade surgem em sequência, com filete luminoso e saída por máscara. O brilho LED será quente e contido, aplicado apenas a palavras-chave, linhas e microdetalhes em latão, com pulso lento e sem aparência neon excessiva.

Para SEO e GEO, a página adotará hierarquia semântica clara, metadados completos, canonical, Open Graph, Twitter Card, JSON-LD factual para `LegalService`, `Person`, `WebSite` e `FAQPage`, textos objetivos de resposta, fontes institucionais e arquivos de rastreamento. Nenhum endereço, telefone, número de OAB ou perfil social será inventado.
