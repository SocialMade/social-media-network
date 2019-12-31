# Social Media Network
The root project building use yarn workspace feature. Reading how to work with yarn workspace https://yarnpkg.com/en/docs/cli/workspaces
Website here: https://socialmade.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/793313c3-6bb8-4d34-8b62-fc0a5d19cc0e/deploy-status)](https://app.netlify.com/sites/socialmade/deploys)

### 1. install yarn global
```shell
npm i yarn -g
```

### 2. install dependency from root use yarn
```shell
yarn install
```

### 3. work with specific package
```shell
yarn workspace <workspace> <command>
```
Example:
package name is field name in package.json
```shell
yarn workspace social-media-network-core test
```

### 3. work with specific package
```shell
yarn workspaces run <command script>
```
Example:
```shell
yarn workspaces test
```


## Discusion Issues and solution: 
nohoist in Workspaces: https://yarnpkg.com/blog/2018/02/15/nohoist/
