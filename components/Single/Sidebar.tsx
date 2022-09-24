import Link from "next/link";
import { useState } from "react";

const Sidebar = (props: any) => {
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
