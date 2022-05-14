import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import logoImg from '../../assets/images/logo.svg';
import './style.scss';
import { useAuthContext } from '../../hooks/useAuthContext';

export function NewRoom() {
  const { signOut } = useAuthContext();
  const navigate = useNavigate();

  function signOutHandler() {
    signOut(() => navigate('/'));
  }

  return (
    <div className="main-content-new-room">
      <div className="header-new-room">
        <Button onClick={signOutHandler}>SignOut</Button>
      </div>
      <div className="body-new-room">
        <img src={logoImg} alt="Letmeask" />
        <h2>Criar uma nova sala</h2>
        <form>
          <input type="text" placeholder="Nome da sala" />
          <Button type="submit">Criar sala</Button>
        </form>
        <p>
          Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
        </p>
      </div>
      <div className="footer-new-room"></div>
    </div>
  );
}
