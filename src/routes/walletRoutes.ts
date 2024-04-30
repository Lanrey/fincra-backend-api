import { Router } from 'express';
import express, {Request, Response, NextFunction} from 'express';
import { check, validationResult } from 'express-validator';
import { creditAmount, debitAmount, getBalance } from '../controllers/walletController';

const router = Router();

const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post('/credit', [
    check('userId').not().isEmpty().withMessage('User ID is required'),
    check('amount').isNumeric().withMessage('Amount must be a number').isFloat({ gt: 0 }).withMessage('Amount must be greater than zero')
], validate, creditAmount);

router.post('/debit', [
    check('userId').not().isEmpty().withMessage('User ID is required'),
    check('amount').isNumeric().withMessage('Amount must be a number').isFloat({ gt: 0 }).withMessage('Amount must be greater than zero')
], validate, debitAmount);

router.get('/balance', [
    check('userId').not().isEmpty().withMessage('User ID is required')
], validate, getBalance);

export default router;
