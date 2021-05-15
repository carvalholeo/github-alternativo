import { useState, useEffect } from 'react';

function Profile() {
  const [profile, setProfile] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const api = () => {
      fetch(`https://api.github.com/user`, {
        headers: {
          'Authorization': `token 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`,
        }
      })
        .then(response => response.json())
        .then(response => {
          setProfile(response);
          setShowLoading(false);
          setShowProfile(true);
        })
        .catch(error => window.alert('Não foi possível achar esse usuário agora :\'('));
    }

    api();
  }, []);

  return (
    <main>
      {showLoading &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showProfile &&
        (
          <>
            <h1>Meu perfil</h1>
            <h2>{profile.name}</h2>

            <div className="card w-50 mx-auto align-items-center">
              <img src={profile.avatar_url} alt={`Foto de perfil de ${profile.name}`} className="card-img-top" style={{ maxWidth: "200px" }} />
              <div className="align-items-start">
                <p><strong>Descrição</strong></p>
                <small>{profile.bio}</small>
                <p>Usuário: <a href={profile.html_url} target="_blank" rel="noreferrer noopener">{profile.login}</a></p>

                <p className="cart-text"><i className="me-2 bi bi-twitter"></i><a href={`https://twitter.com/${profile.twitter_username}`} target="_blank" rel="noopener noreferrer">@{profile.twitter_username}</a></p>
                <p className="cart-text"><i className="me-2 bi bi-geo-fill"></i>{profile.location}</p>
                <p className="cart-text"><i className="me-2 bi bi-globe2"></i><a href={profile.blog} target="_blank" rel="noopener noreferrer">{profile.blog}</a></p>
                <p className="cart-text"><i className="me-2 bi bi-building"></i>{profile.company}</p>
                <p className="card-text"><strong>Tem autenticação de dois passos?</strong> {profile.two_factor_authentication ? 'Sim' : 'Não'}</p>
                <p className="card-text"><strong>É administrador do GitHub?</strong> {profile.site_admin ? 'Sim' : 'Não'}</p>

                <p className="card-text"><strong>Repos públicos:</strong> {profile.public_repos}</p>
                <p className="card-text"><strong>Repos privados:</strong> {profile.total_private_repos}</p>
                <p className="card-text"><strong>Disponível para contratação?</strong> {profile.hireable ? 'Sim' : 'Não'}</p>
              </div>
            </div>
          </>
        )
      }
    </main>
  );
}

export default Profile;
