export function registerContentComponents(editor) {

    // =========================================
    // Individual Card
    // =========================================

    editor.DomComponents.addType('card', {

        model: {

            defaults: {

                tagName: 'div',

                classes: ['card', 'cms-card'],

                droppable: true,

                components: `
                    <img
                        class="card-img-top cms-card-image"
                        src="https://placehold.co/600x360/e2e8f0/334155?text=Card+Image"
                        alt="Card Image"
                    >

                    <div class="card-body cms-card-body">
                        <h5 class="card-title cms-card-title">
                            Card title
                        </h5>

                        <p class="card-text cms-card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>

                        <a href="#" class="btn btn-primary cms-card-button">
                            Go somewhere
                        </a>
                    </div>
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

            gap: 24px;

            width: 100%;

            max-width: 100%;

            padding: 24px;

            box-sizing: border-box;

            justify-content: center;


        }

        .cms-card {

            width: 100%;

            max-width: 16rem;

            min-width: 0;

            justify-self: center;

            border-radius: .375rem;

            box-sizing: border-box;

            background: #fff;

            box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);

            border: 1px solid #e5e7eb;

            overflow: hidden;

        }


        .cms-card:hover {

            transform: translateY(-3px);

            box-shadow: 0 12px 28px rgba(15, 23, 42, .12);

        }


        /* Card Image */

        .cms-card-image {

            display: block;

            width: 100%;

            height: 120px;

            object-fit: cover;

            border-top-left-radius: calc(.375rem - 1px);

            border-top-right-radius: calc(.375rem - 1px);

        }


        /* Card Body */

        .cms-card-body {

            padding: .75rem;

        }


        /* Card Title */

        .cms-card-title {

            margin: 0 0 .5rem;

            font-size: 1.1rem;

            line-height: 1.2;

            color: #212529;

        }


        /* Card Paragraph */

        .cms-card-text {

            margin: 0 0 1rem;

            font-size: .875rem;

            line-height: 1.5;

            color: #212529;

        }


        /* Card Button */

        .cms-card-button {

            display: inline-block;

            text-decoration: none;

            padding: .375rem .75rem;

            border: 1px solid #0d6efd;

            border-radius: .375rem;

            background: #0d6efd;

            color: #fff;

            font-size: .875rem;

            line-height: 1.5;

            font-weight: 400;

        }


        .cms-card-button:hover {

            border-color: #0a58ca;

            background: #0a58ca;

        }


        /* =====================================
           Desktop
        ====================================== */

        @media (min-width: 992px) {

            .cms-cards {

                grid-template-columns:
                    repeat(3, minmax(0, 1fr)) !important;

            }

        }


        /* =====================================
           Tablet
        ====================================== */

        @media (max-width: 991px) {

            .cms-cards {

                grid-template-columns:
                    repeat(2, minmax(0, 1fr)) !important;

            }

        }


        /* =====================================
           Mobile
        ====================================== */

        @media (max-width: 767px) {

            .cms-cards {

                grid-template-columns: 1fr !important;

            }

        }


        .device-desktop .cms-cards {

            grid-template-columns:
                repeat(3, minmax(0, 1fr)) !important;

        }


        .device-tablet .cms-cards {

            grid-template-columns:
                repeat(2, minmax(0, 1fr)) !important;

        }


        .device-mobile .cms-cards {

            grid-template-columns: 1fr !important;

        }

    `);

}