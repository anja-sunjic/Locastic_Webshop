//check page route, if home full height, if workshop page height same as content
const Sidebar = (props: any) => {
  return (
    <div className={`sidebar ${props.page}`}>
      <div className="inner"></div>
    </div>
  );
};

export default Sidebar;
