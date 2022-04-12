<?php
$globs = glob('*');
$files = array_filter(glob('*.html'), 'is_file');
$base_url = 'http://hasan.test/';
$base_url = 'http://' . $_SERVER['HTTP_HOST'] . '/';
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="vendor/bootstrap5/css/bootstrap.min.css">
    <title>All Pages</title>
  </head>
  <body class="bg-success">
    <div class="container py-2">
      <div class="bg-white p-3 pb-5">
        <h1>All pages - (<?php count($files)?> items) </h1>
        <ul class="list-group">
          <?php foreach ($files as $file): ?>
            <li class="list-group-item">
              <a target="_blank" href="<?php echo $base_url; ?><?php echo $file ?>">
                <?php echo $base_url; ?><?php echo $file; ?>
              </a>
            </li>
          <?php endforeach ?>
        </ul>
      </div>
    </div>
  </body>
</html>