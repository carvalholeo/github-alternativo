import {useState} from 'react';

function Profile() {
  const [profile, setProfile] = useState({});
  const [showProfile, setShowProfile] = useState(false);

  return (
    <main>
      {!showProfile &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showProfile &&
        (
          <>
            <h1>Meu perfil</h1>
            <p>Meus dados aqui</p>
          </>
        )
      }
    </main>
  )
}

export default Profile;
