import React from "react";
import { Link, useMatch } from "react-router-dom";

function BreadCrumbs() {
  const location = window.location.pathname;
  const path = location.split("/").splice(1);
  let breadCrumbsList = [{ name: "Home", link: "/" }];
  for (let i = 0; i < path.length; i++) {
    let name = path[i];
    let link = "/" + path.slice(0, i + 1).join("/");
    breadCrumbsList.push({ name, link });
  }

  const breadcrumbs = breadCrumbsList.map((item, index) => {
    const match = useMatch(item.link);
    return (
      <div
        key={index}
        className={
          match
            ? "mr-2 border-b font-semibold text-white  after:ml-2 after:content-['>'] after:last:content-none"
            : "mr-2 text-white after:ml-2 after:content-['>'] after:last:content-none"
        }
      >
        <Link className="capitalize" to={item.link}>
          {item.name}
        </Link>
      </div>
    );
  });
  return <div className="flex">{breadcrumbs}</div>;
}

export default BreadCrumbs;
