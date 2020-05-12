# Installation

## Download The Theme

Purchase Listbook theme and download the packages from themeforest. Unzip the package and you should get a listbook.zip fine inside the main zip file.

### System Requirements {#system-requirement}

* PHP version 7 or greater

* MySQL version 5.6 or greater

* Recommended memory\_limit is no less than 64M

* Upload\_max\_filesize should be no less than 64M

### Theme Installation

1. Goto to **Appearance-&gt;Themes **in your **WordPress admin dashboard.**
2. Click Add new at the top of the page.

### Few common issues when installing the theme

**a. The “Broken theme and/or stylesheets missing” error is most common when you install or activate a new theme.**

**Solution**: If you get an error saying that the stylesheet is missing, then you have uploaded the wrong folder. Please check that you are uploading the findus\_theme.zip within the Theme Files folder. You have to unzip the package file that you download from Themeforest to find this.

**b. Problems with uploading via WP admin panel due Upload limit.**

**Solution: **You may check your file upload limit on Your Media Uploader page in WordPress. Depending upon the web hosting company and the conditions of the service they provide it may vary. The most common is about 8 MB which is more or less enough. But uploading some media files like audio and video may become a problem with for example 2 MB upload limit.

We decided to share some tips about how to extend your maximum file upload size in WordPress

* **Through functions.php file:**

You may add the below mentioned code in the functions.php file of your theme

```
@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );
```

* **Through PHP.INI file:**

If you cannot see the php.ini file in your directory create the new one with below mentioned code and upload it to your root folder on your web server.

If you can see the php.ini file then change parameters or add :

```
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 300
```

In case that tip does not work with 64MB, try it with 10MB.

* **Through .htaccess method**

You may try modifying the existing .htaccess file in the root directory or creating a new one.

Add the following code in the existing or new .htacess file:

```
php_value upload_max_filesize 64M
php_value post_max_size 64M
php_value max_execution_time 300
php_value max_input_time 300
```



