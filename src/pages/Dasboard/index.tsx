import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useCallback } from 'react';

import Input from '../../components/Input';
import { Container } from './styles';

interface RequestDTO {
  title: string;
  price: string;
  portion: string;
}

const Dasboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<RequestDTO> = useCallback(data => {
    console.log('asda');
    console.log(data);
  }, []);

  return (
    <Container>
      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" type="text" placeholder="Titulo" />
          <Input name="price" type="text" placeholder="Preço" />
          <Input name="portion" type="text" placeholder="Parcelas" />
          <button type="submit">ok</button>
        </Form>
      </div>
    </Container>
  );
};

export default Dasboard;
