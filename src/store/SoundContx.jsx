import { useState } from "react";
import { createContext, useContext } from "react";

const SoundContext = createContext()



export default function SoundContxProvider({children}) {
    const [isPlaying, setIsPlaying] = useState(false)  

    
  return (
    <SoundContext.Provider value={{isPlaying, setIsPlaying}}>
        {children}

    </SoundContext.Provider>
  )
}

export function useSoundContx (){
    return useContext(SoundContext)
}
