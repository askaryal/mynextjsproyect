import Link from 'next/link'

export const metadata = {
  title: 'Tienda',
}
export default function TiendaLayout({ children }) {
 return <> 
    <nav>
      <h3>Secciones de Tiendad</h3>
      <ul>
        <li>
         <Link href='/tienda/categorias'> categorias</Link>
          </li>
      </ul>
    </nav>
  {children}
  </>
}
