import { Router } from 'express';
import { sample_sweets,sample_tags } from '../sweete';
import asyncHandler from 'express-async-handler';
import { SweetModel } from '../models/sweet.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const sweetsCount = await SweetModel.countDocuments();
    if (sweetsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await SweetModel.create(sample_sweets);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const sweets= await SweetModel.find();
    res.send(sweets);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const sweets= await SweetModel.find({ name: { $regex: searchRegex } });
    res.send(sweets);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await SweetModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await SweetModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const sweets= await SweetModel.find({ tags: req.params.tagName });
    res.send(sweets);
  })
);

router.get(
  '/:sweetId',
  asyncHandler(async (req, res) => {
    const sweet = await SweetModel.findById(req.params.sweetId);
    res.send(sweet);
  })
);

export default router;