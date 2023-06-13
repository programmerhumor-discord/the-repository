import { StoreMessage } from "@/app/redis";
import { useRouter } from 'next/router';

const PostMessage = () => {
    const router = useRouter();

    const { username, message } = router.query;

    if (typeof username === 'string' && typeof message === 'string') {
        StoreMessage(username, message);
    }
}

export default postMessage;
