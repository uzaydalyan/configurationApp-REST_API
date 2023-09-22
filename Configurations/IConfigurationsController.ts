import {Request, Response} from "express";

export default interface IConfigurationsController {
    getConfigurations(req: Request, res: Response): void;
}