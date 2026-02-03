
interface SanwaProps {
  name: string;
  count?: string;
}

const Sanwa = ({ name, count }: SanwaProps) => {
  return <div>Sanwa Component, name: {name}, count: {count}</div>;
};

export default Sanwa;