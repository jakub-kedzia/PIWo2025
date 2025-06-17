import "../style.css";

function AddNewModal() {
  return (
    <>
      <section class="add-new">
        <h1>Dodaj nową pozycję:</h1>
        <input class="search-bar add-new-bar" placeholder="Tytuł..." />
        <input class="search-bar add-new-bar" placeholder="Autor..." />
        <input class="search-bar add-new-bar" placeholder="Liczba stron..." />
        <input class="search-bar add-new-bar" placeholder="Okładka" />
        <input class="search-bar add-new-bar" placeholder="Cena..." />
        <button class="button">Dodaj</button>
      </section>
    </>
  );
}

export default AddNewModal;
