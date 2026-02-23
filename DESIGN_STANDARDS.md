# Padrões de Design - GMV Landing

Este documento descreve os padrões visuais aplicados ao projeto, com foco na tipografia e no fundo padrão (Golden Lines), conforme solicitado.

## 1. Tipografia Padrão

Todas as páginas devem utilizar a seguinte estrutura tipográfica, configurada no `tailwind.config.ts` e carregada via `next/font/google`:

### Fontes

- **Corpo (Sans)**: `Inter` (`--font-inter`)
  - Uso: Textos corridos, parágrafos, botões e elementos de interface.
  - Classes Tailwind: `font-sans`

- **Títulos (Heading/Display)**: `Montserrat` (`--font-montserrat`)
  - Uso: H1, H2, H3, destaques em caixa alta.
  - Classes Tailwind: `font-heading`, `font-display`

- **Detalhes de Luxo (Serif)**: `Playfair Display` (`--font-playfair`)
  - Uso: Subtítulos sofisticados, frases de impacto, itálicos elegantes ("italic").
  - Classes Tailwind: `font-serif`

### Peso e Estilo

- **Títulos**: Geralmente `font-bold` ou `font-black`, muitas vezes em `uppercase` e `tracking-tighter` ou `tracking-widest`.
- **Destaques**: Uso frequente de `text-gradient-gold` (gradiente dourado definido no CSS global) ou `text-brand`.

---

## 2. Fundo Padrão (Golden Lines)

O fundo padrão deve ser aplicado a **todas as páginas** para garantir consistência visual. Ele consiste em um fundo preto profundo com efeitos de luz dourada sutis.

### Componente

Utilize o componente reutilizável `StandardBackground`:

```tsx
import StandardBackground from '@/components/StandardBackground';

export default function Page() {
    return (
        <main className="min-h-screen bg-black">
            <StandardBackground />
            
            {/* Conteúdo da página */}
            <div className="relative z-10">
                ...
            </div>
        </main>
    );
}
```

### Características Visuais

1. **Cor de Fundo**: Preto profundo (`#020202`).
2. **Glow Lateral**: Luzes difusas douradas (`bg-brand/5`) nas laterais esquerda e direita para criar volume.
3. **Feixes Verticais**: Duas linhas verticais finas com gradiente dourado (`#C5A059`) e sombra suave, simulando feixes de laser/luz.
4. **Linha Horizontal**: Uma linha horizontal muito sutil cruzando o layout para um toque tecnológico.

---

## 3. Cores Principais

- **Background**: `#0A0A0A` (Rich Black)
- **Primary / Gold**: `#C5A059` (Metallic Gold)
- **Brand**: `#f4c025` (Brighter Gold)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#D1D5DB`
