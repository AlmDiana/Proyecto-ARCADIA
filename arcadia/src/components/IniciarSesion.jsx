import React from 'react';
import {Link} from "react-router-dom";
import { Avatar, Form, Input, Button, Checkbox } from 'antd';


const IniciarSesion = () => {

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
                    <p id="inis">Iniciar Sesión</p>
                    <div className="clogin">
                        <Form name="iniciarsesion"  labelCol={{ span: 8,}} wrapperCol={{ span: 16,}}
                            initialValues={{remember: true,}} onFinish={onFinish} 
                            onFinishFailed={onFinishFailed}
                            autoComplete="off">
                            
                            <div className="seccionlogin">
                                <div className="login">
                                    <Form.Item  label="Usuario" name="username" 
                                        rules={[{ required: true,  message: '¡Ingrese un usuario!' ,},]}>
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Contraseña  " name="password" 
                                        rules={[{ required: true,message: '¡Ingrese una contraseña!',},]}>
                                        <Input.Password />
                                    </Form.Item>
                                </div>
                                
                                <div className="recordar">
                                    <Form.Item name="Recordarme" valuePropName="checked" 
                                        wrapperCol={{offset: 8, span: 16,}}>
                                        <Checkbox>Recordarme   </Checkbox>
                                    </Form.Item>
                                </div>
                            </div>

                            <Form.Item wrapperCol={{offset: 8,span: 16,}}>
                                <div className="signup">
                                    
                                    {/*Falta condicion para buscar usuario en bd y jugar*/ }
                                    <Link id="btnplay" 
                                        onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade"}>JUGAR</Link>
                                    <p id="alter">¿No tienes cuenta? 
                                        <Link onClick={() => window.location.href="/registro"}>Regístrate</Link>
                                    </p>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IniciarSesion;