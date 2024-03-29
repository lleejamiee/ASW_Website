// pages/api/hook.js
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

const secret = process.env.SANITY_REVALIDATE_SECRET;

export default async function handler(req, res) {
    const signature = req.headers[SIGNATURE_HEADER_NAME];
    const body = await readBody(req); // Read the body into a string
    if (!(await isValidSignature(body, signature, secret))) {
        res.status(401).json({ success: false, message: "Invalid signature" });
        return;
    }

    const jsonBody = JSON.parse(body);
    doSomeMagicWithPayload(jsonBody);
    res.json({ success: true });
}

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
    api: {
        bodyParser: false,
    },
};

async function readBody(readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks).toString("utf8");
}
