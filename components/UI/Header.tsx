import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <Link href="/">
          <a>
            <img src="/icons/logo.svg" alt="Logo" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
