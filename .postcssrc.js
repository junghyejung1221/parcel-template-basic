// ESM
// nodejs에서는 import를 require로 사용 CommonJS


//import autoprefixer from 'autoprefixer'

// const autoprefixer = require('autoprefixer')

//exprot
// exports {
//   Plugins: [
//     autoprefixer
//   ]
// }

module.exports ={
  Plugins: [
    require('autoprefixer')
  ]
}
