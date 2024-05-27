import{ useState } from 'react'
import {Button, Div, Input, H2, } from './Login'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        return alert("cadastrado com sucesso !")

    }
    return (
        
        <Div className="login-container">
            <H2>LOGIN</H2>
            <form onSubmit={handleSubmit}>
                <Div className="form-group">
                    <label htmlFor="username">Nome:</label>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Div>
                <Div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Div>
        
                <Button type="submit">Enviar</Button>
            </form>
        </Div>
    )
}

export default Login;