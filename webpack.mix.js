let mix = require('laravel-mix');
mix.sass('src/style.scss', 'dist')
  .options({
    processCssUrls: false,
  })
  .webpackConfig({
    devtool: 'source-map',
    stats: {
      children: true
    }
    // this line actually we need
  })
  .sourceMaps()
  // .browserSync('bimafy.test')
  .disableNotifications();