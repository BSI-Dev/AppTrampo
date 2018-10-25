

handleEmailChange = (email) => {
    this.setState({ email });
  };


handlePasswordChange = (password) => {
    this.setState({ password });
};

handleCreateAccountPress = () => {
    this.props.navigation.navigate('Cadastro');
};


handleSignInPress = async () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
        this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
    } else {
        try {
        const response = await api.post('/logar', {
            email: this.state.email,
            password: this.state.password,
        });
            
        await AsyncStorage.setItem('@TrampoApp:token', response.data.token);

        const resetAction = StackActions.reset({
            index: 0,
            actions: [
            NavigationActions.navigate({ routeName: 'Main' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
        } catch (_err) {
        this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
        }
    }
};