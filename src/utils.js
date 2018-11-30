/**
 * 自定义日期格式化
 * @param offsetTime
 * @param format
 * @returns {string}
 */
export const dateFormat = (offsetTime, format) => {
  let str = '';
  const date = typeof offsetTime === 'number'
    ? new Date(offsetTime) : offsetTime;
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  month = month > 9 ? month : '0' + month;
  day = day > 9 ? day : '0' + day;
  hours = hours > 9 ? hours : '0' + hours;
  minutes = minutes > 9 ? minutes : '0' + minutes;
  seconds = seconds > 9 ? seconds : '0' + seconds;
  switch (format) {
    case 'yyyy-mm-dd':
      str = year + '-' + month + '-' + day;
      break;
    case 'yyyy/mm/dd':
      str = year + '/' + month + '/' + day;
      break;
    case 'yyyy-mm-dd hh:mm':
      str = year + '-' + month + '-' + day +
        ' ' + hours + ':' + minutes;
      break;
    case 'yyyy/mm/dd hh:mm':
      str = year + '/' + month + '/' + day +
        ' ' + hours + ':' + minutes;
      break;
    case 'yyyy-mm-dd hh:mm:ss':
      str = year + '-' + month + '-' + day +
        ' ' + hours + ':' + minutes + ':' + seconds;
      break;
    case 'yyyy/mm/dd hh:mm:ss':
      str = year + '/' + month + '/' + day +
        ' ' + hours + ':' + minutes + ':' + seconds;
      break;
    default:
      str = year + '-' + month + '-' + day;
      break;
  }
  return str;
};
/**
 * 模拟返回分页数据
 * @param data
 * @param pageCode
 * @param pageSize
 * @returns {{data: Array}}
 */
export const pagination = (data, pageCode, pageSize) => {
  const newData = data.data.filter((item, index) => {
    if ((index >= (pageCode - 1) * pageSize) &&
      index < pageCode * pageSize) {
      return item;
    }
  });
  return {data: newData || []};
};
/**
 * 获取请求路径参数
 * @param name
 * @returns {*}
 */
export const getQueryParams = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
/**
 *
 * @param params
 * @returns {string}
 */
export const getBaseUrl = (params) => {
  let url = window.location.href.split(params)[0];
  url = url.substr(0, url.length - 2);
  return url;
};
/**
 * 获取元素阿紫数组中的位置
 */
export const getIndexOf = (arr, item) => {
  if (Array.prototype.indexOf) {
    return arr.indexOf(item);
  } else { // 是在IE
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i; // 返回相应的下标
      }
    }
  }
  return -1; // 找不到返回-1
};
