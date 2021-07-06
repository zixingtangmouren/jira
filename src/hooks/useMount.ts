import React, { useEffect } from 'react'

export function useMount(callback: React.EffectCallback) {
  useEffect(callback, [])
}
