# Social Media Network
The root project building use yarn workspace feature. Reading how to work with yarn workspace https://yarnpkg.com/en/docs/cli/workspaces

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
