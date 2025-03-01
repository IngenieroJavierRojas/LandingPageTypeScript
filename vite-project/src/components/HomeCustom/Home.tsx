import { JSX } from "react"
import { HeaderCustom } from "../HeaderCustom"

export const Home = (): JSX.Element => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-400">
            <HeaderCustom />
            <main className="grid grid-cols-3 justify-center items-center gap-4  h-svh w-full px-3">
               <section className="col-span-1 bg-amber-200 h-full">
                     <h1>Contenido lateral que se renderiza para información u otra cosa</h1>
               </section>
                <section className="col-span-1 bg-amber-300 h-full">
                      <h1>Contenido principal</h1>
                </section>
                <section className="col-span-1 bg-blue-100 h-full">
                      <h1>Contenido lateral que se renderiza para información u otra cosa</h1>
                </section>
            </main>
        </div>
    )
}

