import { ConfigEnv, UserConfigExport, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import simpleServer from 'vite-plugin-mock-simple'
import mockConfig from './config.mock'

export default defineConfig(async ({ command, mode }: ConfigEnv) => {

  return {
    plugins: [
      vue(),
      simpleServer(mockConfig()),
    ]
  }
})
