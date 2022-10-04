import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  console.log({
    username,
    email,
    password,
    confirmPassword,
  });

  const handleSubmit = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (!username && !email && !password && !confirmPassword ? true : false) {
      alert("Harap Masukkan Inputan");
    } else if (!email && !password && !confirmPassword ? true : false) {
      alert("Harap Masukkan Inputan Yang Kosong");
    } else if (!password && !confirmPassword ? true : false) {
      alert("Harap Masukkan Inputan Yang Kosong");
    } else if (!confirmPassword ? true : false) {
      alert("Harap Masukkan Inputan Yang Kosong");
    } else {
      console.log("Submit");
      alert("Anda Berhasil Mendaftar");
    }
  };

  return (
    <div className="background">
      <div className="registerBox">
        <h2>Register</h2>
        <form>
          <div class="registerData">
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label>Full Name</label>
          </div>
          <div class="registerData">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Email</label>
          </div>
          <div class="registerData">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>
          <div class="registerData">
            <input
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <label>Confirm Password</label>
          </div>
          <button
            type="button"
            className="button"
            // disabled={!confirmPassword && !email && !password && !username}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

