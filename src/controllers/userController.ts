import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const user = await userService.createUser(email, name);
  res.status(201).json(user);
};

export const updateUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { email, name } = req.body;
  const user = await userService.updateUserById(id, email, name);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deletedUser = await userService.deleteUserById(id);
  if (deletedUser) {
    res.json({ message: 'Usuário deletado com sucesso!' });
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
};
