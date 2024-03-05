import { CreateRoleDto } from '../domain/dtos/index.js';
import { HandleError } from '../errors/handle.error.js';

export class RoleController {
  constructor({ service }) {
    this.service = service;
  }

  getAllRoles = (req, res) => {
    return this.service
      .getAllRoles()
      .then((roles) => res.status(200).json(roles))
      .catch((err) => HandleError.handle(err, res));
  };

  CreateRole = (req, res) => {
    const data = req.body;
    const [error, roleDto] = CreateRoleDto.create(data);
    if (error) return HandleError.handle(error, res);

    return this.service
      .create(roleDto)
      .then((role) => res.status(200).json(role))
      .catch((err) => HandleError.handle(err, res));
  };

  UpdateRole = (req, res) => {
    const { id } = req.params;
    const data = req.body;

    return this.service
      .update(id, data)
      .then((role) => res.status(201).json(role))
      .catch((err) => HandleError.handle(err, res));
  };

  DeleteRole = (req, res) => {
    const { id } = req.params;

    return this.service
      .delete(id)
      .then((role) => res.status(200).json(role))
      .catch((err) => HandleError.handle(err, res));
  };
}
