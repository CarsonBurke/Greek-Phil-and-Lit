import stock1 from './images/stock1.jpg'
import stock2 from './images/stock2.jpg'
import hero from './images/heroBG.png'
import eagle from './images/eagle.png'
import basicMechanics from './images/basicMechanics.png'
import qubitChip from './images/qubitChip.png'
import qubit from './images/qubit.png'
import systemOne from './images/systemOne.png'
import quantumComputer from './images/quantumComputer.png'
import quantomComputerBG from './images/quantumComputerBG.png'
import science from './images/science.png'
import greenEnergy from './images/greenEnergy.png'
import government from './images/government.jpg'
import future from './images/future.png'

export interface SlideType {
    title: string
    /**
     * Rich text expansion on the title
     */
    text: string
    BGImage: string
    image?: string
    align: 'center' | 'left' | 'right'
    theme?: 'glassBlack' | 'glassWhite'
}

export const slides: SlideType[] = [
    {
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
    },
]