
const List = ({ renderItem }: any) => {

  const items = ['render Item 1', 'render Item 2', 'render Item 3'];
  return (
    <ul>
      {items.map((item, index) =>
        <li key={index}>
          {typeof renderItem === 'function' ? renderItem(item) : renderItem}
        </li>
      )}
    </ul>
  );
};

export default List;