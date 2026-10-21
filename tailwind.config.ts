import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme:{extend:{
    colors:{slate0:'#0B0F19',obsidian:'#05070C',cyanx:'#00F0FF',indigox:'#6366F1',lime:'#CCFF00',silver:'#94A3B8'},
    fontFamily:{display:['var(--font-display)','sans-serif'],sans:['var(--font-inter)','sans-serif']},
    boxShadow:{lime:'0 0 20px rgba(204,255,0,0.35)'}}},
  plugins:[]
} satisfies Config
