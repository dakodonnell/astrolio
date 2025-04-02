

<div align="center">
<img src="logo.png" height="90px" width="auto" /> 
<h2>
    Minimalist resume template for pdf and web
</h2>
<p>
JSON resume schema: <a href="https://jsonresume.org/schema/">jsonresume.org</a>
</p>


<p>
Based on the design of <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>
</p>

<p>
Inspired by <a href="https://github.com/midudev/minimalist-portfolio-json">Miguel Ángel Durán</a>
</p>
<p>
A <a href="https://github.com/reorx/jsoncv">toolkit</a> for building your CV with JSON
</p>

</div>

<div align="center">
    <a href="#-get-started">
        🚀 Get Started
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-commands">
        🧞 Commands
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-license">
        🔑 License
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://dakodonnell.com">
        🔗 Personal
    </a>
</div>

<p></p>

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![GitHub stars](https://img.shields.io/github/stars/dakodonnell/astrolio)
![GitHub issues](https://img.shields.io/github/issues/dakodonnell/astrolio)
![GitHub forks](https://img.shields.io/github/forks/dakodonnell/astrolio)
![GitHub PRs](https://img.shields.io/github/issues-pr/dakodonnell/astrolio)

</div>

<img src="portada.png"></img>

## 🛠️ Stack

- [**Astro**](https://astro.build/) - Web framework.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with typed syntax.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Drop-down menu with keyboard shortcuts made in pure Javascript (optional).


## 🚀 Get Started

### 0. Ensure you have the proper dev tools

- For Astro to run on your system, you will also need to have Node.js installed, version `v18.17.1` or `v20.3.0` or later. (`v19` is not supported.)

```bash
# Check if you already have a compatible version of Node.js installed
node -v
```

- If the command returns a version number higher than `v18.17.1` or `v20.3.0` (excluding any `v19`), you’re good to go!

- If the command returns an error message like `Command 'node' not found`, or a version number lower than the required, then you need to [install a compatible Node.js version.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### 1. Use this [repo](https://github.com/dakodonnell/astrolio) as a _template_ for an Astro project

```bash
# Initialize the project
npm create astro@latest -- --template dakodonnell/astrolio
```

### 2. Add your content:
Add your Portfolio/CV to the template.
- The file for the printable Portfolio/CV must be named `cv.json` and located in the `src` folder
- The file `cv.json` must follow the JSON Resume [schema](https://jsonresume.org/schema) 
- Edit and rename the provided `cv_template.json`, or use a 
[builder](https://jsoncv.reorx.com)

(Helpful tip: Add _isActive_ and _GitHub_ attributes to your projects section in your JSON Resume.)
```
"isActive": true,
"GitHub": "https://github.com/GitHubUsername/GitHubRepo"
```

### 3. Launch the development server:

```bash
# See the result
npm run dev
```

- Open [**http://localhost:4321**](http://localhost:4321/) in your browser to see the result 🚀

## 🧞 Commands

|     | Command         | Action                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` or `start` | Launch a local development server in `localhost:4321`.  |
| ⚙️  | `build`          | Runs the build process checks for errors in the dist/ folder. `./dist/`.      |
| ⚙️  | `preview`        | Preview the local site `localhost:4321` |



## 🔑 License

[MIT](LICENSE.txt) - I stood on the shoulders of giants. So should you.



