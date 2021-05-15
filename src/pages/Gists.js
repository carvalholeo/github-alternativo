import {useState, useEffect} from 'react';

function Gists() {
  const [gists, setGists] = useState([]);
  const [showGists, setShowGists] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const api = async () => {
      await fetch(`https://api.github.com/gists`, {
        headers: {
          'Authorization': `token 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`,
        }
      })
        .then(response => response.json())
        .then(response => {
          setGists(response);
          setShowLoading(false);
          setShowGists(true);
        })
        .catch(error => window.alert('Não deu pra encontrar os gists agora :\'('));
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
      {showGists &&
        (
          <>
            <h1>Gists</h1>
            <p>Gists registrados no GitHub. Só aparecem os Gists públicos!</p>
            <div>
              {gists.map(gist =>
                (
                  <div key={gist.id} className="border px-2 pt-1">
                    <h5><a href={gist.html_url} rel="noreferrer noopener" target="_blank"><span>{gist.files[Object.keys(gist.files)[0]].filename}</span></a></h5>
                    <p>Criação: {new Date(gist.created_at).toString("pt-br")}</p>
                    <p>Última atualização: {new Date(gist.updated_at).toString("pt-br")}</p>
                  </div>
                )
              )

              }
            </div>
          </>
        )
      }
    </main>
  )
}

export default Gists;
