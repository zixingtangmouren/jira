/**
 * @Author: tangzhicheng
 * @Date: 2021-07-13 14:09:03
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-07-13 15:41:29
 * @Description: file content
 */

import { useEffect, useState } from 'react'
import { UseMount } from './types'

export const useMount: UseMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = <T>(depValue: T, delay = 700) => {
  const [debounceValue, setDebounceValue] = useState(depValue)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(depValue)
    }, delay)

    return () => clearTimeout(timer)
  }, [depValue])

  return debounceValue
}
