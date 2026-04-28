"use client";

import emailjs from "@emailjs/browser";
import { useCallback, useEffect, useState } from "react";

type ToastState = { kind: "success" | "error"; message: string } | null;

/** Keys must match placeholders in the EmailJS template (e.g. {{from_name}}, {{user_email}}). */
const EMAIL_TEMPLATE_KEYS = {
	from_name: "from_name",
	user_email: "user_email",
	phone: "phone",
	message: "message",
} as const;

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [isSending, setIsSending] = useState(false);
	const [toast, setToast] = useState<ToastState>(null);

	useEffect(() => {
		if (!toast) {
			return;
		}
		const t = window.setTimeout(() => setToast(null), 5000);
		return () => window.clearTimeout(t);
	}, [toast]);

	const showToast = useCallback(
		(kind: "success" | "error", message: string) => {
			setToast({ kind, message });
		},
		[],
	);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const trimmedName = name.trim();
		const trimmedEmail = email.trim();
		const trimmedMessage = message.trim();
		if (!trimmedName || !trimmedEmail || !trimmedMessage) {
			showToast("error", "Please fill in your name, email, and message.");
			return;
		}

		const serviceId = process.env.NEXT_PUBLIC_SERVICEID;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATEID;
		const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
		if (!serviceId || !templateId || !publicKey) {
			showToast("error", "Email is not configured. Please try again later.");
			return;
		}

		setIsSending(true);
		try {
			await emailjs.send(
				serviceId,
				templateId,
				{
					[EMAIL_TEMPLATE_KEYS.from_name]: trimmedName,
					[EMAIL_TEMPLATE_KEYS.user_email]: trimmedEmail,
					[EMAIL_TEMPLATE_KEYS.phone]: phone.trim(),
					[EMAIL_TEMPLATE_KEYS.message]: trimmedMessage,
				},
				{ publicKey },
			);
			showToast("success", "Thanks! Your message was sent.");
			setName("");
			setEmail("");
			setPhone("");
			setMessage("");
		} catch (err) {
			console.error("EmailJS send failed", err);
			showToast(
				"error",
				"Something went wrong. Please try again or call us directly.",
			);
		} finally {
			setIsSending(false);
		}
	};

	const inputClass =
		"w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-[#ff6b35] transition-colors";

	return (
		<div className="relative">
			{toast ? (
				<div
					className={`fixed bottom-6 left-1/2 z-[100] w-[min(100%,400px)] -translate-x-1/2 rounded-lg px-4 py-3 text-center text-sm font-medium shadow-lg ${
						toast.kind === "success"
							? "bg-emerald-700 text-white"
							: "bg-red-800 text-white"
					}`}
					role="status"
				>
					<button
						type="button"
						className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-1 text-lg leading-none opacity-80 hover:opacity-100"
						onClick={() => setToast(null)}
						aria-label="Dismiss"
					>
						×
					</button>
					<span className="pr-6">{toast.message}</span>
				</div>
			) : null}

			<form className="space-y-4" onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						name="user_name"
						placeholder="Your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className={inputClass}
						disabled={isSending}
						autoComplete="name"
					/>
				</div>
				<div>
					<input
						type="email"
						name="user_email"
						placeholder="Your Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={inputClass}
						disabled={isSending}
						autoComplete="email"
					/>
				</div>
				<div>
					<input
						type="tel"
						name="user_phone"
						placeholder="Your Phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className={inputClass}
						disabled={isSending}
						autoComplete="tel"
					/>
				</div>
				<div>
					<textarea
						name="message"
						placeholder="Describe your yard, timeline, or outdoor project…"
						rows={10}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className={`${inputClass} resize-none`}
						disabled={isSending}
					/>
				</div>
				<button
					type="submit"
					disabled={isSending}
					className="w-full bg-gradient-to-r from-[#ff6b35] to-[#ff006e] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
				>
					{isSending ? "Sending…" : "Send Message"}
				</button>
			</form>
		</div>
	);
}
