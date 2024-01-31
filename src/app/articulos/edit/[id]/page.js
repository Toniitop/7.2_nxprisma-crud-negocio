import Form from "@/components/FormArticulo"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { editArticulo } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const articulo = await prisma.articulo.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Editar artículo</h3>
      <Form action={editArticulo} articulo={articulo} >
        <Button title='Editar artículo' />
      </Form>
    </div>
  )
}


export default page