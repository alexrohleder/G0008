export default function Home() {
  return (
    <div>
      <h1>Totem API</h1>
      <p>Existem dois endpoints, segue a descrição e um exemplo:</p>
      <ul>
        <li>
          Listar items do menu principal: <a href="/api/items">/api/items</a>
        </li>
        <li>
          Retornar item de um menu: <a href="/api/item?id=1">/api/item?id=1</a>
        </li>
      </ul>
    </div>
  );
}
