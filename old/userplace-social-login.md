# Userplace Social Login

Userplace Social Login is another extension of Userplace plugin. The purpose of this extension to add a popup login with social login support. If you haven't activated this plugin in plugin installation section then please activate the plugin first. Make sure you have activated and configured the Userplace plugin first.

To configure social login go to below page

![](/assets/social-login-settings.png)

We have implemented login popup in multiple paces in our site. Any action that needs the user to login a popup with login will show for the user to login.

![](/assets/login-popup.png)

To add login modal action to any button just add below action within html \`class\`.

```
do_action('listbook_auth_trigger');
```

An example of below code is given below

```
<button class="login-modal <?php do_action('listbook_auth_trigger') ?>">Login</button>
```

Now If you click on Login button then the login popup will appear.

