import '../global.css'

import { useEffect } from 'react'
import { Stack } from 'expo-router'

import { connectToDb } from '@/db/connect'

export default function Layout() {
  useEffect(() => {
    connectToDb()
  }, [])

  return <Stack screenOptions={{ headerShown: false }} />
}
