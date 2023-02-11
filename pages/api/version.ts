// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import os from 'os';
import { version } from '../../package.json';

type Data = {
  version: string,
  hostname: string,
  env: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    version: version || '',
    hostname: os.hostname(),
    env: {
      BY: process.env.BY,
      BY_HOST: process.env.BY_HOST,
      SHOW_HOSTNAME: process.env.SHOW_HOSTNAME,
      TITLE: process.env.TITLE
    }
  })
}
