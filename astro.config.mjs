import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
const config = {
    integrations: [tailwind()],
    base: '/claim'
}

export default defineConfig(config);
