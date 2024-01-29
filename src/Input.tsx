import React, { HTMLProps, useState } from "react";

type Props = {
  required?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  userInput?: string;
  emailInput?: string;
  handleChange?: Function;
  disabled?: boolean;
  value?: string;
  image?: string;
  inputValue?: any;
  setInputValue?: Function;
  setNewDate?: Function;
  newDate?: string;
} & HTMLProps<HTMLInputElement>;
const Input = (props: Props) => {
  const [toggle, setToggle] = useState(true);
  const {
    placeholder,
    className,
    type,
    image,
    inputValue,
    setInputValue,
    required,
    userInput,
    emailInput,
    handleChange,
    name,
    disabled,
    value,
    setNewDate,
    newDate,
    ...rest
  } = props;
  const togglePasswordVisibility = () => {
    setToggle(!toggle);
  };
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTime, setSelectedTime] = useState<string>();

  const [selectedFileName, setSelectedFileName] = useState("");

  if (type === "text") {
    return (
      <div
        className={`${className} border justify-between shadow-md items-center py-3 md:py-4 md:px-4 px-2.5 flex w-full rounded-md border-gray-400`}
      >
        {userInput === "user" && (
          <div className="cursor-pointer relative w-6 h-6">
            <img
              src="/Tracker/User.webp"
              alt="userImage"
              width={30}
              height={30}
            />
          </div>
        )}
        {emailInput === "email" && (
          <div className="cursor-pointer relative w-5 h-5">
            <img
              src="/Tracker/email.webp"
              alt="emailImage"
              width={30}
              height={30}
            />
          </div>
        )}
        {handleChange && (
          <input
            placeholder={placeholder}
            data-cy="titleFeild"
            type={"text"}
            name={name}
            value={value}
            disabled={disabled}
            onChange={(event) => handleChange(event)}
            required={required}
            className={`${className} w-[97%] text-base outline-none pl-3 sm:text-lg text-gray-500`}
          />
        )}
      </div>
    );
  }

  if (type === "password") {
    return (
      <div className="border gap-3 shadow-md justify-between items-center py-2.5 md:py-4 md:px-5 px-2.5 flex w-full rounded-md border-gray-400">
        <div className="relative w-4 h-4">
          <img
            src="/Tracker/lock.webp"
            alt="passwordLockImage"
            className="cursor-pointer"
            width={30}
            height={30}
          />
        </div>
        {handleChange && (
          <input
            data-cy="password"
            type={toggle ? "password" : "text"}
            name={name}
            required={required}
            value={value}
            placeholder={"Password." || placeholder}
            onChange={(event) => {
              handleChange(event);
            }}
            className={`${className} w-[97%] text-base outline-none sm:text-lg text-gray-500`}
          />
        )}
        <div className="relative w-5 h-5">
          <img
            sizes="(max-width: 768px) 100vw"
            src="/Tracker/eye.webp"
            alt="seePasswordImage"
            className="cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
      </div>
    );
  }
  if (type === "date") {
    return (
      <div className="">
        <input
          required
          type={"date"}
          name={name}
          id="myDate"
          value={value}
          onFocus={(event) => (event.target.type = "date")}
          placeholder={
            newDate && newDate?.length >= 1 && newDate !== undefined
              ? newDate
              : placeholder
          }
          onChange={(event) => {
            {
              if (handleChange) {
                handleChange(event);
              }
            }
            if (setNewDate) {
              setNewDate(event.target.value);
            }
          }}
          className={`${className} !text-gray-500 text-base outline-none sm:text-lg !bg-[#E9E9E9]  border gap-3 justify-between items-center py-2.5 md:py-4 md:px-5 px-[9px]  flex w-full rounded-md border-gray-400`}
        />
      </div>
    );
  }
  if (type === "time") {
    return (
      <div className="">
        <input
          required
          type={type}
          name={name}
          id="myDate"
          value={selectedTime}
          placeholder={newDate && newDate?.length >= 1 ? newDate : placeholder}
          onChange={(event) => {
            {
              setSelectedTime(event.target.value);
              if (handleChange) {
                handleChange(event);
              }
            }
            if (setNewDate) {
              setNewDate(event.target.value);
            }
          }}
          className={`${className} !text-gray-500  text-base outline-none sm:text-lg !bg-[#E9E9E9] border gap-3 justify-between items-center py-2.5 md:py-4 md:px-5 px-[9px] flex w-full rounded-md border-gray-400`}
        />
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div className=" gap-3 md:gap-0 md:justify-between items-center py-2.5 md:py-3 md:px-4 px-[9px] flex w-full rounded-md">
        <textarea
          name={name}
          data-cy="userFeild"
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={(event) => {
            if (handleChange) {
              handleChange(event);
            }
          }}
          className={`${className} w-full text-base outline-none sm:text-lg text-gray-500`}
        ></textarea>
      </div>
    );
  }

  return (
    <div className="border justify-between items-center py-2.5 md:py-4 md:px-5 px-[9px] flex w-full rounded-md border-gray-400">
      {handleChange && (
        <input
          data-cy="text-field"
          type="text"
          required={required}
          name={name}
          placeholder={placeholder}
          onChange={(event) => handleChange(event)}
          className={`${className} w-[95%] text-base outline-none sm:text-lg text-gray-500`}
        />
      )}
    </div>
  );
};
export default Input;
