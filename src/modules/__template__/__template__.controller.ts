import { Request, Response, NextFunction } from 'express';
import * as templateService from './__template__.service';
import { AppError } from '@common/app-error';

export const getAll = async (_: Request, res: Response) => {
  const data = await templateService.getAllTemplates();
  res.json(data);
};

export const getById = async (req: Request, res: Response) => {
  const data = await templateService.getTemplateById(req.params.id);
  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  const data = await templateService.createTemplate(req.body);
  res.status(201).json(data);
};

export const update = async (req: Request, res: Response) => {
  const data = await templateService.updateTemplate(req.params.id, req.body);
  res.json(data);
};

export const remove = async (req: Request, res: Response) => {
  await templateService.deleteTemplate(req.params.id);
  res.status(204).send();
};
