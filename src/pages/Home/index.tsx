import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

import './style.scss';

export function Home() {
  const navigate = useNavigate();

  async function handleCreateRoom() {
    navigate('/rooms/new');
  }

  return (
    <div className="main-content-home">
      <img src={logoImg} alt="Letmeask" />
      <button className="create-room" onClick={handleCreateRoom}>
        <img src={googleIconImg} alt="Logo do Google"></img>
        Crie sua sala com o Google
      </button>
      <div className="separetor">ou entre em uma sala</div>
      <form>
        <input type="text" placeholder="Digite o código da sala" />
        <Button type="submit">Entrar na sala</Button>
      </form>
    </div>
  );
}
