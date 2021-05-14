import {useState} from 'react';

function Emails() {
  const [emails, setEmails] = useState({});
  const [showEmails, setShowEmails] = useState(false);

  return (
    <main>
      {!showEmails &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showEmails &&
        (
          <>
            <h1>Lista de e-mails</h1>
            <p>Criar uma lista de e-mails</p>
          </>
        )
      }
    </main>
  )
}

export default Emails;
