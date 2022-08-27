# iCompose

iCompose is a component library made with Vue 3 + TypeScript + Vite + Tailwind CSS.

Changelog:

:star: 0.1.0

Spreadsheet Table with the next features:<br /><br />
    :heavy_check_mark: Options dialog (simple/multiple selections; enable filtering or sorting data from headers).<br />
    :heavy_check_mark: The data can be downloaded in a Excel file.<br />
    :heavy_check_mark: Copy&Paste information selecting rows, cols, or a group of cells by area.<br />

:star: 0.2.0
Simple Data Table with the next features:<br /><br />
    :heavy_check_mark: Pagination options (rows per page; reset config button and to view rows 10 by 10<br />
    :heavy_check_mark: Visual effects on hover cells.<br />

:star: 0.3.0
Cards:<br /><br />
    :heavy_check_mark: Added custom cards components<br />

:star: 0.4.0
Smart form:<br /><br />
    :heavy_check_mark: Added smart form (the fields are generated depending on the data type) <br />

:star: 0.5.0
Spreadsheet tutorial:<br /><br />
    :heavy_check_mark: Added a tutorial on Spreadsheet table view <br />

:start: 0.6.0
    :heavy_check_mark: TypeScript and Tailwind CSS implementations <br />


--------------

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
