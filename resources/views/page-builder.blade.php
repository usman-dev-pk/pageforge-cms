<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Page Builder</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <style>
        html,
        body {
            margin: 0;
            min-height: 100%;
            height: 100vh;
            overflow: hidden;
        }

        body {
            display: flex;
            flex-direction: column;
        }

        .builder {
            display: flex;
            width: 100%;
            flex: 1 1 auto;
            min-height: 0;
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
            min-width: 0;
            min-height: 0;
        }

        .builder-tools {
            position: static;
            z-index: 10;
            display: flex;
            flex: 0 0 auto;
            flex-wrap: wrap;
            width: 100%;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            border-top: 1px solid #d1d5db;
            background: #fff;
            box-sizing: border-box;
        }

        .builder-tools input,
        .builder-tools select,
        .builder-tools button,
        .builder-upload,
        #builder-status {
            box-sizing: border-box;
        }

        .builder-tools input,
        .builder-tools select {
            min-width: 0;
            max-width: 100%;
            padding: 7px 9px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            background: #fff;
        }

        .builder-tools button {
            flex: 0 0 auto;
            padding: 8px 14px;
            border: 0;
            border-radius: 4px;
            background: #1f2937;
            color: #fff;
            cursor: pointer;
        }

        .builder-upload {
            flex: 0 0 auto;
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
            max-width: 100%;
            padding: 6px 10px;
            background: rgba(255, 255, 255, .9);
            color: #4b5563;
            font-size: 12px;
        }

        @media (max-width: 767px) {
            .builder {
                min-height: 0;
            }

            .builder-tools {
                align-items: stretch;
            }

            .builder-tools input,
            .builder-tools select,
            .builder-tools button,
            .builder-upload,
            #builder-status {
                width: 100%;
            }
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
        <input id="page-title" type="text" value="{{ $page?->title ?? '' }}" placeholder="Page title">
        <input id="page-slug" type="text" value="{{ $page?->slug ?? '' }}" placeholder="page-slug">
        <select id="page-parent">
            <option value="">No parent page</option>
            @foreach ($pages as $parentPage)
                <option value="{{ $parentPage->id }}" @selected((string) $page?->parent_id === (string) $parentPage->id)>
                    {{ $parentPage->title }}
                </option>
            @endforeach
        </select>
        <button id="save-page" type="button">Save page</button>
        <label class="builder-upload" for="card-image-input">Upload card image</label>
        <input id="card-image-input" type="file" accept="image/*">
    </div>

    <script>
        window.pageBuilderInitialPage = @json($page);
    </script>
    @vite('resources/js/page-builder.js')

</body>
</html>