import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response){
  const user = createUser({
    email: 'filipe@dev.com',
    password: '12344321',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 25 }
    ]
  });
  
  return res.json({ message: 'Hello World' });
}