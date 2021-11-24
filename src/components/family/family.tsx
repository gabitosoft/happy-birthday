import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Family = () => {
  return (
    <div>
      <h2>Por favor, ingrese el nombre de su familia.</h2>
      <Input 
        autoFocus 
        style={{ width: 300 }}
        size="large" 
        placeholder="Ejemplo: Delgado Rocha" 
        prefix={<UserOutlined 
      />} />
    </div>
  );
}

export default Family;