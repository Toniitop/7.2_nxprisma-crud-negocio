import Form from "@/components/FormProveedor"
import Button from "@/components/Button"
import { newProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div>
      <h3>Nuevo proveedor</h3>
      <Form action={newProveedor} proveedor={null}>
        <Button title='Crear proveedor' />
      </Form>
    </div>
  )
}

export default page