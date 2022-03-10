import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../lib/utils";
import { UserDocument } from "../models/UserModel";
import ProfileModel from "../models/ProfileModel";

// @desc      Get profile a user
// @route     GET /api/v1/profile/:userId
// @access    Admin
export const getProfile = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const user = req.user._id as UserDocument["_id"];
    let query = ProfileModel.findOne({ user });

    if (req.query.populateStory) query.populate("likedStories dislikedStories");

    const profile = await query;
    return res.json({
      status: "ok",
      profile,
    });
  }
);
