const sharedStyleProperties = [
    'color',
    'background-color',
    'font-family',
    'font-size',
    'font-weight',
    'font-style',
    'line-height',
    'letter-spacing',
    'text-align',
    'width',
    'height',
    'min-width',
    'max-width',
    'min-height',
    'max-height',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'border',
    'border-width',
    'border-style',
    'border-color',
    'border-radius',
    'box-shadow',
    'opacity',
    'display',
    'position',
    'top',
    'right',
    'bottom',
    'left',
];

const layoutStyleProperties = [
    ...sharedStyleProperties,
    'flex-direction',
    'flex-wrap',
    'justify-content',
    'align-items',
    'align-content',
    'gap',
    'grid-template-columns',
    'grid-template-rows',
    'grid-column-gap',
    'grid-row-gap',
];

const textStyleProperties = [
    ...sharedStyleProperties,
    'text-decoration',
    'text-transform',
];

export const componentDefinitions = [
    {
        type: 'heading',
        label: 'Heading',
        category: 'Basic',
        defaults: {
            tagName: 'h2',
            classes: ['cms-heading'],
            content: 'Your heading',
            stylable: textStyleProperties,
        },
    },
    {
        type: 'section',
        label: 'Section',
        category: 'Layout',
        defaults: {
            tagName: 'section',
            classes: ['cms-section'],
            droppable: true,
            components: [
                { type: 'heading', content: 'Section heading' },
                { type: 'text', content: 'Section content goes here.' },
            ],
            style: { 'min-height': '150px', padding: '40px 30px' },
            stylable: layoutStyleProperties,
        },
    },
    {
        type: 'card',
        label: 'Card',
        category: 'Content',
        defaults: {
            tagName: 'article',
            classes: ['cms-card'],
            droppable: true,
            components: [
                { tagName: 'h3', content: 'Card heading', stylable: textStyleProperties },
                { type: 'text', content: 'Card description goes here.' },
                { tagName: 'a', content: 'Read more', attributes: { href: '#' }, stylable: textStyleProperties },
            ],
            style: { padding: '20px', border: '1px solid #d6d3d1', 'border-radius': '8px' },
            stylable: layoutStyleProperties,
        },
    },
    {
        type: 'cards',
        label: 'Cards',
        category: 'Sections',
        defaults: {
            tagName: 'div',
            classes: ['cms-cards'],
            droppable: true,
            components: [{ type: 'card' }, { type: 'card' }, { type: 'card' }],
            style: { display: 'grid', 'grid-template-columns': 'repeat(3, minmax(0, 1fr))', gap: '20px' },
            stylable: layoutStyleProperties,
        },
    },
    {
        type: 'cta',
        label: 'CTA',
        category: 'Sections',
        defaults: {
            tagName: 'section',
            classes: ['cms-cta'],
            droppable: true,
            components: [
                { type: 'heading', content: 'Ready to get started?' },
                { type: 'text', content: 'Take the next step with us.' },
                { tagName: 'a', content: 'Get started', attributes: { href: '#' }, classes: ['cms-button'], stylable: textStyleProperties },
            ],
            style: { padding: '48px 30px', 'text-align': 'center' },
            stylable: layoutStyleProperties,
        },
    },
    {
        type: 'header',
        label: 'Header',
        category: 'Sections',
        defaults: {
            tagName: 'header',
            classes: ['cms-header'],
            droppable: true,
            components: [{ type: 'heading', content: 'Your Website' }, { tagName: 'nav', content: 'Home  About  Contact', stylable: textStyleProperties }],
            style: { display: 'flex', 'justify-content': 'space-between', 'align-items': 'center', padding: '20px 30px' },
            stylable: layoutStyleProperties,
        },
    },
    {
        type: 'footer',
        label: 'Footer',
        category: 'Sections',
        defaults: {
            tagName: 'footer',
            classes: ['cms-footer'],
            droppable: true,
            components: [{ type: 'text', content: '© 2026 Your Website. All rights reserved.' }],
            style: { padding: '30px', 'text-align': 'center' },
            stylable: layoutStyleProperties,
        },
    },
    {
        type: 'text',
        label: 'Text',
        category: 'Basic',
        defaults: { tagName: 'p', classes: ['cms-text'], content: 'Add your text here.', stylable: textStyleProperties },
    },
];

export function registerComponents(editor, definitions = componentDefinitions) {
    definitions.forEach(({ type, defaults }) => {
        editor.DomComponents.addType(type, {
            model: { defaults: { ...defaults, type } },
        });
    });
}

export function addComponentBlocks(editor, definitions = componentDefinitions) {
    definitions.forEach(({ type, label, category }) => {
        editor.BlockManager.add(type, {
            label,
            category,
            content: { type },
        });
    });
}
