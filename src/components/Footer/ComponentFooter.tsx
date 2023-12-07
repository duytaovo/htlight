import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

interface Props {
  header?: string;
  tabContent?: any;
}
const ComponentFooter = ({ header, tabContent }: Props) => {
  return (
    <div className="text-white/70">
      <div>
        <div className="">
          <div className="mb-3">
            <h2
              style={{ textAlign: "left" }}
              className="font-bold text-2xl text-black"
            >
              {header}
            </h2>
          </div>
          <div className="">
            <div className="">
              {tabContent.map((content: any, i: number) => (
                <div key={i} className="">
                  <div className="">
                    <div className="">
                      <div className="">
                        <Link to={content.link}>
                          <div className=" hover:text-mainColor hover:translate-x-2 duration-300 my-2 cursor-pointer">
                            {content.content}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentFooter;

