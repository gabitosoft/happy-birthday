import { Checkbox  } from 'antd';
import './gift.css';

const Gift = () => {
  const onChange = (data: any) => {
    console.log('DATAAAA', data);
  }

  return (
    <div>
      <h2>Sugerencia de regalos.</h2>
      <div className="gift-checkbox-items">
        <Checkbox onChange={onChange} value="socks">
          <strong>Medias cortas deportivas</strong> (3 x 20 Bs. )
        </Checkbox>
        <Checkbox onChange={onChange} value="ball">
          <strong>Bolsa pelotas fronton</strong> (12 x 110 Bs.)
        </Checkbox>
        <Checkbox onChange={onChange} value="memory">
          <strong>Memoria Micro SD 16 GB</strong> (1 x 60 Bs.)
        </Checkbox>
      </div>
    </div>
  );
}

export default Gift;
