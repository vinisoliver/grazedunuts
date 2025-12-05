import { Container } from "@/components/container"
import { ProtectedPage } from "@/app/pages/protected/provider"
import { Logo } from "@/components/logo"
import { View } from "react-native"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { SearchIcon } from "lucide-react-native"
import { useState } from "react"
import { CatalogueList } from "./list"

export default function CataloguePage() {
  const [search, setSearch] = useState("")
  
  function handleSearch() {

  }

  return (
    <ProtectedPage>
      <Container className="justify-center w-full items-center">
        <Logo />

        <View className="flex flex-row gap-2 w-full">
          <Input 
            placeholder="Pesquisar por dunuts"
            className="w-full"
            value={search}
            onChangeText={setSearch}
          />
          <Button 
            type="primary"
            onPress={handleSearch}
          >
            <SearchIcon size={20} strokeWidth={1.5} color="#fff" />
          </Button>
        </View>

        <CatalogueList search={search} />
      </Container>
    </ProtectedPage>
  )
}