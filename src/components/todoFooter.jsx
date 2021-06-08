import FooterLink from "./filterlink";

const todoFooter = ({ activeFilter, filterTodo }) => {
  /* console.log(filterTodo); */
  return (
    <div className="footerContainer">
      <div className="footer">
        <FooterLink
          activeFilter={activeFilter}
          onClickFilter={filterTodo}
          actionType="ALL"
        >
          {" "}
          ALL{" "}
        </FooterLink>
      </div>
      <div className="footer">
        <FooterLink
          activeFilter={activeFilter}
          onClickFilter={filterTodo}
          actionType="TODO"
        >
          {" "}
          TO DO{" "}
        </FooterLink>
      </div>
      <div className="footer">
        <FooterLink
          activeFilter={activeFilter}
          onClickFilter={filterTodo}
          actionType="COMPLETED"
        >
          {" "}
          COMPLETED
        </FooterLink>
      </div>
    </div>
  );
};

export default todoFooter;
