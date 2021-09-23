/**
 * パスカルケースへ変換処理
 *
 * @param {string} string 文字列
 * @return {string} パスカルケース
 */
exports.toPascalCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
