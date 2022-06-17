## **Rich Presence Pc Status for BetterDiscord Plugin**

**BetterDiscord**

-   PluginRepo _Coming soon if everything is ready_
-   [Download latest](https://github.com/Faelayis/RPC-Pc-Status-BetterDiscord/releases/download/v2.5.0/RPCPcStatus.plugin.js)

Original [RPC-Pc-Status](https://github.com/Faelayis/RPC-Pc-Status#readme)<br>

## Preview

![](https://user-images.githubusercontent.com/48393914/167441799-19f7e2d6-8fad-43db-a653-08d6b6295c8c.png)
![](https://user-images.githubusercontent.com/48393914/170522040-36a1eebd-39d4-45af-a86c-2127d99d0fb2.png)

## Development

```
git clone https://github.com/Faelayis/RPC-Pc-Status-BetterDiscord
cd RPC-Pc-Status-BetterDiscord

# install dependencies (login github is required)
npm install

# if you don't want login github tokens (delete @betterdiscordbuilder/bdbuilder in package.json)
npm install bdbuilder@latest

# install dependencies for plugin
npm run npm-install

# build plugin (file will be replaced RPCPcStatus.plugin.js)
npm run dev
```

⚠️ if you want pull requests discard changes `package.json` after install dependencies (not using github token)

#### Login Github Token

[Create token](https://github.com/settings/tokens/new?description=Github%20NPM%20registry&scopes=repo%2Cread%3Apackages)

```
npm login --scope=@betterdiscordbuilder --registry=https://npm.pkg.github.com
```

**or**

```
npm install -g npm-cli-login
npm-cli-login -u "user_name" -p "access_token" -e "user_email" -r "https://npm.pkg.github.com" -s "@betterdiscordbuilder"
```
