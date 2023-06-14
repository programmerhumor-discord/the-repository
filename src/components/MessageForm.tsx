"use client";

import { Message } from "@/message-board/redis";
import { Dialog, Transition } from "@headlessui/react";
import { IconPlus } from "@tabler/icons-react";
import { Fragment, useState } from "react";

const inputState = <T,>(
	stateFunction: React.Dispatch<React.SetStateAction<T>>
) => {
	return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		stateFunction(e.target.value as T);
	};
};

interface MessageFormProps {
	addMessage: (message: Message) => void;
}

export function MessageForm(props: MessageFormProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [username, setUsername] = useState<string>();
	const [message, setMessage] = useState<string>();

	return (
		<div>
			<button
				className="btn-neutral btn"
				onClick={() => setIsOpen(true)}>
				<IconPlus className="h-5 w-5" />
				Post
			</button>
			<Transition
				show={isOpen}
				as={Fragment}>
				<Dialog
					// initialFocus={focusRef}
					onClose={() => setIsOpen(false)}
					className="relative z-50">
					{/* The backdrop, rendered as a fixed sibling to the panel container */}
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div
							className="fixed inset-0 bg-black/30"
							aria-hidden="true"
						/>
					</Transition.Child>

					{/* Full-screen container */}
					<div className="fixed inset-0 flex items-center justify-center p-4">
						{/* The actual dialog panel  */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<Dialog.Panel className="card max-h-full w-full max-w-md overflow-auto rounded-md bg-neutral text-primary-content">
								<div className="card-body">
									<Dialog.Title className="card-title text-neutral-content">
										New Post
									</Dialog.Title>
									<div className="form-control">
										<label className="label">
											<span className="label-text">
												Username
											</span>
										</label>
										<input
											className="input"
											maxLength={10}
											required
											onChange={inputState(setUsername)}
										/>
									</div>
									<div className="form-control">
										<label className="label">
											<span className="label-text">
												Message
											</span>
										</label>
										<textarea
											className="textarea"
											maxLength={150}
											required
											onChange={inputState(setMessage)}
										/>
									</div>

									<div className="card-actions justify-end">
										<button
											className="btn-primary btn"
											onClick={() => {
												const msg: Message = {
													username: username!.trim(),
													message: message!.trim()
												};

												if (!username || !message) {
													return;
												}

												fetch("/api/message", {
													method: "POST",
													headers: {
														"Content-Type":
															"application/json"
													},
													body: JSON.stringify(msg)
												});
												props.addMessage(msg);
												setMessage("");
												setUsername("");
												setIsOpen(false);
											}}>
											<IconPlus className="h-5 w-5" />
											Post
										</button>
										<button
											className="btn-error btn"
											onClick={() => setIsOpen(false)}>
											Cancel
										</button>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
}
