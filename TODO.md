# TODO — Verso, Estúdio de Estética

Checklist de revisão do projeto. Itens marcados como concluídos já foram resolvidos.

## 🔴 Crítico antes de publicar como site real (conteúdo fictício)

- [ ] **WhatsApp do CTA principal é fake** (`5511999999999` em `index.html`, seção CTA) — trocar pelo número real do estúdio.
- [ ] Fotos de "Tratamentos" e do comparador "Resultado" são stock (Unsplash), não fotos reais do estúdio/clientes. Já sinalizado em comentário HTML no comparador — falta o mesmo aviso/decisão pro menu de tratamentos.
- [ ] Depoimentos ("Camila O.", "Renata F."), endereço e Instagram são fictícios — ok pra portfólio/demo, mas precisam virar conteúdo real se isso for pra um cliente de verdade (risco de propaganda enganosa/LGPD se publicado como está).
- [ ] "Agenda de setembro com 6 horários livres" (seção CTA) é hardcoded — fica desatualizado e enganoso com o tempo.

## 🟡 SEO / Compartilhamento

- [ ] Sem `og:image` — link compartilhado no WhatsApp/Instagram/LinkedIn não mostra nenhuma prévia de imagem. Provavelmente a maior perda de conversão silenciosa hoje.
- [ ] Sem `twitter:card` meta tags.
- [ ] Sem `robots.txt` / `sitemap.xml`.
- [ ] Sem dados estruturados schema.org `LocalBusiness` (nome, endereço, horário, telefone) — ajuda SEO local de um estúdio físico.

## 🟢 Acessibilidade / Robustez

- [ ] `.iris__hit` (botões da íris) e `.compare__handle` sem `:focus-visible` customizado — funciona com o outline padrão do navegador, mas um anel na cor `--accent` ficaria mais coerente com o resto do design.
- [ ] `prefers-reduced-motion` cobre `[data-reveal]`, `.btn` e `.iris__hit`, mas não as transições de filtro/hover das fotos (`.menu__media img`, `.compare__side img`).
- [ ] Menu mobile (hambúrguer) não tem trap de foco — tab não fica preso dentro do dropdown aberto.

## ⚪ Polish menor / nice-to-have

- [ ] Sem `apple-touch-icon` (só o favicon SVG inline) — sem ícone bonito ao salvar na tela inicial do iOS.
- [ ] `package.json` sem `"engines"` nem script de lint/format.

## ✅ Já feito

- [x] Redesign da seção Tratamentos: cards editoriais em zigue-zague com fotos reais (verificadas), duotone que revela cor no hover, selo circular de duração.
- [x] Fix do bug do card `.iris__readout` do hero vazando pra cima da seção Tratamentos.
- [x] Menu mobile funcional (hambúrguer, abre/fecha, fecha com Esc e ao clicar num link).
- [x] Fotos reais no comparador "Resultado, não promessa" — duas fotos diferentes e verificadas (textura irregular vs. uniforme, sem rosto identificável), evitando fabricar identidade de uma pessoa real como cliente.
- [x] Fix do bug onde o rótulo "Semana 1" ficava sempre escondido atrás da camada "Semana 6" no comparador.
