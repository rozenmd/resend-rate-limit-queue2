import { Resend } from 'resend';

interface Message {
	email: string;
}

export default {
	async fetch(req: Request, env: Env): Promise<Response> {
		const path = new URL(req.url).pathname;
		const method = req.method;
		if (path === '/api/email' && method === 'POST') {
			try {
				// Instead of sending the email, send the user ID
				await env.EMAIL_QUEUE.send({ email: await req.text() }, { delaySeconds: 1 });
				return new Response('Success!');
			} catch (e) {
				return new Response('Error!', { status: 500 });
			}
		}
		return new Response('Not found', { status: 404 });
	},
	async queue(batch: MessageBatch<Message>, env: Env): Promise<void> {
		// Initialize Resend
		const resend = new Resend(env.RESEND_API_KEY);
		for (const message of batch.messages) {
			try {
				// Fetch the email from a database using the uer ID
				// const email = await fetchEmail(message.body.userId);

				const email = message.body.email;
				// send email
				const sendEmail = await resend.emails.send({
					from: 'onboarding@resend.dev',
					to: [email],
					subject: 'Hello World',
					html: '<strong>Sending an email from Worker!</strong>',
				});

				// check if the email failed
				if (sendEmail.error) {
					console.error(sendEmail.error);
					message.retry({ delaySeconds: 5 });
				} else {
					// if success, ack the message
					message.ack();
				}
			} catch (e) {
				console.error(e);
				message.retry({ delaySeconds: 5 });
			}
		}
	},
};
