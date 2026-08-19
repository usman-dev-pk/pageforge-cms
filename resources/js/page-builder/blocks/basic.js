export function basicBlocks(editor) {

    editor.BlockManager.add('heading', {

        label: 'Heading',

        category: 'Basic',

        content: '<h1>Hello Heading</h1>',

    });


    editor.BlockManager.add('text', {

        label: 'Text',

        category: 'Basic',

        content: '<p>Hello Text</p>',

    });


    editor.BlockManager.add('button', {

        label: 'Button',

        category: 'Basic',

        content: '<button>Click Me</button>',

    });

}