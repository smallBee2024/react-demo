
import { Button } from 'antd';

type ErwaProps = {
  onSendData: (data: string) => void;
  count?: string;
};

const Erwa = ({ onSendData }: ErwaProps) => {
  const handleClick = () => {
    onSendData(`Data from Erwa at ${new Date().toLocaleTimeString()}`);
  };

  return <div>
    <p>Erwa Component</p>
    <Button onClick={handleClick}>Send to Parent</Button>
  </div>;
}

export default Erwa;