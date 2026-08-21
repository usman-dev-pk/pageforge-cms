export function basicBlocks(editor) {

    editor.BlockManager.add('heading', {

        label: 'Heading',

        category: 'Basic',

        content: '<h1>Hello Heading</h1>',

        activate: true,

    });


    editor.BlockManager.add('text', {

        label: 'Text',

        category: 'Basic',

        content: '<p>Hello Text</p>',

        activate: true,

    });


    editor.BlockManager.add('button', {

        label: 'Button',

        category: 'Basic',

        content: '<button>Click Me</button>',

        activate: true,

    });

    editor.BlockManager.add('image', {

        label: 'Image',

        category: 'Basic',

        content: '<img src="https://via.placeholder.com/600x300" alt="Image">',

        activate: true,

    });

}