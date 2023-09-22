import {Request, Response} from "express";

export default interface IConfigurationSettingsController {
    createParameter(req: Request, res: Response): void;
    getAllParameters(req: Request, res: Response): void;
    updateParameter(req: Request, res: Response): void;
    deleteParameter(req: Request, res: Response): void;
}