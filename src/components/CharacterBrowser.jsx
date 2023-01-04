const CharacterBrowser = ({setSearch}) => {
  return (
    <form >
      <label htmlFor="search">Busca a tu personaje por nombre:</label>
      <input type="text" name="search" onChange={(e) => setSearch(e.target.value)}/>
    </form>
  )
}

export default CharacterBrowser;