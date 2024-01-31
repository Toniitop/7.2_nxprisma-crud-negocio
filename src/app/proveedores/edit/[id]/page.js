import Form from "@/components/FormProveedor"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { editProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const proveedor = await prisma.proveedor.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Editar proveedor</h3>
      <Form action={editProveedor} proveedor={proveedor} >
        <Button title='Editar proveedor' />
      </Form>
    </div>
  )
}


export default page