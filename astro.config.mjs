import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import { portfolioIcons } from './utils/portfolio-icons.js';

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon({
            include: portfolioIcons,
        })]
});
