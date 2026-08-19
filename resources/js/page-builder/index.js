import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

import { addComponentBlocks, registerComponents } from './components/registry';


export function createPageBuilder() {

    const editor = grapesjs.init({

        // =========================================
        // Main Editor
        // =========================================

        container: '#gjs',

        height: '100vh',

        fromElement: true,

        storageManager: {
            type: 'local',
            autosave: false,
            autoload: true,
            options: { local: { key: 'wp-cms-page-builder' } },
        },


        // =========================================
        // Block Manager
        // =========================================

        blockManager: {

            appendTo: '#blocks',

        },

        styleManager: {
            appendTo: '#styles',
            sectors: [
                {
                    name: 'Layout',
                    open: true,
                    properties: [
                        'display', 'position', 'top', 'right', 'bottom', 'left',
                        'width', 'height', 'min-width', 'max-width', 'min-height', 'max-height',
                        'margin', 'padding', 'flex-direction', 'flex-wrap',
                        'justify-content', 'align-items', 'gap', 'grid-template-columns',
                    ],
                },
                {
                    name: 'Typography',
                    properties: [
                        'color', 'font-family', 'font-size', 'font-weight', 'font-style',
                        'line-height', 'letter-spacing', 'text-align', 'text-decoration', 'text-transform',
                    ],
                },
                { name: 'Background', properties: ['background-color', 'opacity'] },
                { name: 'Borders', properties: ['border', 'border-width', 'border-style', 'border-color', 'border-radius', 'box-shadow'] },
            ],
        },


        // =========================================
        // Style Manager
        // =========================================

        // styleManager: {

        //     sectors: [

        //         // -----------------------------------------
        //         // Layout
        //         // -----------------------------------------

        //         {
        //             name: 'Layout',

        //             open: true,

        //             properties: [

        //                 {
        //                     property: 'width',

        //                     type: 'integer',

        //                     units: [
        //                         'px',
        //                         '%',
        //                         'vw',
        //                     ],
        //                 },

        //                 {
        //                     property: 'height',

        //                     type: 'integer',

        //                     units: [
        //                         'px',
        //                         '%',
        //                         'vh',
        //                     ],
        //                 },

        //                 {
        //                     property: 'min-width',

        //                     type: 'integer',

        //                     units: [
        //                         'px',
        //                         '%',
        //                         'vw',
        //                     ],
        //                 },

        //                 {
        //                     property: 'max-width',

        //                     type: 'integer',

        //                     units: [
        //                         'px',
        //                         '%',
        //                         'vw',
        //                     ],
        //                 },

        //                 // Margin

        //                 {
        //                     property: 'margin',

        //                     type: 'composite',

        //                     properties: [
        //                         {
        //                             property: 'margin-top',
        //                             type: 'integer',
        //                             units: ['px', '%', 'vw'],
        //                         },

        //                         {
        //                             property: 'margin-right',
        //                             type: 'integer',
        //                             units: ['px', '%', 'vw'],
        //                         },

        //                         {
        //                             property: 'margin-bottom',
        //                             type: 'integer',
        //                             units: ['px', '%', 'vw'],
        //                         },

        //                         {
        //                             property: 'margin-left',
        //                             type: 'integer',
        //                             units: ['px', '%', 'vw'],
        //                         },
        //                     ],
        //                 },

        //                 // Padding

        //                 {
        //                     property: 'padding',

        //                     type: 'composite',

        //                     properties: [
        //                         {
        //                             property: 'padding-top',
        //                             type: 'integer',
        //                             units: ['px', '%', 'vw'],
        //                         },

        //                         {
        //                             property: 'padding-right',
        //                             type: 'integer',
        //                             units: ['px', '%', 'vw'],
        //                         },

        //                         {
        //                             property: 'padding-bottom',
        //                             type: 'integer',
        //                             units: ['px', '%', 'vw'],
        //                         },

        //                         {
        //                             property: 'padding-left',
        //                             type: 'integer',
        //                             units: ['px', '%', 'vw'],
        //                         },
        //                     ],
        //                 },

        //             ],
        //         },


        //         // -----------------------------------------
        //         // Typography
        //         // -----------------------------------------

        //         {
        //             name: 'Typography',

        //             open: false,

        //             properties: [

        //                 'font-family',

        //                 'font-size',

        //                 'font-weight',

        //                 'letter-spacing',

        //                 'color',

        //                 'line-height',

        //                 'text-align',

        //             ],
        //         },


        //         // -----------------------------------------
        //         // Background
        //         // -----------------------------------------

        //         {
        //             name: 'Background',

        //             open: false,

        //             properties: [

        //                 'background-color',

        //                 'background',

        //             ],
        //         },


        //         // -----------------------------------------
        //         // Borders
        //         // -----------------------------------------

        //         {
        //             name: 'Borders',

        //             open: false,

        //             properties: [

        //                 'border',

        //                 'border-radius',

        //                 'box-shadow',

        //             ],
        //         },

        //     ],

        // },

//  Yh originl wla part haa.

//         styleManager: {
//     sectors: [
//         {
//             name: 'Layout',
//             open: true,
//             properties: [
//                 'margin',
//                 'padding',
//                 'width',
//                 'height',
//             ],
//         },

//         {
//             name: 'Typography',
//             open: true,
//             properties: [
//                 'color',
//                 'font-size',
//                 'font-weight',
//                 'text-align',
//             ],
//         },

//         {
//             name: 'Background',
//             open: true,
//             properties: [
//                 'background-color',
//             ],
//         },

//         {
//             name: 'Borders',
//             open: true,
//             properties: [
//                 'border',
//                 'border-radius',
//                 'box-shadow',
//             ],
//         },
//     ],
// },

        // =========================================
        // Responsive Devices
        // =========================================

        deviceManager: {

            devices: [

                {
                    id: 'desktop',

                    name: 'Desktop',

                    width: '100%',
                },

                {
                    id: 'tablet',

                    name: 'Tablet',

                    width: '768px',

                    widthMedia: '991px',
                },

                {
                    id: 'mobile',

                    name: 'Mobile',

                    width: '375px',

                    widthMedia: '767px',
                },

            ],

        },

    });


    registerComponents(editor);
    addComponentBlocks(editor);

    const status = document.querySelector('#builder-status');
    const saveButton = document.querySelector('#save-page');
    saveButton?.addEventListener('click', async () => {
        await editor.store();
        if (status) status.textContent = 'Saved just now';
    });

    editor.on('update', () => {
        if (status) status.textContent = 'Unsaved changes';
    });


    return editor;

}