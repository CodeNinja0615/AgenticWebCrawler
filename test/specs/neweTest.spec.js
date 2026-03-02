describe('Login Test', () => {
    // let browser;
    let json = {
        url: 'https://rahulshettyacademy.com/locatorspractice/',
        inputs: [
            { id: null, name: null, type: 'text' },
            { id: null, name: null, type: 'text' },
            { id: null, name: null, type: 'text' },
            { id: null, name: 'inputUsername', type: 'text' },
            { id: null, name: 'inputPassword', type: 'password' },
            { id: 'chkboxOne', name: 'chkboxOne', type: 'checkbox' },
            { id: 'chkboxTwo', name: 'chkboxTwo', type: 'checkbox' }
        ],
        buttons: [
            { text: '', id: null },
            { text: '', id: null },
            { text: 'SIGN IN', id: null },
            { text: '', id: 'visitUSOne' },
            { text: 'VISIT US', id: 'visitUsTwo' }
        ],
        links: [
            { text: 'terms', href: '#' },
            { text: 'privacy policy', href: '#' },
            { text: 'Forgot your password?', href: '#' }
        ]
    };

    beforeEach(async () => {
        // browser = await Browser.launch();
        await browser.url(json.url);
    });

    it('verify user can enter username and password and click login button', async () => {
        const usernameField = await $('#inputUsername');
        const passwordField = await $('#inputPassword');
        const loginButton = await $('button[id="visitUsTwo"]');

        await usernameField.setValue('testuser');
        await passwordField.setValue('testpassword');
        await loginButton.click();

        // You can add assertions here to check the login success or failure
    });

    afterEach(async () => {
        await browser.close();
    });
});