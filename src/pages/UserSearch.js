import { useState } from 'react';

function UserSearch() {
  const [userSearch, setUserSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  function changeUser(event) {
    setUserSearch(event.target.value);

    if(event.target.value === '') {
      setShowResults(false)
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    // faz a busca
    setUsers([]);
    setShowResults(true);
  }


  return (
    <main>
      <h1>Pesquisa de usuário</h1>
      <small>Procure usuários, usando a pesquisa nativa do GitHub.</small>

      <form onSubmit={e => handleFormSubmit(e)} className="mb-3 pb-3">
        <fieldset className="mb-3">
          <label htmlFor="user" className="form-label">Usuário</label>
          <input
            type="text"
            placeholder="Filipe Deschamps"
            className="form-control"
            id="user"
            aria-describedby="ajudaPesquisa"
            value={userSearch}
            onChange={e => changeUser(e)}
          />
          <p id="ajudaPesquisa" className="form-text">Você pode pesquisar o nome ou o @ do usuário no GitHub. Em seguida, irá aparecer uma lista com essas informações!</p>
        </fieldset>
        <button type="submit" className="btn btn-success">Pesquisar</button>
      </form>

    {showResults &&
      (
        <section className="card-group">
          <a href="/profile/usuario">
            <article className="card">
              <img src="https://avatars.githubusercontent.com/u/19316339?v=4" alt="Usuário" className="card-img-top" />
              <section className="card-body">
                <h5 className="card-title">Nome do Usuario</h5>
                <p className="cart-text"></p>
              </section>
            </article>
          </a>
          <a href="/profile/usuario">
            <article className="card">
              <img src="https://avatars.githubusercontent.com/u/19316339?v=4" alt="Usuário" className="card-img-top" />
              <section className="card-body">
                <h5 className="card-title">Nome do Usuario</h5>
                <p className="cart-text"></p>
              </section>
            </article>
          </a>
          <a href="/profile/usuario">
            <article className="card">
              <img src="https://avatars.githubusercontent.com/u/19316339?v=4" alt="Usuário" className="card-img-top" />
              <section className="card-body">
                <h5 className="card-title">Nome do Usuario</h5>
                <p className="cart-text"></p>
              </section>
            </article>
          </a>
          <a href="/profile/usuario">
            <article className="card">
              <img src="https://avatars.githubusercontent.com/u/19316339?v=4" alt="Usuário" className="card-img-top" />
              <section className="card-body">
                <h5 className="card-title">Nome do Usuario</h5>
                <p className="cart-text"></p>
              </section>
            </article>
          </a>
          <a href="/profile/usuario">
            <article className="card">
              <img src="https://avatars.githubusercontent.com/u/19316339?v=4" alt="Usuário" className="card-img-top" />
              <section className="card-body">
                <h5 className="card-title">Nome do Usuario</h5>
                <p className="cart-text"></p>
              </section>
            </article>
          </a>
          <a href="/profile/usuario">
            <article className="card">
              <img src="https://avatars.githubusercontent.com/u/19316339?v=4" alt="Usuário" className="card-img-top" />
              <section className="card-body">
                <h5 className="card-title">Nome do Usuario</h5>
                <p className="cart-text"></p>
              </section>
            </article>
          </a>
        </section>
      )
    }
    </main>
  )
}

export default UserSearch;
