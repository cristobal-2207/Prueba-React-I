const SortData = () => {
  return (
    <div className="selct-sort">
      <select name="sortList">
        <option value="all">Todos</option>
        <option value="sortFromAToZ">Ordenar A - Z</option>
        <option value="sortFromZToA">Ordenar Z - A</option> 
      </select>
    </div>
  )
}

export default SortData;