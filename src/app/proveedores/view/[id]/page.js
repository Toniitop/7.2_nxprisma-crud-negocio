import Form from "@/components/FormProveedor"
import prisma from '@/lib/prisma'
import { getProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const proveedor = await prisma.proveedor.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Ver proveedor</h3>
      <Form action={getProveedor} proveedor={proveedor} disabled={true} >
      </Form>
    </div>
  )
}

export default page