import fs from 'node:fs'
import path from 'node:path'
import { propertyMap } from './src/css/style/property-map'
import { cssDefaultPropertyValueMap } from './src/css/style/default-value-map'
import { camelToKebabCase } from './src/css/util'
import { themeHueSaturation, themeLightnessAlpha } from './src/css/style/theme'

const themeCSS = `/* WOWJOB UI CSS
Yet Another CSS UI library, which provides zero build time, best debugging DX, very flexible, reposniveness for RWD at core, and works with React, NextJS, Astro and more
Author: Marian Zburlea
Organization: Wow Job
GitHub: https://github.com/wowjob
Website: https://wowjob.blog
Website: https://wowjob.dev
Website: https://wowjob.ai
*/
/* CSS theme */
${themeHueSaturation}
${themeLightnessAlpha}
/* CSS Properties */`
const styleFileList = [
  'src/css/css/reset.css',
  'src/css/css/all.css',
  'src/css/css/all.min.css',
]
const allCSSNameMap = {
  development: 'src/css/css/all.css',
  production: 'src/css/css/all.min.css',
}

const propertyList = Object.keys(propertyMap)

const buildCss = () => {
  // create dir structure
  const outputDir = 'dist/css'
  fs.mkdirSync(outputDir, { recursive: true })

  const finalCSSMap = {
    development: [],
    production: [],
  }

  const finalCSS = {
    development: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
    production: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
  }

  for (const env of ['development', 'production']) {
    for (const property of propertyList) {
      finalCSSMap[env].push({
        cssPropertyName: property,
        className: propertyMap[property].className[env],
        responsive: {
          mobile: propertyMap[property].className[env],
          tablet: `t-${propertyMap[property].className[env]}`,
          desktop: `d-${propertyMap[property].className[env]}`,
        },
      })
    }
  }

  for (const env of ['development', 'production']) {
    for (const screenType of ['mobile', 'tablet', 'desktop']) {
      for (const property of finalCSSMap[env]) {
        const varName = `--${property.responsive[screenType]}`
        const varNameM = `--${property.responsive.mobile}`
        const varNameT = `--${property.responsive.tablet}`
        const defaultValue =
          screenType === 'mobile'
            ? cssDefaultPropertyValueMap[property.cssPropertyName]
            : `var(${screenType === 'tablet' ? varNameM : varNameT})`

        finalCSS[env][screenType] +=
          env === 'development'
            ? `${
                screenType === 'mobile'
                  ? '#wowjob-ui '
                  : `#wowjob-ui .${screenType}`
              }.${property.className} {
  ${varName}: ${defaultValue};
  ${camelToKebabCase(property.cssPropertyName)}: var(${varName});
}
`
            : `#wowjob-ui .${
                property.className
              }{${varName}:${defaultValue};${camelToKebabCase(
                property.cssPropertyName
              )}:var(${varName});}`
      }
    }

    const filePath = path.resolve(allCSSNameMap[env])

    const fileContent =
      env === 'development'
        ? `${themeCSS}
${finalCSS[env].mobile}

@media screen and (min-width: 48rem) {
${finalCSS[env].tablet}
}

@media screen and (min-width: 80rem) {
${finalCSS[env].desktop}
}`
        : `${themeCSS}
${finalCSS[env].mobile}@media screen and (min-width: 48rem) {${finalCSS[env].tablet}}@media screen and (min-width: 80rem) {${finalCSS[env].desktop}}`

    fs.writeFileSync(filePath, fileContent, 'utf8')
  }

  // copy css files
  for (const styleFile of styleFileList) {
    const filePath = path.resolve(styleFile)
    const fileName = styleFile.split('/').reverse()[0]
    const fileContent = fs.readFileSync(filePath, 'utf8')
    fs.writeFileSync(path.join(outputDir, fileName), fileContent, 'utf8')
  }
}

buildCss()
