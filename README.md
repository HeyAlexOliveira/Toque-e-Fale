# Toque e Fale

Aplicativo gratuito de comunicação alternativa para estudantes não verbais. O aluno toca em um cartão com o papagaio e a palavra, e o app fala a frase em português.

Feito para rodar em tablets e celulares, direto no navegador, sem instalar nada e sem cadastro.

## Como funciona

- Seis categorias (Preciso, Sentimentos, Escola, Brincar, Pessoas, Conversa) com 54 cartões, cada um com um papagaio.
- Ao tocar num cartão, ele abre em tela cheia e o app fala a frase, por exemplo "Quero ir ao banheiro".
- Painel do professor: toque no botão de três pontinhos, ao lado do botão de sol e lua no topo da tela. Também continua funcionando o atalho antigo de segurar o ícone de engrenagem (canto inferior direito) por cerca de 1,5 segundo. O painel tem três abas:
  - **Cartões:** nome do aluno, níveis Iniciante, Intermediário e Todos, escolha cartão a cartão e um cartão personalizado.
  - **Voz:** ligar ou desligar a voz, estilo (Natural, Alegre, Papagaio e Grave), voz do aparelho, tom, velocidade, volume, piado do papagaio e botão para testar a voz.
  - **Aparência:** tema automático, claro ou escuro.
- Voz padrão: **Natural** (tom normal e velocidade um pouco mais calma). O estilo Papagaio continua disponível como opção.
- As escolhas ficam salvas só no próprio aparelho (`localStorage`). Nenhum dado é enviado para a internet.

## Estrutura

```
toque-e-fale/
├── index.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/style.css          estilos e paleta de cores
    ├── js/
    │   ├── splash.js          tela de abertura animada
    │   └── app.js             cartões, voz, painel do professor e tema
    └── img/
        ├── logo.png
        ├── papagaio-rosto.webp
        ├── splash/papagaio-sprite.webp
        ├── categorias/        um ícone por categoria
        └── cartoes/<categoria>/   um papagaio por cartão
```

## Rodar no computador

Basta abrir o `index.html` no navegador. Para testar do jeito mais próximo do real, use um servidor local:

```
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório e envie estes arquivos (o `index.html` fica na raiz).
2. Em **Settings > Pages**, escolha **Deploy from a branch**, a branch `main` e a pasta `/ (root)`.
3. Em alguns minutos o app fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

No tablet, abra o endereço e use "Adicionar à tela inicial" para ter um atalho.

## Como editar

- **Vocabulário (palavras e frases):** no `assets/js/app.js`, procure a lista `DATA`. Cada cartão tem `id`, `word`, `emoji` e `say` (a frase falada).
- **Trocar ou incluir uma imagem:** coloque o arquivo em `assets/img/cartoes/<categoria>/` e aponte para ele na lista `ICONS`, no começo do `app.js`, usando o `id` do cartão. Um cartão sem imagem usa o emoji.
- **Cores:** no `assets/css/style.css`, procure a seção "Paleta calma" e a seção "verde e azul discretos".
- **Abertura animada:** o papagaio é uma folha de 6 quadros (`assets/img/splash/papagaio-sprite.webp`). Os tempos de cada quadro estão no `assets/js/splash.js`.

## Observações

- **Voz:** o app usa a voz do próprio navegador (Web Speech API). A qualidade e as opções dependem das vozes em português instaladas no aparelho. Teste no tablet que será usado. Se não houver voz em português, o painel avisa.
- **Sem internet:** o app não precisa de internet para funcionar depois de carregado, mas a primeira abertura precisa. A fonte Nunito vem do Google Fonts e, sem internet, o app usa uma fonte padrão do aparelho.
- **Movimento:** em aparelhos com "reduzir movimento" ativado, a abertura mostra o papagaio parado.
- **Famílias e LGPD:** o app não coleta nem envia dados, mas o nome do aluno digitado no painel fica salvo no aparelho. Para testes com estudantes, obtenha a autorização da instituição e das famílias.

## Créditos

Projeto desenvolvido para o CAPE. Mascote, logo e papagaios: arte original do projeto.
