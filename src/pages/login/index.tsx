import {Button, PasswordInput, TextInput } from '@mantine/core';
import Link from 'next/link';
import styles from './styles.module.css';

 const Login = () => {
    return (
        <div className={styles.loginContainer}>
          <main className={styles.loginCard}>
            <p className={styles.title}>Login</p>

            <span className={styles.obs}> Deseja voltar para a página inicial ? Ir para <Link href={'/'}>página inicial</Link>  </span>
           
            <TextInput label="E-mail" size='md'/>
            <PasswordInput label="Senha" size='md'/>


            <Button color='blue' size="md">Entrar</Button>
           
            <span className={styles.obs}> Não tem uma conta ? <Link href={'/register'}>Registrar</Link> </span>
          </main>
        </div>
    )
}

export default Login;