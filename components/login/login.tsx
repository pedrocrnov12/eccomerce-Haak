import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginUser = () => {
  const [Email, setEmail] = useState('');
  const [PassWord, setPassWord] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch('http://kaabstore.somee.com/WebAPI_Kaab_Haak/Account/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Email, PassWord })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      console.log('Logged in successfully');
      router.push('/');
    } else {
      console.log('Failed to log in');
    }
  };

  return (
    <>
      <section className="section">
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit}>
              <h2 className="titule">Login</h2>
              <div className="inputbox">
                <input
                  type="email"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <input
                  type="password"
                  required
                  value={PassWord}
                  onChange={(e) => setPassWord(e.target.value)}
                />
                <label>Password</label>
              </div>
              <div className="forget">
                <label>
                  <input type="checkbox" />
                  Remember Me <a href="#">Forget Password</a>
                </label>
              </div>
              <button type="submit">Log in</button>
              <div className="register">
                <p>
                  Don't have an account{' '}
                  <Link href="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <style jsx>{`
        .section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100%;
          background: url('https://images4.alphacoders.com/718/thumb-1920-71846.jpg') no-repeat;
          background-position: center;
          background-size: cover;
        }
        .form-box {
          position: relative;
          width: 400px;
          height: 450px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h2 {
          font-size: 2em;
          color: #fff;
          text-align: center;
        }
        .inputbox {
          position: relative;
          margin: 30          px 0;
        }
        .inputbox input {
          width: 100%;
          padding: 10px 0;
          font-size: 1.2em;
          color: #fff;
          letter-spacing: 1px;
          margin-bottom: 30px;
          border: none;
          border-bottom: 2px solid #fff;
          outline: none;
          background: transparent;
        }
        .inputbox label {
          position: absolute;
          top: 0;
          left: 0;
          letter-spacing: 1px;
          padding: 10px 0;
          font-size: 1.2em;
          color: #fff;
          pointer-events: none;
          transition: 0.5s;
        }
        .inputbox input:focus ~ label,
        .inputbox input:valid ~ label {
          top: -20px;
          left: 0;
          color: #fff;
          font-size: 1em;
        }
        .forget {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .forget a {
          font-size: 0.8em;
          color: #fff;
          text-decoration: none;
          margin-left: 10px;
        }
        button {
          width: 100%;
          padding: 10px 0;
          margin-top: 30px;
          border: none;
          outline: none;
          background: #e67e22;
          color: #fff;
          font-size: 1.2em;
          letter-spacing: 1px;
          cursor: pointer;
          transition: 0.5s;
          border-radius: 10px;
        }
        button:hover {
          background: #fff;
          color: #e67e22;
        }
        .register {
          margin-top: 20px;
          text-align: center;
          font-size: 0.8em;
          color: #fff;
        }
        .register a {
          color: #e67e22;
          text-decoration: none;
        }
      `}</style>
    </>
    );
  };
  
  export default LoginUser;
