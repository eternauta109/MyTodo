//uso children cosiche ogni componente filgio cheverrà
//passato passa il suo valore

const filterLink = (props) => {
  let { activeFilter, onClickFilter, actionType, children } = props;
  /* console.log('acttype',actionType); */
  if (activeFilter === actionType) {
    return children;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClickFilter(actionType);
      }}
    >
      {" "}
      {children}{" "}
    </a>
  );
};

export default filterLink;
