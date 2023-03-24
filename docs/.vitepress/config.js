import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

export default defineConfig({
  title: 'tt5',
  head: [
    ['link',
    { 
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
    }],
  ],
  themeConfig: {
    sidebar: [
      {
        text: 'progr',
        items: [
          { text: 'progr-bash', link: '/progr/progr-bash' },
          { text: 'progr-c', link: '/progr/progr-c' },
          { text: 'progr-cpp', link: '/progr/progr-cpp' },
          { text: 'progr-gawk', link: '/progr/progr-gawk' },
          { text: 'progr-git', link: '/progr/progr-git' },
          { text: 'progr-go', link: '/progr/progr-go' },
          { text: 'progr-java', link: '/progr/progr-java' },
          { text: 'progr-js', link: '/progr/progr-js' },
          { text: 'progr-json', link: '/progr/progr-json' },
          { text: 'progr-linux-inside', link: '/progr/progr-linux-inside' },
          { text: 'progr-linux', link: '/progr/progr-linux' },
          { text: 'progr-lua', link: '/progr/progr-lua' },
          { text: 'progr-python', link: '/progr/progr-python' },
          { text: 'progr-regex', link: '/progr/progr-regex' },
          { text: 'progr-r', link: '/progr/progr-r' },
          { text: 'progr-rust', link: '/progr/progr-rust' },
          { text: 'progr-vim', link: '/progr/progr-vim' },
        ]
      },
      {
        text: 'math',
        items: [
          { text: 'math-abstralg', link: '/math/math-abstralg' },
          { text: 'math-calculus', link: '/math/math-calculus' },
          { text: 'math-cat', link: '/math/math-cat' },
          { text: 'math-inf', link: '/math/math-inf' },
          { text: 'math-intro', link: '/math/math-intro' },
          { text: 'math-linalg', link: '/math/math-linalg' },
          { text: 'math-module', link: '/math/math-module' },
          { text: 'math-presentationth', link: '/math/math-presentationth' },
        ]
      },
    ]
  },
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }
})
