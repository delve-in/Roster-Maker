
class AuthService {
login(idToken) {
    localStorage.setItem('id_token', idToken);
    console.log(idToken);
    window.location.assign('/Home');
  }
}

export default new AuthService();