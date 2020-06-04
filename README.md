
# 📦 dependency-messaging-nest // @thefirstspine/messaging-nest

Built on top of <https://github.com/thefirstspine/dependency-messaging|@thefirstspine/messaging>. Provides Nest services & guard.

## Install

```bash
npm i @thefirstspine/messaging-nest@latest
```

## Configuration

The configuration is the same as <https://github.com/thefirstspine/dependency-messaging|@thefirstspine/messaging> module.

## Documentation

### MessagingService

Nest service to interact with thr TFS messaging net service.

#### sendMessage

Sends a message in a subject to the clients connected to the service.

**Synopsis:** `async sendMessage(to: number[]|'*', subject: string|'*', message: any): Promise<IMessagingResponse>`

**Params:**

- `to: number[]|'*'` The list of the users that will receive the message. `*` is for all users.
- `subject: string|'*'` The subject concerned by the message.
- `message: any` The message to send.

## How to use

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Publish on NPM

```bash
npm publish
```

## License

TFS Platform is NOT licensed. You are free to download, view, run the repository. You are NOT allowed to redistribute this project for both commercial and non-commercial use. Deal with it.
