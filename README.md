# APIsCourse-BackendEngineering-1Foundations
This repository aims to provide a comprehensive foundation of practice code for REST APIs within a TypeScript and Node.js environment.

---

## Lesson 4 Core TS Fundamentals P1

### Initial Setup Typescript 



```bash 
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init

npx tsc --version
npx ts-node --version

npm uninstall ts-node typescript
npm install --save-dev typescript@5.4.5 ts-node@10.9.2


```

### Exec a ts file

```bash 
npx ts-node Hash_Maps_Sets/pair-sum-unsorted.ts
```


---

## Lesson 4 Core TS Fundamentals P2

###  Terminal Setup Workflow:
```bash
  npm init -y
  npm i express cors dotenv
  npm i -D typescript @types/express @types/cors nodemon eslint
  tsc --init

```


     - Update tsconfig.json: "target": "es6", "outDir": "./dist", "sourceMap": true, "moduleResolution": "node"
