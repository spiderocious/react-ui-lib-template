# React UI Component Library Template

A comprehensive, production-ready template for building modern React UI component libraries with TypeScript, automated testing, interactive documentation, and complete CI/CD pipeline.

## Features

**Core Technologies**
- React 18 with TypeScript 5 for type-safe component development
- Vite for fast bundling and development with tree-shaking support
- ESM and CommonJS output formats for maximum compatibility

**Development Experience**
- Storybook 7 for interactive component documentation and playground
- Path aliases (@/components, @/hooks, @/utils, @/types) for clean imports
- Hot module replacement during development
- TypeScript strict mode with comprehensive type checking

**Testing Infrastructure**
- Jest test runner with React Testing Library for component testing
- JSDOM environment for realistic DOM testing
- Coverage reporting with configurable thresholds
- Test utilities and custom matchers included

**Code Quality & Standards**
- ESLint with TypeScript, React, and Storybook rules
- Prettier for consistent code formatting
- Husky git hooks for pre-commit linting and pre-push testing
- Automated code quality checks in CI pipeline

**Build & Deployment**
- Optimized production builds with multiple output formats
- Declaration files generation for TypeScript consumers
- GitHub Actions workflow for automated testing and deployment
- Semantic release configuration for automated versioning

## Getting Started

### Prerequisites
- Node.js 18+ (recommended: latest LTS version)
- npm 9+ or yarn 1.22+
- Git for version control

### Installation

1. **Clone or download the template**
   ```bash
   git clone <your-repo-url>
   cd lib-lib-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required dependencies and set up Husky git hooks automatically.

3. **Verify the installation**
   ```bash
   npm run build
   npm test
   npm run lint
   ```

4. **Start development environment**
   ```bash
   npm run storybook
   ```
   This opens Storybook at http://localhost:6006 with interactive component documentation.

### Customization

Before building your components, update the following:

1. **Package information** in `package.json`:
   ```json
   {
     "name": "@your-org/your-library-name",
     "description": "Your library description",
     "author": "Your Name <your.email@example.com>",
     "repository": "https://github.com/your-org/your-library"
   }
   ```

2. **Library name** in `vite.config.ts`:
   ```typescript
   name: 'YourLibraryName'
   ```

3. **Update README** with your specific library details

## Available Scripts

### Development Scripts
| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm run dev` | Build library in watch mode | During component development to see changes instantly |
| `npm run storybook` | Start Storybook development server | Interactive component development and testing |
| `npm run typecheck` | Run TypeScript type checking | Verify type safety without building |

### Testing Scripts
| Command | Description | Output |
|---------|-------------|---------|
| `npm test` | Run all tests once | Pass/fail results with basic coverage |
| `npm run test:watch` | Run tests in watch mode | Continuous testing during development |
| `npm run test:coverage` | Generate detailed coverage report | HTML report in `/coverage` directory |

### Code Quality Scripts
| Command | Description | Auto-fixes |
|---------|-------------|-------------|
| `npm run lint` | Check code for linting errors | None (report only) |
| `npm run lint:fix` | Fix auto-fixable linting issues | Yes (modifies files) |
| `npm run format` | Format code with Prettier | Yes (modifies files) |
| `npm run format:check` | Check if code is properly formatted | None (report only) |

### Build Scripts
| Command | Description | Output Location |
|---------|-------------|-----------------|
| `npm run build` | Build library for production | `/dist` directory |
| `npm run build-storybook` | Build Storybook for deployment | `/storybook-static` directory |

## Project Architecture

### Directory Structure
```
lib-lib-template/
├── .github/workflows/   # GitHub Actions CI/CD pipelines
├── .husky/             # Git hooks for code quality enforcement
├── .storybook/         # Storybook configuration
├── src/                # Source code
│   ├── components/     # React components (organized by component)
│   │   └── Button/     # Example Button component
│   │       ├── Button.tsx        # Component implementation
│   │       ├── Button.test.tsx   # Unit tests
│   │       ├── Button.stories.tsx # Storybook stories
│   │       └── index.ts          # Component exports
│   ├── hooks/          # Reusable React hooks
│   ├── utils/          # Utility functions and helpers
│   ├── types/          # TypeScript type definitions
│   └── index.ts        # Main library entry point
├── tests/              # Test configuration and utilities
├── dist/               # Built library output (generated)
├── coverage/           # Test coverage reports (generated)
└── storybook-static/   # Built Storybook (generated)
```

### Path Aliases
The template includes configured path aliases for cleaner imports:

```typescript
// Instead of relative imports
import { Button } from '../../../components/Button'
import { cn } from '../../../utils'

// Use clean absolute imports
import { Button } from '@/components/Button'
import { cn } from '@/utils'
```

**Available aliases:**
- `@/*` - Maps to `src/*`
- `@/components/*` - Maps to `src/components/*`
- `@/hooks/*` - Maps to `src/hooks/*`
- `@/utils/*` - Maps to `src/utils/*`
- `@/types/*` - Maps to `src/types/*`

