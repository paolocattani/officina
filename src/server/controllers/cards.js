import { Card } from '../models';

export function create(req, res) {
    return Card
        .create({
            problem: req.body.problem,
            solution: req.body.solution,
            carModel: req.body.carModel,
            solved: req.body.solved,
            resolution_date: req.body.resolution_date
        })
        .then(card => res.status(201).send(card))
        .catch(error => res.status(400).send(error));
}