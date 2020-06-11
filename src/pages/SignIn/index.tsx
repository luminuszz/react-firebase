import React, { useState, useCallback } from 'react';

import { useAuth } from '../../hooks/Auth';
// import { Container } from './styles';

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { signIn, user } = useAuth();
  console.log(user);
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      await signIn();
    },
    [signIn, user],
  );

  return (
    <div className="form">
      <h1>Criar usuário</h1>

      <button onClick={e => handleSubmit(e)} type="submit">
        {isLoading ? 'Carregando...' : 'Entrar com o google'}
      </button>
    </div>
  );
};

export default SignIn;
