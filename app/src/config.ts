import society from './images/society.png'
import socrates from './images/socrates.png'
import plato from './images/plato.png'

export interface slideChild {
    title: string
    /**
     * Rich text expansion on the title
     */
    text: string
    image?: string
    align: 'center' | 'left' | 'right'
    theme?: 'glassBlack' | 'glassWhite'
}

export interface SlideType {

    slideChildren: slideChild[]
    BGImage: string
}

export const slides: SlideType[] = [
    {
        BGImage: society,
        slideChildren: [
            {
                title: 'Greek Philosophy and Literature',
                text: `By Carson`,
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Second thing',
                text: `Hey ;)`,
                align: 'left',
                theme: 'glassWhite',
            }
        ]
    },
    {
        BGImage: socrates,
        slideChildren: [
            {
                title: 'Socrates',
                text: `By Carson`,
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Plato',
                text: `By Carson`,
                align: 'right',
                theme: 'glassWhite',
            },
        ]
    },
    /*{
        title: 'Quantum Computing',
        text: `By Nathan and Carson`,
        BGImage: hero,
        align: 'center',
        theme: 'glassWhite',
    },
    {
        title: 'Basic mechanics',
        text: `Simply put, the study of quantum mechanics in relation to quantum computer R&D. Includes thoery, optimizing the computers, making them cheaper, mass producible, and stable`,
        BGImage: basicMechanics,
        align: 'right',
        theme: 'glassWhite',
    },
    {
        title: 'Quantum Computers',
        text: `All quantum computers do is utilize quantum bits to perform calculations. Quantum computers have to be stored at -270c+ to stop quantum decoherence`,
        BGImage: quantomComputerBG,
        image: quantumComputer,
        align: 'left',
        theme: 'glassWhite',
    },
    {
        title: 'The IBM Eagle',
        text: `The IBM Eagle is the world's most powerful 127 qubit quantum computer. For reference, conventional computers can have trillions of bits.`,
        BGImage: eagle,
        image: systemOne,
        align: 'right',
        theme: 'glassWhite',
    },
    {
        title: 'Qubits',
        text: `Quantum bits, similar to conventional computing bits, have a binary state (0 or 1). They are photons or electrons with a positive or negative charge.`,
        BGImage: qubitChip,
        image: qubit,
        align: 'left',
        theme: 'glassWhite',
    },
    {
        title: 'Scientific Connections',
        text: `Computers are used everywhere in science, (AI, protein folding) and a significant limitation is computing power. Quantum computers can fix that`,
        BGImage: science,
        align: 'right',
        theme: 'glassWhite',
    },
    {
        title: 'Socio-economic Benefits',
        text: `Benefits to research, primarily artificial intelligence that will affect broader society. Development of green energies, urban planning, agriculture, and more can be optimized by AI`,
        BGImage: greenEnergy,
        align: 'left',
        theme: 'glassWhite',
    },
    {
        title: 'Who is Developing This?',
        text: `Tech giants who want to harness this technology for profits. More importantly, governments worldwide that provide billions of dollars in grants`,
        BGImage: government,
        align: 'right',
        theme: 'glassWhite',
    },
    {
        title: 'The Future of Quantum Computing',
        text: `Benefits to AI and research, possibly astronomic consequences such as government, individual or corporate control; empowered hackers, or more deadly warfare; all because of the incredible computational power`,
        BGImage: future,
        align: 'left',
        theme: 'glassWhite',
    },
    {
        title: 'Bibliography',
        text: `https://docs.google.com/document/d/1NErXi0-EWLkPUAakeNA94AUweDPRItjSJgo6vo-d82k/edit?usp=sharing`,
        BGImage: '',
        align: 'center',
        theme: 'glassWhite',
    },
    {
        title: 'Quantum Computing',
        text: `By Nathan and Carson`,
        BGImage: hero,
        align: 'center',
        theme: 'glassWhite',
    },*/
]
