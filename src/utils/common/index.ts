/**
 * @Author: tangzhicheng
 * @Date: 2021-07-13 15:20:06
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-07-13 15:34:27
 * @Description: file content
 */

import qs from 'querystring'

export const cleanObject = <T extends object>(obj: T) => {
  const processObj = JSON.parse(JSON.stringify(obj))
  Object.keys(processObj).forEach((key) => {
    if (processObj[key] === undefined || processObj[key] === '') {
      delete processObj[key]
    }
  })

  return processObj
}

export const paramshandle = <T extends qs.ParsedUrlQueryInput>(obj: T) =>
  `?${qs.stringify(obj)}`
