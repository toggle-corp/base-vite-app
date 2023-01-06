## Features

- [React](https://reactjs.org)

- [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild)

- [Absolute Imports](https://github.com/aleclarson/vite-tsconfig-paths)

- [TypeScript](https://www.typescriptlang.org)

- [PWA](https://github.com/antfu/vite-plugin-pwa)

- [Vitest](https://github.com/vitest-dev/vitest)

- [GitHub Actions](https://github.com/features/actions)

- [ESLint](https://eslint.org), [Stylelint](https://stylelint.io)

<br>


## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/toggle-corp/base-vite-app/generate)

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit toggle-corp/base-vite-app my-vite-app
cd my-vite-app
pnpm install
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Modify or delete the `LICENSE` file
- [ ] If you don't plan to use GitHub Actions, delete the `.github` directory
- [ ] Change the `favicon.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `ms-icon-144x144.png`  and `favicon.ico`
- [ ] Change the `title`, `description`, `icon`, `apple touch icon`, `mask icon`, `ms application tile image`, `ms application tile color` and `theme color` in the `index.html` and `vite.config.ts`
- [ ] Clean up the `READMEs` and remove routes
- [ ] Change the `name` field in package.json

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:5173

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```
To preview the build
```bash
pnpm preview
```
### Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm lint` - runs ESLint.
- `pnpm stylelint` - runs Stylelint.
- `pnpm typecheck` - runs typescript type check.
