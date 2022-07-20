import Head from 'next/head'
import { NavBar } from '../ui/NavBar'

export const MainLayout = ({children}) => {
  return (
    <>
    <div>

        <Head>
            <title>Acapa Ecoturitco</title>
            <meta name="description" content="Aplicacion para la difudion de la iniciativas turisticas"/>
            <meta name="keywords" content='paseos, comida, tipico, lugares, iniciativa'/>
        </Head>
        <nav>
            <NavBar/>
        </nav>
        <main className="container-xl">
            {children}
        </main>
    
    </div>
    </>
  )
}
