import { useRouter } from "expo-router"
import { useEffect, useState } from "react"

import { useAuth } from "@/app/hooks/use-auth"

type Props = {
   children: React.ReactNode,
}

export function ProtectedPage({ children }: Props) {
   const router = useRouter()

   const { authorize } = useAuth()

   const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    async function checkAuth() {
      const authorized = await authorize()
      if (!authorized) {
         setIsAuthorized(false)
         router.replace('/pages/auth/login')
      }

      setIsAuthorized(true)
    }

    checkAuth()
  }, [])

   return isAuthorized ? children : null
}