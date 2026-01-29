import List from './list'


const ChildrenDemoPage = () => {
  return (
    <div>
      <h1>Children Demo Page</h1>

      <List>
        {(item: string) => <span style={{ color: 'blue' }}>{item}</span>}
      </List>
    </div>
  );
}

export default ChildrenDemoPage;