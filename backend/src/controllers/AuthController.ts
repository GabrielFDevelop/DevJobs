import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await AuthService.signup(name, email, password);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const result = await AuthService.login(email, password);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};