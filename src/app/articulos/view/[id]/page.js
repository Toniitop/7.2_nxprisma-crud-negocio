import Form from "@/components/FormArticulo"
import prisma from '@/lib/prisma'
import { getArticulo } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const articulo = await prisma.articulo.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Ver artículo</h3>
      <Form action={getArticulo} articulo={articulo} disabled={true} >
      </Form>
    </div>
  )
}

export default page