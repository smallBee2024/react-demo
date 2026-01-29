import List from './list'


const ChildrenDemoPage = () => {
  return (
    <div>
      <h1>Children Demo Page</h1>

      <List 
        renderItem={(item: string) => <span style={{ color: 'blue' }}>{item}</span>}
      />
    </div>
  );
}

export default ChildrenDemoPage;