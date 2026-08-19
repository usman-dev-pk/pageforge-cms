export function registerContentComponents(editor) {

    // =========================================
    // Individual Card
    // =========================================

    editor.DomComponents.addType('card', {

        model: {

            defaults: {

                tagName: 'div',

                classes: ['cms-card'],

                droppable: true,

                components: `
                    <img
                        src="https://via.placeholder.com/300x160"
                        alt="Card Image"
                    >

                    <h3>
                        Card Heading
                    </h3>

                    <p>
                        Card description goes here.
                    </p>

                    <a href="#">
                        Read More
                    </a>
                `,

            },

        },

    });


    // =========================================
    // Cards Container
    // =========================================

    editor.DomComponents.addType('cards', {

        model: {

            defaults: {

                tagName: 'div',

                classes: ['cms-cards'],

                droppable: false,

                components: [

                    {
                        type: 'card',
                    },

                    {
                        type: 'card',
                    },

                    {
                        type: 'card',
                    },

                ],

            },

        },

    });


    // =========================================
    // Cards CSS
    // =========================================

    editor.Css.addRules(`

        /* Cards Container */

        .cms-cards {

            display: grid;

            grid-template-columns:
                repeat(3, minmax(0, 1fr));

            gap: 20px;

            width: 100%;

            max-width: 100%;

            padding: 20px;

            box-sizing: border-box;

        }


        /* Individual Card */

        .cms-card {

            width: 100%;

            min-width: 0;

            max-width: 100%;

            box-sizing: border-box;

            padding: 20px;

            border: 1px solid #ddd;

            border-radius: 8px;

            overflow: hidden;

        }


        /* Card Image */

        .cms-card img {

            display: block;

            width: 100%;

            max-width: 100%;

            height: 160px;

            object-fit: cover;

        }


        /* Card Heading */

        .cms-card h3 {

            margin: 15px 0 10px;

            font-size: 22px;

        }


        /* Card Paragraph */

        .cms-card p {

            margin: 0 0 15px;

            font-size: 15px;

            line-height: 1.6;

        }


        /* Card Button */

        .cms-card a {

            display: inline-block;

            text-decoration: none;

        }


        /* =====================================
           Tablet
        ====================================== */

        @media (max-width: 991px) {

            .cms-cards {

                grid-template-columns:
                    repeat(2, minmax(0, 1fr));

            }

        }


        /* =====================================
           Mobile
        ====================================== */

        @media (max-width: 767px) {

            .cms-cards {

                grid-template-columns: 1fr;

            }

            .cms-card {

                padding: 15px;

            }

        }

    `);

}