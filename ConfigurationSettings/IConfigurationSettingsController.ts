import {Request, Response, NextFunction} from "express";

export default interface IConfigurationSettingsController {
    createParameter(req: Request, res: Response, next: NextFunction): void;
    getAllParameters(req: Request, res: Response, next: NextFunction): void;
    updateParameter(req: Request, res: Response, next: NextFunction): void;
    deleteParameter(req: Request, res: Response, next: NextFunction): void;
}