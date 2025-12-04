import { Container } from "@/components/container"
import { ProtectedPage } from "../provider"
import { Logo } from "@/components/logo"
import { View } from "react-native"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { SearchIcon } from "lucide-react-native"
import { useState } from "react"

export default function CataloguePage() {
  const [search, setSearch] = useState("")
  
  function handleSearch() {

  }

  return (
    <ProtectedPage>
      <Container className="justify-center w-full items-center">
        <Logo />

        <View className="flex flex-row gap-2 px-6">
          <Input 
            placeholder="Pesquisar por dunuts"
            value={search}
            onChangeText={setSearch}
          />
          <Button 
            type="primary"
            className="w-[36px] px-3"
            onPress={handleSearch}
          >
            <SearchIcon size={20} strokeWidth={1.5} color="#fff" />
          </Button>
        </View>

      </Container>
    </ProtectedPage>
  )
}