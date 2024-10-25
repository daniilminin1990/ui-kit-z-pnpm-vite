// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///D:/mine-projects/ui-kit-z-pnpm-vite/node_modules/.pnpm/vite@5.4.10_@types+node@22.7.9_sass@1.80.4/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "D:\\mine-projects\\ui-kit-z-pnpm-vite";
var vite_config_default = defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      // Точка входа приложения
      name: "ui-kit-snapmoment",
      // название библы
      // the proper extensions will be added
      fileName: "index"
      // название выходного файла
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxtaW5lLXByb2plY3RzXFxcXHVpLWtpdC16LXBucG0tdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbWluZS1wcm9qZWN0c1xcXFx1aS1raXQtei1wbnBtLXZpdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L21pbmUtcHJvamVjdHMvdWkta2l0LXotcG5wbS12aXRlL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksIC8vIFx1MDQyMlx1MDQzRVx1MDQ0N1x1MDQzQVx1MDQzMCBcdTA0MzJcdTA0NDVcdTA0M0VcdTA0MzRcdTA0MzAgXHUwNDNGXHUwNDQwXHUwNDM4XHUwNDNCXHUwNDNFXHUwNDM2XHUwNDM1XHUwNDNEXHUwNDM4XHUwNDRGXG4gICAgICAgICAgICBuYW1lOiAndWkta2l0LXNuYXBtb21lbnQnLCAvLyBcdTA0M0RcdTA0MzBcdTA0MzdcdTA0MzJcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDMxXHUwNDM4XHUwNDMxXHUwNDNCXHUwNDRCXG4gICAgICAgICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxuICAgICAgICAgICAgZmlsZU5hbWU6ICdpbmRleCcsIC8vIFx1MDQzRFx1MDQzMFx1MDQzN1x1MDQzMlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0MzJcdTA0NEJcdTA0NDVcdTA0M0VcdTA0MzRcdTA0M0RcdTA0M0VcdTA0MzNcdTA0M0UgXHUwNDQ0XHUwNDMwXHUwNDM5XHUwNDNCXHUwNDMwXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcbiAgICAgICAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5XG4gICAgICAgICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxuICAgICAgICAgICAgICAgIC8vIGZvciBleHRlcm5hbGl6ZWQgZGVwc1xuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBRjdCLElBQU0sbUNBQW1DO0FBR3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQTtBQUFBLE1BRUQsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQTtBQUFBLE1BQ3hDLE1BQU07QUFBQTtBQUFBO0FBQUEsTUFFTixVQUFVO0FBQUE7QUFBQSxJQUNkO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQTtBQUFBLE1BR1gsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUE7QUFBQTtBQUFBLFFBR0osU0FBUztBQUFBLFVBQ0wsS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
