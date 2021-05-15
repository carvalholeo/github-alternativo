import { useState, useEffect } from 'react';

function UserSearch() {
  const [userSearch, setUserSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false);
    setShowResults(true);
  }, [users]);

  function changeUser(event) {
    setUserSearch(event.target.value);

    if (event.target.value === '' || userSearch === '') {
      setShowResults(false)
    }
  }

  function handleFormSubmit(event) {
    setShowLoading(true);
    event.preventDefault();

    fetch(`https://api.github.com/search/users?q=${userSearch}`, {
      headers: {
        'Authorization': 'token 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'
      }
    })
      .then(response => response.json())
      .then(response => setUsers(response.items))
      .catch(() => alert("Erro ao fazer uma pesquisa"));
  }

  function clearForm(event) {
    event.preventDefault();
    setUsers([]);
    setShowResults(false);
    setUserSearch('');
  }


  return (
    <main>
      <h1>Pesquisa de usuário</h1>
      <small>Procure usuários, usando a pesquisa nativa do GitHub.</small>

      <form
        onSubmit={e => handleFormSubmit(e)}
        onReset={e => clearForm(e)}
        className="mb-3 pb-3">
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
        <button className="btn btn-success me-2">Pesquisar</button>
        <button type="reset" className="btn btn-danger">Limpar</button>
      </form>
      {showLoading &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      <div className="row">
        {showResults && users &&
          users.map(user =>
            (
              <section className="card-group col-12 col-lg-3 col-md-4 col-sm-6" key={user.id}>
                <article className="card-body">
                  <a href={`/profile/${user.login}`} className="" style={{ maxWidth: "200px" }}>
                    <img src={user.avatar_url} alt={`Foto de perfil de ${user.login}`} className="card-img-top" />
                    <section className="card-body">
                      <h5 className="card-title">{user.login}</h5>
                    </section>
                  </a>
                </article>
              </section>
            )
          )
        }
      </div>
    </main>
  )
}

export default UserSearch;
