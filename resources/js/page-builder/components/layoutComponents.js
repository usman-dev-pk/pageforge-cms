export function registerLayoutComponents(editor) {

    editor.DomComponents.addType('section-wrapper', {

        model: {

            defaults: {

                tagName: 'section',

                droppable: true,

                components: `
                    <div class="cms-container">
                        Drop components here
                    </div>
                `,

                style: {
                    padding: '60px 30px',
                    'min-height': '150px',
                },

            },

        },

    });


    editor.DomComponents.addType('two-columns', {

        model: {

            defaults: {

                tagName: 'div',

                classes: ['cms-two-columns'],

                droppable: false,

                components: [

                    {
                        tagName: 'div',

                        classes: ['cms-column'],

                        droppable: true,

                        components: `
                            <p>Drop content here</p>
                        `,
                    },

                    {
                        tagName: 'div',

                        classes: ['cms-column'],

                        droppable: true,

                        components: `
                            <p>Drop content here</p>
                        `,
                    },

                ],

                style: {
                    display: 'flex',
                    gap: '30px',
                    padding: '30px',
                },

            },

        },

    });

}