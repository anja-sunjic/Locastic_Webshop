import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={`sidebar single`}>
      <Link href="/">
        <a href="" className="back-button">
          <img src="/icons/arrow-back.svg" alt="" />
          <span>Natrag</span>
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
