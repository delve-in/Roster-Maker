
class AuthService {
login(idToken, username) {
    localStorage.setItem('id_token', idToken);
    localStorage.setItem('username', username);

    console.log(idToken);
    window.location.assign('/Dashboard');
  }
}

export default new AuthService();