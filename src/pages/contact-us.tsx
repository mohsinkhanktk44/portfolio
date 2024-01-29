import Input from "@/Input";
import Usebtn from "@/components/Usebtn";
import { url } from "inspector";
import React, { useState } from "react";
import { BsCheckLg } from "react-icons/Bs";

const ContactUs = () => {
  const iconList = [
    {
      icon: <BsCheckLg className="h-6 w-6 text-[#00fbf4]" />,
      name: "We are committed to providing quality IT Services",
    },
    {
      icon: <BsCheckLg className="h-6 w-6 text-[#00fbf4]" />,
      name: "We are committed to providing quality IT Services",
    },
    {
      icon: <BsCheckLg className="h-6 w-6 text-[#00fbf4]" />,
      name: "We are committed to providing quality IT Services",
    },
    {
      icon: <BsCheckLg className="h-6 w-6 text-[#00fbf4]" />,
      name: "We are committed to providing quality IT Services",
    },
    {
      icon: <BsCheckLg className="h-6 w-6 text-[#00fbf4]" />,
      name: "We are committed to providing quality IT Services",
    },
  ];

  const initialState = {
    name: "",
    email: "",
    Message: "",
  };

  const [inputValue, setInputValue] = useState(initialState);

  const onchangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center w-full bg-slate-800">
      <div className="flex justify-between  w-11/12">
        <div className="flex flex-col w-1/2 ">
          <div className="flex justify-center w-11/12 flex-col gap-6">
            <p className="text-white text-[40px] font-bold">
              We Are <span className="text-[#00fbf4]">Perfect Solutions</span>{" "}
              For
              <span className="text-[#00fbf4]"> Your Business</span>
            </p>
            <p className="text-[#abb8c3]">
              Donec vitae lacus vel ligula hendrerit viverra non non orci.
              Quisque sed tincidunt sapien. Maecenas gravida at velit feugiat
              vulputate.
            </p>
            <div className="flex flex-col gap-2">
              {iconList.map((item, index) => {
                return (
                  <div className="flex gap-2">
                    <p>{item.icon}</p>
                    <p className="text-white font-semibold">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col gap-3 items-center w-1/2">
          <div className="flex justify-between items-center w-full gap-2">
            <div className="flex justify-center items-center w-1/2">
              <Input
                name="name"
                type="text"
                placeholder="Name"
                className="bg-gray-100 w-full outline-none px-1"
                handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onchangehandler(event)
                }
              />
            </div>
            <div className="flex justify-center items-center w-1/2">
              <Input
                name="email"
                type="email"
                emailInput="email"
                placeholder="email"
                className="bg-gray-100 w-full outline-none py-3 px-3"
                handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onchangehandler(event)
                }
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center w-full">
              <Input
                name="message"
                type="textarea"
                placeholder="Message"
                className="bg-transparent w-full outline-none hover:bg-[#00fbf4] opacity-10 ease-in-out duration-500 px-1 h-40 border-2 hover:border-[#00fbf4] border-white"
                handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onchangehandler(event)
                }
              />
            </div>
          </div>
          <div className="flex justify-end w-full ">
            <Usebtn
              clasName={"hover:bg-black text-xl hover:text-white w-[300px]"}
              text={"Submit Request"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
