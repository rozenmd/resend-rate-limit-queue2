# Cloudflare Queues Rate Limit Example

This project demonstrates how to handle third-party API rate limiting with [Cloudflare Queues](https://developers.cloudflare.com/queues/). It provides a practical example of implementing rate limiting in your application to ensure smooth email sending operations using Resend while respecting the rate limits.

## Features

- Demonstrates rate limiting for email sending
- Uses Resend API for email operations
- Provides a simple and scalable approach to handle rate limits

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository

```sh
git clone https://github.com/harshil1712/queues-rate-limit.git
cd queues-rate-limit
```

2. Install dependencies

```sh
npm install
```

3. Set up your Resend API key

- Follow the steps mentioned in the [Resend documentation](https://resend.com/docs/dashboard/api-keys/introduction) to obtain your API key.
- Rename `.dev.vars.example` to `.dev.vars` and replace `YOUR_RESEND_API_KEY` with your actual API key.

4. Start the development server

```sh
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or report issues.

## Built with

- [Resend](https://resend.com/)
- [Cloudflare Queues](https://developers.cloudflare.com/queues/)

## License

This project is open source and available under the [MIT License](LICENSE).
