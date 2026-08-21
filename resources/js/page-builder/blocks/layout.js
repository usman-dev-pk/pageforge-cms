export function layoutBlocks(editor) {

    editor.BlockManager.add('section', {

        label: 'Section',

        category: 'Layout',

        content: `
            <section>
                <h2>Section</h2>
                <p>Section content</p>
            </section>
        `,

        activate: true,

    });


    editor.BlockManager.add('two-columns', {

        label: '2 Columns',

        category: 'Layout',

        content: `
            <div style="display:flex; gap:20px;">

                <div style="flex:1;">
                    <h3>Left</h3>
                </div>

                <div style="flex:1;">
                    <h3>Right</h3>
                </div>

            </div>
        `,

        activate: true,

    });

        // Cards Block
    editor.BlockManager.add('cards', {

        label: 'Cards',

        category: 'Sections',

        content: {
            type: 'cards',
        },

        activate: true,

    });

}