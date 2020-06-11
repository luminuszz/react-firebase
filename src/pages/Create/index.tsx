import React, { useCallback, useState } from 'react';

import { UsersData, useCreateUser } from '../../hooks/CreateUser';

import './Style.css';

const Create: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UsersData[]>([]);

  const { create, getUSers } = useCreateUser();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      setIsLoading(true);
      try {
        e.preventDefault();
        await create({ email, password, name });

        setIsLoading(false);

        console.log('Sucesso');

        const data = await getUSers();

        data.forEach(childs => {
          const user: UsersData = {
            id: childs.key,
            name: childs.val().name,
            email: childs.val().email,
            password: childs.val().password,
          };
        });
        console.log(users);
      } catch (err) {
        console.log(err);

        setIsLoading(true);
      }
    },
    [create, email, password, name],
  );
  return (
    <div className="form">
      <h1>Criar usuário</h1>
      <input onChange={e => setName(e.target.value)} type="email" />
      <input onChange={e => setEmail(e.target.value)} type="text" />
      <input onChange={e => setPassword(e.target.value)} type="password" />
      <button onClick={e => handleSubmit(e)} type="submit">
        {isLoading ? 'Carregando...' : 'Criar'}
      </button>
    </div>
  );
};

export default Create;
