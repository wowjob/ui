export const DataList = ({
  list = [],
  id,
}: {
  id: string
  list?: {
    value: string
    name: string
    id?: string
  }[]
}) => (
  <datalist id={id}>
    {list.map(({ value, name, id }, index) => (
      <option value={value} key={id || index}>
        {name}
      </option>
    ))}
  </datalist>
)
