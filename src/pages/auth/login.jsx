import React from 'react'
import SplashLayout from 'layouts/splash/container'
import stars from './assets/background.jpeg'

const Login = () => (
  <SplashLayout background={{ image: stars }} noHeader noFooter>
    <h2>Login</h2>
  </SplashLayout>
);

export default Login;
