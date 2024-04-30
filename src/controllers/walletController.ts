import { Request, Response } from 'express';
import { WalletService } from '../services/walletService';

const walletService = new WalletService();

export const creditAmount = async (req: Request, res: Response) => {
    try {
        await walletService.credit(req.body.userId, req.body.amount);
        res.status(200).send({ message: 'Amount credited successfully' });
    } catch (error: any) {
        res.status(500).send({ error: error.message });
    }
};

export const debitAmount = async (req: Request, res: Response) => {
    try {
        await walletService.debit(req.body.userId, req.body.amount);
        res.status(200).send({ message: 'Amount debited successfully' });
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
};

export const getBalance = async (req: Request, res: Response) => {
    try {
        const balance = await walletService.getBalance(req.body.userId);
        res.status(200).send({ balance });
    } catch (error: any) {
        res.status(404).send({ error: error.message });
    }
};
