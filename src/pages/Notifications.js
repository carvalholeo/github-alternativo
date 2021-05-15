import {useState, useEffect, Fragment} from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLoading, setShowLoading] = useState(true);


  useEffect(() => {
    fetch('https://api.github.com/notifications', {
      headers: {
        'Authorization': 'token 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'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setNotifications(response);
        setShowNotifications(true);
        setShowLoading(false);
      })
      .catch(error => window.alert('Não achei as notificações'));
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
      {showNotifications &&
        (
          <>
            <h1>Minhas notificações</h1>
            <ul>
              {
                notifications.map(notification =>
                (
                  <Fragment key={notification.id}>
                  <li>Notificação de {notification.repository.full_name}, criado em {new Date(notification.updated_at).toString("pt-br")}</li>
                    <ul className="pb-3">
                      <li><strong>Última leitura: </strong>{notification.last_read_at ? new Date(notification.updated_at).toString("pt-br") : "nunca"}</li>
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

export default Notifications;
