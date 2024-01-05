---
runme:
  id: 01HJRY4ATACHHABPT1JC4PBQ9B
  version: v2.0
---

install packaged

`npm ci`

start dev

`npm run dev`

check linter fo all files

`npm run lint`

format all files

`npm run format`

local preview

`npm run preview`

run storybook server

```sh {"id":"01HJVGC6BG274MAP4MNDPHCDSB"}
npm run storybook
```

init layer

`npm run create-layer`

run tests

`npm run test`

to run a single file use

`npm run test path/to/file`

ESLint files project error in ts files VSCODE FIX

1. Open the settings Ctrl + ,
2. Search for `eslint.workingDirectories`
3. Click on "Edit in settings.json"
4. Add the following configuration:

```sh {"id":"01HJS1VNF8SFNYGV7MQH4JVFYB"}
{
  "eslint.workingDirectories": ["./client"]
}
```

```
Example when add lightmode and need explicit color assign
:global(:where(body.light)) {
  .DialogContent {
    background-color: red;
  }
}
```