These aliases are configured across:
- TypeScript (`tsconfig.json`)
- Vite (`vite.config.ts`)
- Jest (`jest.config.js`)
- Storybook (`.storybook/main.ts`)

## Library Usage

### Installation in Consumer Projects

```bash
npm install @your-org/your-library-name
# or
yarn add @your-org/your-library-name
```

### Basic Component Usage

```tsx
import React from 'react'
import { Button, type ButtonProps } from '@your-org/your-library-name'

function MyApp() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div>
      {/* Basic usage */}
      <Button onClick={handleClick}>
        Default Button
      </Button>

      {/* With variants and sizes */}
      <Button variant="primary" size="large">
        Primary Large Button
      </Button>

      {/* With loading state */}
      <Button variant="secondary" isLoading>
        Loading...
      </Button>

      {/* Disabled state */}
      <Button variant="destructive" disabled>
        Cannot Click
      </Button>
    </div>
  )
}
```

### TypeScript Support

The library provides full TypeScript support with exported interfaces:

```tsx
import { type ButtonProps, type Size, type Variant } from '@your-org/your-library-name'

// Use the types in your own components
interface CustomButtonProps extends ButtonProps {
  customProp?: string
}

// Or use the individual types
const sizes: Size[] = ['small', 'medium', 'large']
const variants: Variant[] = ['primary', 'secondary', 'destructive', 'outline', 'ghost']
```

## Component Development

### Adding New Components

1. Create a new directory in `src/components/`
2. Create the component file (`Component.tsx`)
3. Add tests (`Component.test.tsx`)
4. Add Storybook stories (`Component.stories.tsx`)
5. Export from `index.ts` files
6. Update the main `src/index.ts`

### Example Button Component

The template includes a comprehensive Button component that demonstrates:

- **Variants**: `primary`, `secondary`, `destructive`, `outline`, `ghost`
- **Sizes**: `small`, `medium`, `large`
- **States**: `loading`, `disabled`
- **TypeScript**: Full type safety with proper prop interfaces
- **Testing**: Comprehensive test coverage
- **Documentation**: Interactive Storybook stories

## Configuration

### TypeScript

The `tsconfig.json` is configured with strict settings for maximum type safety:

- Strict mode enabled
- No implicit any
- Unused variable detection
- Exact optional property types

### ESLint

Configured with:
- TypeScript support
- React best practices
- Storybook integration
- Automatic fixing on commit

### Prettier

Consistent code formatting with:
- No semicolons
- Single quotes
- Trailing commas
- 80 character line width

### Husky Git Hooks

- **pre-commit**: Runs linting and formatting
- **pre-push**: Runs type checking and tests

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage
```

### Testing Philosophy

- Unit tests for all components
- Integration tests for complex interactions
- High coverage requirements (>90%)
- Testing user interactions, not implementation details

## Storybook

### Development

```bash
npm run storybook
```

### Building for Production

```bash
npm run build-storybook
```

Stories are automatically generated from:
- Component props (via TypeScript)
- JSDoc comments
- Story files (`*.stories.tsx`)

## Building and Publishing

### Local Build

```bash
npm run build
```

Outputs:
- `dist/index.js` - ESM bundle
- `dist/index.cjs` - CommonJS bundle
- `dist/index.d.ts` - TypeScript definitions

### Publishing

The template includes GitHub Actions for automated publishing:

1. **On PR**: Run tests and build checks
2. **On merge to main**: Automatic semantic versioning and npm publish

### Manual Publishing

```bash
npm run build
npm publish
```

## CI/CD

GitHub Actions workflow includes:

- ✅ Multi-Node.js version testing (18.x, 20.x)
- ✅ Linting and type checking
- ✅ Test coverage reporting
- ✅ Build verification
- ✅ Storybook deployment
- ✅ Automated semantic releases

## Customization

### Branding

1. Update `package.json` name, description, and author
2. Modify README.md with your library details
3. Update component examples
4. Customize Storybook theme in `.storybook/`

### Styling

The template uses utility classes for styling. You can:

1. Replace with your CSS-in-JS solution
2. Add styled-components or emotion
3. Integrate with your design system
4. Add CSS modules support

### Adding Dependencies

```bash
# For library usage (will be bundled)
npm install <package>

# For development only
npm install -D <package>

# For peer dependencies (user must install)
# Add to peerDependencies in package.json
```

## Troubleshooting

### Common Issues

1. **TypeScript errors**: Check `tsconfig.json` and ensure all types are installed
2. **Build failures**: Verify all imports are correctly typed
3. **Test failures**: Ensure React Testing Library setup is correct
4. **Storybook issues**: Check story file extensions and imports

### Getting Help

1. Check the [GitHub Issues](https://github.com/your-org/lib-lib-template/issues)
2. Review the [Storybook documentation](https://storybook.js.org/docs)
3. Consult [React Testing Library docs](https://testing-library.com/docs/react-testing-library/intro)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories
5. Ensure all checks pass
6. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- [Testing Library](https://testing-library.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)