import { defineConfig } from 'unocss'

import { presetVela } from '@mi/unocss-preset-vela'
export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(ux|html)($|\?)/,
        'src/**/*.{js,ts,ux}',
      ],
    }
  },
  theme: {
    colors: {
      "velaBlue": "#0D84FF",
      "customBlue": "#0487ff",
      "velaBlack": "rgba(0, 0, 0, .6)",
      "customBlack": "#333",
      "customGray": "rgba(255,255,255,.5)",
      "velaBlack": "rgba(0, 0, 0, 0.25)",
      "velaColor": "#353536",
      "velaGrey": "#E7E7E7",
      "velaGreya": "#353536",
      "velaWhite": "rgba(255,255,255,.4)",
      "velaWhitea": "rgba(255,255,255,.6)",
      "toastGray":'#343437'
    }
  },
  presets: [
    presetVela(),
  ],
  shortcuts: [
    {
      container: 'bg-black w-full h-full justify-center items-center flex-col'
    }
  ]
})