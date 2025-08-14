# RnGO Portfolio

A React portfolio website based on your Figma design, featuring an interactive bookshelf layout with animations and modern UI elements.

## Features

- **Interactive Bookshelf**: Hover effects on books, frames, and decorative items
- **Smooth Animations**: CSS animations for page load and element interactions
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Modern UI**: Clean design with backdrop blur effects and smooth transitions
- **TypeScript**: Full TypeScript support for better development experience

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

Since PowerShell execution policies may be restricted, you can install dependencies manually:

1. **Install Node.js dependencies**:
   ```bash
   npm install react@^18.2.0 react-dom@^18.2.0
   npm install -D @types/react@^18.2.43 @types/react-dom@^18.2.17 @typescript-eslint/eslint-plugin@^6.14.0 @typescript-eslint/parser@^6.14.0 @vitejs/plugin-react@^4.2.1 eslint@^8.55.0 eslint-plugin-react-hooks@^4.6.0 eslint-plugin-react-refresh@^0.4.5 typescript@^5.2.2 vite@^5.0.8
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── App.tsx          # Main portfolio component
├── App.css          # Component-specific styles
├── index.css        # Global styles and animations
└── main.tsx         # React entry point
```

## Design Elements

The portfolio recreates your Figma design with:

- **Bookshelf Layout**: Grid-based arrangement of books, picture frames, and decorative items
- **Central Display**: Main portfolio preview area
- **Navigation Bar**: Interactive page navigation with hover effects
- **Floating Elements**: "Clients' Opinions", "Rebranded!" tags, and "Latest works" text
- **Page Indicators**: Numbered pagination at the bottom

## Customization

### Adding Your Content

1. **Replace placeholder images**: Update the image URLs in `App.tsx`
2. **Modify shelf items**: Edit the `shelfItems` array to add your projects/skills
3. **Update colors**: Customize the color scheme in `index.css`
4. **Add your branding**: Replace "Site name" with your actual brand name

### Animations

The project includes several CSS animations:
- `fadeInUp`: Elements slide up while fading in
- `slideInFromLeft`: Elements slide in from the left
- `slideInFromRight`: Elements slide in from the right
- Hover effects for interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
