import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  // GitHub Pages serves project sites from /<repository-name>/.
  // Locally and on other hosts the site remains available from the domain root.
  base: isGitHubActions && repositoryName ? `/${repositoryName}/` : '/',
  plugins: [react()],
})
