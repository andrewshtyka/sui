# Next.js 16 project starter

### Install

```bash
npm i
```

<br/>

### Run local server

```bash
npm run dev
```

<br/>

### Used libraries:

- [Motion](https://motion.dev/docs/react)
- [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/getting-started)
- [React remove scroll](https://www.npmjs.com/package/react-remove-scroll)

<br/>

### Project structure

```
next-16-project-starter/
│
├── public/                         # Assets available from browser
│   ├── images/
│   ├── videos/
│   └── fonts/
│
└── src/
    ├── app/                        # Layouts and pages
    │   ├── favicon.ico
    │   ├── page.jsx
    │   └── layout.jsx
    │
    ├── components/
    │   ├── _TemplateComponent/     # Template for a component (copy and rename)
    │   ├── icons/                  # Icon components
    │   ├── layout/                 # Layout components & Page sections
    │   └── ui/                     # Reusable UI components
    │
    ├── constants/                  # Constant values (util, animation, etc)
    │
    ├── data/                       # Local data (if data is not fetched)
    │
    ├── hooks/                      # Custom React hooks
    │
    ├── lib/                        # Third-party integrations
    │
    ├── providers/                  # Context and providers
    │
    ├── components/
    │   ├── tokens/                 # CSS variables (colors, spacings, font-related)
    │   ├── global.css              # Global styles
    │   └── reset.css               # Reset default styles
    │
    └── utils/                      # Helper functions
```

<br/>

### `.gitkeep`

Delete `.gitkeep` from folder that is not empty anymore
