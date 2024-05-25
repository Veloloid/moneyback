import {NextApiRequest, NextApiResponse} from "next";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { name, username, password } = req.body;

    console.log(
        name, username, password
    )

    res.json({
        success: true,
    })
}