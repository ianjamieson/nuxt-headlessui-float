import { defineNuxtModule, addComponent } from '@nuxt/kit'
export interface ModuleOptions {
  prefix: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-headlessui-float',
    configKey: 'nuxtHeadlessUiFloat'
  },
  defaults: {
    prefix: 'Headless',
  },
  async setup (options) {
    addComponent(
      {
        name: `${options.prefix}Float`,
        export: 'Float',
        filePath: '@headlessui-float/vue',
      }
    );
  }
})
