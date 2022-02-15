<h1 align="center">Followup Node SDK</h1>

<div align="center">

And SDK to interact with the Followup API

</div>

## ✨ Features

- 🌈 Trigger new notifications from node
- 📦 Easy to setup and integrate
- 🛡 Written in TypeScript with predictable static types.

## 📦 Install

```bash
npm install @followup/node
```

```bash
yarn add @followup/node
```

## 🔨 Usage

```ts
import { Followup } from '@followup/node';

const followup = new Followup(process.env.FOLLOWUP_API_KEY);

await followup.trigger('<REPLACE_WITH_EVENT_NAME>', {
  $user_id: "<USER IDENTIFIER>",
  $email: "<USER_EMAIL>",
  customAttribute: "", // use the custom attribute from each event here
  firstName: "" 
});

```

### TypeScript

`@followup/node` is written in TypeScript with complete definitions.

## 🔗 Links

- [Home page](https://followup.so/)
