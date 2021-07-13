/*
 * @Author: tangzhicheng
 * @Date: 2021-07-13 11:17:30
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-07-13 11:54:12
 * @Description: file content
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
