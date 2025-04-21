export const SKILL_ICON_MAP = {
 
  // Programming Languages
  javascript: "devicon:javascript",
  typescript: "devicon:typescript",
  java: "devicon:java",
  c: "devicon:c",
  csharp: "devicon:csharp",
  cplusplus: "devicon:cplusplus",
  python: "devicon:python",
  ruby: "devicon:ruby",
  go: "devicon:go",
  rust: "devicon:rust",

  // Web Development
  html: 'devicon:html5',
  css: 'devicon:css3',
  sass: 'devicon:sass',
  tailwind: 'devicon:tailwindcss',
  react: "devicon:react",
  node: "devicon:nodejs",
  svelte: "devicon:svelte",
  next: "devicon:nextjs",
  flutter: "devicon:flutter",
  astro: "devicon:astro",

  // Tools & Ecosystem
  git: 'devicon:git',
  github: 'devicon:github',
  linux: 'devicon:linux',
  docker: 'devicon:docker',

  // Databases
  mysql: 'devicon:mysql',
  postgresql: 'devicon:postgresql',
  mongodb: 'devicon:mongodb',
  sqlite: 'devicon:sqlite',

  // Mobile & App Dev
  swift: 'devicon:swift',
  kotlin: 'devicon:kotlin',
  flutter: 'devicon:flutter',

  // Scientific Computing
  matlab: 'devicon:matlab',
  jupyter: 'devicon:jupyter',
  julia: 'devicon:julia',
  r: 'devicon:r',
  pandas: 'deicon:pandas',
  numpy: 'devicon:numpy',

  // Creative / Interdisciplinary
  photoshop: 'devicon:photoshop',
  lightroom: 'devicon:lightroom',
  indesign: 'devicon:indesign',
  illustrator: 'devicon:illustrator',
  aftereffects: 'devicon:aftereffects',
  figma: 'devicon:figma',
  blender: 'devicon:blender',
  unity: 'devicon:unity',

};
  
const ALIASES = {
  'c++': 'cplusplus',
  'c#': 'csharp',
  'nextjs': 'next',
  'nodejs': 'node',
  'reactjs': 'react',
  'js': 'javascript',
  'ts': 'typescript',
  'x' : 'twitter'
};

export function getIconName(name) {
  if (!name) return null;

  // Normalize the name to lowercase and remove special characters
  name = name.toLowerCase().replace(/[\s.+#()\/\\]/g, '');

  // Check if the name is in the aliases map
  name = ALIASES[name] ?? name;

  return SKILL_ICON_MAP[name] ?? null;
}
  