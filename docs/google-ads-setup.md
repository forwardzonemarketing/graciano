# Configuração de Google Ads e formulário externo

## Formulário de contato

Defina a variável de ambiente `VITE_EXTERNAL_FORM_URL` no projeto da Vercel com o endereço HTTPS do formulário oficial. Como é uma variável iniciada por `VITE_`, ela é incorporada durante a build estática; execute novo deploy depois de adicioná-la.

Quando essa variável estiver definida, o botão principal da seção de contato abrirá o formulário. A página preserva automaticamente, quando existirem, os parâmetros `gclid`, `gbraid`, `wbraid` e os parâmetros UTM da URL da landing page.

## Pontos de mensuração

Os elementos relevantes foram identificados com atributos de dados para configuração em Google Tag Manager ou Google Ads, sem inserir tags de rastreamento nem coletar dados antes da configuração adequada.

| Elemento | Atributo | Evento recomendado |
|---|---|---|
| CTA no hero | `data-ads-intent="contact-navigation"` | Clique de intenção de contato |
| CTA no cabeçalho | `data-ads-intent="contact-navigation"` | Clique de intenção de contato |
| Botão do formulário | `data-ads-intent="form-open"` | Abertura do formulário |
| Página /obrigado | `data-ads-conversion-page="lead-submit"` | Conversão de envio concluído |
| Link dos vídeos | `data-ads-intent="video-open"` | Visualização complementar |

## Privacidade e qualidade do lead

Antes de ativar tags de publicidade, política de privacidade, consentimento e configuração de conversão devem ser definidos de acordo com a legislação aplicável e a política do Google Ads. Configure a conversão de envio apenas na página `/obrigado`, depois de confirmar que ela é exibida exclusivamente após uma submissão bem-sucedida.
