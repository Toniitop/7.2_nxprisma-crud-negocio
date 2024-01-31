import Form from "@/components/FormArticulo"
import Button from "@/components/Button"
import { newArticulo } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div>
        <h3>Nuevo artículo</h3>
        <Form action={newArticulo} articulo={null}>
          <Button title='Crear artículo' />
        </Form>
    </div>
  )
}

export default page