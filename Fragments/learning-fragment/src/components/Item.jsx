const Item = (props) => {
  let { Items } = props;
  return (
     <li className="list-group-item">{props.foodItem}
        </li>

  );
};

export default Item;