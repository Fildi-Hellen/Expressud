import { Router } from 'express';
import { sample_boutiques, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { BoutiqueModel } from '../models/boutique.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const boutiquesCount = await BoutiqueModel.countDocuments();
    if (boutiquesCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await BoutiqueModel.create(sample_boutiques);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const boutiques = await BoutiqueModel.find();
    res.send(boutiques);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const boutiques = await BoutiqueModel.find({ name: { $regex: searchRegex } });
    res.send(boutiques);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await BoutiqueModel.aggregate([
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
      count: await BoutiqueModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const boutiques = await BoutiqueModel.find({ tags: req.params.tagName });
    res.send(boutiques);
  })
);

router.get(
  '/:boutiqueId',
  asyncHandler(async (req, res) => {
    const food = await BoutiqueModel.findById(req.params.foodId);
    res.send(food);
  })
);

export default router;