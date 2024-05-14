export default function Create() {
  return (
    <div>
      <h1>Create Product</h1>
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Price
          <input type="number" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}