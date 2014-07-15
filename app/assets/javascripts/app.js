console.log(lcRequire);
lcRequire.config({
  baseUrl: 'http://localhost:4000/assets',
  paths: {'jquery': 'jquery-1.11.1.min'},
  map: {
    '*': {'jquery': 'jquery-lc'},
    'jquery-lc': {'jquery': 'jquery'}
  }
});
