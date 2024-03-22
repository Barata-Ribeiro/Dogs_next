import login from "@/actions/login";

export default async function LoginForm() {
  return (
    <>
      <form action={login}>
        <input
          type='text'
          name='username'
          autoComplete='username'
          placeholder='Usuário'
        />
        <input
          type='password'
          name='password'
          placeholder='Senha'
          autoComplete='current-password'
        />
        <button>Entrar</button>
      </form>
    </>
  );
}
