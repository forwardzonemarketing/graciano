# Configuração de Google Ads e formulário externo

## Contato por WhatsApp

O botão principal abre o WhatsApp do escritório com uma mensagem inicial personalizada. A mensagem pede apenas uma apresentação breve e a indicação de prazo ou medida em curso, evitando solicitar dados excessivamente sensíveis no primeiro contato.

## Pontos de mensuração

Os elementos relevantes foram identificados com atributos de dados para configuração em Google Tag Manager ou Google Ads, sem inserir tags de rastreamento nem coletar dados antes da configuração adequada.

| Elemento | Atributo | Evento recomendado |
|---|---|---|
| CTA no hero | `data-ads-intent="contact-navigation"` | Clique de intenção de contato |
| CTA no cabeçalho | `data-ads-intent="contact-navigation"` | Clique de intenção de contato |
| Botão do WhatsApp | `data-ads-intent="whatsapp-open"` | Abertura do WhatsApp |
| Página /obrigado | `data-ads-conversion-page="lead-submit"` | Conversão de formulário externo, se aplicável |
| Link dos vídeos | `data-ads-intent="video-open"` | Visualização complementar |

## Privacidade e qualidade do lead

Antes de ativar tags de publicidade, política de privacidade, consentimento e configuração de conversão devem ser definidos de acordo com a legislação aplicável e a política do Google Ads. Para anúncios que levem ao WhatsApp, mensure o clique no CTA; uma mensagem efetivamente enviada não pode ser confirmada apenas pelo site.
