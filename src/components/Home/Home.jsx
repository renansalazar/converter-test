import React from "react";
import Button from '../Button'
import Input from '../Input'
import Result from '../Result'
import Logo from '../../assets/img/logotf.png'

const Home = () => {
  
    return (
        <>
            <img src={Logo} alt="#" width="100px" height="100px" />
            <h1>Bienvenido a Converter Test</h1>
            <Input />
            <Button />
            <Result />
        </>
    )

};

export default Home;