# Formulário de Nivelamento de Inglês - Caroline Alves

Formulário profissional para capturas de leads e diagnóstico de nível de inglês.

## 📋 Campos do Formulário

- Nome (obrigatório)
- Email (obrigatório)
- Nível de inglês (Iniciante / Intermediário / Fluente)
- Forma preferida de aprender (múltipla escolha)
- Assuntos de interesse (múltipla escolha)
- Livros, filmes, artistas e séries favoritos
- Objetivos na aprendizagem
- Histórico de viagens
- Interesses adicionais
- Países que gostaria de conhecer

## 🚀 Como Usar

### 1. Configurar Formspree (Serviço de Email)

O formulário está configurado para enviar dados via **Formspree**, um serviço gratuito que envia os dados direto para um email.

**Passo a passo:**

1. Acesse https://formspree.io
2. Faça login ou crie uma conta
3. Clique em "New Form"
4. Insira o email da Caroline: `carolinealves@email.com` (ou o email dela)
5. Clique em "Create"
6. Copie o **Form ID** gerado (algo como: `f/abc123def456`)
7. Abra o arquivo `script.js`
8. Encontre a linha: `https://formspree.io/f/FORM_ID_AQUI`
9. Substitua `FORM_ID_AQUI` pelo Form ID copiado
10. Salve o arquivo

**Exemplo:**
```javascript
// Antes:
const response = await fetch('https://formspree.io/f/FORM_ID_AQUI', {

// Depois:
const response = await fetch('https://formspree.io/f/abc123def456', {
```

### 2. Hospedar o Formulário

Você pode hospedar em qualquer lugar. Aqui estão algumas opções **gratuitas**:

#### Opção A: Vercel (Recomendado)
```bash
npm install -g vercel
vercel deploy
```

#### Opção B: Netlify
1. Acesse https://app.netlify.com
2. Drag & drop a pasta `formulario-english`
3. Pronto! Você terá um link público

#### Opção C: GitHub Pages
1. Crie um repositório chamado `formulario-english`
2. Upload dos arquivos HTML, CSS e JS
3. Ative GitHub Pages nas configurações
4. Seu link será: `https://seu-usuario.github.io/formulario-english`

#### Opção D: Servidor próprio
Se você tem um servidor, basta colocar os arquivos em uma pasta acessível via HTTP.

### 3. Testar o Formulário

1. Abra `index.html` no navegador (ou acesse o link público)
2. Preencha com dados de teste
3. Clique em "Enviar Formulário"
4. Verifique se o email chegou na caixa de entrada da Caroline

## 📧 O que Caroline Receberá

Quando alguém preencher e enviar o formulário, Caroline receberá um email estruturado com todas as informações:

```
Nome: João Silva
Email: joao@exemplo.com
Nível de Inglês: Intermediário
Forma de Aprender: Conversação, Falando
Assuntos de Interesse: Tecnologia, Viagens e turismo, Negócios
Livros Favoritos: O Poder do Hábito, Sapiens
Filmes Favoritos: The Matrix, Inception
Artistas Favoritos: The Beatles, Coldplay
Séries Favoritas: Breaking Bad, Stranger Things
Objetivos: Trabalho, Conversação, Pronúncia
Já Viajou: EUA, Canadá
Outros Detalhes: Quero melhorar meu inglês para negociações
Países que Quer Conhecer: Reino Unido, Irlanda, Austrália
```

## 🎨 Customizações

### Mudar Cores
Edite o arquivo `styles.css` na seção `:root`:
