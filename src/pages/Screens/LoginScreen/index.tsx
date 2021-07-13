/*
 * @Author: tangzhicheng
 * @Date: 2021-07-13 16:15:41
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-07-13 16:59:41
 * @Description: file content
 */

import React from 'react'

function LoginScreen() {
  const submitHandle: React.FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault()
    const username = (ev.currentTarget.elements[0] as HTMLInputElement).value
    const password = (ev.currentTarget.elements[1] as HTMLInputElement).value
    console.log(username, password)
  }

  return (
    <form onSubmit={submitHandle}>
      <div>
        <label htmlFor="username">
          username:
          <input type="text" id="username" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          password:
          <input type="password" id="password" />
        </label>
      </div>
      <div>
        <button type="submit">登录</button>
      </div>
    </form>
  )
}

export default LoginScreen
