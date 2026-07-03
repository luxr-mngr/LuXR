export interface Cap {
  idx: string;
  title: string;
  kicker: string;
  body: string;
  items: string[];
  badge?: string;
}

export interface Project {
  id: string;
  client: string;
  title: string;
  cat: string[];
  status: 'deployed' | 'dev';
  platform: string;
  short: string;
  long: string;
  tech: string[];
  outcome: string;
  isStatus?: boolean;
  storeUrl?: string;
}

export interface Client {
  nm: string;
  role: string;
}

export const CAPS: Cap[] = [
  {
    idx: '01',
    title: 'LuXR Studios',
    kicker: 'Design   Engineering   Deployment',
    body: 'We build multi-user XR and VR in Unreal Engine 5, from cultural heritage to biomedical training, with photogrammetry, hand tracking and real-time multi-headset control.',
    items: [
      'Unreal Engine 5',
      'OpenXR / Multi-user & multi-headset',
      'Hand tracking & interaction',
      'Photogrammetry pipelines',
      'Meta Quest   Android XR',
    ],
  },
  {
    idx: '02',
    title: 'LuXR Solutions',
    kicker: 'Web   Apps   AI   IT',
    body: 'The software arm: websites, mobile and tablet apps, AI agents and the IT systems that power immersive deployments, and the businesses behind them.',
    items: [
      'Websites & web apps',
      'Mobile & tablet apps',
      'AI agents & automation',
      'Custom plugins & tooling',
      'IT solutions',
    ],
  },
  {
    idx: '03',
    title: 'Animation',
    kicker: 'On the horizon',
    badge: 'Soon',
    body: 'Next on our horizon: original animation that brings the worlds we build in XR to linear, cinematic storytelling.',
    items: ['Real-time cinematics', 'World & character design', 'Cultural storytelling'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'sockethub-plugin',
    client: 'YUYAY',
    title: 'SocketHub Plugin',
    cat: ['XR/VR'],
    status: 'deployed',
    platform: 'Meta Quest (VR)',
    short: 'A custom Unreal Engine 5 plugin for real-time local WebSocket control of multiple Meta Quest headsets from a single host tablet.',
    long: 'A custom Unreal Engine 5 plugin enabling real-time local WebSocket communication between a command tablet (host server) and multiple Meta Quest headsets (clients), handling level transitions, live audio transmission, and multi-user session control for cultural heritage immersive experiences.',
    tech: ['Unreal Engine 5', 'Custom UE5 Plugin', 'WebSocket', 'Blueprint / C++'],
    outcome: 'Real-time operator control over multiple simultaneous headsets from a single host device.',
  },
  {
    id: 'sockethub-app',
    client: 'YUYAY',
    title: 'SocketHub App',
    cat: ['App'],
    status: 'deployed',
    platform: 'Tablet (Android / iOS)',
    short: 'A companion tablet app acting as host server, managing multiple Quest clients, triggering transitions and transmitting live audio in real time.',
    long: "A companion tablet application serving as the host server for YUYAY's immersive cultural heritage experiences, allowing operators to manage multiple Meta Quest clients simultaneously, trigger level transitions, and transmit live audio commands in real time.",
    tech: ['WebSocket', 'Mobile App', 'Real-time Audio'],
    outcome: 'Centralized session-control dashboard for multi-headset VR deployments.',
  },
  {
    id: 'museo-itinerante',
    client: 'Mochica Cultural Heritage',
    title: 'Museo Itinerante VR',
    cat: ['XR/VR'],
    status: 'deployed',
    platform: 'XR (Meta Quest)',
    short: 'A traveling XR experience showcasing 10 photogrammetry-digitized Mochica artifacts, deployed across museums in Lima and festivals in Arequipa.',
    long: 'A traveling XR experience showcasing 10 photogrammetry-digitized Mochica cultural artifacts, deployed across museums in Lima and festivals in Arequipa. LuXR led the transition from VR to XR, integrated full hand tracking for all artifact interactions, and expanded the collection with audio descriptions and contextual multimedia for each piece.',
    tech: ['Unreal Engine 5', 'Photogrammetry', 'Hand Tracking', 'OpenXR'],
    outcome: 'Live multi-city deployment across cultural venues in Lima and Arequipa, Peru.',
    storeUrl: 'https://www.meta.com/es-es/experiences/museo-itinerante-xr-peru/25735959299325439/',
  },
  {
    id: 'vestigium',
    client: 'Peruvian Archaeology',
    title: 'VestigiumXR',
    cat: ['XR/VR'],
    status: 'dev',
    platform: 'Wired XR Glasses (Android XR)',
    isStatus: true,
    short: 'An XR platform for exploring and manipulating high-fidelity photogrammetry-digitized Peruvian artifacts otherwise unexhibited or inaccessible.',
    long: 'An XR platform for exploring and manipulating high-fidelity photogrammetry-digitized Peruvian archaeological artifacts that are otherwise unexhibited or physically inaccessible. Designed for museum visitors and the general public, VestigiumXR brings multiple Peruvian collections into immersive spatial experiences, letting users pick up, examine, and interact with artifacts at full scale.',
    tech: ['Unreal Engine 5', 'OpenXR', 'Photogrammetry Pipeline', 'Android XR'],
    outcome: 'In active development, targeting Android XR / Project Aura.',
  },
  {
    id: 'oct-xr',
    client: 'PUCP Biomedical',
    title: 'OCT XR',
    cat: ['XR/VR'],
    status: 'deployed',
    platform: 'XR (Meta Quest)',
    short: 'A didactic XR experience teaching users to operate an Optical Coherence Tomography device through interactive simulation.',
    long: 'A didactic XR experience that teaches users how to operate an Optical Coherence Tomography (OCT) device, interacting with fictional eye models, performing simulated measurements, and visualizing real-time results. Developed at PUCP and showcased at international events as an interactive demonstration of biomedical research.',
    tech: ['Unreal Engine 5', 'Interactive Simulation', 'Blueprint'],
    outcome: "Deployed at international academic and research events representing PUCP's biomedical engineering research.",
  },
  {
    id: 'horizon-pucp',
    client: 'PUCP',
    title: 'Horizon PUCP',
    cat: ['XR/VR'],
    status: 'deployed',
    platform: 'VR (Meta Quest)',
    short: "A multi-disciplinary VR showcase presenting research from PUCP's schools of engineering, psychology, physics and archaeology.",
    long: "A multi-disciplinary VR showcase presenting research projects from PUCP's schools of Mechatronics Engineering, Psychology, Civil Engineering, Physics, and Archaeology, giving attendees an immersive, interactive window into the university's research capabilities.",
    tech: ['Unreal Engine 5', 'Multi-scene Architecture', 'Blueprint'],
    outcome: 'Live deployment at multiple PUCP institutional and public events across disciplines.',
  },
];

export const CLIENTS: Client[] = [
  { nm: 'PUCP', role: 'University & research' },
  { nm: 'Yuyay', role: 'Immersive heritage' },
  { nm: 'Grupo Avatar', role: 'XR research group' },
  { nm: 'Museo Itinerante', role: 'Traveling exhibition' },
  { nm: 'Lima', role: 'Museum deployments' },
  { nm: 'Arequipa', role: 'Festival deployments' },
  { nm: 'Municipalidad de Magdalena', role: 'Government & culture' },
];
