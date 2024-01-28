import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext'; // UserContextからuseUserをインポート
import axios from 'axios';
import { CustomHead } from "../components/CustomHead";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        user: {
          email,
          password
        }
      });
      console.log('Login successful:', response.data);
      setUser(response.data.user); // レスポンスのユーザー情報をセット
      router.push('/'); // ホームページにリダイレクト
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="auth-page">
      <CustomHead />
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>
            <ul className="error-messages">
              {/* エラーメッセージをここに表示 */}
            </ul>
            <form onSubmit={handleLogin}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
