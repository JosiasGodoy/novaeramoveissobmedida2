# Nova Era Móveis Sob Medida - Site Institucional

## Descrição
Site moderno e responsivo desenvolvido para a Nova Era Móveis Sob Medida, empresa especializada em móveis planejados localizada na Zona Norte de Porto Alegre.

## Características do Site

### Design e Layout
- **Design Moderno**: Interface limpa e contemporânea
- **Responsivo**: Adaptável para desktop, tablet e mobile
- **Cores**: Baseadas na identidade visual da empresa (vermelho #e74c3c, cinza #2c3e50)
- **Tipografia**: Fonte Inter para melhor legibilidade

### Funcionalidades Implementadas

#### 1. Banner de Pagamento Facilitado
- Banner fixo no topo destacando "Pagamento facilitado em até 10x sem juros"
- Cor vermelha chamativa para atrair atenção

#### 2. Navegação
- Menu responsivo com hamburger para mobile
- Navegação suave entre seções
- Header com efeito de transparência no scroll

#### 3. Seções do Site

**Hero Section**
- Apresentação da empresa com slogan "Ambientes para Viver"
- Botões de call-to-action para serviços e WhatsApp
- Imagem de destaque da empresa

**Sobre a Empresa**
- História e valores da Nova Era Móveis
- Destaque para materiais ecológicos (MDF E1)
- Cards com diferenciais da empresa

**Serviços**
- 6 categorias de serviços:
  - Cozinhas
  - Dormitórios
  - Closets
  - Banheiros
  - Salas
  - Ambientes Comerciais
- Cada serviço possui carrossel de imagens automático
- Descrições específicas para cada categoria

**Contato**
- Formulário de contato integrado com WhatsApp
- Informações de localização e contato
- Ícones sociais (WhatsApp, Instagram, Website)

#### 4. Carrossel de Imagens
- Transição automática a cada 4 segundos
- Pausa ao passar o mouse
- Indicadores visuais (dots)
- Imagens otimizadas para cada categoria

#### 5. Botão Flutuante WhatsApp
- Posicionado no canto inferior direito
- Animação de pulso para chamar atenção
- Link direto para WhatsApp com número +55 51 98600-9570

#### 6. Formulário de Contato
- Integração com WhatsApp
- Campos: nome, email, telefone, serviço, mensagem
- Envio automático de mensagem formatada para WhatsApp

### Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript**: Interatividade e funcionalidades
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Inter)

### Recursos de Acessibilidade
- Navegação por teclado
- Labels apropriados para formulários
- Contraste adequado de cores
- Imagens com alt text

### Otimizações
- Lazy loading para imagens
- Debounce em eventos de scroll
- Preload de imagens críticas
- Animações suaves com CSS transitions

### Estrutura de Arquivos
```
nova-era-site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── logo.svg            # Logo da empresa
├── NovaEraMóveis-Maio2025.jpg  # Imagem principal
├── images/             # Pasta de imagens
│   ├── cozinha1.jpg
│   ├── cozinha2.jpg
│   ├── dormitorio1.jpg
│   ├── dormitorio2.jpg
│   ├── closet1.jpg
│   ├── closet2.jpg
│   ├── banheiro1.jpg
│   ├── banheiro2.jpg
│   ├── sala1.jpg
│   ├── sala2.jpg
│   ├── comercial1.jpg
│   └── comercial2.jpg
└── README.md           # Este arquivo
```

### Como Personalizar

#### Substituir Imagens
1. Substitua as imagens na pasta `images/` mantendo os mesmos nomes
2. Para adicionar mais imagens ao carrossel, edite o HTML e adicione as imagens correspondentes

#### Alterar Informações de Contato
- Edite o número do WhatsApp nas variáveis JavaScript e links HTML
- Atualize as informações de contato na seção correspondente

#### Modificar Cores
- Edite as variáveis CSS no início do arquivo `styles.css`
- Cores principais: #e74c3c (vermelho), #2c3e50 (cinza escuro)

### Compatibilidade
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Dispositivos móveis iOS e Android

### Performance
- Carregamento otimizado
- Imagens comprimidas
- CSS e JS minificáveis para produção
- Suporte a cache do navegador

## Manutenção
Para manter o site atualizado:
1. Substitua as imagens regularmente
2. Atualize informações de contato conforme necessário
3. Adicione novos projetos às galerias
4. Mantenha o conteúdo sobre a empresa atualizado

