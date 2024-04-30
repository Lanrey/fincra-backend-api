import { Mutex } from 'async-mutex';
import { WalletModel } from '../models/wallet'; // Assuming walletModel.ts contains the Mongoose model

export class WalletService {
    private mutex = new Mutex();

    async credit(userId: string, amount: number): Promise<void> {
        const release = await this.mutex.acquire();
        try {
            const wallet = await WalletModel.findOneAndUpdate(
                { userId },
                { $inc: { balance: amount } },
                { new: true, upsert: true }
            );
            console.log(`Credited ${amount} to user ${userId}. New balance is ${wallet.balance}.`);
        } finally {
            release();
        }
    }

    async debit(userId: string, amount: number): Promise<void> {
        const release = await this.mutex.acquire();
        try {
            const wallet = await WalletModel.findOne({ userId });
            if (!wallet || wallet.balance < amount) {
                release();
                throw new Error('Insufficient funds');
            }
            wallet.balance -= amount;
            await wallet.save();
            console.log(`Debited ${amount} from user ${userId}. New balance is ${wallet.balance}.`);
        } finally {
            release();
        }
    }

    async getBalance(userId: string): Promise<number> {
        const wallet = await WalletModel.findOne({ userId });
        if (!wallet) {
            throw new Error('Wallet not found');
        }
        return wallet.balance;
    }
}
