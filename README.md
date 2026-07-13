# Moretti Carvalho Pires Advocacia

Este é o repositório do site institucional do escritório **Moretti Carvalho Pires**, desenvolvido utilizando **Angular** e estilizado com **Tailwind CSS**. O objetivo do projeto é apresentar as áreas de atuação, publicações e formas de contato do escritório de maneira profissional, moderna e responsiva.

## 🔧 Tecnologias Utilizadas

- [Angular](https://angular.io/) – Framework para construção do frontend.
- [Tailwind CSS](https://tailwindcss.com/) – Utilizado para estilização com classes utilitárias.
- [TypeScript](https://www.typescriptlang.org/) – Linguagem principal do Angular.
- Git – Controle de versão.
- VS Code – Editor de código.

## 📁 Estrutura de Pastas

```
DOUTORHIAGO/
├── public/                    # Imagens públicas do site
│   ├── DrHiago.jpeg
│   └── image.png
├── src/
│   ├── app/
│   │   ├── Components/        # Componentes organizados por seção
│   │   │   ├── about/
│   │   │   ├── area-activity/
│   │   │   ├── background-experience/
│   │   │   ├── contact/
│   │   │   ├── footer/
│   │   │   ├── home/
│   │   │   └── navbar/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── tailwind.config.js         # Configuração do Tailwind
├── angular.json               # Configuração do Angular
├── package.json               # Dependências e scripts
├── README.md                  # Este arquivo
```

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/doutor-hiago.git
   cd doutor-hiago
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   ng serve
   ```

4. Acesse `http://localhost:4200` no seu navegador.

## 📌 Funcionalidades

- Página inicial com apresentação
- Seção sobre o advogado
- Áreas de atuação
- Experiências profissionais
- Formulário de contato
- Layout responsivo e moderno

## 🖼️ Imagens

As imagens estão localizadas na pasta `public/`. O projeto utiliza fotos reais do advogado para criar uma identidade visual confiável e profissional.

## 📬 Contato

Para mais informações, dúvidas ou sugestões, entre em contato com o desenvolvedor ou diretamente com o advogado através do formulário no site.

## Publicação no GitHub Pages

Execute `npm run build` para gerar a versão de produção em `dist/advogado-hiago`.
O build usa `baseHref` igual a `/`, copia o domínio personalizado por meio de
`public/CNAME` e cria um `404.html` igual ao `index.html`. Esse fallback permite
que rotas do Angular, como `/home`, sejam carregadas diretamente no GitHub Pages.

A pasta a ser publicada é `dist/advogado-hiago`; o código-fonte permanece na
branch principal e não deve ser substituído pelos arquivos compilados.
