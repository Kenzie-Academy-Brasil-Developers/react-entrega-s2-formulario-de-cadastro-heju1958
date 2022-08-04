//usar tostyfy
// Crie notificações de sucesso e erro
// Em caso de sucesso, redirecione o usuário para a tela de login

const FeedBack = ({ isLogin }) => {
  return (
    <>{isLogin ? <p>Requisição Completa!</p> : <p>Requisição Falhou!</p>}</>
  );
};

export default FeedBack;
