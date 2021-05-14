import {useState} from 'react';

function Gists() {
  const [gists, setGists] = useState({});
  const [showGists, setShowGists] = useState(false);

  return (
    <main>
      {!showGists &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showGists &&
        (
          <>
            <h1>Gists</h1>
            <p>Gists registrados no GitHub.</p>
          </>
        )
      }
    </main>
  )
}

export default Gists;
