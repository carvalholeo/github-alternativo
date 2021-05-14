import {useState} from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);


  return (
    <main>
      {!showNotifications &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showNotifications &&
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

export default Notifications;
