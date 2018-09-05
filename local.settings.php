<?php
// To set up a local environment, make a duplicate of this file and name it 
// local-settings.inc in the site directory that contains the settings.php file.
// Ignore sites/*/local-settings.php in the .gitignore file. Change the settings.php
// file to include local-settings.php if the file exists.
// Point database to local service.
// https://gist.github.com/delphian/6242622

$databases = array (
  'default' =>
  array (
    'default' =>
    array (
      'database' => 'ez_solo',
      'username' => 'root',
      'password' => 'm00ncake',
      'host' => '127.0.0.1',
      'port' => '3306',
      'driver' => 'mysql',
      'prefix' => '',
    ),
  ),
);

// Turn off css and js consolidation for local development.
$conf['preprocess_css'] = 0;
$conf['preprocess_js'] = 0;