const List = ({ children }: any) => {

  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <ul>
      {items.map((item, index) =>
        <li key={index}>
          {typeof children === 'function' ? children(item) : children}
        </li>
      )}
    </ul>
  );
};

export default List;