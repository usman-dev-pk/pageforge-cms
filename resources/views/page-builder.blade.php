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

        .builder-tools {
            position: fixed;
            z-index: 10;
            top: 12px;
            right: 270px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .builder-tools button {
            padding: 8px 14px;
            border: 0;
            border-radius: 4px;
            background: #1f2937;
            color: #fff;
            cursor: pointer;
        }

        .builder-upload {
            padding: 8px 14px;
            border-radius: 4px;
            background: #e5e7eb;
            color: #1f2937;
            cursor: pointer;
            font-size: 13px;
        }

        #card-image-input {
            display: none;
        }

        #builder-status {
            padding: 6px 10px;
            background: rgba(255, 255, 255, .9);
            color: #4b5563;
            font-size: 12px;
        }

    </style>

</head>

<body>

    <div class="builder">

        <div id="blocks"></div>

        <div id="gjs"></div>

    </div>

    <div class="builder-tools">
        <span id="builder-status">All changes saved locally</span>
        <button id="save-page" type="button">Save page</button>
        <label class="builder-upload" for="card-image-input">Upload card image</label>
        <input id="card-image-input" type="file" accept="image/*">
    </div>

    @vite('resources/js/page-builder.js')

</body>
</html>