<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <title>Page Builder</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <style>
        html,
        body {
            margin: 0;
            height: 100%;
        }

        .builder {
            display: flex;
            width: 100%;
            height: 100vh;
        }

        #blocks {
            width: 250px;
            padding: 15px;
            background: #f5f5f5;
            overflow-y: auto;
            box-sizing: border-box;
        }

        #gjs {
            flex: 1;
            height: 100vh;
        }
    </style>

</head>

<body>

    <div class="builder">

        <div id="blocks"></div>

        <div id="gjs"></div>

    </div>

    @vite('resources/js/page-builder.js')

</body>
</html>