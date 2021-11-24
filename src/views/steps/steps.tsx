import React from 'react';
import { Steps, Button, message } from 'antd';
import { TeamOutlined, CalendarOutlined, GiftOutlined, SmileOutlined } from '@ant-design/icons';
import Family from './../../components/family/family';
import Schedule from '../../components/schedule/schedule';
import Gift from '../../components/gift/gift';
import Thanks from '../../components/thanks/thanks';
import './steps.css';

const { Step } = Steps;
const steps = [
  {
    title: 'Familia',
    content: <Family/>,
    icon: <TeamOutlined/>
  },
  {
    title: 'Horario',
    content: <Schedule/>,
    icon: <CalendarOutlined/>
  },
  {
    title: 'Regalos',
    content: <Gift/>,
    icon: <GiftOutlined/>
  },
  {
    title: 'Gracias',
    content: <Thanks/>,
    icon: <SmileOutlined/>
  }
];

const StepsView = (props: any) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="steps-container">
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} icon={item.icon}/>
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            ATRAS
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            SIGUIENTE
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Cambios guardados!')}>
            GUARDAR
          </Button>
        )}
      </div>
    </div>
  );
}

export default StepsView;