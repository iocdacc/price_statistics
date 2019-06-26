// if (document.getElementById("ie")) {
//   window.location.href = "/update-browser-web/update-browser-web.html"
// }

if (process.env.NODE_ENV == 'production') {
  global.API_HOST = 'mock'
}else{
  global.API_HOST = 'mock'
}