import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Details() {
  const { user = 'carvalholeo' } = useParams();
  const [showInfos, setShowInfos] = useState(false);
  const [repos, setRepos] = useState([]);

  return (
    <main>
      <h1>Perfil de <em>{user}</em></h1>
      {!showInfos &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showInfos &&
        (
          <article className="row">
            <section className="card-body col-md-2 col-12">
              <img
                src="https://avatars.githubusercontent.com/u/19316339?v=4"
                alt="Usuário"
                className="card-img-top"
                style={{ maxWidth: "200px" }}
              />
              <h5 className="card-title">Perfil</h5>
              <p className="cart-text">Nome do usuário</p>
              <p className="cart-text">Bio</p>
              <p className="cart-text"><i className="me-2 bi bi-twitter"></i>Usuário Twitter</p>
              <p className="cart-text"><i className="me-2 bi bi-geo-fill"></i>Localização</p>
              <p className="cart-text"><i className="me-2 bi bi-globe2"></i><a href="http://site.com" target="_blank" rel="noopener noreferrer">Site do usuário</a></p>
              <p className="cart-text"><i className="me-2 bi bi-building"></i>Local de trabalho</p>
            </section>
            <div className="row col-md-9 col-12 gx-md-1 card-body">
              <h6 className="card-title mb-0 pb-0">Repositórios</h6>
              <small className="mt-0 pt-0">Somente repositórios públicos</small>
              <section className="card-group col-12">
                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="m-2">
                  <article className="card p-3">
                    <h5 className="card-title">Nome do repositório</h5>
                    <p className="card-text">Descrição do Repo</p>
                    <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>Cobol</span>
                    <details>
                      <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>30 issues</span>
                      <span className="d-inline-block me-2"><i className="bi bi-union me-2"></i>16 Pull Requests</span>
                      <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>3 forks</span>
                      <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>0 observadores</span>
                    </details>
                  </article>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="m-2">
                  <article className="card p-3">
                    <h5 className="card-title">Nome do repositório</h5>
                    <p className="card-text">Descrição do Repo</p>
                    <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>Cobol</span>
                    <details>
                      <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>30 issues</span>
                      <span className="d-inline-block me-2"><i className="bi bi-union me-2"></i>16 Pull Requests</span>
                      <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>3 forks</span>
                      <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>0 observadores</span>
                    </details>
                  </article>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="m-2">
                  <article className="card p-3">
                    <h5 className="card-title">Nome do repositório</h5>
                    <p className="card-text">Descrição do Repo</p>
                    <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>Cobol</span>
                    <details>
                      <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>30 issues</span>
                      <span className="d-inline-block me-2"><i className="bi bi-union me-2"></i>16 Pull Requests</span>
                      <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>3 forks</span>
                      <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>0 observadores</span>
                    </details>
                  </article>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="m-2">
                  <article className="card p-3">
                    <h5 className="card-title">Nome do repositório</h5>
                    <p className="card-text">Descrição do Repo</p>
                    <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>Cobol</span>
                    <details>
                      <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>30 issues</span>
                      <span className="d-inline-block me-2"><i className="bi bi-union me-2"></i>16 Pull Requests</span>
                      <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>3 forks</span>
                      <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>0 observadores</span>
                    </details>
                  </article>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="m-2">
                  <article className="card p-3">
                    <h5 className="card-title">Nome do repositório</h5>
                    <p className="card-text">Descrição do Repo</p>
                    <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>Cobol</span>
                    <details>
                      <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>30 issues</span>
                      <span className="d-inline-block me-2"><i className="bi bi-union me-2"></i>16 Pull Requests</span>
                      <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>3 forks</span>
                      <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>0 observadores</span>
                    </details>
                  </article>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="m-2">
                  <article className="card p-3">
                    <h5 className="card-title">Nome do repositório</h5>
                    <p className="card-text">Descrição do Repo</p>
                    <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>Cobol</span>
                    <details>
                      <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>30 issues</span>
                      <span className="d-inline-block me-2"><i className="bi bi-union me-2"></i>16 Pull Requests</span>
                      <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>3 forks</span>
                      <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>0 observadores</span>
                    </details>
                  </article>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="m-2">
                  <article className="card p-3">
                    <h5 className="card-title">Nome do repositório</h5>
                    <p className="card-text">Descrição do Repo</p>
                    <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>Cobol</span>
                    <details>
                      <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>30 issues</span>
                      <span className="d-inline-block me-2"><i className="bi bi-union me-2"></i>16 Pull Requests</span>
                      <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>3 forks</span>
                      <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>0 observadores</span>
                    </details>
                  </article>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="m-2">
                  <article className="card p-3">
                    <h5 className="card-title">Nome do repositório</h5>
                    <p className="card-text">Descrição do Repo</p>
                    <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>Cobol</span>
                    <details>
                      <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>30 issues</span>
                      <span className="d-inline-block me-2"><i className="bi bi-union me-2"></i>16 Pull Requests</span>
                      <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>3 forks</span>
                      <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>0 observadores</span>
                    </details>
                  </article>
                </a>
              </section>
            </div>
          </article>
        )
      }
    </main>
  )
}

export default Details;
