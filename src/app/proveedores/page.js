import Link from 'next/link'
import Image from 'next/image'
import Proveedor from '@/components/Proveedor'
import { getProveedores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const proveedores = await getProveedores()
    // console.log(proveedores);

    return (
        <div>
            <Link className='enlace' href="/proveedores/new">
                <Image src='/nuevo.svg' alt='nuevo' width="20" height="20" />
                Nuevo proveedor
            </Link>
            {
                proveedores.map((proveedor) => (
                    <Proveedor key={proveedor.id} proveedor={proveedor} >
                        <Link className='enlace' href={`/proveedores/view/${proveedor.id}`} >
                            <Image src='/ver.svg' alt='nuevo' width="20" height="20" />
                            Ver
                        </Link>
                        <Link className='enlace' href={`/proveedores/edit/${proveedor.id}`} >
                            <Image src='/editar.svg' alt='nuevo' width="20" height="20" />
                            Editar
                        </Link>
                        <Link className='enlace' href={`/proveedores/delete/${proveedor.id}`} >
                            <Image src='/eliminar.svg' alt='nuevo' width="20" height="20" />
                            Eliminar
                        </Link>
                    </Proveedor>
                ))
            }
        </div>
    )
}
