import { useRef, useState } from "react";
import register from "./image.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../CSS/Registration.css";

const RegistrationForm = () => {
  const formRef = useRef(null);
  const [isVisible, setisVisible] = useState();
  const [cpassVisible, setcpassVisible] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let form = new FormData(formRef.current);

    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }
    const { firstName, lastName, telephone, email, gender, password, cpassword } =
      formData;

    const namePattern = /^[A-Za-z]+$/;
    const contactPattern = /^[0-9]+$/;
    const emailPattern = /^[a-zA-Z0-9._]+@(gmail\.com|yahoo\.com)$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,12}$/

    if (firstName.length === 0 || !namePattern.test(firstName)) {
      toast("First Name is required and can only contain letters.");
      return;
    }

    if (lastName.length === 0 || !namePattern.test(lastName)) {
      toast("Last Name is required and can only contain letters.");
      return;
    }

    if (telephone.length !== 10 || !contactPattern.test(telephone)) {
      toast("Contact number must have exactly 10 digits and contain only numbers.");
      return;
    }

    if (email.length===0 || !emailPattern.test(email)) {
      toast("Email is required and must be in the  correact format (only .com domains are allowed).");
      return;
    }

    if (!gender) {
      toast("Gender is required");
      return;
    }

    if (password.length===0||!passwordPattern.test(password)) {
      toast("Password must be 8-12 characters long, contain uppercase and lowercase letters, a number, and a special character.");
      return;
    }

    if(!cpassword){
      toast("Confirm password is required")
      return;
    }

    if (password !== cpassword) {
      toast("Passwords do not match");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    toast("Submitted Successfully");
    navigate("/thankyou");
  };
  return (
    <>
      <div className="p-10">
        <div className="container border-2 flex">
          <div className="image-section">
            <img src={register} alt="A man sitting in front of computer" />
          </div>
          <div className="form-section bg-slate-200 p-6">
            <form ref={formRef}>
              <h1 className="text-2xl font-bold text-purple-800">
                Registration Form
              </h1>
              <div className="name flex gap-10 items-center justify-center  mt-8">
                <div className="firstName flex flex-col text-left">
                  <label htmlFor="firstName" className="text-purple-800">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    pattern="^[A-Za-z ]+$"
                    title="First name should only contain letters and spaces"
                    required
                  />
                </div>
                <div className="lastName flex flex-col text-left">
                  <label htmlFor="lastName" className="text-purple-800">
                    Last Name*
                  </label>
                  <input type="text" name="lastName" id="lastName" required />
                </div>
              </div>
              <div className="mobile flex flex-col text-left">
                <label htmlFor="telephone" className="text-purple-800">
                  Contact no.*
                </label>
                <input
                  type="telephone"
                  name="telephone"
                  id="telephone"
                  required
                  maxLength={10}
                />
              </div>
              <div className="email flex flex-col text-left">
                <label htmlFor="email" className="text-purple-800">
                  Email*
                </label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="gender flex items-center justify-evenly text-left">
                <div>
                  <input type="radio" name="gender" value="male" />
                  <label htmlFor="male" className="text-purple-800">
                    Male
                  </label>
                </div>
                <div>
                  <input type="radio" name="gender" value="female" />
                  <label htmlFor="female" className="text-purple-800">
                    Female
                  </label>
                </div>
                <div>
                  <input type="radio" name="gender" value="prefernot" />
                  <label htmlFor="prefernot" className="text-purple-800">
                    Prefer not to say
                  </label>
                </div>
              </div>
              <div className="passw flex gap-10 items-center justify-center  mt-8">
                <div className="password flex flex-col text-left">
                  <label htmlFor="password" className="text-purple-800">
                    Password*
                  </label>
                  <div className="flex">
                    <input
                      type={isVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      maxLength={12}
                      required
                    />
                    {isVisible ? (
                      <IoEyeOutline
                        style={{
                          marginLeft: "-2rem",
                          marginTop: "1rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setisVisible(!isVisible)}
                      />
                    ) : (
                      <IoEyeOffOutline
                        style={{
                          marginLeft: "-2rem",
                          marginTop: "1rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setisVisible(!isVisible)}
                      />
                    )}
                  </div>
                </div>
                <div className="cpassword flex flex-col text-left">
                  <label htmlFor="cpassword" className="text-purple-800">
                    Confirm Password*
                  </label>
                  <div className="flex">
                    <input
                      type={cpassVisible ? "text" : "password"}
                      name="cpassword"
                      id="cpassword"
                      maxLength={12}
                      required
                    />
                    {cpassVisible ? (
                      <IoEyeOutline
                        style={{
                          marginLeft: "-2rem",
                          marginTop: "1rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setcpassVisible(!cpassVisible)}
                      />
                    ) : (
                      <IoEyeOffOutline
                        style={{
                          marginLeft: "-2rem",
                          marginTop: "1rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setcpassVisible(!cpassVisible)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <button
                className="submitbtn text-purple-800 font-bold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
            <p className="text-purple-800 mt-3">
              Already a user?{" "}
              <Link to="/" className="font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
