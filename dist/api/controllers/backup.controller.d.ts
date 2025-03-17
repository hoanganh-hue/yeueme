import { Request, Response, NextFunction } from 'express';
export declare const createBackup: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const listBackups: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const downloadBackup: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteBackup: (req: Request, res: Response, next: NextFunction) => Promise<void>;
