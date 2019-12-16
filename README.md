# Social Media Network
The root project building use yarn workspace feature. Reading how to work with yarn workspace https://yarnpkg.com/en/docs/cli/workspaces
### 1. install yarn global
```shell
npm i yarn -g
```
### 2. install dependency from root use yarn
```shell
yarn 
```
### 3. work with package from root
```shell
yarn workspaces backend <yarn command>
```
Example:
```shell
yarn workspaces run test
```

## Discusion Issues and solution: 
nohoist in Workspaces: https://yarnpkg.com/blog/2018/02/15/nohoist/
