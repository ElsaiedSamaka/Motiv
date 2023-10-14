# NextTS Integration with Redux Toolkit

This is a template for creating a NextJS application that uses `redux-toolkit` to manage side effects.

We use `redux-devtools-extension` when running in developer mode to log actions and state changes and we
use `redux-persist` to save state between browser refreshes.

## Tech Stack

- NextTS
- React-Forms-Hook
- Redux Toolkit
- TailwindCss
- Yup

## How to run 
Clone this repo 

```sh
git clone 
```
Open cloned repo on code editor [i.e Vs code]
Then open the terminal and run following command 

```sh
json-server --watch .\db.json --port 4000
```

U have to install Json-server on your machine or just use 

```sh
npx json-server --watch .\db.json --port 4000
```

Then start the NextJs app in developer mode by using:

```sh
npm run dev
```
or
```sh
pnpm run dev
```