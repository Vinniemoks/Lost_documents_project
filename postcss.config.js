module.exports = {
  plugins: [
    require('tailwindcss')({
      
      theme: {
        extend: {
          colors: {
            'primary': '#3498db', 
            'secondary': '#f5f5f5' 
          },
          fontSize: {
            'xs': '.75rem', 
            'sm': '.875rem'
          }
        }
      }
    }),
    require('autoprefixer')({
     
      overrideBrowserslist: [
        'last 2 versions', /
        '>1%',
        'ie 11', 
        'maintained node versions'
      ]
    }),
  ],
};
