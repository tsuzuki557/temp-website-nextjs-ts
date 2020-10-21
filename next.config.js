//const path = require('path');
const globImporter = require("node-sass-glob-importer");

module.exports = {
  // ベースパス
  //basePath: '/sample',
  // 末尾にスラッシュ追加
  trailingSlash: true,
  // sassオプション
  sassOptions: {
    importer: globImporter(),
    //includePaths: [path.join(__dirname, 'styles')],
  },
};