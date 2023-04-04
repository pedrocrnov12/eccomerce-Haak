import React, { useState } from 'react';
import { register } from '../../pages/api/register';
import { useRouter } from 'next/router';
import Link from 'next/link'

interface FormData {
  Email: string;
  UserName: string;
  PassWord: string
 

}

const Registers : React.FC = () => {
  const router= useRouter();
  const [formData, setFormData] = useState<FormData>({
    Email: '',
    UserName: '',
    PassWord: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await register(formData);
      router.push('/login');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="section">
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit}>
              <h2 className="titule">Register</h2>
              <div className="inputbox">
                <input type="Username" name="UserName" value={formData.UserName} onChange={handleChange} required/>
                <label>Username</label>
              </div>
              <div className="inputbox">
                <input type="email" name="Email" value={formData.Email} onChange={handleChange} required/>
                <label>Email</label>
              </div>
              <div className="inputbox">
                <input type="password" name="PassWord" value={formData.PassWord} onChange={handleChange} required/>
                <label>Password</label>
              </div>
              <button type="submit">Create</button>
              <div className="register">
                <p> I have an account <Link href="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .section{
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100%;
          background: url('https://images4.alphacoders.com/718/thumb-1920-71846.jpg')no-repeat;
          background-position: center;
          background-size: cover;
        }
        .form-box{
          position: relative;
          width: 400px;
          height: 450px;
          background: transparent;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h2{
          font-size: 2em;
          color: #fff;
          text-align: center;
        }
        .inputbox{
          position: relative;
          margin: 30px 0;
          width: 310px;
          border-bottom: 2px solid #fff;
        }
        .inputbox label{
          position: absolute;
          top: 50%;
          left: 5px;
          transform: translateY(-50%);
          color: #fff;
          font-size: 1em;
          pointer-events: none;
          transition: .5s;
        }
        input:focus ~ label,
        input:valid ~ label{
        top: -5px;
        }
        .inputbox input {
            width: 100%;
            height: 50px;
            background: transparent;
            border: none;
            outline: none;
            font-size: 1em;
            padding:0 35px 0 5px;
            color: #fff;
        }
        .inputbox ion-icon{
            position: absolute;
            right: 8px;
            color: #fff;
            font-size: 1.2em;
            top: 20px;
        }
        .forget{
            margin: -15px 0 15px ;
            font-size: .9em;
            color: #fff;
            display: flex;
            justify-content: space-between;  
        }
    
        .forget label input{
            margin-right: 3px;
            
        }
        .forget label a{
            color: #fff;
            text-decoration: none;
        }
        .forget label a:hover{
            text-decoration: underline;
        }
        button{
            width: 100%;
            height: 40px;
            border-radius: 40px;
            background: #fff;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 1em;
            font-weight: 600;
        }
        .register{
            font-size: .9em;
            color: #fff;
            text-align: center;
            margin: 25px 0 10px;
        }
        .register p a{
            text-decoration: none;
            color: #fff;
            font-weight: 600;
        }
        .register p a:hover{
            text-decoration: underline;
        }
`}

</style>

</>
);
}
export default Registers