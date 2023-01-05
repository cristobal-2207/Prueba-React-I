import Form from 'react-bootstrap/Form';
const CharacterBrowser = ({setSearch}) => {
  return (
    <div>
      <Form className="m-4" >
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Label className="font-size-input" htmlFor="search">Busca a tu personaje por nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa el nombre de tu personaje" name="search" onChange={(e) => setSearch(e.target.value)} />
        </Form.Group>
      </Form>   
    </div>
  )
}

export default CharacterBrowser;