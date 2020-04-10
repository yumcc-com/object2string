/**
 * 对象转字符串
 * @param {object} params 对象
 * @param {object} options 参数
 * sort: 排序开关，对所有参数按照字段名的ASCII 码从小到大排序（字典序）
 * splicing: 对象之间的拼接符
 * relative：字段与值之间的相对连接符
 * encode：需要进行转义的字段名数组
 */
module.exports = (params, options) => {
  const { sort = false, splicing = '&', relative = '=', encode = [] } =  options || {}
  params = params || {}
  let str = ''
  const keyArr = Object.keys(params)
  sort && keyArr.sort()
  for (let i of keyArr) {
    str += `${i}${relative}${encode.includes(i) ? encodeURIComponent(params[i]) : params[i]}${splicing}`
  }
  return str.endsWith(splicing) ? str.substr(0, str.length - splicing.length) : str
}