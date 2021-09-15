import React from 'react';
import {Link} from "react-router-dom";
import { Avatar, Form, Input, Button, Checkbox } from 'antd';

const Registro = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className="bigcontainer_InicioRegistro">
            <div className="background2">
                <p id="inis">Registrarse</p>
                <div className="clogin">
                    <Form name="registro"  labelCol={{ span: 8,}} wrapperCol={{ span: 16,}}
                        initialValues={{remember: true,}} onFinish={onFinish} 
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        
                        <div className="seccionlogin">
                            <div className="login">
                                <Form.Item  label="Usuario nuevo" name="username" 
                                    rules={[{ required: true,  message: '¡Ingrese un usuario!' ,},]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item label="Contraseña  " name="password" 
                                    rules={[{ required: true,message: '¡Ingrese una contraseña!',},]}>
                                    <Input.Password />
                                </Form.Item>
                            </div>
                        </div>

                        <Form.Item wrapperCol={{offset: 8,span: 16,}}>
                            <div className="signup">
                                {/*Falta condición si los campos están llenos permite jugar}
                                {/*Falta condicion para registrar en bd y jugar*/ }
                                <Link id="btnplay" onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade"}>JUGAR</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Registro;