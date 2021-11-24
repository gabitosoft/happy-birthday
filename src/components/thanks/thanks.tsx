import { Result } from 'antd';
import './thanks.css';

const Thanks = (props: any) => {

  return (
    <Result className="thanks-container"
      status="success"
      title={`Gracias familia ${props.family} por el apoyo.`}
      subTitle={`Por favor presione "Guardar" para terminar.`}
    />
  );
}

export default Thanks;
