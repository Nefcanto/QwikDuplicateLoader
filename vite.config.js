import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from "path"

export default defineConfig(() => {
    return {
        plugins: [
            qwikCity({
                trailingSlash: false
            }),
            qwikVite(),
            tsconfigPaths(),
            partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
        ],
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        },
        server: {
            host: "0.0.0.0",
            hmr: {
                clientPort: 443,
            },
        },
        build: {
            rollupOptions: {
                external: [
                    'TagsParts'
                ]
            }
        },
        optimizeDeps: {
            include: ["@auth/core"]
        }
    }
})
