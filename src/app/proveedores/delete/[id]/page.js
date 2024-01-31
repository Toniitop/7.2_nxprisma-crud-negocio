import Form from "@/components/FormProveedor"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { deleteProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const proveedor = await prisma.proveedor.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Eliminar proveedor</h3>
      <Form action={deleteProveedor} proveedor={proveedor} disabled={true} >
        <Button title='Eliminar proveedor' />
      </Form>
    </div>
  )
}

export default page