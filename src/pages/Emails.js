import { useState, useEffect, Fragment } from 'react';

function Emails() {
  const [emails, setEmails] = useState([]);
  const [visibleEmails, setVisibleEmails] = useState([])
  const [showEmails, setShowEmails] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/user/emails', {
      headers: {
        'Authorization': 'token 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'
      }
    })
      .then(response => response.json())
      .then(response => setEmails(response))
      .catch(error => window.alert('Erro ao pegar e-mails do usuário'));
  }, []);

  useEffect(() => {
    const onlyVisible = emails.filter(email => email.visibility === 'public');
    setVisibleEmails(onlyVisible);
  }, [emails]);

  useEffect(() => {
    setShowLoading(false);
    setShowEmails(true);
  }, [visibleEmails]);

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
      {showEmails &&
        (
          <>
            <h1>Lista de e-mails</h1>
            <p>Lista de e-mails VISÍVEIS do usuário</p>
            <ul>
              {visibleEmails.map(email =>
              (
                <Fragment key={email.email}>
                <li>{email.email}</li>
                  <ul>
                    <li><strong>Está verificado?</strong> {email.verified ? "Sim" : "Não"}</li>
                    <li><strong>É e-mail primário?</strong> {email.primary ? "Sim" : "Não"}</li>
                  </ul>
                </Fragment>
              )
              )

              }
            </ul>
          </>
        )
      }
    </main>
  )
}

export default Emails;
