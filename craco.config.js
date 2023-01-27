const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@elementos":path.resolve(__dirname, 'src','atom','01.elementos'),
      "@componentes": path.resolve(__dirname, 'src','atom','02.componentes'),
      "@disenos": path.resolve(__dirname, 'src','atom','03.diseños'),
      "@vistas": path.resolve(__dirname, 'src','atom','04.vistas'),
      "@data": path.resolve(__dirname, 'src','atom','data')
    },
  },
};