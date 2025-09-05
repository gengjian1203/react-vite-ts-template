/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 自定义颜色
      colors: {
        cosx: {
          primary: '#3B82F6',
          secondary: '#10B981',
          accent: '#F59E0B',
          danger: '#EF4444',
          warning: '#F59E0B',
          success: '#10B981',
          info: '#3B82F6',
          dark: '#1F2937',
          light: '#F9FAFB',
          muted: '#6B7280',
        },
      },
      // 自定义间距
      spacing: {
        'cosx-xs': '0.25rem', // 4px
        'cosx-sm': '0.5rem', // 8px
        'cosx-base': '1rem', // 16px
        'cosx-md': '1.5rem', // 24px
        'cosx-lg': '2rem', // 32px
        'cosx-xl': '3rem', // 48px
        'cosx-2xl': '4rem', // 64px
        'cosx-3xl': '6rem', // 96px
      },
      // 自定义字体大小
      fontSize: {
        'cosx-xs': ['0.75rem', { lineHeight: '1rem' }],
        'cosx-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'cosx-base': ['1rem', { lineHeight: '1.5rem' }],
        'cosx-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'cosx-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'cosx-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'cosx-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'cosx-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      // 自定义圆角
      borderRadius: {
        'cosx-sm': '0.25rem',
        'cosx-base': '0.5rem',
        'cosx-lg': '0.75rem',
        'cosx-xl': '1rem',
        'cosx-2xl': '1.5rem',
      },
      // 自定义阴影
      boxShadow: {
        'cosx-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'cosx-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'cosx-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'cosx-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // 自定义宽高
      width: {
        'cosx-xs': '16rem', // 256px
        'cosx-sm': '20rem', // 320px
        'cosx-base': '24rem', // 384px
        'cosx-lg': '32rem', // 512px
        'cosx-xl': '40rem', // 640px
      },
      height: {
        'cosx-xs': '8rem', // 128px
        'cosx-sm': '12rem', // 192px
        'cosx-base': '16rem', // 256px
        'cosx-lg': '20rem', // 320px
        'cosx-xl': '24rem', // 384px
      },
    },
  },
  plugins: [
    // 添加自定义组件样式
    function ({ addComponents }) {
      addComponents({
        '.cosx-btn-base': {
          '@apply px-cosx-base py-cosx-sm rounded-cosx-base font-medium transition-colors': {},
        },
        '.cosx-btn-primary': {
          '@apply cosx-btn-base bg-cosx-primary text-white hover:bg-blue-700': {},
        },
        '.cosx-btn-secondary': {
          '@apply cosx-btn-base bg-cosx-secondary text-white hover:bg-green-700': {},
        },
        '.cosx-card-base': {
          '@apply bg-white rounded-cosx-lg shadow-cosx-base p-cosx-lg': {},
        },
        '.cosx-input-base': {
          '@apply border border-gray-300 rounded-cosx-base px-cosx-sm py-cosx-xs focus:ring-2 focus:ring-cosx-primary focus:border-transparent':
            {},
        },
      });
    },
  ],
};
