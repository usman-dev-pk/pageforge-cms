// export function sectionBlocks(editor) {

//     // =========================================
//     // HERO COMPONENT
//     // =========================================

//     editor.DomComponents.addType('hero-section', {

//         model: {

//             defaults: {

//                 tagName: 'section',

//                 classes: ['hero-section'],

//                 stylable: true,

//                 droppable: true,

//                 components: [

//                     {
//                         tagName: 'div',

//                         classes: ['hero-content'],

//                         components: [

//                             {
//                                 tagName: 'h1',

//                                 content: 'Your Amazing Heading',

//                             },

//                             {
//                                 tagName: 'p',

//                                 content: 'Your hero description goes here.',

//                             },

//                             {
//                                 tagName: 'a',

//                                 attributes: {
//                                     href: '#',
//                                 },

//                                 classes: ['hero-button'],

//                                 content: 'Get Started',

//                             },

//                         ],

//                     },

//                     {
//                         tagName: 'div',

//                         classes: ['hero-image'],

//                         components: [

//                             {
//                                 tagName: 'img',

//                                 attributes: {

//                                     src: 'https://via.placeholder.com/500x300',

//                                     alt: 'Hero Image',

//                                 },

//                             },

//                         ],

//                     },

//                 ],

//             },

//         },

//     });


//     // =========================================
//     // HERO BLOCK
//     // =========================================

//     editor.BlockManager.add('hero', {

//         label: 'Hero',

//         category: 'Sections',

//         content: {

//             type: 'hero-section',

//         },

//     });


//     // =========================================
//     // HERO CSS
//     // =========================================

//     editor.Css.addRules(`

//         .hero-section {

//             display: flex;

//             align-items: center;

//             gap: 40px;

//             width: 100%;

//             box-sizing: border-box;

//         }


//         .hero-content {

//             flex: 1;

//             min-width: 0;

//         }


//         .hero-image {

//             flex: 1;

//             min-width: 0;

//         }


//         .hero-image img {

//             display: block;

//             width: 100%;

//             height: auto;

//         }


//         .hero-button {

//             display: inline-block;

//         }


//         @media (max-width: 767px) {

//             .hero-section {

//                 flex-direction: column;

//             }

//         }

//     `);


//     // =========================================
//     // BANNER
//     // =========================================

//     editor.BlockManager.add('banner', {

//         label: 'Banner',

//         category: 'Sections',

//         content: `

//             <section class="banner-section">

//                 <h2>
//                     Your Banner Heading
//                 </h2>

//                 <p>
//                     Your banner content goes here.
//                 </p>

//             </section>

//         `,

//     });


//     // =========================================
//     // CTA
//     // =========================================

//     editor.BlockManager.add('cta', {

//         label: 'CTA',

//         category: 'Sections',

//         content: `

//             <section class="cta-section">

//                 <h2>
//                     Ready to Get Started?
//                 </h2>

//                 <p>
//                     Take the next step with us.
//                 </p>

//                 <a href="#">
//                     Get Started
//                 </a>

//             </section>

//         `,

//     });


//     // =========================================
//     // FOOTER
//     // =========================================

//     editor.BlockManager.add('footer', {

//         label: 'Footer',

//         category: 'Sections',

//         content: `

//             <footer class="footer-section">

//                 <h3>
//                     Your Website
//                 </h3>

//                 <p>
//                     © 2026 Your Website. All rights reserved.
//                 </p>

//             </footer>

//         `,

//     });

// }






export function sectionBlocks(editor) {

    editor.BlockManager.add('hero', {

        label: 'Hero',

        category: 'Sections',

        content: `
            <section class="hero-section">

                <h1>Hero Heading</h1>

                <p>
                    This is a test hero section.
                </p>

            </section>
        `,

    });

}