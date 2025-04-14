// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Maximo's Notes",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      (...args) =>
        rehypeKatex({
          ...args,
          macros: {
            "\\cii": "\\overline{#1}^{\\text{(+1)}}",
            "\\ci": "\\overline{#1}",
            "\\bin": "\\texttt{#1}_{2}",
            "\\oct": "\\texttt{#1}_{8}",
            "\\hex": "\\texttt{#1}_{16}",
            "\\ovf": "\\colorbox{red}{\\textcolor{white}{\\texttt{#1}}}",
          },
        }),
    ],
  },
});
