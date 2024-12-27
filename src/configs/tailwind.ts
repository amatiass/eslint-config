import type { OptionsTailwind, TypedFlatConfigItem } from '../types'

import { ensurePackages, interopDefault } from '../utils'

export async function tailwind(
  options: OptionsTailwind = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    strict = false,
  } = options

  await ensurePackages([
    'eslint-plugin-tailwindcss',
  ])

  const [
    pluginTailwind,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-tailwindcss')),
  ] as const)

  return [
    {
      name: 'antfu/tailwind',
      plugins: {
        tailwind: pluginTailwind,
      },
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/no-contradicting-classname': 'warn',
        'tailwindcss/no-custom-classname': 'off',
        ...strict
          ? {
              'tailwindcss/no-arbitrary-values': 'error',
              'tailwindcss/no-unnecessary-arbitrary-value': 'error',
            }
          : {},
      },
    },
  ]
}
