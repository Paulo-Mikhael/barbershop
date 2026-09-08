import LoginPage from "../src/Pages/LoginPage";

export default function Login() {
  return (
    <LoginPage>
      <LoginPage.Main>
        <LoginPage.AsideText />
        <LoginPage.Card>
          <LoginPage.Card.Header />
          <LoginPage.Card.Form />
          <LoginPage.Card.Footer />
        </LoginPage.Card>
      </LoginPage.Main>
    </LoginPage>
  );
}