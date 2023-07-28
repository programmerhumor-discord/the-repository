"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export function DestroyButton() {
	const [show, setShow] = useState<boolean>(false);
	const video = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (video.current) {
			if (show) {
				video.current.play();
			} else {
				video.current.currentTime = 0;
				video.current.pause();
			}
		}
	}, [show]);

	return (
		<>
			<video
				src="/boom.mp4"
				ref={video}
				onEnded={() => setShow(false)}
				className={clsx(
					"fixed inset-0 h-full w-full opacity-40",
					!show && "hidden"
				)}></video>
			<button
				onClick={() => setShow(true)}
				className="btn-primary btn-lg btn">
				DESTROY THE FUCKING WORLD!!!! 🌍🌏🌎🔥🔥🔥💥💥💥💥
			</button>
		</>
	);
}
