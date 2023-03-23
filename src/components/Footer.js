import React from "react";

function Footer() {
  return (
    <div className="bg-gray-300 flex sm:absolute left-0 right-0 bottom-0 justify-around">
      <div className="hover:text-blue-800">
        <a
          href="https://www.linkedin.com/in/peterjng/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          linkedin
        </a>
      </div>
      <div className="hover:text-blue-800">
        <a
          href="https://github.com/PetN5026"
          target={"_blank"}
          rel={"noreferrer"}
        >
          github
        </a>
      </div>
    </div>
  );
}

export default Footer;
