import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Details() {
  const { user = 'carvalholeo' } = useParams();
  const [showInfos, setShowInfos] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
      fetch(`https://api.github.com/users/${user}`, {
        headers: {
          'Authorization': `token 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`,
        }
      })
        .then(response => response.json())
        .then(response => setUserInfo(response))
        .catch(error => window.alert('Não foi possível achar esse usuário agora :\'('));

      fetch(`https://api.github.com/users/${user}/repos`, {
          headers: {
            'Authorization': `token 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`,
          }
        })
        .then(response => response.json())
        .then(response => setRepos(response))
        .catch(error => window.alert('Mas que loucura, né? Não deu pra pegar os repositórios desse usuário.'));
  }, [user]);

  useEffect(() => {
    setShowLoading(false);
    setShowInfos(true);
  }, [userInfo]);

  return (
    <main>
      <h1>Perfil de <em>{user}</em></h1>
      {showLoading &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showInfos &&
        (
          <article className="row">
            <section className="card-body col-md-2 col-12">
              <img
                src={userInfo.avatar_url}
                alt={`Foto de perfil de ${userInfo.name}`}
                className="card-img-top"
                style={{ maxWidth: "200px" }}
              />
              <h5 className="card-title">Perfil</h5>
              <p className="cart-text">{userInfo.name}</p>
              <p className="cart-text">{userInfo.bio}</p>
              <p className="cart-text"><i className="me-2 bi bi-twitter"></i><a href={`https://twitter.com/${userInfo.twitter_username}`} target="_blank" rel="noopener noreferrer">@{userInfo.twitter_username}</a></p>
              <p className="cart-text"><i className="me-2 bi bi-geo-fill"></i>{userInfo.location}</p>
              <p className="cart-text"><i className="me-2 bi bi-globe2"></i><a href={userInfo.blog} target="_blank" rel="noopener noreferrer">{userInfo.blog}</a></p>
              <p className="cart-text"><i className="me-2 bi bi-building"></i>{userInfo.company}</p>
            </section>
            <div className="row col-md-9 col-12 gx-md-1 card-body">
              <h6 className="card-title mb-0 pb-0">Repositórios</h6>
              <small className="mt-0 pt-0">Somente repositórios públicos</small>
              <section className="card-group col-12">
                {
                  repos.map(repo =>
                    (
                      <a href={repo.html_url} key={repo.id} target="_blank" rel="noreferrer noopener" className="m-2 w-25">
                        <article className="card p-3">
                          <h5 className="card-title">{repo.name}</h5>
                          <p className="card-text">{repo.description}</p>
                          <span className="d-inline-block"><i className="bi bi-terminal-fill me-2"></i>{repo.language}</span>
                          <details>
                            <span className="d-inline-block me-2 ms-1"><i className="bi bi-exclamation-triangle me-2"></i>{repo.open_issues_count} issues</span>
                            <span className="d-inline-block me-2"><i className="bi bi-alt me-2"></i>{repo.forks_count} forks</span>
                            <span className="d-inline-block me-2"><i className="bi bi-eye-fill me-2"></i>{repo.watchers} observadores</span>
                          </details>
                        </article>
                      </a>
                    )
                  )
                }
              </section>
            </div>
          </article>
        )
      }
    </main>
  );
}

export default Details;
