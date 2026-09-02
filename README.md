# Verso

Landing page para a **Verso**, estúdio de estética facial e corporal em Pinheiros, São Paulo (limpeza de pele, peeling, radiofrequência, drenagem linfática, design de sobrancelhas).

**Demo:** https://verso-estetica-landing.vercel.app/

## Identidade visual

O ponto de partida é a lógica de um protocolo de skincare em camadas — limpeza, tonificação, tratamento, finalização — em vez do clichê de foto de banco de imagens com toalha na cabeça. O elemento de assinatura é a **Íris**: um diagrama circular de anéis concêntricos na hero, onde cada anel representa uma camada do protocolo; passar o mouse ou clicar em cada ponto revela a descrição daquela etapa, como uma íris que se abre camada por camada.

Na seção de resultados, um slider antes/depois (arrastável) reforça "resultado, não promessa" sem recorrer a depoimento genérico.

- **Tipografia:** Space Grotesk (display, títulos) + Instrument Serif itálico (ênfase) + Inter (corpo) + Space Mono (preços, rótulos técnicos)
- **Paleta:** tinta quase preta (`#1B1917`), papel (`#F7F4EF`), violeta assinatura (`#8A72FF`) — foge do pastel-clichê de salão de beleza
- **Modo claro/escuro:** alternável pelo botão no header, com preferência salva em `localStorage`

## Stack

HTML, CSS e JavaScript puros — sem framework de frontend. Servido em produção como site estático (Vercel); localmente roda via um `server.js` (Express) simples para servir a pasta `public/`.

## Rodando localmente

```bash
npm install
npm start
```

Abre em `http://localhost:3000`.

## Estrutura

```
public/
  index.html
  css/style.css
  js/main.js
server.js
vercel.json
```
