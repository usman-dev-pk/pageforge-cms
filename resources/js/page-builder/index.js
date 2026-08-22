import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

import { basicBlocks } from './blocks/basic';
import { layoutBlocks } from './blocks/layout';
import { sectionBlocks } from './blocks/sections';
import { registerContentComponents } from './components/contentComponents';
import { registerLayoutComponents } from './components/layoutComponents';


export function createPageBuilder(initialPage = null) {

    const editor = grapesjs.init({

        // =========================================
        // Main Editor
        // =========================================

        container: '#gjs',

        height: '100%',

        fromElement: true,

        storageManager: {
            type: 'local',
            autosave: false,
            autoload: true,
            options: { local: { key: 'wp-cms-page-builder-v3' } },
        },


        // =========================================
        // Block Manager
        // =========================================
        blockManager: {

            appendTo: '#blocks',

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

        styleManager: {
            sectors: [
                {
                    name: 'Layout',
                    open: true,
                    properties: [
                        'width', 'height', 'min-width', 'max-width', 'min-height', 'max-height',
                        'margin', 'padding', 'display', 'position', 'top', 'right', 'bottom', 'left',
                    ],
                },
                {
                    name: 'Typography',
                    properties: [
                        'font-family', 'font-size', 'font-weight', 'font-style',
                        'line-height', 'letter-spacing', 'text-align', 'color',
                    ],
                },
                {
                    name: 'Background',
                    properties: ['background-color', 'opacity'],
                },
                {
                    name: 'Borders',
                    properties: ['border', 'border-radius', 'box-shadow'],
                },
            ],
        },
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

                    width: '1200px',
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


    registerLayoutComponents(editor);
    registerContentComponents(editor);
    basicBlocks(editor);
    layoutBlocks(editor);
    sectionBlocks(editor);

    if (initialPage?.builder_data) {
        editor.loadProjectData(initialPage.builder_data);
    }

    const updateCanvasDeviceClass = () => {
        const canvasBody = editor.Canvas.getBody();
        const device = editor.getDevice() || 'desktop';

        if (!canvasBody) return;

        canvasBody.classList.remove('device-desktop', 'device-tablet', 'device-mobile');
        canvasBody.classList.add(`device-${device}`);
    };

    editor.on('change:device', updateCanvasDeviceClass);
    editor.on('load', updateCanvasDeviceClass);
    updateCanvasDeviceClass();

    const blocksContainer = document.querySelector('#blocks');
    blocksContainer?.addEventListener('click', (event) => {
        const blockElement = event.target.closest('.gjs-block');
        const blockId = blockElement?.getAttribute('title');
        const block = blockId ? editor.BlockManager.get(blockId.toLowerCase().replaceAll(' ', '-')) : null;

        if (!block) return;

        const components = editor.addComponents(block.get('content'));
        const selected = Array.isArray(components) ? components[0] : components;

        if (selected) editor.select(selected);
    });

    editor.on('component:selected', (component) => {
        component.set('stylable', true);
        editor.runCommand('open-sm');
    });

    const status = document.querySelector('#builder-status');
    const saveButton = document.querySelector('#save-page');
    const cardImageInput = document.querySelector('#card-image-input');
    const pageTitleInput = document.querySelector('#page-title');
    const pageSlugInput = document.querySelector('#page-slug');
    const pageParentInput = document.querySelector('#page-parent');
    let currentPageId = initialPage?.id ?? null;

    const getSelectedCardImage = () => {
        let selected = editor.getSelected();

        while (selected && selected.get('type') !== 'card') {
            selected = selected.parent();
        }

        if (!selected) return null;

        return selected.components().models.find((component) => component.get('tagName') === 'img');
    };

    cardImageInput?.addEventListener('change', (event) => {
        const file = event.target.files?.[0];

        if (!file || !file.type.startsWith('image/')) return;

        const image = getSelectedCardImage();

        if (!image) {
            if (status) status.textContent = 'Select a card first';
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            image.addAttributes({ src: reader.result });
            if (status) status.textContent = 'Image added to card';
        });
        reader.readAsDataURL(file);
        event.target.value = '';
    });
    saveButton?.addEventListener('click', async () => {
        const title = pageTitleInput?.value.trim();
        const slug = pageSlugInput?.value.trim();

        if (!title || !slug) {
            if (status) status.textContent = 'Enter a page title and slug';
            return;
        }

        saveButton.disabled = true;
        if (status) status.textContent = 'Saving...';

        try {
            const response = await fetch(currentPageId ? `/pages/${currentPageId}` : '/pages', {
                method: currentPageId ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content ?? '',
                },
                body: JSON.stringify({
                    title,
                    slug,
                    parent_id: pageParentInput?.value || null,
                    builder_data: editor.getProjectData(),
                }),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || 'Unable to save page');
            }

            const payload = await response.json();
            currentPageId = payload.page.id;
            await editor.store();
            if (status) status.textContent = `Saved page #${currentPageId}`;
        } catch (error) {
            if (status) status.textContent = error.message;
        } finally {
            saveButton.disabled = false;
        }
    });

    editor.on('update', () => {
        if (status) status.textContent = 'Unsaved changes';
    });


    return editor;

}