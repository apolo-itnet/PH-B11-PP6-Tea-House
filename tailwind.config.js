module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        'trans-top': {
          '0%, 100%': { transform: 'translateY(20px)' },
          '50%': { transform: 'translateY(0)' },
        },
        
      },
      animation: {
        'trans-top': 'trans-top 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
