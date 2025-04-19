import { Request, Response } from 'express';

export const getExample = (req: Request, res: Response): void => {
    res.json({ message: 'GET example endpoint' });
};

export const createExample = (req: Request, res: Response): void => {
    const { data } = req.body;
    res.json({ message: 'POST example endpoint', data });
};